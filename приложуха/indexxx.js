// Получаем ссылку на элементы страницы
const textarea = document.getElementById('myTextarea');
const downloadBtn = document.getElementById('downloadBtn');

// Обработчик события нажатия на кнопку скачивания
downloadBtn.addEventListener('click', () => {
  // Получаем текст из textarea
  const text = textarea.value;

  // Создаем объект Blob с текстом
  const blob = new Blob([text], { type: 'text/plain' });

  // Создаем ссылку на скачивание
  const url = URL.createObjectURL(blob);

  // Создаем ссылку для скачивания
  const link = document.createElement('a');
  link.href = url;
  link.download = 'myTextFile.txt';

  // Автоматически нажимаем на ссылку для скачивания
  link.click();

  // Освобождаем ресурсы
  URL.revokeObjectURL(url);
});