/*Process

1. Open index
2 Display Home page
3 Click button starts quiz
4 Hides home page and timer starts
5. Displays 1st question and possible answers
6. Answer is clicked.
7. next question is displayed
7. user is informed if previous answer is correct
8. If incorrect answer was chosen, 5 seconds is removed from timer
9. repeated for 3 more questions.
10. after answering final question score is reveal.
11. user inputs name.
12. score, time and name is recorded and displayed in high score page
*/
// Global Variables

// Questions Arrays

var question1 =  {
    question: 'Commonly used data types DO NOT include:',
    answers: [ 'Strings','Booleans','Alerts', 'Numbers'],
    correctAnswer: 'Alerts'
    }

var question2 = { 
    question:'The condition in an if / else statement is enclosed with _______.',
    answers: [ 'Quotes','Curly brackets','Parenthesis', 'Square brackets'],
    correctAnswer: 'Parenthesis'
}

var question3 = { 
    question: 'Arrays in JavaScript can be used to store _______.',
    answers: [ 'Numbers and Strings','Other Arrays','Booleans', 'All of the Above'],
    correctAnswer: 'All of the above'
}

var question4 = { 
    question: 'String values must be enclosed within _______ when being assigned to variables.',
    answers: ['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis'],
    correctAnswer: 'Quotes'
}

var question5 = { 
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [ ' JavaScript', 'Terminal/Bash', 'for Loops', 'Console.log'],
    correctAnswer: 'Console.log'
}

//Home page DOM Elements

var homePageEl = document.getElementById('homepage')
var startButtonEl = document.getElementById('start-button')


startButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
    homePageEl.style.display = "none";
    
}








