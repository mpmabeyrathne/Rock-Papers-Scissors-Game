let playResults = JSON.parse(localStorage.getItem("playResults"));

if (playResults === null) {
  playResults = {
    Wins: 0,
    Losses: 0,
    Ties: 0,
  };
}

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let results = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      results = "You Lose";
    } else if (computerMove === "Paper") {
      results = "You won";
    } else if (computerMove === "Scissors") {
      results = "Tie";
    }

    console.log(playResults);
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      results = "You won";
    } else if (computerMove === "Paper") {
      results = "Tie";
    } else if (computerMove === "Scissors") {
      results = "You Lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      results = "Tie";
    } else if (computerMove === "Paper") {
      results = "You Lose";
    } else if (computerMove === "Scissors") {
      results = "You won";
    }
  }

  if (results === "You won") {
    playResults.Wins += 1;
  } else if (results === "Tie") {
    playResults.Ties += 1;
  } else if (results === "You Lose") {
    playResults.Losses += 1;
  }

  localStorage.setItem("playResults", JSON.stringify(playResults));

  document.querySelector(".previousResult").innerHTML = results;
  document.querySelector(
    ".resultChooseBy"
  ).innerHTML = `you<img class="move-icon" src="./img/${playerMove}-emoji.png" alt=""><img class="move-icon"
            src="./img/${computerMove}-emoji.png" alt="">Computer`;
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(
    ".result-sec"
  ).innerHTML = `wins: ${playResults.Wins}, Losses: ${playResults.Losses}, Ties: ${playResults.Ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
