import os
import glob

html_files = glob.glob('g:/LapTrinhRobot.com/*.html')

for path in html_files:
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    for r in ['7-9', '10-13', '13-15', '15-18']:
        c = c.replace(f"'images/class-{r}.png'", f"'images/seo/class-{r}.webp'")
        c = c.replace(f'"images/seo/roadmap-{r}.webp"', f'"images/seo/class-{r}.webp"')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)

print("Done all HTML files")
