var questionArray = [
  {
    question: "What number is Javier Baez?",
    answerChoices: ["9", "23", "16", "21"],
    answer: "9"
  },
  {
    question: "What number is Kris Bryant?",
    answerChoices: ["23", "17", "12", "44"],
    answer: "17"
  },
  {
    question: "What number is Wilson Contreras?",
    answerChoices: ["10", "30", "40", "20"],
    answer: "40"
  },
  {
    question: "What number is Anthony Rizzo?",
    answerChoices: ["14", "24", "33", "44"],
    answer: "44"
  },
  {
    question: "What number is Jason Heyward?",
    answerChoices: ["33", "22", "11", "3"],
    answer: "22"
  },
  {
    question: "What number is Addison Russel?",
    answerChoices: ["13", "24", "21", "6"],
    answer: "21"
  },
  {
    question: "What number is Jon Lester?",
    answerChoices: ["34", "12", "52", "42"],
    answer: "34"
  },
  {
    question: "What number is Kyle Hendricks?",
    answerChoices: ["18", "4", "31", "28"],
    answer: "28"
  },
  {
    question: "What number is CJ Edwards?",
    answerChoices: ["8", "14", "6", "24"],
    answer: "6"
  },
  {
    question: "What number is Ben Zobrist?",
    answerChoices: ["28", "18", "16", "32"],
    answer: "18"
  }
];

var timer;
var counter = 10;

var game = {
  questions: questionArray,
  currentQuestion: 0,
  countStartNumber: counter,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.countStartNumber--;
    $("#timer").text(game.countStartNumber);
    if (game.countStartNumber === 0) {
      console.log("time is up");
      game.timeUp();
    }
  },
  nextQuestion: function() {
    $("#resultImage").empty();
    game.countStartNumber = counter;
    $("#timer").text(game.countStartNumber);
    game.currentQuestion++;
    game.loadQuestion();
  
  },
  loadQuestion: function() {
    $("#answer").empty();
    $("#buttonDiv").empty();
    timer = setInterval(game.countdown, 1000);
    $("#question").html(questionArray[this.currentQuestion].question);
    for (var i = 0; i < questionArray[this.currentQuestion].answerChoices.length; i++) {
      var answerBtn = $("<button>");
      answerBtn.addClass("answer-button");
      answerBtn.attr("id", "button");
      answerBtn.attr("data-name", questionArray[this.currentQuestion].answerChoices[i]);
      answerBtn.text(questionArray[this.currentQuestion].answerChoices[i]);
      $("#answer").append(answerBtn);
    }
  },
  timeUp: function() {
    // erases the interval that would be set prior to this
    clearInterval(timer);
    game.answeredIncorrectly();
  },
  results: function() {
    $("#question").empty();
    $("#timer").empty();
    $("#question").append("Good Guys: " + game.correct + "  Bad Guys: " + game.incorrect);
    $("#buttonDiv").empty();
    $("#buttonDiv").append("<button id='resetButton'>Reset</button>");
    $("#resultImage").empty();
  },
  clicked: function(event) {
    clearInterval(timer);
    if ($(event.target).attr("data-name") === questionArray[this.currentQuestion].answer) {
      this.answeredCorrectly();
    } else if (game.countStartNumber == 0) {
      this.answeredIncorrectly();
    } else{
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);

    $("#resultImage").append("<img id='cubslose' src='assets/images/cubslose.jpg'>");

    $("#question").text("You got this question incorrect!");
    if (game.currentQuestion === questionArray.length - 1) {
      setTimeout(game.results, 3000);
    } else {
      setTimeout(game.nextQuestion, 3000);
    }
  },
  answeredCorrectly: function() {
    game.correct++;
    clearInterval(timer);

    $("#resultImage").append("<img id='cubswin' src='assets/images/cubswin.png'>");

    $("#question").text("You got this question correct!")
    if (game.currentQuestion === questionArray.length - 1) {
      setTimeout(game.results, 3000);
    } else {
      setTimeout(game.nextQuestion, 3000);
    }
  },
  reset: function() {
    this.currentQuestion = 0;
    this.countStartNumber = counter;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

$(document).on("click", ".answer-button", function(event) {
  game.clicked(event);
});

$(document).on("click", "#resetButton", function(event) {
  game.reset(event);
});

$(document).on("click", "#start", function(event) {
  game.loadQuestion(event);
});
