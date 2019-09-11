import { cleanMarginSpace, spacerAndBorder } from './util.js';

// The font must be the same size so it will not interfere with vw  and vh
const buttonFontSize = '5vw';
const scoreFontSize = '35vw';

// Standard sizes
const controlSize = '49vw';
const decreaseSize = '33vw';

class ScoreButton {
  constructor(color) {
    // Score proprieties
    this.score = '00';

    // HTML element
    this.button = document.createElement('button');

    // Button Label 
    this.button.innerHTML = this.score;

    // HTML Stylish
    this.button.style.backgroundColor = color;
    this.button.style.color = '#ffffff';
    this.button.style.height = '73vh';
    this.button.style.width = '49vw';
    this.button.style.fontSize = scoreFontSize;

    // Spacer 
    spacerAndBorder(this.button);
  }

  // Draw the button on the HTML
  appendButton () {
    // Append child the button on the body
    document.getElementsByTagName("body")[0].appendChild(this.button);
    // Set the listening for the click action
    this.onClickListening();
  }

  addPoint () {
    this.button.innerHTML = ++this.score;
    // Keep the two digit score
    (this.score < 10) ? this.button.innerHTML = `0${this.score}` : null;
  }

  removePoint () {
    // Prevent negative number
    if (this.score > 0)
      this.button.innerHTML = --this.score;
    // Keep the two digit score 
    (this.score < 10 && this.score !== '00') ? this.button.innerHTML = `0${this.score}` : null;
  }

  onClickListening () {
    this.button.addEventListener("click", () => {
      this.addPoint();
    });
  }

}

class ControlButton {
  constructor(text, color, team, increase = true, float = true) {
    // Make the team accessible for this button 
    this.team = team;

    // Create HTML element
    this.button = document.createElement('button');

    // Button Label 
    this.button.innerHTML = text.toUpperCase();

    // HTML Stylish
    this.button.style.backgroundColor = color;
    this.button.style.color = '#ffffff';
    this.button.style.height = '12vh';
    this.button.style.width = decreaseSize;
    if (increase)
      this.button.style.width = controlSize;
    this.button.style.fontSize = buttonFontSize;

    if (float)
      this.button.style.float = 'right';

    // Spacer 
    spacerAndBorder(this.button);

    // This controls whether it will increase or decrease the score
    this.increase = increase;
  }

  // Draw the button on the HTML
  appendButton () {
    // Append child the button on the body
    document.getElementsByTagName("body")[0].appendChild(this.button);
    // Set the listening for the click action
    this.onClickListening();
  }

  onClickListening () {
    this.button.addEventListener("click", () => {
      (this.increase) ? this.team.addPoint() : this.team.removePoint();
    });
  }

}

class TimeButton {
  constructor(menuColor) {
    // Create HTML element
    this.button = document.createElement('button');

    // Button Label 
    this.button.innerHTML = '...';

    // HTML Stylish
    this.button.style.backgroundColor = menuColor;
    this.button.style.color = '#ffffff';
    this.button.style.width = '31vw';
    this.button.style.height = '12vh';
    this.button.style.fontSize = buttonFontSize;
    this.button.style.fontWeight = 'bold';

    // Spacer 
    spacerAndBorder(this.button);

    // Set the time when the button is created
    this.updateTime();
  }

  // Draw the button on the HTML
  appendButton () {
    // Append child the button on the body
    document.getElementsByTagName("body")[0].appendChild(this.button);
    // Set the listening for the click action
    this.onClickListening();
  }

  updateTime () {
    // Get the time and define it on the buttons
    this.today = new Date();
    this.button.innerHTML = `${this.today.getHours()}:0${this.today.getMinutes()}`;
    // The getMinutes() outputs a single '0' to keep two digits inserted 0 before
    if (this.today.getMinutes() >= 10)
      this.button.innerHTML = `${this.today.getHours()}:${this.today.getMinutes()}`;
  }

  onClickListening () {
    this.button.addEventListener("click", () => {
      // Reload the page to reset the game
      location.reload();
    });
  }
}

export { ScoreButton, ControlButton, TimeButton } 