// Selectors
const value = document.querySelector('#cvalue');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
// Functions
count = 0;
decrease.addEventListener('click', function () {
  count -= 1;
  value.textContent = count;
  if (count < 0) {
    value.style.color = 'red';
  } else if (count == 0) {
    value.style.color = 'rgb(39, 39, 39)';
  }
});
reset.addEventListener('click', function () {
  count = 0;
  value.textContent = count;
  value.style.color = 'rgb(39, 39, 39)';
});
increase.addEventListener('click', function () {
  count += 1;
  value.textContent = count;
  if (count > 0) {
    value.style.color = 'green';
  } else if (count == 0) {
    value.style.color = 'rgb(39, 39, 39)';
  }
});
