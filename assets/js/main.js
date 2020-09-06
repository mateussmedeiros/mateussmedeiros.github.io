AOS.init();

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

    return false;
});
$(document).ready(function() {
    $('#cookieConsent').cookieConsent();
});

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
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);