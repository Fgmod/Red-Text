// Обработчик нажатия на кнопку "Сохранить"
document.getElementById("saveButton").addEventListener("click", function() {
    const tex = document.getElementById("tex").value;
   
    
    

    // Создаем объект, который будет хранить вопрос и ответ
    const qaPair = {tex};

    // Преобразуем объект в JSON-строку
    const qaPairJSON = JSON.stringify(qaPair);

    // Создаем ссылку с данными
    const dataUri = "data:text/plain;charset=UTF-8," + encodeURIComponent(qaPairJSON);

    // Создаем элемент списка и добавляем его в список сохраненных вопросов
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", dataUri);
    link.setAttribute("download", "question.json");
    link.innerText = "Сохранить вопрос и ответ";
    listItem.appendChild(link);
    document.getElementById("savedQuestions").appendChild(listItem);

    // Очищаем поля ввода
    document.getElementById("tex").value = "";
    
    
});



var questions = [
    {
        question: "Кто главный герой данного произведения?",
        answer: ""
    },
    {
        question: "Какое событие было наиболее важным?",
        answer: ""
    },
    {
        question: "Какая главная тема была затронута в произведении?",
        answer: ""
    }
];

var currentQuestion = 0;
var score = 0;

function startTest() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("nextButton").style.display = "block";
    
    loadQuestion(currentQuestion);
}

function loadQuestion(questionIndex) {
    var questionContainer = document.getElementById("question");
    questionContainer.innerHTML = questions[questionIndex].question;
    
    var answerInput = document.getElementById("answerInput");
    answerInput.value = "";
    answerInput.style.display = "block";
}

function nextQuestion() {
    var userAnswer = document.getElementById("answerInput").value;
    var correctAnswer = questions[currentQuestion].answer;
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion(currentQuestion);
    } else {
        finishTest();
    }
}

function finishTest() {
    var testContainer = document.getElementById("question");
    var result = "Ваши ответы в скором времени будут проверены и будет подготовлен анализ!";
    testContainer.innerHTML = result;
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("answerInput").style.display = "none";
}







