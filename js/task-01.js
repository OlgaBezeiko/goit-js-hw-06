//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, 
//знайде і виведе в консоль текст заголовку 
//елемента (тегу <h2>) і кількість елементів в категорії 
//(усіх <li>, вкладених в нього).
//Для виконання цього завдання потрібно використати метод 
//forEach() і властивості навігації по DOM.

//В результаті, в консолі будуть виведені наступні повідомлення.

//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5


const categoriesList = document.getElementById('categories');
const items = categoriesList.getElementsByClassName('item');
console.log(`Number of categories: ${items.length}`);

Array.from(items).forEach(item => {
  const heading = item.getElementsByTagName('h2');
  const category = heading.textContent;
  const elements = item.getElementsByTagName('li');
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements.length}`);
});


//метод getElementById() замість querySelector(), і 
//метод getElementsByClassName() замість 
//querySelectorAll(). Метод getElementsByClassName() 
//повертає живу колекцію, який ми перетворюємо 
//в масив, використовуючи метод Array.from(), щоб з 
//ним можна було використовувати метод forEach(). 
//метод getElementsByTagName() для отримання відповідних елементів. 