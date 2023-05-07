const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li"); //створюємо елемент
  li.textContent = ingredient;//додаємо назву
  li.classList.add("item");//додаємо клас
  ul.appendChild(li);//вставляємо список після всіх
});



//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.