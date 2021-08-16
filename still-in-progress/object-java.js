let score = 0;
let StartingQuestions = 1;
let NumberQuestions = 3;

let questionair = {
    q1: [ "is the earth getting warmer year by year", "yes" ],
    q2: ["is Baku international city", "yes"],
    q3: ["this summer in Baku was hottest compared to last 20 years", "yes"]

};

function game () {
    let question = "<p>Score: " + score + "</p>"
    document.querySelector("#scoreplace").innerHTML=question;
    // question=questionair["q" + startquestion][0];
    // document.querySelector("#questionplace").innerHTML=question;

}

game();

document.onkeyup = function(event) {
    let input = event.key;
    if (input === "yes" || input === "f") {
        checkAnswer (input)

    }
}

function checkAnswer (input) {
    if (questionair ["q" + startquestion][1]===input){
        score=score+1;

        incrementQuestion()
        reloadinfo()

    }
    else{
        incrementQuestion()
        reloadinfo()

    }
}
function reloadinfo() {
    let scoreHtml = "<p>Score: " + score + "</P>"
    document.querySelector ("#scorePlace").innerHTML = question;

    let question = questionair ["q" + StartingQuestions] [0]
    document.querySelector("#questionPlace").innerHTML = question;

}
function incrementQuestion () {
    if (startquestion <= NumberQuestions) {
        StartingQuestions = StartingQuestions + 1;

    }
    else {
        let scoreHtml = "<h1> Looser </h1>"
        document.querySelector("#scorePlace").innerHTML = scoreHtml;
        document.querySelector("#questionPlace").innerHTML = question;

    }
}