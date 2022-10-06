const swiper = new Swiper('.swiper', {  
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // pagination: {
    //     el: '.swiper-pagination',

    //     //bullets
    //     // type: 'bullets',
    //     // clickable: true,
    //     // dynamicBullets: true,

    //     //fractions
    //     // type: 'fraction',
    //     // renderFraction: function(currentClass, totalClass) {
    //     //     return 'Фото <span class="' + currentClass + '"></span>' +
    //     //     ' из ' +
    //     //     '<span class="'+ totalClass + '"></span>';
    //     // }

    //     //progressbar
    //     // type: 'progressbar',
    // },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    simaleTouch: true,
    touchRadio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,
    autoHeight: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    slidesPerView: 1.1,
    // slidesPerGroup:3,
    // spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed:800,
    // direction: 'vertical',

    // effect:'fade',
    // fadeEffect: {
    //     crossFade: true,
    // }

    // effect: 'flip',
    // flipEffect: {
    //     slideShadows: true,
    //     limiRotation: true,
    // }

    // effect: 'cube',
    // cubeEffect: {
    //     slideShadows:true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // }

    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShows: true,
    // },
    
    // breakpoints:{
    //     320:{
    //         slidesPerView: 1,
    //     },
    //     480:{
    //         slidesPerView: 2,
    //     },
    //     992:{
    //         slidesPerView: 3,
    //     }
    // }
    
});
