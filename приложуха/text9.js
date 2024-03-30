const questions = [
    {
        question: "Куда мама обещала повести Дениску, если он съест манную кашу?",
        answers: ["на ВДНХ", "в Третьяковскую галерею", "в Кремль."],
        correctAnswer: "c"
    },
    {
        question: "С каким сказочным персонажем мама сравнивала Дениску, когда он отказывался есть?",
        answers: ["Баба-Яга", "Кощей Бессмертный.", "Мальчик-с-пальчик"],
        correctAnswer: "b"
    },
    {
        question: "Какие слова сказал Дениска маме, когда милиционер и пострадавший от каши ушли?",
        answers: ["тайное всегда становится явным.", "неудобно получилось", "прошу прощения"],
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