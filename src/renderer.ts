// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

class Char {
  char: string;
  constructor(ch: string) {
    this.char = ch;
  }
  toString() {
    return this.char;
  }
  getElement() {
    const div = document.createElement('div');
    div.innerHTML = this.char;
    return div;
  }
}

class Word {
  chars: Char[] = [];
  constructor(word: string) {
    for (const char of word.split('')) {
      this.chars.push(new Char(char));
    }
  }
  toString() {
    return this.chars.map((char) => char.toString()).join('');
  }
  getElement() {
    const container = document.createElement('div');
    for (let i = 0; i < this.chars.length; i++) {
      const div = this.chars[i].getElement();
      container.appendChild(div);
    }
    return container;
  }
}

function handleInput(this: HTMLElement, ev: Event) {
  ev.preventDefault();
  const input = (ev.target as HTMLInputElement).value;
  console.log(input);
  const result = document.getElementById('result');
  while (result.firstChild) {
    result.removeChild(result.lastChild);
  }
  result.appendChild(new Word(input).getElement());
}

document.getElementById('inputString').addEventListener('input', handleInput);
