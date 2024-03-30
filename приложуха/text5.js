const questions = [
    {
        question: "Где проживала семья Мерцаловых?",
        answers: ["На чердаке старого дома", "В заброшенном доме на окраине села", "В сыром подвале старого здания."],
        correctAnswer: "c"
    },
    {
        question: "Кем работал Мерцалов?",
        answers: ["Управляющим.", "Дворником", "Слесарем"],
        correctAnswer: "a"
    },
    {
        question: "Кто рассказал эту историю?",
        answers: ["Один из старших сыновей Мерцалова.", "Младший ребёнок Мерцалова", "Сам Мерцалов"],
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
