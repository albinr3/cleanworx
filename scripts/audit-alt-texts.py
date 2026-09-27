import os
import re

def main():
    src_dir = 'src'
    img_tag_regex = re.compile(r'<Image\b([^>]+)>', re.DOTALL)
    alt_attr_regex = re.compile(r'\balt=(?:\{([^}]+)\}|"([^"]+)")', re.DOTALL)
    src_attr_regex = re.compile(r'\bsrc=(?:\{([^}]+)\}|"([^"]+)")', re.DOTALL)
    
    for root, dirs, files in os.walk(src_dir):
        for f in files:
            if f.endswith(('.tsx', '.jsx')):
                p = os.path.join(root, f)
                with open(p, 'r', encoding='utf-8') as fp:
                    content = fp.read()
                for m in img_tag_regex.finditer(content):
                    tag = m.group(1)
                    src_m = src_attr_regex.search(tag)
                    alt_m = alt_attr_regex.search(tag)
                    src_val = (src_m.group(1) or src_m.group(2)).strip() if src_m else "?"
                    alt_val = (alt_m.group(1) or alt_m.group(2)).strip() if alt_m else "NONE"
                    print(f"{f:28} | src: {src_val[:45]:45} | alt: {alt_val}")

if __name__ == '__main__':
    main()
