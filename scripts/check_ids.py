# scripts/check_ids.py
import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

with open("js/app.js", "r", encoding="utf-8") as f:
    js = f.read()

calls = re.findall(r"getElementById\(['\"]([^'\"]+)['\"]\)", js)
unique_calls = sorted(list(set(calls)))
print(f"Total unique getElementById calls: {len(unique_calls)}")

missing = []
for cid in unique_calls:
    if f'id="{cid}"' not in html and f"id='{cid}'" not in html:
        missing.append(cid)

print(f"Missing IDs in index.html: {len(missing)}")
for m in missing:
    print(" -", m)
