# Scarcity 💸

> A lightweight budget prioritization tool — add items to your wish list, set priorities, and find out exactly what you can afford.

---

## What It Does

When you're working with a limited budget, it's hard to know what to cut. Scarcity takes your budget and a list of items (each with a price and priority), then automatically selects the highest-priority items you can afford — telling you what you can buy and how much cash you have left over.

## Features

- Set a total spending budget
- Add wish list items with a name, price, and priority level
- Automatically calculates which items fit within your budget (highest priority first)
- Displays remaining cash after your selections

---

## Getting Started

No installation or build step required — this is a pure HTML/CSS/JS app that runs entirely in the browser.

### Run locally

```bash
git clone https://github.com/JAlexRomano/Scarcity.git
cd Scarcity
open index.html   # or just double-click the file
```

That's it. No dependencies, no package manager needed.

---

## Usage

1. Enter your total budget in the **Budget** field.
2. Add items using the **Item**, **Price**, and **Priority** fields. Priority `1` is the highest.
3. Click **Add Item** to add each item to your list.
4. Click **Calculate Selection** to see which items you can afford and how much cash remains.

---

## Project Structure

```
Scarcity/
├── index.html   # App layout and structure
├── style.css    # Styling
└── script.js    # Budget calculation logic
```

---

## Built With

- HTML5
- CSS3
- Vanilla JavaScript

---

## License

MIT
