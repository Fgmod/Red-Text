document.getElementById('assessment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var text = document.getElementById('text').value;

    // Здесь можно выполнить оценивание способностей к чтению и пониманию текста
    // с помощью методов психологии и лингвистики, используя введенные данные

    var result = "Спасибо, " + name + "! Ваши способности к чтению и пониманию текста будут оценены.";

    document.getElementById('result').innerText = result;
});
