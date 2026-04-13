let editor = document.getElementById("editor");

function cmd(command) {
  document.execCommand(command, false, null);
  editor.focus();
}

function fontSize(size) {
  document.execCommand("fontSize", false, size);
}

function textColor(color) {
  document.execCommand("foreColor", false, color);
}

function changeCase(type) {
  let text = editor.innerText;

  if (type === "upper") text = text.toUpperCase();
  if (type === "lower") text = text.toLowerCase();
  if (type === "cap") {
    text = text.toLowerCase().replace(/\b\w/g, function (c) {
      return c.toUpperCase();
    });
  }

  editor.innerText = text;
  updateCount();
}

function updateCount() {
  let text = editor.innerText.trim();
  let words = text ? text.split(/\s+/).length : 0;
  let chars = editor.innerText.length;

  document.getElementById("count").innerText =
    "Words: " + words + " | Characters: " + chars;
}

editor.addEventListener("input", updateCount);

function clearBox() {
  editor.innerHTML = "";
  updateCount();
}

function downloadText() {
  let blob = new Blob([editor.innerText], { type: "text/plain" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "document.txt";
  link.click();
}

function toggleMode() {
  document.body.classList.toggle("dark");
}

function insertDate() {
  let now = new Date();
  editor.innerHTML += now.toLocaleString();
  updateCount();
}

function speakText() {
  let speech = new SpeechSynthesisUtterance(editor.innerText);
  speechSynthesis.speak(speech);
}

/* Auto Save Bonus */
editor.addEventListener("input", function () {
  localStorage.setItem("savedText", editor.innerHTML);
});

window.onload = function () {
  editor.innerHTML = localStorage.getItem("savedText") || "";
  updateCount();
};