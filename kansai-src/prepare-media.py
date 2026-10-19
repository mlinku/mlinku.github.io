"""Create proportional previews from the existing, credited local images.
Web: 640px q82 previews beside the originals. Offline: one 1000px q72 WebP copy per image, or the original
when that is already smaller; the job's output is set to whichever file should be embedded."""
from pathlib import Path
from PIL import Image, ImageOps
import json
import sys
jobs = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
for job in jobs:
    target = Path(job['output'])
    size, quality = job.get('size') or 640, job.get('quality') or 82
    if not target.exists():
        with Image.open(job['input']) as original:
            image = ImageOps.exif_transpose(original).convert('RGB')
            image.thumbnail((size, size), Image.Resampling.LANCZOS)
            if target.suffix == '.webp':
                image.save(target, 'WEBP', quality=quality, method=6)
            else:
                image.save(target, 'JPEG', quality=quality, optimize=True)
    source = Path(job['input'])
    if size > 640 and source.suffix.lower() in ('.jpg', '.jpeg') and source.stat().st_size <= target.stat().st_size:
        target = source
    with Image.open(target) as image:
        job['width'], job['height'] = image.size
    job['output'] = str(target)
Path(sys.argv[1]).write_text(json.dumps(jobs), encoding='utf-8')
