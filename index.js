//Задание 2. Создайте страницу, подключите скрипт. Создайте функцию, которая выведет сообщение в консоли «Я учу JavaScript!».
function message(text = 'Я учу JavaScript!') {
  return text;
}

console.log(message());

/*Задание 3. Создайте галерею переключения изображений. 
В ней будет две кнопки: вперёд и назад, которые должны переключать изображение (в галерее пока будет 2 картинки, но если можете больше, то делайте).*/

let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {    //по клику запускаем функцию
  offset += 480; //offset = offset+480;
  if (offset > 1920) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-last').addEventListener('click', function () {
  offset -= 480;
  if (offset < 0) {
    offset = 1920;
  }
  sliderLine.style.left = -offset + 'px';
});