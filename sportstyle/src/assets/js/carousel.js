const nextIcon = '<img class="nxt" src="assest/img/arrow-right.svg" alt="right">';
const prevIcon = '<img class="prv" src="assest/img/arrow-left.svg" alt="left"> ';
const nextblogIcon = ' <img class="nxt" src="assest/img/arrow-right-blog.svg" alt="right">';
const prevblogIcon = ' <img class="prv" src="assest/img/arrow-left-blog.svg" alt="left">';


var topSlider = new Swiper(".manset_slider", {
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000,
    },
});
var productSlider = new Swiper(".product-slider", {
    slidesPerView: 5,
    centeredSlides: false,
    loop: false,
    scrollbar: {
        el: ".swiper-scrollbar",
    }
});
var swiperMblPrdct = new Swiper(".swiper-mbl-prdct", { /*product mobil slider swiper*/
    slidesPerView: 1,
    centeredSlides: false,
    loop: false,
    scrollbar: {
        el: ".swiper-scrollbar",
    }
});



var mainSlider = new Swiper('.main-slider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const tabSlider = new Swiper('.tab-slider', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    breakpoints: {

        // when window width is >= 480px
        426: {
            slidesPerView: 4,
        },

    }
});

const othermainslider = new Swiper('.other-main-slider', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,

    observer: true,
    observeParents: true,
    breakpoints: {

        // when window width is >= 480px
        426: {
            slidesPerView: 3,
        },

    }
});




const absoluteslider = new Swiper('.absolute-slider', {
    slidesPerView: 3,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 2,

    breakpoints: {

        // when window width is >= 480px
        426: {
            slidesPerView: 5,
        },

    }
});

const productinslider = new Swiper('.productin-slider', {
    slidesPerView: 6,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    breakpoints: {

        // when window width is >= 480px
        426: {
            slidesPerView: 6,
        },

    }
});