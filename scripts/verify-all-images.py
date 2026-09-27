import os
import re
from PIL import Image

def main():
    img_regex = re.compile(r'["\'](/(?:images|videos)/[^"\']+\.(?:webp|jpg|jpeg|png))["\']')
    referenced = set()
    
    for root, dirs, files in os.walk('src'):
        for f in files:
            if f.endswith(('.ts', '.tsx', '.js', '.jsx', '.json')):
                with open(os.path.join(root, f), 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                matches = img_regex.findall(content)
                for m in matches:
                    referenced.add(m)

    print(f"Auditing {len(referenced)} referenced image paths in src/...")
    
    missing = []
    unreadable = []
    has_brand_meta = 0
    has_ai_meta = 0
    
    for ref in sorted(referenced):
        disk_path = os.path.join('public', ref.lstrip('/'))
        if not os.path.exists(disk_path):
            missing.append((ref, disk_path))
            continue
            
        with open(disk_path, 'rb') as fp:
            raw = fp.read()
            
        if b'CleanWorx' in raw:
            has_brand_meta += 1
            
        for kw in [b'c2pa', b'SynthID', b'trainedAlgorithmicMedia', b'ChatGPT', b'dall-e']:
            if kw.lower() in raw.lower():
                print(f"WARNING: AI tag {kw} found in {ref}")
                has_ai_meta += 1
                
        try:
            with Image.open(disk_path) as im:
                im.verify()
            with Image.open(disk_path) as im:
                im.load()
        except Exception as e:
            unreadable.append((ref, str(e)))

    print("\n--- RESULTS ---")
    print(f"Total images checked: {len(referenced)}")
    print(f"Missing files: {len(missing)}")
    if missing:
        for ref, dp in missing:
            print(f"  MISSING: {ref} -> {dp}")
    print(f"Unreadable files: {len(unreadable)}")
    print(f"Images with CleanWorx SEO metadata: {has_brand_meta}/{len(referenced)}")
    print(f"Images with residual AI metadata: {has_ai_meta}")

if __name__ == '__main__':
    main()
