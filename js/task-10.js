
//<div id="controls">
  //<input type="number" min="1" max="100" step="1" />
  //<button type="button" data-create>Create</button>
  //<button type="button" data-destroy>Destroy</button>
//</div>

//<div id="boxes"></div>

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = +controls.querySelector('input').value;
  let size = 30;
  let html = '';

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    html += `<div style="background-color: ${color}; width: ${size}px; height: ${size}px"></div>`;
    size += 10;
  }

  boxes.insertAdjacentHTML('beforeend', html);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
