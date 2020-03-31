function controlMenu() {
  const btn = document.querySelector('#btn-menu');
  const menu = document.querySelector('#menu');
  console.log('hello');

  btn.addEventListener('click', function() {
    menu.classList.toggle('menu-visible');
  }, false)
}
controlMenu();