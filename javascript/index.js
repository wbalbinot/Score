import { ScoreButton, ControlButton, TimeButton } from './Button.js';
import { cleanMarginSpace } from './util.js';

//Define the color for this projects
var team1Color = '#0275D8';
var team2Color = '#D9534F';
var menuColor = '#292B2C';

// Clean up the HTML and BODY tags
cleanMarginSpace(document.getElementsByTagName('html')[0]);
cleanMarginSpace(document.getElementsByTagName('body')[0]);

// Instantiate the team scores
var team1Button = new ScoreButton(team1Color);
var team2Button = new ScoreButton(team2Color);

// Instantiate the point controls
var increaseButtonTeam1 = new ControlButton('+ increase', team1Color, team1Button, true, false);
var increaseButtonTeam2 = new ControlButton('+ increase', team2Color, team2Button, true);

var decreaseButtonTeam1 = new ControlButton('- decrease', team1Color, team1Button, false, false);
var decreaseButtonTeam2 = new ControlButton('- decrease', team2Color, team2Button, false);

// Instantiate the clock
var timeButton = new TimeButton(menuColor);
// Update the time every minute
setInterval(() => { timeButton.updateTime() }, 60000);

//Append the Buttons in order on the HTML
increaseButtonTeam1.appendButton();
increaseButtonTeam2.appendButton();

team1Button.appendButton();
team2Button.appendButton();

decreaseButtonTeam1.appendButton();
timeButton.appendButton();
decreaseButtonTeam2.appendButton();

