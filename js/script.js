
//Moves definition

let moves = {
    rock: "rock",
    papper: "papper",
    scissors: "scissors",
  };

// Alternative moves definition

let moves2 = ['rock', 'papper', 'scissors'];

//Variables

let computerMove = "moves.rock";
let playerMove = "moves.papper";

//Message by KODILLA

printMessage(
  "I choose a " + computerMove + "! If You choose a " + playerMove + "You WIN !"
);

//Message by arturodfrontu

printMessage(
  "I chosse a " + moves.rock + "! If You choose a " + moves.papper + "You WIN !"
);

// zrozumiałem o czym mówileś o tablicach. Trzeba znać dokładnie "położenie" elementu, który chcesz wykożystać. Przy obiekcie nie ma tego problemu.

// Print message using a array moves definition

printMessage(
    "I chosse a " + moves2[0] + "! If You choose a " + moves2.[1] + "You WIN !"
);