import os
import re
from collections import defaultdict

def main():
    src_images = defaultdict(list)
    src_dir = 'src'
    
    img_regex = re.compile(r'["\'](/(?:images|videos)/[^"\']+\.(?:webp|jpg|jpeg|png|mp4|webm))["\']')
    
    for root, dirs, files in os.walk(src_dir):
        for f in files:
            if f.endswith(('.ts', '.tsx', '.js', '.jsx', '.json')):
                fpath = os.path.join(root, f)
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                matches = img_regex.findall(content)
                for m in matches:
                    src_images[m].append(fpath)

    print(f"Total distinct image/video paths referenced in src/: {len(src_images)}")
    for img_path, file_list in sorted(src_images.items()):
        files_str = ", ".join([os.path.basename(f) for f in set(file_list)])
        print(f"  {img_path}  ->  [{files_str}]")

if __name__ == '__main__':
    main()
