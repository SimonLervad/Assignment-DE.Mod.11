import {Question} from "./modules/questions.js";
import {$} from "./modules/id.js";

console.log("script.js")

let questions = ["", ];
let j = 1;
let counter = 0;

var insert = function () {
    for (let i = 1; i < questions.length; i++) {
        console.log(i);
        questions[i].draw();
        $(i).style.display = "none";
    }
    $("1").style.display = "inherit";
}

var initialize = function () {
let question1 = Object.create(Question);
question1.init(1, 1, "Hvad er et Boolean udtryk?", "Et negativt statement", "Noget der returner sandt/ falsk", "En function", "Noget der returner sandt/ falsk");
questions.push(question1);
let question2 = Object.create(Question);
question2.init(2, 2, "Hvad er et Array?", "Et sted man kan opbevare data", "En række der kun opbevarer tal", "Det er et variabel navn", "Et sted man kan opbevare data");
questions.push(question2);
let question3 = Object.create(Question);
question3.init(3, 3, "Hvad betyder increment/ decrement?", "At en værdi stiger eller falder med en given værdi", "At en værdi stiger eller falder med en", "At en værdi ændrer sig konstant", "At en værdi stiger eller falder med en");
questions.push(question3);
let question4 = Object.create(Question);
question4.init(4, 4, "Hvad kendetegner 'const'?", "En variable som ændrer sig konstant", "Summen af en bestemt værdi", "En variable som aldrig ændrer sig", "En variable som aldrig ændrer sig");
questions.push(question4);
let question5 = Object.create(Question);
question5.init(5, 5, "Hvor mange dagen uden programmering før livet er meningsløst?", "1", "2", "3", "3");
questions.push(question5);
insert();
start();
}

function count() {
    counter = counter + 100;
    $("total").innerHTML = counter;
}

const check = function(e) {
    console.log(j);
    console.log(e.target.value);
    if (questions[j].correct === e.target.value) {
        $("answer").innerHTML = "Du har svaret rigtig";
        count();
        $(j).style.display = "none";
        j++;
        $(j).style.display = "inherit";
    } else {
        $("answer").innerHTML = "Du har svaret forkert";
        $(j).style.display = "none";
        j++;
        $(j).style.display = "inherit";
    }
}

const start = function() {
    document.getElementById('quiz').addEventListener('change', check);
}

console.log(questions);

window.addEventListener('load', initialize);