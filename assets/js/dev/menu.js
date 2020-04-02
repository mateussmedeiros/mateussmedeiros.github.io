function controlMenu() {
  const btn = document.querySelector('#btn-menu');
  const menu = document.querySelector('#menu');
  const rowNav = document.querySelector('.row-nav');

  btn.addEventListener('click', function() {
    if(menu.classList.contains('menu-visible')) {
        menu.classList.remove('menu-visible');
        rowNav.classList.add('h-100');
    } else {
        menu.classList.add('menu-visible');
        rowNav.classList.remove('h-100');
    }
  }, false)
}
controlMenu();