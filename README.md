# Custom Text Editor

A simple and modern text editor built using HTML, CSS, and JavaScript.  
It allows users to write and format text directly in the browser, similar to a mini MS Word editor.

---

## Features

- Bold, Italic, Underline and Strike-through
- Left, Center, Right and Justify alignment
- Convert text to UPPERCASE, lowercase or Capitalize
- Change font size
- Change text color
- Dark / Light mode
- Insert current date and time
- Text-to-speech support
- Word count and character count
- Clear all text
- Download text as a `.txt` file
- Auto-save using localStorage
- Restore saved text after refresh

---

## Project Files

```text
index.html   → Structure of the editor
style.css    → Design and dark mode styling
script.js    → All editor functionality

## How to Run

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

