import os
import io
import re
import shutil
from PIL import Image

# 1. Old path -> New path mapping
RENAME_MAP = {
    # Generic numbers in public/images/autodetail/
    "public/images/autodetail/1-2.webp": "public/images/autodetail/cleanworx-exterior-hand-wash-foam-cannon.webp",
    "public/images/autodetail/2-3.webp": "public/images/autodetail/cleanworx-interior-steam-leather-restoration.webp",
    "public/images/autodetail/3-4.webp": "public/images/autodetail/cleanworx-mobile-detailing-van-driveway-setup.webp",
    "public/images/autodetail/6-3.webp": "public/images/autodetail/cleanworx-headlight-restoration-engine-bay-detailing.webp",
    "public/images/autodetail/8-2.webp": "public/images/autodetail/cleanworx-system-x-ceramic-coating-flagship-shield.webp",
    "public/images/autodetail/p1.webp": "public/images/autodetail/cleanworx-precision-machine-polishing-paint-correction.webp",
    "public/images/autodetail/p2.webp": "public/images/autodetail/cleanworx-on-demand-mobile-auto-detailing-fleet.webp",
    "public/images/autodetail/c1-2048x767.webp": "public/images/autodetail/cleanworx-service-areas-somerset-county-nj.webp",
    "public/images/autodetail/c1-scaled.webp": "public/images/autodetail/cleanworx-auto-detailing-services-basking-ridge.webp",
    "public/images/autodetail/pexels-mikebirdy-1035108.webp": "public/images/autodetail/cleanworx-faq-auto-detailing-basking-ridge.webp",

    # Portfolio images in public/images/our-work/
    "public/images/our-work/work-01.webp": "public/images/our-work/cleanworx-mercedes-c-class-engine-bay-steam-cleaning.webp",
    "public/images/our-work/work-02.webp": "public/images/our-work/cleanworx-mercedes-c-class-cabriolet-hand-wash-seal.webp",
    "public/images/our-work/work-03.webp": "public/images/our-work/cleanworx-shelby-gt350-mustang-paint-correction-basking-ridge.webp",
    "public/images/our-work/work-04.webp": "public/images/our-work/cleanworx-volvo-xc90-luxury-suv-detailing-basking-ridge.webp",
    "public/images/our-work/work-05.webp": "public/images/our-work/cleanworx-range-rover-autobiography-interior-steam-extraction.webp",
    "public/images/our-work/work-06.webp": "public/images/our-work/cleanworx-auto-detailing-studio-and-mobile-van-basking-ridge.webp",
    "public/images/our-work/work-07.webp": "public/images/our-work/cleanworx-bmw-m5-alpine-white-ceramic-coating.webp",
    "public/images/our-work/work-08.webp": "public/images/our-work/cleanworx-corvette-c8-torch-red-ceramic-coating-reflection.webp",
    "public/images/our-work/work-09.webp": "public/images/our-work/cleanworx-defender-110-ceramic-coating-hex-light-bay.webp",
    "public/images/our-work/work-10.webp": "public/images/our-work/cleanworx-tesla-model-3-highland-mobile-detailing-somerset-nj.webp",
    "public/images/our-work/work-11.webp": "public/images/our-work/cleanworx-porsche-911-gt3-paint-correction-ceramic-coating.webp",
    "public/images/our-work/work-12.webp": "public/images/our-work/cleanworx-lotus-emira-magma-red-ceramic-coating-basking-ridge.webp",
    "public/images/our-work/work-13.webp": "public/images/our-work/cleanworx-bmw-7-series-mirror-paint-correction-basking-ridge.webp",
    "public/images/our-work/work-14.webp": "public/images/our-work/cleanworx-audi-rs6-avant-satin-wheel-ceramic-coating.webp",
    "public/images/our-work/work-15.webp": "public/images/our-work/cleanworx-porsche-911-cabriolet-arctic-grey-ceramic-coating.webp",
    "public/images/our-work/work-16.webp": "public/images/our-work/cleanworx-mercedes-maybach-gls-600-mobile-detailing-morris-county.webp",
    "public/images/our-work/work-17.webp": "public/images/our-work/cleanworx-mercedes-amg-cle-53-diamond-white-ceramic-coating.webp",
    "public/images/our-work/work-18.webp": "public/images/our-work/cleanworx-lamborghini-urus-matte-ceramic-coating-basking-ridge.webp",
    "public/images/our-work/work-19.webp": "public/images/our-work/cleanworx-porsche-911-gts-liquid-gloss-ceramic-coating.webp",
    "public/images/our-work/work-20.webp": "public/images/our-work/cleanworx-mercedes-amg-cla-45-mobile-detailing-basking-ridge.webp",
    "public/images/our-work/work-21.webp": "public/images/our-work/cleanworx-rolls-royce-cullinan-mobile-detailing-somerset-county.webp",
    "public/images/our-work/work-22.webp": "public/images/our-work/cleanworx-range-rover-satin-stealth-wheel-ceramic-protection.webp",
    "public/images/our-work/work-23.webp": "public/images/our-work/cleanworx-range-rover-batumi-gold-ceramic-coating-window-tint.webp",
    "public/images/our-work/work-24.webp": "public/images/our-work/cleanworx-audi-s5-coupe-navarra-blue-paint-correction.webp",
    "public/images/our-work/work-25.webp": "public/images/our-work/cleanworx-jeep-wrangler-rubicon-392-exterior-detailing.webp",
    "public/images/our-work/work-26.webp": "public/images/our-work/cleanworx-mercedes-benz-cabriolet-leather-interior-detailing.webp",
}

def generate_xmp(title: str, description: str) -> str:
    # Escape XML entities
    title_esc = title.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")
    desc_esc = description.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")
    
    return f"""<?xpacket begin="\ufeff" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="XMP Core 6.0.0">
   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
      <rdf:Description rdf:about=""
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"
            xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/">
         <dc:creator>
            <rdf:Seq>
               <rdf:li>CleanWorx Auto Detailing</rdf:li>
            </rdf:Seq>
         </dc:creator>
         <dc:title>
            <rdf:Alt>
               <rdf:li xml:lang="x-default">{title_esc}</rdf:li>
            </rdf:Alt>
         </dc:title>
         <dc:description>
            <rdf:Alt>
               <rdf:li xml:lang="x-default">{desc_esc}</rdf:li>
            </rdf:Alt>
         </dc:description>
         <dc:rights>
            <rdf:Alt>
               <rdf:li xml:lang="x-default">Copyright 2026 CleanWorx Auto Detailing. All rights reserved.</rdf:li>
            </rdf:Alt>
         </dc:rights>
         <photoshop:Credit>CleanWorx</photoshop:Credit>
         <photoshop:Source>https://cleanworxnj.com</photoshop:Source>
         <photoshop:City>Basking Ridge</photoshop:City>
         <photoshop:State>New Jersey</photoshop:State>
         <photoshop:Country>United States</photoshop:Country>
         <xmpRights:Marked>True</xmpRights:Marked>
         <xmpRights:WebStatement>https://cleanworxnj.com</xmpRights:WebStatement>
      </rdf:Description>
   </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>"""

def inject_jpeg_xmp(data: bytes, xmp_str: str) -> bytes:
    xmp_bytes = xmp_str.encode('utf-8')
    header = b'http://ns.adobe.com/xap/1.0/\x00'
    payload = header + xmp_bytes
    marker_len = len(payload) + 2
    app1 = b'\xff\xe1' + marker_len.to_bytes(2, 'big') + payload
    
    pos = 2
    if data.startswith(b'\xff\xd8\xff\xe0'):
        jfif_len = int.from_bytes(data[4:6], 'big')
        pos = 4 + jfif_len
    return data[:pos] + app1 + data[pos:]

def inject_png_xmp(data: bytes, xmp_str: str) -> bytes:
    import zlib
    xmp_bytes = xmp_str.encode('utf-8')
    keyword = b'XML:com.adobe.xmp\x00\x00\x00\x00\x00'
    itxt_data = keyword + xmp_bytes
    chunk_type = b'iTXt'
    chunk_len = len(itxt_data).to_bytes(4, 'big')
    crc = zlib.crc32(chunk_type + itxt_data).to_bytes(4, 'big')
    chunk = chunk_len + chunk_type + itxt_data + crc
    
    ihdr_len = int.from_bytes(data[8:12], 'big')
    ihdr_end = 8 + 12 + ihdr_len
    return data[:ihdr_end] + chunk + data[ihdr_end:]

def inject_webp_xmp(data: bytes, xmp_str: str) -> bytes:
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

def derive_seo_info(filename: str):
    name = os.path.splitext(filename)[0]
    words = name.replace('-', ' ').replace('_', ' ').split()
    # capitalize words
    clean_words = [w.capitalize() for w in words]
    title = " ".join(clean_words)
    desc = f"{title} - CleanWorx Professional Auto Detailing & Ceramic Coating in Basking Ridge, NJ"
    return title, desc

def main():
    print("Step 1: Renaming generic and portfolio images...")
    # Clean up ChatGPT unused PNG if exists
    chatgpt_file = "public/images/autodetail/Imagen de ChatGPT 25 sept 2026, 02_10_35 p.m..png"
    if os.path.exists(chatgpt_file):
        os.remove(chatgpt_file)
        print(f"Removed unused scratch file: {chatgpt_file}")

    for old_path, new_path in RENAME_MAP.items():
        if os.path.exists(old_path):
            shutil.move(old_path, new_path)
            print(f"Renamed: {old_path} -> {new_path}")
        elif os.path.exists(new_path):
            print(f"Already at new path: {new_path}")
        else:
            print(f"Warning: {old_path} not found")

    print("\nStep 2: Updating code references across src/...")
    # Convert paths to web paths (e.g. /images/...)
    web_map = {}
    for old_p, new_p in RENAME_MAP.items():
        old_web = "/" + os.path.relpath(old_p, "public").replace("\\", "/")
        new_web = "/" + os.path.relpath(new_p, "public").replace("\\", "/")
        web_map[old_web] = new_web
        # also map filename only
        web_map[os.path.basename(old_p)] = os.path.basename(new_p)

    updated_files = 0
    for root, dirs, files in os.walk("src"):
        for f in files:
            if f.endswith((".ts", ".tsx", ".js", ".jsx", ".json", ".css")):
                p = os.path.join(root, f)
                with open(p, "r", encoding="utf-8") as fp:
                    content = fp.read()
                
                new_content = content
                file_changed = False
                for old_val, new_val in web_map.items():
                    if old_val in new_content:
                        new_content = new_content.replace(old_val, new_val)
                        file_changed = True
                        
                if file_changed:
                    with open(p, "w", encoding="utf-8") as fp:
                        fp.write(new_content)
                    print(f"Updated references in: {p}")
                    updated_files += 1

    print(f"\nTotal code files updated: {updated_files}")

    print("\nStep 3: Injecting lossless SEO Brand/Author XMP metadata into images...")
    injected_count = 0
    for scan_dir in ["public/images", "public/videos"]:
        for root, dirs, files in os.walk(scan_dir):
            for f in files:
                if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                    p = os.path.join(root, f)
                with open(p, "rb") as fp:
                    raw = fp.read()
                    
                title, desc = derive_seo_info(f)
                xmp_str = generate_xmp(title, desc)
                
                try:
                    if raw.startswith(b"\xff\xd8\xff"):
                        new_data = inject_jpeg_xmp(raw, xmp_str)
                    elif raw.startswith(b"\x89PNG\r\n\x1a\n"):
                        new_data = inject_png_xmp(raw, xmp_str)
                    elif raw.startswith(b"RIFF") and raw[8:12] == b"WEBP":
                        new_data = inject_webp_xmp(raw, xmp_str)
                    else:
                        continue
                        
                    # Verify before saving
                    im = Image.open(io.BytesIO(new_data))
                    im.verify()
                    im = Image.open(io.BytesIO(new_data))
                    im.load()
                    
                    with open(p, "wb") as fp:
                        fp.write(new_data)
                    injected_count += 1
                except Exception as e:
                    print(f"Error injecting XMP into {p}: {e}")

    print(f"Injected SEO metadata into {injected_count} images in public/images/!")

if __name__ == '__main__':
    main()
