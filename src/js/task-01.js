

const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const heading = item.querySelector('h2');
  const category = heading.textContent;
  const elements = item.querySelectorAll('li');

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements.length}`);
});
