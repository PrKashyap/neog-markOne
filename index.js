//var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Prasansha",
    score: 5,
  },

  {
    name: "Priyanshi",
    score: 7,
  },
];

var questions = [
  {
    question: "Where do I live? ",
    answer: "Delhi",
  },
  {
    question: "My favorite superhero is? ",
    answer: "Iron man",
  },
  {
    question: "Where do I work? ",
    answer: "Globallogic",
  },
];

function welcome() {
  var userName = prompt("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW Prasansha Kashyap?");
}

function play(question, answer) {
  var userAnswer = prompt(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    // branching
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();
