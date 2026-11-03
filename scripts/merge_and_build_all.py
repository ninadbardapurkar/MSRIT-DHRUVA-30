# scripts/merge_and_build_all.py
import json
import re
import subprocess
import sys
import os

sys.path.insert(0, 'scripts')
import add_all_new_subjects
import create_new_subjects_content
import extra_content

print("Reading existing js/data.js...")
with open("js/data.js", "r", encoding="utf-8") as f:
    raw_code = f.read()

# Use Node to cleanly extract existing objects to temp json file
node_extractor = """
const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('js/data.js', 'utf8');
const res = vm.runInNewContext(code + '; ({ subjects: SUBJECTS_DATA, cards: FLASHCARDS_DATA, notes: RIT_NOTES_DATA, quiz: QUIZ_DATA })', {});
fs.writeFileSync('scripts/temp_current_data.json', JSON.stringify(res), 'utf8');
"""

subprocess.run(["node", "-e", node_extractor], check=True)
with open("scripts/temp_current_data.json", "r", encoding="utf-8") as f:
    current_data = json.load(f)
if os.path.exists("scripts/temp_current_data.json"):
    os.remove("scripts/temp_current_data.json")

existing_subjects = current_data['subjects']
existing_cards = current_data['cards']
existing_notes = current_data['notes']
existing_quiz = current_data['quiz']

print(f"Loaded existing: {len(existing_subjects)} subjects, {len(existing_cards)} cards, {len(existing_notes)} notes, {len(existing_quiz)} quiz items.")

# 1. Append New Subjects
new_subjects = add_all_new_subjects.get_new_subjects_metadata()
all_subjects = existing_subjects + [s for s in new_subjects if s['id'] not in [x['id'] for x in existing_subjects]]

# 2. Collect All New Cards
part1_cards = create_new_subjects_content.get_cards_for_new_subjects()
part2_cards = extra_content.get_extra_cards()
new_cards = part1_cards + part2_cards

# Ensure unique IDs
existing_ids = set(c['id'] for c in existing_cards)
final_new_cards = []
card_counter = 400
for c in new_cards:
    if c['id'] in existing_ids:
        c['id'] = f"card-gen-{card_counter}"
        card_counter += 1
    existing_ids.add(c['id'])
    final_new_cards.append(c)

all_cards = existing_cards + final_new_cards

# 3. Append New Quiz Items
new_quiz = extra_content.get_new_quiz_questions()
existing_q_ids = set(q['id'] for q in existing_quiz)
final_new_quiz = []
q_counter = 30
for q in new_quiz:
    if q['id'] in existing_q_ids:
        q['id'] = f"q-gen-{q_counter}"
        q_counter += 1
    existing_q_ids.add(q['id'])
    final_new_quiz.append(q)

all_quiz = existing_quiz + final_new_quiz

# 4. Merge Notes
new_notes = extra_content.get_new_rit_notes()
all_notes = {**existing_notes, **new_notes}

print(f"Total after merge: {len(all_subjects)} subjects, {len(all_cards)} cards, {len(all_notes)} notes, {len(all_quiz)} quiz items.")

# 5. Format and Write js/data.js
header = """/**
 * MSRIT 1st Semester B.E. (Chemistry & Physics Cycles) Comprehensive Academic Knowledge Base
 * Ramaiah Institute of Technology (Autonomous Institute, Affiliated to VTU), Bengaluru.
 * 
 * Includes 100% PYQ & High-Probability Practice Questions coverage across all 10 First-Year Engineering subjects:
 * 1. Applied Chemistry (25CYC22 / 25CYC12)
 * 2. Mathematics-I (25MAT11)
 * 3. C Programming (25PLC14)
 * 4. Artificial Intelligence (25AEC15)
 * 5. Elements of Mechanical Engg (25ESC13)
 * 6. Indian Constitution & Cyber Law (HSIC17)
 * 7. Professional English (HSEP18)
 * 8. Quantum Physics & Applications (25PYC12 / PYE22)
 * 9. Python Programming (25PLC24)
 * 10. Kannada Kali / Communicative Kannada (HSCP16K / HSCP26K / AR109K)
 * 
 * Zero information loss: Complete derivations, balanced reactions, step-by-step code, and marking schemes.
 */

const SUBJECTS_DATA = """ + json.dumps(all_subjects, indent=2) + """;

const FLASHCARDS_DATA = """ + json.dumps(all_cards, indent=2) + """;

const RIT_NOTES_DATA = """ + json.dumps(all_notes, indent=2) + """;

const QUIZ_DATA = """ + json.dumps(all_quiz, indent=2) + """;
"""

with open("js/data.js", "w", encoding="utf-8") as f:
    f.write(header)

print("Successfully written js/data.js! Validating syntax with node...")
subprocess.run(["node", "-c", "js/data.js"], check=True)
print("Node syntax validation PASSED!")
