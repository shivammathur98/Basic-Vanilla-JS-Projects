// Selectors
const color_name = document.querySelector('#color_name');
const button = document.querySelector('.button');
const colors = ['green', 'red', 'orange', 'blue', 'purple'];
const main = document.querySelector('#main');
const heading = document.querySelector('#hh');
button.addEventListener('click', randomColor);
// Shivam Mathur
function randomColor() {
  let randomNo = Math.floor(Math.random() * colors.length);
  main.style.backgroundColor = colors[randomNo];
  color_name.style.textTransform = 'capitalize';
  color_name.textContent = colors[randomNo];
  color_name.style.color = colors[randomNo];
  heading.style.color = colors[randomNo];
}
