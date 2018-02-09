

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



var showQuestion;
var count = 0;

$("#startButton").on("click", startQuestion);


function startQuestion() {

    $("#question").append(object.questionOne.question)
    for (i = 0; i < object.questionOne.answerChoices.length; i++) {
        answerBtn = $("<button>");
        answerBtn.addClass("letter-button letter letter-button-color");
        answerBtn.attr("data-letter", object.questionOne.answerChoices[i]);
        answerBtn.text(object.questionOne.answerChoices[i]);
        $("#answer").append(answerBtn);
    }
    setTimeout(nextQuestionTwo, 2000);
   
};


function nextQuestionTwo(){

    $("#question").empty();
    $("#answer").empty();
    $("#question").append(object.questionTwo.question)
    for (i = 0; i < object.questionTwo.answerChoices.length; i++) {
        answerBtn = $("<button>");
        answerBtn.addClass("letter-button letter letter-button-color");
        answerBtn.attr("data-letter", object.questionTwo.answerChoices[i]);
        answerBtn.text(object.questionTwo.answerChoices[i]);
        $("#answer").append(answerBtn);
    }
    setTimeout(nextQuestionThree, 2000);
};


function nextQuestionThree() {

    $("#question").empty();
    $("#answer").empty();
    $("#question").append(object.questionThree.question)
    for (i = 0; i < object.questionThree.answerChoices.length; i++) {
        answerBtn = $("<button>");
        answerBtn.addClass("letter-button letter letter-button-color");
        answerBtn.attr("data-letter", object.questionThree.answerChoices[i]);
        answerBtn.text(object.questionThree.answerChoices[i]);
        $("#answer").append(answerBtn);
    }
    setTimeout(nextQuestionFour, 2000);
};

function nextQuestionFour() {

    $("#question").empty();
    $("#answer").empty();
    $("#question").append(object.questionFour.question)
    for (i = 0; i < object.questionFour.answerChoices.length; i++) {
        answerBtn = $("<button>");
        answerBtn.addClass("letter-button letter letter-button-color");
        answerBtn.attr("data-letter", object.questionFour.answerChoices[i]);
        answerBtn.text(object.questionFour.answerChoices[i]);
        $("#answer").append(answerBtn);
    }
    setTimeout(nextQuestionFive, 2000);
};

function nextQuestionFive() {   

    $("#question").empty();
    $("#answer").empty();
    $("#question").append(object.questionFive.question)
    for (i = 0; i < object.questionFive.answerChoices.length; i++) {
        answerBtn = $("<button>");
        answerBtn.addClass("letter-button letter letter-button-color");
        answerBtn.attr("data-letter", object.questionFive.answerChoices[i]);
        answerBtn.text(object.questionFive.answerChoices[i]);
        $("#answer").append(answerBtn);
    }
    setTimeout(triviaOver, 2000);
};

function triviaOver(){
    
    $("#question").empty();
    $("#answer").empty();
    $("h1").empty();

    $("h1").append("Trivia is Over");
    $("#question").append("You got this many right");
    $("#answer").append("You got this many wrong");

};






















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






