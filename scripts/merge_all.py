# scripts/merge_all.py
import json
import sys
sys.path.append('scripts')
import generate_more_practice

with open("js/data.js", "r", encoding="utf-8") as f:
    text = f.read()

fc_start = text.find("const FLASHCARDS_DATA =")
notes_start = text.find("const RIT_NOTES_DATA =")

subjects_and_head = text[:fc_start].strip()
flashcards_json_str = text[fc_start + len("const FLASHCARDS_DATA ="):notes_start].strip()
if flashcards_json_str.endswith(";"):
    flashcards_json_str = flashcards_json_str[:-1].strip()

current_cards = json.loads(flashcards_json_str)
new_cards = generate_more_practice.get_more_practice_cards()

existing_ids = set(c["id"] for c in current_cards)
added_count = 0
for card in new_cards:
    if card["id"] not in existing_ids:
        current_cards.append(card)
        existing_ids.add(card["id"])
        added_count += 1

rest_of_file = text[notes_start:].strip()

new_content = f"""{subjects_and_head}

const FLASHCARDS_DATA = {json.dumps(current_cards, indent=2)};

{rest_of_file}
"""

with open("js/data.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Added {added_count} new cards. Total cards in js/data.js: {len(current_cards)}")
