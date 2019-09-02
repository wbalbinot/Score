import { cleanMarginSpace } from './util.js';

class Button {
  constructor(color) {
    // Score proprieties
    this.score = 0;
    // HTML element
    this.button = document.createElement('button');
    // Button Label 
    this.button.innerHTML = this.score;
    // HTML Stylish
    this.button.style.backgroundColor = '#' + color;
    this.button.style.width = '50vw';
    this.button.style.fontSize = '29vw';
    this.button.style.color = '#ffffff';
    this.button.style.border = 0;
    // Clean the margins
    cleanMarginSpace(this.button);
  }

  // Draw the button on the HTML
  appendButton () {
    // Append child the button on the body
    document.getElementsByTagName("body")[0].appendChild(this.button);
    // Set the listening for the click action
    this.onClickListening();
    this.onDoubleClickListening();
  }

  addPoint () {
    this.button.innerHTML = ++this.score;
  }

  removePoint () {
    this.button.innerHTML = --this.score;
  }

  onClickListening () {
    this.button.addEventListener("click", () => {
      this.addPoint();
    });
  }

  onDoubleClickListening () {
    this.button.addEventListener("dblclick", () => {
      this.removePoint();
    });
  }
}

export default Button;