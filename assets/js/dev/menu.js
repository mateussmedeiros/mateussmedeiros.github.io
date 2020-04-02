function controlMenu() {
  const btn = document.querySelector('#btn-menu');
  const menu = document.querySelector('#menu');
  const rowNav = document.querySelector('.row-nav');

  btn.addEventListener('click', function() {
    if(menu.classList.contains('menu-visible')) {
        menu.classList.remove('menu-visible');
        rowNav.style.height = 'calc(var(--vh, 1vh) * 25)';
    } else {
        menu.classList.add('menu-visible');
        rowNav.style.height = 'calc(var(--vh, 1vh) * 45)';
    }
  }, false)
}
controlMenu();