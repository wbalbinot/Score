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
  document.getElementById("redScore").innerText = 0
  document.getElementById("blueScore").innerText = 0
  // location.reload();

}

// Initiative the Score
function initiateScore () {
  const date = new Date();
  const hours = date.getHours();
  const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  document.getElementById("time").innerHTML = `${hours}:${minutes}`;
}

setInterval(initiateScore, 1000);