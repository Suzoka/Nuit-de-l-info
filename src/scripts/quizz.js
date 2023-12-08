let question = 0;
let score = 0;

function moreInfo(info, state) {
    let infoBulle = document.getElementById(info);
    if (state == "open") {
        infoBulle.style.display = "flex";
    } else {
        infoBulle.style.display = "none";
    }
}

fetch('./src/data.json').then(function (response) {
    response.json().then(function (data) {
        nextQuestion(data);

        document.querySelector('#firstRep').addEventListener('click', function () { testQuestion(1, data) });
        document.querySelector('#secondRep').addEventListener('click', function () { testQuestion(2, data) });
        document.querySelector('#thirdRep').addEventListener('click', function () { testQuestion(3, data) });
        document.querySelector('#forthRep').addEventListener('click', function () { testQuestion(1, data) });
        document.querySelector('#fifthRep').addEventListener('click', function () { testQuestion(2, data) });

    })
})


function nextQuestion(data) {
    document.querySelector('.question').innerHTML = data[question].question;
    document.querySelector('.active').classList.remove('active');
    let cercle = "#cercle" + (question+1);
    document.querySelector(cercle).classList.add('active');
    if (data[question].options.length == 2) {
        document.querySelector('#firstRep').style.display = "none";
        document.querySelector('#secondRep').style.display = "none";
        document.querySelector('#thirdRep').style.display = "none";
        document.querySelector('#forthRep').style.display = "block";
        document.querySelector('#forthRep').src = "./src/assets/quizz/" + question + "1.png";
        document.querySelector('#fifthRep').style.display = "block";
        document.querySelector('#fifthRep').src = "./src/assets/quizz/" + question + "2.png";

    }
    else {
        document.querySelector('#firstRep').style.display = "block";
        document.querySelector('#firstRep').src = "./src/assets/quizz/" + question + "1.png";
        document.querySelector('#secondRep').style.display = "block";
        document.querySelector('#secondRep').src = "./src/assets/quizz/" + question + "2.png";
        document.querySelector('#thirdRep').style.display = "block";
        document.querySelector('#thirdRep').src = "./src/assets/quizz/" + question + "3.png";
        document.querySelector('#forthRep').style.display = "none";
        document.querySelector('#fifthRep').style.display = "none";
    }
    question++;
}

function testQuestion(rep, data) {
    score += data[question - 1].options[rep - 1][1];
    if (question == data.length) {
        document.querySelector('#firstRep').style.display = "none";
        document.querySelector('#secondRep').style.display = "none";
        document.querySelector('#thirdRep').style.display = "none";
        document.querySelector('#forthRep').style.display = "none";
        document.querySelector('#fifthRep').style.display = "none";

        document.querySelector('.resultats').style.position = "fixed";
        document.querySelector('.resultats p').innerHTML = "Vous avez " + score + " points/8 !";
        if (score < 4){
            document.querySelector('.resultats img').src = "./src/assets/ab.png"
        }
        else if (score > 6){
            document.querySelector('.resultats img').src = "./src/assets/tb.png"
        }
        else{
            document.querySelector('.resultats img').src = "./src/assets/b.png"
        }
     }
    else {
        nextQuestion(data);
    }
}