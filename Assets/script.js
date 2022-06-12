
//Home page DOM Elements

var homePageEl = document.getElementById('homepage')
var startButtonEl = document.getElementById('start-button')
var quizEndEl = document.getElementById('end-of-quiz')
var timeEl = document.getElementById('timer')
var timeRemainingEl = document.getElementById('time-remaining');
var answers = document.getElementsByClassName("answerbtn")
var question1EL = document.getElementById('quiz-questions-1');
var question2EL = document.getElementById('quiz-questions-2');
var question3EL = document.getElementById('quiz-questions-3');
var question4EL = document.getElementById('quiz-questions-4');
var question5EL = document.getElementById('quiz-questions-5');
var userInitialsEl = document.getElementById('initials');

// Global Variables

var secondsLeft = 60;
var currentQuestion = {};
var availableQuestions= [];
var questionCounter = 0;
var score = 0

// Global Variables

startButtonEl.addEventListener("click", startQuiz);

// Questions Display

quizEndEl.style.display = 'none'
question1EL.style.display = 'none'
question2EL.style.display = 'none'
question3EL.style.display = 'none'
question4EL.style.display = 'none'
question5EL.style.display = 'none'


// Timer function

function startTimer () {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeRemainingEl.textContent = secondsLeft
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        outOfTime();
      }
  
    }, 1000);
}


// Quiz beginning function

function startQuiz() {
    homePageEl.style.display = "none";
    startTimer();

    question1EL.style.display = "block";

    document.getElementById("q1-answer3").onclick = correctquestion1;
    document.getElementById("q1-answer1").onclick = incorrectquestion1;
    document.getElementById("q1-answer2").onclick = incorrectquestion1;
    document.getElementById("q1-answer4").onclick = incorrectquestion1;
}

function correctquestion1() {
    question1EL.style.display = "none";
    question2EL.style.display = "block";
    score = score + 1;

    document.getElementById("q2-answer3").onclick = correctquestion2;
    document.getElementById("q2-answer1").onclick = incorrectquestion2;
    document.getElementById("q2-answer2").onclick = incorrectquestion2;
    document.getElementById("q2-answer4").onclick = incorrectquestion2;
}

function incorrectquestion1() {
    secondsLeft = secondsLeft - 10;
    question1EL.style.display = "none";
    question2EL.style.display = "block";

    document.getElementById("q2-answer3").onclick = correctquestion2;
    document.getElementById("q2-answer1").onclick = incorrectquestion2;
    document.getElementById("q2-answer2").onclick = incorrectquestion2;
    document.getElementById("q2-answer4").onclick = incorrectquestion2;

}

function correctquestion2() {
    question2EL.style.display = "none";
    question3EL.style.display = "block";
    score = score + 1;
    
    document.getElementById("q3-answer4").onclick = correctquestion3;
    document.getElementById("q3-answer1").onclick = incorrectquestion3;
    document.getElementById("q3-answer2").onclick = incorrectquestion3;
    document.getElementById("q3-answer3").onclick = incorrectquestion3;

}

function incorrectquestion2() {
    secondsLeft = secondsLeft - 10;
    question2EL.style.display = "none";
    question3EL.style.display = "block";

    document.getElementById("q3-answer4").onclick = correctquestion3;
    document.getElementById("q3-answer1").onclick = incorrectquestion3;
    document.getElementById("q3-answer2").onclick = incorrectquestion3;
    document.getElementById("q3-answer3").onclick = incorrectquestion3;

}
    
function correctquestion3() {
    question3EL.style.display = "none";
    question4EL.style.display = "block";
    score = score + 1;
    
    document.getElementById("q4-answer3").onclick = correctquestion4;
    document.getElementById("q4-answer1").onclick = incorrectquestion4;
    document.getElementById("q4-answer2").onclick = incorrectquestion4;
    document.getElementById("q4-answer4").onclick = incorrectquestion4;
}

function incorrectquestion3() {
    secondsLeft = secondsLeft - 10;
    question3EL.style.display = "none";
    question4EL.style.display = "block";



    document.getElementById("q4-answer3").onclick = correctquestion4;
    document.getElementById("q4-answer1").onclick = incorrectquestion4;
    document.getElementById("q4-answer2").onclick = incorrectquestion4;
    document.getElementById("q4-answer4").onclick = incorrectquestion4;
}

function correctquestion4() {
    question4EL.style.display = "none";
    question5EL.style.display = "block";
    score = score + 1;
    
    document.getElementById("q5-answer4").onclick = correctquestion5;
    document.getElementById("q5-answer1").onclick = incorrectquestion5;
    document.getElementById("q5-answer2").onclick = incorrectquestion5;
    document.getElementById("q5-answer3").onclick = incorrectquestion5;
    }

function incorrectquestion4() {
    secondsLeft = secondsLeft - 10;
    question4EL.style.display = "none";
    question5EL.style.display = "block";

    document.getElementById("q5-answer4").onclick = correctquestion5;
    document.getElementById("q5-answer1").onclick = incorrectquestion5;
    document.getElementById("q5-answer2").onclick = incorrectquestion5;
    document.getElementById("q5-answer3").onclick = incorrectquestion5;
}

function correctquestion5() {
    score = score + 1;
    endOfQuiz()
    }


function incorrectquestion5() {
    secondsLeft = secondsLeft - 10;
    endOfQuiz()
    }

 // End of quiz script   

function endOfQuiz() {
    timeEl.style.display = "none";
    quizEndEl.style.display = 'block'
    question5EL.style.display = 'none'
    document.getElementById("final-score").innerHTML =  score
}

// User has run out of time

function outOfTime(){
    question1EL.style.display = 'none'
    question2EL.style.display = 'none'
    question3EL.style.display = 'none'
    question4EL.style.display = 'none'
    question5EL.style.display = 'none'
    timeEl.style.display = "none";
    quizEndEl.style.display = 'block'
    document.getElementById("final-score").innerHTML =  score
}


// restart function

function restartQuiz(){
    window.location.reload(true);
} 
