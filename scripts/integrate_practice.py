# scripts/integrate_practice.py
import json
import sys
sys.path.append('scripts')
import add_practice_cards

with open("js/data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Locate FLASHCARDS_DATA start
fc_start = text.find("const FLASHCARDS_DATA =")
notes_start = text.find("const RIT_NOTES_DATA =")

subjects_and_head = text[:fc_start].strip()
flashcards_json_str = text[fc_start + len("const FLASHCARDS_DATA ="):notes_start].strip()
if flashcards_json_str.endswith(";"):
    flashcards_json_str = flashcards_json_str[:-1].strip()

current_cards = json.loads(flashcards_json_str)
practice_cards = add_practice_cards.get_practice_cards()

# Merge: ensure no duplicate IDs
existing_ids = set(c["id"] for c in current_cards)
for pc in practice_cards:
    if pc["id"] not in existing_ids:
        current_cards.append(pc)

rest_of_file = text[notes_start:].strip()

new_content = f"""{subjects_and_head}

const FLASHCARDS_DATA = {json.dumps(current_cards, indent=2)};

{rest_of_file}
"""

with open("js/data.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Successfully integrated practice cards. Total cards now: {len(current_cards)}")
