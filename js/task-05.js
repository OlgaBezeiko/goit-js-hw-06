
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', () => {
    if (nameInput.value === '') {
      nameOutput.innerText = 'Anonymous';
    } else {
      nameOutput.innerText = nameInput.value;
    }
  });



  //Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

