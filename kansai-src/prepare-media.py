"""Create proportional web previews from the existing, credited local images."""
from pathlib import Path
from PIL import Image, ImageOps
import json
import sys
jobs = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
for job in jobs:
    target = Path(job['output'])
    if not target.exists():
        with Image.open(job['input']) as original:
            image = ImageOps.exif_transpose(original).convert('RGB')
            image.thumbnail((640, 640), Image.Resampling.LANCZOS)
            image.save(target, 'JPEG', quality=82, optimize=True)
    with Image.open(target) as image:
        job['width'], job['height'] = image.size
Path(sys.argv[1]).write_text(json.dumps(jobs), encoding='utf-8')
