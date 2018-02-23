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
  }
];

var timer;
var counter = 5;

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
    game.countStartNumber = counter;
    $("#timer").text(game.countStartNumber);
    game.currentQuestion++;
    game.loadQuestion();
  },
  loadQuestion: function() {
      $("#answer").empty();
    timer = setInterval(game.countdown, 1000);
    $("#question").html(
      "<h1>" + questionArray[this.currentQuestion].question + "</h1>"
    );
    for (
      var i = 0;
      i < questionArray[this.currentQuestion].answerChoices.length;
      i++
    ) {
      var answerBtn = $("<button>");
      answerBtn.addClass("answer-button");
      answerBtn.attr("id", "button");
      answerBtn.attr(
        "data-name",
        questionArray[this.currentQuestion].answerChoices[i]
      );
      answerBtn.text(questionArray[this.currentQuestion].answerChoices[i]);

      $("#answer").append(answerBtn);
    }
  },
  timeUp: function() {
    // erases the interval that would be set prior to this
    clearInterval(timer);
  },
  results: function() {},
  clicked: function(event) {
    clearInterval(timer);
    if (
      $(event.target).attr("data-name") ===
      questionArray[this.currentQuestion].answer
    ) {
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);
    $("#question").text("incorrect: " + this.incorrect);
    if (game.currentQuestion === questionArray.length - 1) {
      setTimeout(game.results, 3000);
    } else {
      setTimeout(game.nextQuestion, 3000);
    }
  },
  answeredCorrectly: function() {
    game.correct++;
    clearInterval(timer);
    $("#question").text("correct: " + this.correct)
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

$(document).on("click", "#start-over", function(event) {
  game.reset(event);
});

$(document).on("click", "#start", function(event) {
  game.loadQuestion(event);
});
