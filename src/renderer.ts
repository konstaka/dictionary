// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function handleInput(this: HTMLElement, ev: Event) {
  ev.preventDefault();
  const input = (ev.target as HTMLInputElement).value;
  console.log(input);
  document.getElementById('result').innerHTML = input;
}

document.getElementById('inputString').addEventListener('input', handleInput);
