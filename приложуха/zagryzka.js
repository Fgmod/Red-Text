// Тест 1
// Обработчик нажатия на кнопку "Сохранить"
document.getElementById("saveButton").addEventListener("click", function() {
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;
    const answers = document.getElementById("answers").value;
    
    

    // Создаем объект, который будет хранить вопрос и ответ
    const qaPair = { question, answer, answers};

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
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
    document.getElementById("answers").value = "";
    
});



// Тест 2
// Обработчик нажатия на кнопку "Сохранить"
document.getElementById("saveButton").addEventListener("click", function() {
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const d = document.getElementById("d").value;
    
    // Создаем объект, который будет хранить вопрос и ответ
    const qaPair = { b, c, d};

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
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("d").value = "";
    
});



// Тест 3
// Обработчик нажатия на кнопку "Сохранить"
document.getElementById("saveButton").addEventListener("click", function() {
    const e = document.getElementById("e").value;
    const f = document.getElementById("f").value;
    const g = document.getElementById("g").value;
    
    

    // Создаем объект, который будет хранить вопрос и ответ
    const qaPair = { e, f, g};

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
    document.getElementById("e").value = "";
    document.getElementById("f").value = "";
    document.getElementById("g").value = "";
    
});




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