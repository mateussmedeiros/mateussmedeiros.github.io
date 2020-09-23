$('.slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
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


    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $('a.whatsapp-link').each(function(i,e){
            e.href = e.href.replace("web.whatsapp", "api.whatsapp");
        });
	}

    $('#cookieConsent').cookieConsent();
});