// Two simple arrays
let questions = [
    " What is the currency of Japan??",
    "What is the smallest unit of matter?",
    " How many layers does Earth atmosphere have?",
    "Who created html?",
    "What is the largest planet in our solar system??"
];

let answers = [
    "Japanese Yen",
    "Atom",
    "5",
    "Tim Berners-Lee",
    "Jupiter"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer: " + answers[i]);
    }
}

alert("Final Score: " + score + " / " + questions.length);