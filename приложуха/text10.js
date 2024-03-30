const questions = [
    {
        question: " С каким счётом футбольная команда главного героя выиграла матч у дома номер пять?",
        answers: ["11:10", "44:37.", "5:2"],
        correctAnswer: "b"
    },
    {
        question: " В какое время года случилась эта «арбузная история»?",
        answers: ["в начале весны", "поздней осенью.", "летом"],
        correctAnswer: "b"
    },
    {
        question: "Сколько лет главному герою рассказа?",
        answers: ["скоро девять.", "почти десять", "семь"],
        correctAnswer: "a"
    }
];

let currentQuestion = 0;
let resultText = '';
let usedQuestions = [];

const questionContainer = document.getElementById('questionContainer');
const questionText = document.getElementById('questionText');
const resultContainer = document.getElementById('resultContainer');
const resultTextElement = document.getElementById('resultText');
const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');

function getRandomQuestion() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));
    usedQuestions.push(randomIndex);
    return questions[randomIndex];
}

function startTest() {
    startButton.style.display = 'none';
    questionContainer.style.display = 'block';
    nextButton.style.display = 'block';
    const initialQuestion = getRandomQuestion();
    displayQuestion(initialQuestion);
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
            resultText = "Вы хорошо читаете";
        } else {
            resultText = "Вы хорошо читаете";
        }

        if (usedQuestions.length < questions.length) {
            const nextRandomQuestion = getRandomQuestion();
            displayQuestion(nextRandomQuestion);
        } else {
            showResults();
        }
    } else {
        alert('Пожалуйста, выберите ответ.');
    }
}

function displayQuestion(question) {
    questionText.textContent = question.question;
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].value = question.answers[i];
        radioButtons[i].checked = false;
        radioButtons[i].nextSibling.textContent = question.answers[i];
    }
}

function showResults() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultTextElement.textContent = resultText;
}

startButton.addEventListener('click', startTest);
nextButton.addEventListener('click', nextQuestion);