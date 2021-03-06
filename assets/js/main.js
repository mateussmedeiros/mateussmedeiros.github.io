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

$('#tel').mask("(99) 9999-99999")
.focusout(function (event) {  
    var target, phone, element;  
    target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
    phone = target.value.replace(/\D/g, '');
    element = $(target);  
    element.unmask();  
    if(phone.length > 10) {  
        element.mask("(99) 99999-9999");  
    } else {  
        element.mask("(99) 9999-9999");  
    }  
});

$(document).ready(function() {
    $('#cookieConsent').cookieConsent();
});

$('.slider').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="../assets/img/lp/prev.svg" class="icon"></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="../assets/img/lp/next.svg" class="icon"></button>'
});

$(document).ready(function() {
    $('#tel').mask("(99) 9999-99999")
    .focusout(function (event) {  
        var target, phone, element;  
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
        phone = target.value.replace(/\D/g, '');
        element = $(target);  
        element.unmask();  
        if(phone.length > 10) {  
            element.mask("(99) 99999-9999");  
        } else {  
            element.mask("(99) 9999-9999");  
        }  
    });
    $('#cookieConsent').cookieConsent();
});

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