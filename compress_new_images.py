import os
from PIL import Image
import shutil

src_dir = r"C:\Users\phamp\.gemini\antigravity\brain\5f65546d-04a4-42a4-8a42-e94350d8415c"
dest_dir = r"g:\LapTrinhRobot.com\images\seo"

mappings = {
    "vietnamese_kids_robotics_1777820521170.png": [
        "pillar-project-based.webp",
        "lead-magnet-tech.webp",
        "class.webp"
    ],
    "vietnamese_kid_certification_1777820586495.png": [
        "pillar-certification.webp"
    ],
    "vietnamese_student_coding_1777820537726.png": [
        "pillar-university-prep.webp",
        "faq-student.webp",
        "faq-coding.webp"
    ],
    "vietnamese_mentor_helping_1777820552320.png": [
        "faq-mentor.webp"
    ]
}

for src_file, dest_files in mappings.items():
    src_path = os.path.join(src_dir, src_file)
    if os.path.exists(src_path):
        img = Image.open(src_path).convert('RGB')
        for dest_file in dest_files:
            dest_path = os.path.join(dest_dir, dest_file)
            img.save(dest_path, 'webp', quality=80)
            print(f"Saved {dest_path}")
    else:
        print(f"Not found: {src_path}")

print("Done")
