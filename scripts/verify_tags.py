# scripts/verify_tags.py
import json
import re

with open("js/data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Find all pyqTag values
tags = re.findall(r'"pyqTag":\s*"([^"]+)"', text)
print(f"Total pyqTags: {len(tags)}")

practice_tags = [t for t in tags if "Practice" in t]
see_tags = [t for t in tags if "Asked in" in t or "SEE" in t or "CIE" in t]

print(f"Practice tags count: {len(practice_tags)}")
print(f"Exam tags count: {len(see_tags)}")
print("Sample practice tags:")
for t in set(practice_tags):
    print(" -", t)
