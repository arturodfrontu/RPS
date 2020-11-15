
//Moves definition

let moves = {
    rock: "rock",
    papper: "papper",
    scissors: "scissors",
  };

// Alternative moves definition

let alterMoves = ['rock', 'papper', 'scissors']; //zmieniłem nazwę zmiennej

//Variables

let computerMove = moves.rock; //poprawione
let playerMove = moves.papper;  //poprawione

//Message by KODILLA

printMessage(
  "I choose a " + computerMove + "! If You choose a " + playerMove + "You WIN !"
);

//Message by arturodfrontu

printMessage(
  "I chosse a " + moves.rock + "! If You choose a " + moves.papper + "You WIN !"
);

// zrozumiałem o czym mówiłeś o tablicach. Trzeba znać dokładnie "położenie" elementu, który chcesz wykorzystać. Przy obiekcie nie ma tego problemu.

// Print message using a array moves definition

printMessage(
    "I chosse a " + alterMoves[0] + "! If You choose a " + alterMoves[1] + "You WIN !"
);
