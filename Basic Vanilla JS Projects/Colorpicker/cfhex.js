const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('.button');
const main = document.querySelector('#main');
const color_name = document.querySelector('#color_name');
const heading = document.querySelector('#hh');
button.addEventListener('click', randomColor);
function randomColor() {
  let genColor = '#';
  for (i = 0; i < 6; i++) {
    genColor += hex[hexNumber()];
    main.style.backgroundColor = genColor;
    color_name.textContent = genColor;
    color_name.style.color = genColor;
    heading.style.color = genColor;
  }
}
function hexNumber() {
  return Math.floor(Math.random() * hex.length);
}
