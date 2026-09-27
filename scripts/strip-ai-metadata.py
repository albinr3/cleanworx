import os
import io
import re
from PIL import Image

def clean_png_bytes(data: bytes):
    """
    Remove non-critical and metadata chunks from PNG (e.g. caBX, caST, tEXt, zTXt, iTXt, eXIf).
    Preserves IHDR, PLTE, IDAT, IEND, tRNS, sRGB, gAMA, cHRM, pHYs.
    """
    if not data.startswith(b'\x89PNG\r\n\x1a\n'):
        return data, []
    pos = 8
    KEEP = {b'IHDR', b'PLTE', b'IDAT', b'IEND', b'tRNS', b'sRGB', b'gAMA', b'cHRM', b'pHYs'}
    out = bytearray(data[:8])
    removed = []
    while pos + 8 <= len(data):
        length = int.from_bytes(data[pos:pos+4], 'big')
        chunk_type = data[pos+4:pos+8]
        if chunk_type in KEEP:
            out.extend(data[pos:pos+12+length])
        else:
            removed.append((chunk_type.decode('latin1', errors='ignore'), length))
        pos += 12 + length
    return bytes(out), removed

def clean_jpeg_bytes(data: bytes):
    """
    Remove metadata and AI markers from JPEG (APP1/0xFFE1, APP11/0xFFEB, APP13/0xFFED, COM/0xFFFE).
    Preserves SOF, DHT, DQT, DRI, JFIF (0xFFE0), and standard ICC profile (0xFFE2).
    Keeps image scan data 100% bit-identical (zero recompression or loss of quality).
    """
    if not (data.startswith(b'\xff\xd8\xff') and data.endswith(b'\xff\xd9')):
        return data, []
    pos = 2
    out = bytearray(b'\xff\xd8')
    removed = []
    while pos < len(data):
        if data[pos] != 0xFF:
            break
        marker = data[pos+1]
        if marker in (0xD8, 0xD9):
            pos += 2
            continue
        if marker == 0xDA:  # SOS (Start of Scan) - all remaining bytes are scan data
            out.extend(data[pos:])
            break
        length = int.from_bytes(data[pos+2:pos+4], 'big')
        marker_data = data[pos:pos+2+length]
        keep = False
        if marker in (0xC0, 0xC1, 0xC2, 0xC3, 0xC4, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF, 0xDB, 0xDD):
            keep = True
        elif marker == 0xE0:  # JFIF
            keep = True
        elif marker == 0xE2:  # APP2 - keep only standard ICC color profile
            if marker_data[4:].startswith(b'ICC_PROFILE\x00'):
                keep = True
        if keep:
            out.extend(marker_data)
        else:
            removed.append((f'0xFF{marker:02X}', length))
        pos += 2 + length
    return bytes(out), removed

def clean_webp_bytes(data: bytes):
    """
    Remove EXIF and XMP chunks from WebP RIFF container, clearing corresponding flags in VP8X.
    """
    if not (data.startswith(b'RIFF') and data[8:12] == b'WEBP'):
        return data, []
    pos = 12
    out_chunks = bytearray()
    removed = []
    has_vp8x = False
    vp8x_idx = -1
    while pos + 8 <= len(data):
        fourcc = data[pos:pos+4]
        size = int.from_bytes(data[pos+4:pos+8], 'little')
        pad = size % 2
        chunk_len = 8 + size + pad
        chunk_data = data[pos:pos+chunk_len]
        if fourcc in (b'EXIF', b'XMP '):
            removed.append((fourcc.decode('latin1', errors='ignore'), size))
        else:
            if fourcc == b'VP8X':
                has_vp8x = True
                vp8x_idx = len(out_chunks)
            out_chunks.extend(chunk_data)
        pos += chunk_len
    if has_vp8x and vp8x_idx != -1:
        # Clear EXIF (0x08) and XMP (0x04) in VP8X flags byte
        flags_offset = vp8x_idx + 8
        flags = out_chunks[flags_offset]
        out_chunks[flags_offset] = flags & ~0x0C
    total_riff_size = len(out_chunks) + 4
    header = b'RIFF' + total_riff_size.to_bytes(4, 'little') + b'WEBP'
    return bytes(header + out_chunks), removed

def clean_svg_text(text: str):
    cleaned = re.sub(r'<metadata>.*?</metadata>', '', text, flags=re.DOTALL | re.IGNORECASE)
    cleaned = re.sub(r'<x:xmpmeta.*?</x:xmpmeta>', '', cleaned, flags=re.DOTALL | re.IGNORECASE)
    removed = len(text) - len(cleaned)
    return cleaned, [('metadata_tag', removed)] if removed > 0 else []

def main():
    image_exts = ('.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg', '.ico')
    all_images = []
    
    for root, dirs, files in os.walk('.'):
        if any(skip in root for skip in ['node_modules', '.next', '.git']):
            continue
        for f in files:
            if f.lower().endswith(image_exts):
                all_images.append(os.path.join(root, f))
                
    print(f"Discovered {len(all_images)} total image files across project.")
    cleaned_count = 0
    total_bytes_saved = 0
    
    for p in all_images:
        with open(p, 'rb') as fp:
            raw = fp.read()
            
        fmt = None
        removed = []
        if raw.startswith(b'\x89PNG\r\n\x1a\n'):
            cleaned_data, removed = clean_png_bytes(raw)
            fmt = 'PNG'
        elif raw.startswith(b'\xff\xd8\xff'):
            cleaned_data, removed = clean_jpeg_bytes(raw)
            fmt = 'JPEG'
        elif raw.startswith(b'RIFF') and raw[8:12] == b'WEBP':
            cleaned_data, removed = clean_webp_bytes(raw)
            fmt = 'WEBP'
        elif p.lower().endswith('.svg') or raw.startswith(b'<') or raw.startswith(b'<?xml'):
            try:
                text = raw.decode('utf-8')
                cleaned_text, removed = clean_svg_text(text)
                cleaned_data = cleaned_text.encode('utf-8')
                fmt = 'SVG'
            except Exception as e:
                print(f"Skipping SVG decode for {p}: {e}")
                continue
                
        if removed:
            # Verification before saving
            if fmt in ('PNG', 'JPEG', 'WEBP'):
                try:
                    img = Image.open(io.BytesIO(cleaned_data))
                    img.verify()
                    img = Image.open(io.BytesIO(cleaned_data))
                    img.load()
                except Exception as e:
                    print(f"FAILED verification on {p}: {e}. Skipping write!")
                    continue
                    
            with open(p, 'wb') as fp:
                fp.write(cleaned_data)
                
            saved = len(raw) - len(cleaned_data)
            total_bytes_saved += saved
            cleaned_count += 1
            print(f"[CLEANED] {p} ({fmt}): removed {removed} (-{saved} bytes)")

    print(f"\nProcessing complete!")
    print(f"Files cleaned: {cleaned_count}/{len(all_images)}")
    print(f"Total metadata stripped: {total_bytes_saved / 1024:.2f} KB")

if __name__ == '__main__':
    main()
