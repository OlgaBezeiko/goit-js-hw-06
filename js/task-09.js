
//<div class="widget">
  //<p>Background color: <span class="color">-</span></p>
  //<button type="button" class="change-color">Change color</button>
//</div>

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  span.textContent = color;
});


//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на 
//button.change-color і виводить значення кольору в span.color.
