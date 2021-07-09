function populate() {
    if (quiz.isEnded()) {
        showScores();        
    }
    else {
        //show question
        var question = document.getElementById("question");
        question.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {

            var span = document.getElementById("choice" + i);
            span.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);

        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var progress = document.getElementById("progress");
    progress.innerText = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

function showScores() {
    var gameOverHtml =  `
                        <h1>Result<h1>
                        <h2 id='score'> Your scores: ${quiz.score} </h2>
                        `;

    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Which of the following is not a major house?", ["Stark", "Lannister", "Baratheon", "Bolton"], "Bolton"),
    new Question("With which city did Daenerys Targaryen negotiate and didn't plunder during her campaign in the East?", ["Qarth", "Yunkai", "Mereen", "Astapor"], "Yunkai"),
    new Question("Which was the name of Eddard Stark's greatsword?", ["Longclaw", "Ice", "Hearteater", "Oathkeeper"], "Ice"),
    new Question("Which Lannister was a squire of Robert Baratheon?", ["Willem", "Martyn", "Lansel", "Kevan"], "Lansel"),
    new Question("Which of the Free Cities was famed for its pleasure arts?", ["Lys", "Pentos", "Myr", "Qohor"], "Lys")
];

var quiz = new Quiz(questions);

populate();