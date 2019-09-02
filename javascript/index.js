import Button from './Button.js';
import { cleanMarginSpace } from './util.js';

// Clean up the HTML and BODY tags
cleanMarginSpace(document.getElementsByTagName('html')[0]);
cleanMarginSpace(document.getElementsByTagName('body')[0]);

// Instantiate the buttons
var team1Button = new Button('ec008c');
var team2Button = new Button('00b0f0');

//Append the Buttons on the HTML
team1Button.appendButton();
team2Button.appendButton();