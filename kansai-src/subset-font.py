"""Build the small heading font used by the guide.

Noto Serif SC (SIL Open Font License 1.1) is cut down to the characters listed in
assets/fonts/trip-serif-chars.txt and fixed at two weights. Readers without a good
Chinese serif then see the same headings, and nothing is fetched from Google.

Usage: python kansai-src/subset-font.py [path-to-NotoSerifSC-VF.ttf] [--chars FILE] [--prefix NAME]
Needs fontTools. Run it through `node kansai-src/trip/fonts.mjs`, which first rewrites
trip-serif-chars.txt from every heading the guide can show.
"""
import argparse
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.varLib import instancer

here = Path(__file__).resolve().parent
parser = argparse.ArgumentParser()
parser.add_argument('source', nargs='?', default='C:/Windows/Fonts/NotoSerifSC-VF.ttf')
parser.add_argument('--chars', default=str(here / 'assets/fonts/trip-serif-chars.txt'))
parser.add_argument('--prefix', default='trip-serif')
args = parser.parse_args()
source = Path(args.source)
chars = Path(args.chars).read_text(encoding='utf-8')
for weight in (700, 900):
    font = TTFont(source)
    options = subset.Options()
    options.layout_features = ['kern', 'palt', 'vert']
    options.name_IDs = [0, 1, 2, 3, 4, 5, 6, 13, 14]
    options.notdef_outline = True
    subsetter = subset.Subsetter(options)
    subsetter.populate(text=chars)
    subsetter.subset(font)
    font = instancer.instantiateVariableFont(font, {'wght': weight})
    font.flavor = 'woff'
    out = here / f'assets/fonts/{args.prefix}-{weight}.woff'
    font.save(out)
    print(out.name, out.stat().st_size)
