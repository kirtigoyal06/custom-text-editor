# Custom Text Editor

A simple text editor made using HTML, CSS and JavaScript.

## Features
- Bold, Italic, Underline, Strike
- Text Alignment
- Uppercase, Lowercase, Capitalize
- Font Size and Text Color
- Dark Mode
- Date and Time Insert
- Word and Character Count
- Text to Speech
- Download as `.txt`
- Auto Save using localStorage

## Preview

![Custom Text Editor](screenshot.jpeg)

## Project Files

```text
index.html   → Structure<img width="1600" height="900" alt="screenshot jpeg" src="https://github.com/user-attachments/assets/4c0ee1b9-e213-489b-920a-0722cc7830cc" />

style.css    → Styling
script.js    → Functionality
screenshot.png → Project Screenshot
#<img width="1600" height="900" alt="screenshot jpeg" src="https://github.com/user-attachments/assets/c5be53d9-14b6-452c-bcdc-3fb9f95614c6" />
# How to Run

1. Download or clone this repository
2. Keep these files in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in any browser

The editor will start automatically.

---

## How It Works

- The editor area uses `contenteditable="true"` so the user can type inside it.
- JavaScript functions handle formatting like bold, italic, underline, alignment, font size and text color.
- Word and character count update automatically while typing.
- Dark mode works by toggling the `dark` class on the page.
- The editor automatically saves text using `localStorage`.
- When the page is refreshed or opened again, the saved text is restored automatically.

---
