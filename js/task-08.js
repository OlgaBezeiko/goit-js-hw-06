const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert('All fields must be filled!');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(formData);

    loginForm.reset();
  }
});

//Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//Під час відправлення форми сторінка не повинна перезавантажуватися.
//Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
//Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.



//У цьому скрипті ми використовуємо метод addEventListener для прикріплення обробника події submit 
//до форми з класом login-form. В обробнику події ми використовуємо метод preventDefault для запобігання 
//перезавантаженню сторінки під час відправлення форми.

//Далі ми отримуємо доступ до елементів форми за допомогою властивості elements і перевіряємо, 
//чи заповнені обидва поля. Якщо є незаповнені поля, ми виводимо повідомлення про це за допомогою методу alert.

//Якщо всі поля заповнені, ми створюємо об'єкт formData, в який зберігаємо значення полів форми. Цей об'єкт 
//ми виводимо в консоль за допомогою методу console.log. Нарешті, ми очищаємо поля форми методом reset.