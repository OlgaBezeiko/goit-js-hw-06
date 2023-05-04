  const counterValue = document.getElementById('value');
  const decrementBtn = document.querySelector('[data-action="decrement"]');
  const incrementBtn = document.querySelector('[data-action="increment"]');
  
  let count = 0;
  
  decrementBtn.addEventListener('click', () => {
    count-=1;
    counterValue.innerText = count;
  });
  
  incrementBtn.addEventListener('click', () => {
    count+=1;
    counterValue.innerText = count;
  });



//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.