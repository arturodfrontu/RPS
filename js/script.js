//plr - player
//cpu - computer

const score = {
  plr: 0,
  cpu: 0,
};

//Start the Game
const playGame = () => {
  const startBtn = document.querySelector(".start .btn");
  const startScreen = document.querySelector(".start");
  const encounter = document.querySelector(".encounter");

  startBtn.addEventListener("click", function () {
    startScreen.classList.add("hide");
    encounter.classList.remove("hide");
  });
};

//Encounter
const startEncounter = () => {
  const plrOptions = document.querySelectorAll(".options .btn");
  const plrFist = document.querySelector(".plr-fist i");
  const cpuFist = document.querySelector(".cpu-fist i");
  const fists = document.querySelectorAll(".fight i");

  //Computer Options
  const cpuOptions = ["rock", "paper", "scissors"];

  plrOptions.forEach((option) => {
    option.addEventListener("click", function() {
      //Computer Choice
      const cpuOptionNumber = Math.floor(Math.random() * cpuOptions.length);
      const cpuChoice = cpuOptions[cpuOptionNumber];

      //Here we call compare
      compare(this.textContent, cpuChoice);

      plrFist.classList.remove("fa-hand-rock");
      plrFist.classList.add(`fa-hand-${this.textContent}`);

      cpuFist.classList.remove("fa-hand-rock");
      cpuFist.classList.add(`fa-hand-${cpuChoice}`);
    });
  });
};

const updateScore = () => {
  const playerScore = document.querySelector(".player-points p");
  const computerScore = document.querySelector(".computer-points p");
  playerScore.textContent = score.plr;
  computerScore.textContent = score.cpu;
};

const compare = (playerChoice, cpuChoice) => {
  //Update Text
  const result = document.querySelector(".result");
  //Check draw condition
  if (playerChoice === cpuChoice) {
    result.textContent = "DRAW ! - NO POINTS";
  }
  //Rock
  else if (playerChoice === "rock") {
    if (cpuChoice === "scissors") {
      result.textContent = "You Win ! - Point for You !";
      score.plr++;
      updateScore();
    } else {
      result.textContent = "Computer Win ! - Point for CPU !";
      score.cpu++;
      updateScore();
    }
  }
  //Paper
    else if (playerChoice === "paper") {
    if (cpuChoice === "rock") {
      result.textContent = "You Win ! - Point for You !";
      score.plr++;
      updateScore();
    } else {
      result.textContent = "Computer Win ! - Point for CPU !";
      score.cpu++;
      updateScore();
    }
  }
  //scissors
  else if (playerChoice === "scissors") {
    if (cpuChoice === "paper") {
      result.textContent = "You Win ! - Point for You !";
      score.plr++;
      updateScore();
    } else {
      result.textContent = "Computer Win ! - Point for CPU !";
      score.cpu++;
      updateScore();
    }
  };
console.log('plr:'+ playerChoice, 'cpu:' + cpuChoice, 'Result:' + result.textContent);
}

  playGame();
  startEncounter();
