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