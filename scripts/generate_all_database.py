# scripts/generate_all_database.py
import json
import re
import os

print("Building complete database generator for 10 subjects...")

# 1. METADATA FOR 3 NEW SUBJECTS
NEW_SUBJECTS = [
    {
        "id": "phys",
        "code": "25PYC12 / PYE22",
        "name": "Quantum Physics and Applications",
        "shortName": "Quantum Physics",
        "stream": "Physics Cycle / Basic Science",
        "color": "#0284C7",
        "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
        "cycle": "p-cycle",
        "units": [
            { "id": 1, "name": "Unit 1: Lasers & Optical Fiber Communication" },
            { "id": 2, "name": "Unit 2: Quantum Mechanics & Wave Equations" },
            { "id": 3, "name": "Unit 3: Electrical Conductors & Semiconductors" },
            { "id": 4, "name": "Unit 4: Superconductivity & Josephson Devices" },
            { "id": 5, "name": "Unit 5: Quantum Computing & Qubit Gates" }
        ]
    },
    {
        "id": "pyprog",
        "code": "25PLC24",
        "name": "Python Programming",
        "shortName": "Python Programming",
        "stream": "Programming & Data Science",
        "color": "#0D9488",
        "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
        "cycle": "p-cycle",
        "units": [
            { "id": 1, "name": "Unit 1: Python Fundamentals, Errors & Loops" },
            { "id": 2, "name": "Unit 2: Strings, Sequences & File I/O" },
            { "id": 3, "name": "Unit 3: Dictionaries, NumPy & Web Requests" },
            { "id": 4, "name": "Unit 4: Modular Programming & OOP Classes" },
            { "id": 5, "name": "Unit 5: Operator Overloading & Exceptions" }
        ]
    },
    {
        "id": "kan",
        "code": "HSCP16K / HSCP26K / AR109K",
        "name": "Kannada Kali / Communicative Kannada",
        "shortName": "Kannada Kali",
        "stream": "Humanities / State Language",
        "color": "#B45309",
        "badgeColor": "bg-amber-100 text-amber-900 border-amber-300",
        "cycle": "humanities",
        "units": [
            { "id": 1, "name": "Unit 1: Introduction to Karnataka & Culture" },
            { "id": 2, "name": "Unit 2: Daily Conversation & Word Ordering" },
            { "id": 3, "name": "Unit 3: Vocabulary, Adjectives & Meanings" },
            { "id": 4, "name": "Unit 4: Kannada Numbers, Fruits & Vegetables" },
            { "id": 5, "name": "Unit 5: Kannada Alphabet & Writing Skills" }
        ]
    }
]

print("Defined 3 new subjects metadata.")
