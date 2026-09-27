import io
from PIL import Image

def inject_webp_xmp_any(data: bytes, xmp_str: str) -> bytes:
    # Use PIL to safely inspect width, height, mode
    im = Image.open(io.BytesIO(data))
    width, height = im.size
    has_alpha = (im.mode in ('RGBA', 'LA') or 'transparency' in im.info)

    xmp_bytes = xmp_str.encode('utf-8')
    xmp_pad = b'\x00' if len(xmp_bytes) % 2 == 1 else b''
    xmp_chunk = b'XMP ' + len(xmp_bytes).to_bytes(4, 'little') + xmp_bytes + xmp_pad

    pos = 12
    chunks = []
    has_vp8x = False
    
    while pos + 8 <= len(data):
        fourcc = data[pos:pos+4]
        size = int.from_bytes(data[pos+4:pos+8], 'little')
        pad = size % 2
        chunk_len = 8 + size + pad
        chunk_data = data[pos:pos+chunk_len]
        if fourcc == b'VP8X':
            has_vp8x = True
        if fourcc != b'XMP ':
            chunks.append((fourcc, chunk_data))
        pos += chunk_len

    out_chunks = bytearray()
    if has_vp8x:
        for fourcc, c_data in chunks:
            if fourcc == b'VP8X':
                c_mod = bytearray(c_data)
                c_mod[8] |= 0x04  # set XMP flag
                out_chunks.extend(c_mod)
            else:
                out_chunks.extend(c_data)
        out_chunks.extend(xmp_chunk)
    else:
        # Create VP8X
        flags = 0x04  # XMP
        if has_alpha:
            flags |= 0x10  # Alpha
        w_bytes = (width - 1).to_bytes(3, 'little')
        h_bytes = (height - 1).to_bytes(3, 'little')
        vp8x_payload = flags.to_bytes(4, 'little') + w_bytes + h_bytes
        vp8x_chunk = b'VP8X' + len(vp8x_payload).to_bytes(4, 'little') + vp8x_payload
        
        out_chunks.extend(vp8x_chunk)
        for _, c_data in chunks:
            out_chunks.extend(c_data)
        out_chunks.extend(xmp_chunk)

    total_size = len(out_chunks) + 4
    header = b'RIFF' + total_size.to_bytes(4, 'little') + b'WEBP'
    return bytes(header + out_chunks)

with open('public/images/autodetail/cleanworx-ceramic-coating.webp', 'rb') as f:
    orig = f.read()

new_w = inject_webp_xmp_any(orig, '<test>CleanWorx</test>')
im2 = Image.open(io.BytesIO(new_w))
im2.verify()
im3 = Image.open(io.BytesIO(new_w))
im3.load()
print('SUCCESS! Loaded VP8X upgraded WebP! Size:', im3.size)
assert b'CleanWorx' in new_w
