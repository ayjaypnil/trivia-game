var object = {
    questionOne: {
        question: "What number is Javier Baez?",
        answerChoices: ["9", "23", "16", "21"],
        answer: "9",
    },
    questionTwo: {
        question: "What number is Kris Bryant?",
        answerChoices: ["23", "17", "12", "44"],
        answer: "17",
    },
    questionThree: {
        question: "What number is Wilson Contreras?",
        answerChoices: ["10", "30", "40", "20"],
        answer: "40",
    },
    questionFour: {
        question: "What number is Anthony Rizzo?",
        answerChoices: ["14", "24", "33", "44"],
        answer: "44",
    },
    questionFive: {
        question: "What number is Jason Heyward?",
        answerChoices: ["33", "22", "11", "3"],
        answer: "22",
    }
};

var intervalID;
var showQuestion;
var clockRunning = false;
var answersRight = 0;
var answersWrong = 0;


var stopwatch = {

    time: 10,

    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },
    count: function () {
        stopwatch.time--;
        $("#timer").text(stopwatch.time);
    },

    startQuestion: function() {
        $("#question").append(object.questionOne.question)

        for (i = 0; i < object.questionOne.answerChoices.length; i++) {
            answerBtn = $("<button>");
            answerBtn.addClass("btn btn-default");
            answerBtn.attr("data-letter", object.questionOne.answerChoices[i]);
            answerBtn.text(object.questionOne.answerChoices[i]);

            $("#answer").append(answerBtn);
            $("#timer").text(parseInt(10));

            $(answerBtn).click(function(){
                var correct = $(this).data("letter");
                if(correct == 9){
                   answersRight ++;
                   console.log(answersRight);
                } else if (correct !== 9){
                   answersWrong++;
                   console.log(answersWrong);
                } 
            });
        }
        stopwatch.start();
        setTimeout(stopwatch.nextQuestionTwo, 10 * 1000);
    },

    nextQuestionTwo: function () {

        stopwatch.time = 5;
        $("#timer").text(parseInt(5));

        $("#question").empty();
        $("#answer").empty();
        $("#question").append(object.questionTwo.question)

        for (i = 0; i < object.questionTwo.answerChoices.length; i++) {
            answerBtn = $("<button>");
            answerBtn.addClass("btn btn-default");
            answerBtn.attr("data-letter", object.questionTwo.answerChoices[i]);
            answerBtn.text(object.questionTwo.answerChoices[i]);
            $("#answer").append(answerBtn);

            $(answerBtn).click(function () {
                var correct = $(this).data("letter");
                if (correct == 17) {
                    answersRight++;
                    console.log(answersRight);
                } else if (correct !== 17) {
                    answersWrong++;
                    console.log(answersWrong);
                }
            });
        }
    
        stopwatch.start();
        setTimeout(stopwatch.nextQuestionThree, 5 * 1000);
    },
    
    nextQuestionThree: function () {

        stopwatch.time = 5;
        $("#timer").text(parseInt(5));

        $("#question").empty();
        $("#answer").empty();
        $("#question").append(object.questionThree.question)
        for (i = 0; i < object.questionThree.answerChoices.length; i++) {
            answerBtn = $("<button>");
            answerBtn.addClass("btn btn-default");
            answerBtn.attr("data-letter", object.questionThree.answerChoices[i]);
            answerBtn.text(object.questionThree.answerChoices[i]);
            $("#answer").append(answerBtn);

            $(answerBtn).click(function () {
                var correct = $(this).data("letter");
                if (correct == 40) {
                    answersRight++;
                    console.log(answersRight);
                } else if (correct !== 40) {
                    answersWrong++;
                    console.log(answersWrong);
                }
            });
        }
        stopwatch.start();
        setTimeout(stopwatch.nextQuestionFour, 5 * 1000);
    },

    nextQuestionFour: function () {

        stopwatch.time = 5;
        $("#timer").text(parseInt(5));

        $("#question").empty();
        $("#answer").empty();
        $("#question").append(object.questionFour.question)
        for (i = 0; i < object.questionFour.answerChoices.length; i++) {
            answerBtn = $("<button>");
            answerBtn.addClass("btn btn-default");
            answerBtn.attr("data-letter", object.questionFour.answerChoices[i]);
            answerBtn.text(object.questionFour.answerChoices[i]);
            $("#answer").append(answerBtn);

            $(answerBtn).click(function () {
                var correct = $(this).data("letter");
                if (correct == 44) {
                    answersRight++;
                    console.log(answersRight);
                } else if (correct !== 44) {
                    answersWrong++;
                    console.log(answersWrong);
                }
            });
        }
        stopwatch.start();
        setTimeout(stopwatch.nextQuestionFive, 5 * 1000);
    },

    nextQuestionFive: function () {

        stopwatch.time = 5;
        $("#timer").text(parseInt(5));

        $("#question").empty();
        $("#answer").empty();
        $("#question").append(object.questionFive.question)
        for (i = 0; i < object.questionFive.answerChoices.length; i++) {
            answerBtn = $("<button>");
            answerBtn.addClass("btn btn-default");
            answerBtn.attr("data-letter", object.questionFive.answerChoices[i]);
            answerBtn.text(object.questionFive.answerChoices[i]);
            $("#answer").append(answerBtn);

            $(answerBtn).click(function () {
                var correct = $(this).data("letter");
                if (correct == 22) {
                    answersRight++;
                    console.log(answersRight);
                } else if (correct !== 22) {
                    answersWrong++;
                    console.log(answersWrong);
                }
            });
        }
        stopwatch.start();
        setTimeout(stopwatch.triviaOver, 5 * 1000);
    },


    triviaOver: function () {

        clearInterval(intervalId);
        stopwatch.time;
        clockRunning = false;
        $("#timer").empty();

        $("#question").empty();
        $("#answer").empty();
        $("h1").empty();

        $("h1").append("Trivia is Over");
        $("#question").append("You got this many right: " + answersRight);
        $("#answer").append("You got this many wrong: " + answersWrong);
    },
};



$("#startButton").on("click", stopwatch.startQuestion);




















// When the start button is pressed, the game begins with the first question.
// $("#startButton").on("click", function (event){

//     $("#question").append(object.questionOne.question);

//     for(i = 0; i < object.questionOne.answerChoices.length; i++){
//         answerBtn = $("<button>");
//         answerBtn.addClass("letter-button letter letter-button-color");
//         answerBtn.attr("data-letter", object.questionOne.answerChoices[i]);
//         answerBtn.text(object.questionOne.answerChoices[i]);
//         $("#answer").append(answerBtn);
//     }
//         event.preventDefault();
//         nextQuestionBtn = $("<button> Next" + "</Button>");
//         nextQuestionBtn.addClass("btn btn-default");
//         $("#startButton").html(nextQuestionBtn);



// });


//     $("#nextQuestionBtn").on("click", function () {
//         questionTwo();
//     });

//     function questionTwo(){
//         $("#question").innerHTML();
//         alert("question2");
//     }







// // Next question button goes, so that replaces the current start button
// nextQuestionBtn = $("<button> Next" + "</Button>");
// nextQuestionBtn.addClass("btn btn-default");
// $("#startButton").html(nextQuestionBtn);

// // click function on the next button so that next question pops up
// $(nextQuestionBtn).on("click", function () {
//     // clear the current question
//     $("#question").innerHTML();
//     // will need to save initial #question to a variable and reevaluate it**
//     $("#question").ht(object.questionTwo.question);

// });



// var clock = {
//     time: 10,
//     count: function () {
//         clock.time--;

//     }
//         if(!clockRunning) {
//         intervalId = setInterval(clock.count, 1000);
//         clockRunning = true;
//         $("#timer").text(clock.time);
//     }

// };