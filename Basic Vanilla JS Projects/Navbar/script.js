const menu = document.querySelector('#menu');
const sub_menu = document.querySelector('.sub_menu');
menu.addEventListener('click', function () {
  if (menu.classList.contains('transition')) {
    menu.classList.add('rtransition');
    menu.classList.remove('transition');
    sub_menu.style.display = 'none';
  } else {
    menu.classList.add('transition');
    menu.classList.remove('rtransition');
    sub_menu.style.display = 'block';
  }
});
