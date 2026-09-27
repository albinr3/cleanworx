import io
from PIL import Image

XMP_TEMPLATE = """<?xpacket begin="\ufeff" id="W5M0MpCehiHzreSzNTczkc9d"?>
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
    
    # Insert after SOI or JFIF
    pos = 2
    if data.startswith(b'\xff\xd8\xff\xe0'):
        jfif_len = int.from_bytes(data[4:6], 'big')
        pos = 4 + jfif_len
    return data[:pos] + app1 + data[pos:]

def inject_png_xmp(data: bytes, xmp_str: str) -> bytes:
    # Insert iTXt chunk right after IHDR
    import zlib
    xmp_bytes = xmp_str.encode('utf-8')
    # iTXt keyword: 'XML:com.adobe.xmp\0'
    # compression flag: 0 (uncompressed)
    # compression method: 0
    # language tag: '' + \0
    # translated keyword: '' + \0
    # text: xmp_bytes
    keyword = b'XML:com.adobe.xmp\x00\x00\x00\x00\x00'
    itxt_data = keyword + xmp_bytes
    chunk_type = b'iTXt'
    chunk_len = len(itxt_data).to_bytes(4, 'big')
    crc = zlib.crc32(chunk_type + itxt_data).to_bytes(4, 'big')
    chunk = chunk_len + chunk_type + itxt_data + crc
    
    # Find end of IHDR (IHDR length is at 8, length=13, so 8 + 4 + 4 + 13 + 4 = 33)
    ihdr_len = int.from_bytes(data[8:12], 'big')
    ihdr_end = 8 + 12 + ihdr_len
    return data[:ihdr_end] + chunk + data[ihdr_end:]

def inject_webp_xmp(data: bytes, xmp_str: str) -> bytes:
    # WebP RIFF: add XMP  chunk
    # Ensure VP8X chunk exists or prepend VP8X if simple VP8
    xmp_bytes = xmp_str.encode('utf-8')
    xmp_pad = b'\x00' if len(xmp_bytes) % 2 == 1 else b''
    xmp_chunk = b'XMP ' + len(xmp_bytes).to_bytes(4, 'little') + xmp_bytes + xmp_pad
    
    pos = 12
    out_chunks = bytearray()
    has_vp8x = False
    
    while pos + 8 <= len(data):
        fourcc = data[pos:pos+4]
        size = int.from_bytes(data[pos+4:pos+8], 'little')
        pad = size % 2
        chunk_len = 8 + size + pad
        chunk_data = data[pos:pos+chunk_len]
        
        if fourcc == b'VP8X':
            has_vp8x = True
            # set bit 2 (0x04) in flags byte (byte 8 of chunk)
            chunk_data_mod = bytearray(chunk_data)
            chunk_data_mod[8] |= 0x04
            out_chunks.extend(chunk_data_mod)
        elif fourcc == b'XMP ':
            # skip old XMP
            pass
        else:
            out_chunks.extend(chunk_data)
        pos += chunk_len
        
    if not has_vp8x:
        # If it didn't have VP8X, we can add VP8X or leave as is.
        # But almost all our WebPs already have VP8X.
        pass
    else:
        out_chunks.extend(xmp_chunk)
        
    total_size = len(out_chunks) + 4
    header = b'RIFF' + total_size.to_bytes(4, 'little') + b'WEBP'
    return bytes(header + out_chunks)

def test():
    # Test on a jpeg
    with open('public/images/autodetail/ceramic-coating-hero.jpg', 'rb') as f:
        jpg_data = f.read()
    new_jpg = inject_jpeg_xmp(jpg_data, XMP_TEMPLATE)
    im = Image.open(io.BytesIO(new_jpg))
    im.load()
    print('JPEG injection success! Size:', im.size)
    assert b'CleanWorx' in new_jpg
    
    # Test on a png
    with open('public/images/autodetail/ceramic-coating-application.png', 'rb') as f:
        png_data = f.read()
    new_png = inject_png_xmp(png_data, XMP_TEMPLATE)
    im = Image.open(io.BytesIO(new_png))
    im.load()
    print('PNG injection success! Size:', im.size)
    assert b'CleanWorx' in new_png

    # Test on a webp
    with open('public/images/autodetail/cleanworx-ceramic-coating.webp', 'rb') as f:
        webp_data = f.read()
    new_webp = inject_webp_xmp(webp_data, XMP_TEMPLATE)
    im = Image.open(io.BytesIO(new_webp))
    im.load()
    print('WebP injection success! Size:', im.size)
    assert b'CleanWorx' in new_webp

if __name__ == '__main__':
    test()
