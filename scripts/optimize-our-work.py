import os
import json
from PIL import Image, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()

src_dir = r"C:\Users\Albin Rodriguez\Downloads\drive-download-20260926T234958Z-1-001"
out_dir = r"public\images\our-work"
os.makedirs(out_dir, exist_ok=True)

files = sorted(os.listdir(src_dir))
results = []
total_orig = 0
total_opt = 0

print(f"Found {len(files)} files to optimize.")

for i, f in enumerate(files, 1):
    src_p = os.path.join(src_dir, f)
    orig_bytes = os.path.getsize(src_p)
    total_orig += orig_bytes
    
    out_name = f"work-{i:02d}.webp"
    out_p = os.path.join(out_dir, out_name)
    
    with Image.open(src_p) as img:
        img = ImageOps.exif_transpose(img)
        if img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGB")
        elif img.mode == "RGBA":
            # Convert RGBA to RGB with black background if not transparent, or keep RGB
            background = Image.new("RGB", img.size, (20, 21, 26))
            background.paste(img, mask=img.split()[3])
            img = background
        
        orig_w, orig_h = img.size
        # Sizing: max 1600px width/height while maintaining aspect ratio
        max_dim = 1600
        if orig_w > max_dim or orig_h > max_dim:
            if orig_w >= orig_h:
                new_w = max_dim
                new_h = int(round(orig_h * (max_dim / orig_w)))
            else:
                new_h = max_dim
                new_w = int(round(orig_w * (max_dim / orig_h)))
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        else:
            new_w, new_h = orig_w, orig_h
            
        img.save(out_p, "WEBP", quality=84, method=6)
        
    opt_bytes = os.path.getsize(out_p)
    total_opt += opt_bytes
    savings = (1 - (opt_bytes / orig_bytes)) * 100
    
    orig_kb = round(orig_bytes / 1024, 1)
    opt_kb = round(opt_bytes / 1024, 1)
    savings_pct = round(savings, 1)
    
    info = {
        "id": f"work-{i:02d}",
        "original_name": f,
        "src": f"/images/our-work/{out_name}",
        "width": new_w,
        "height": new_h,
        "aspect": round(new_w / new_h, 2),
        "orig_size_kb": orig_kb,
        "opt_size_kb": opt_kb,
        "savings_pct": savings_pct
    }
    results.append(info)
    print(f"[{i:02d}/{len(files)}] {f:36} -> {out_name} | {orig_kb:7.1f} KB -> {opt_kb:6.1f} KB ({savings_pct:4.1f}% saved) | {new_w}x{new_h}")

manifest_path = os.path.join(out_dir, "manifest.json")
with open(manifest_path, "w", encoding="utf-8") as mf:
    json.dump(results, mf, indent=2)

total_orig_mb = total_orig / (1024 * 1024)
total_opt_mb = total_opt / (1024 * 1024)
overall_savings = (1 - total_opt / total_orig) * 100

print("\n" + "="*70)
print(f"COMPLETE! Total original size: {total_orig_mb:.2f} MB")
print(f"Total optimized WebP size:   {total_opt_mb:.2f} MB")
print(f"Overall bandwidth reduction: {overall_savings:.1f}%")
print(f"Saved manifest to: {manifest_path}")
