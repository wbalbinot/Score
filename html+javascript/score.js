function clock (date, where) {
  document.getElementById(where).innerHTML = date.getHours() + ':' + date.getMinutes()
}

function increaseScore (team) {
  // Get actual score
  currentScore = document.getElementById(team).innerText;
  // Increment
  document.getElementById(team).innerText++
}

function decreaseScore (team) {
  // Get actual score
  currentScore = document.getElementById(team).innerText;
  // To avoid negative numbers
  if (currentScore > 0)
    // Decrement
    document.getElementById(team).innerText--
}

function clearScore () {
  location.reload();
}

// Initiative the Score
function initiateScore () {
  clock(new Date, 'time');
}