var question = 1
var réponses = [1, 1, 2, 1, 2]

document.querySelectorAll('#questionnaire>div').forEach(function (question) {
    question.style.display = "none";
})

document.querySelectorAll('#questionnaire>div>button').forEach(function (button) {
    button.addEventListener('click', verif)
})

nextQuestion()

function nextQuestion() {
    questionActuelle = document.querySelector('#quest-' + question);
    questionActuelle.style.display = "block";
}

function verif(e) {
    if (e.target.classList.value.replace('reponse-', '') == réponses[question - 1]) {
        document.querySelector('#quest-' + question).style.display = "none";
        question++;
        if (question == 6) {
            //win code
        } else {
            nextQuestion();
        }
    } else {
        //fonction mauvaise réponse
    }
}