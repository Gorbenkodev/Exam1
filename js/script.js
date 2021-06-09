// ============ Плавная прокрутка при нажатии на элементы меню и стрелку

$(function () {
    $('#menu, #btn_header').on('click', 'a', function (event) {
        event.preventDefault();

        let id = $(this).attr('href');
        let top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 1700);
    });
});


// ============ Плавное изменение высоты блока меню при прокрутке страницы вниз

$(document).scroll(() => {
    if ($(window).scrollTop() > 100) {
        $(".header-nav").addClass("header-nav_scroll");
    } else {
        $(".header-nav").removeClass("header-nav_scroll");
    }
});

// =============== Слайдер хедера
$('.header-slick').slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: 'header-dots',
});

// ================== Слайдер мейна
$('.main-news-slick').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    appendArrows: $('.main-news-arrows'),
    prevArrow: '<button id="prev" type="button" class="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next" type="button" class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    dotsClass: 'main-news-dots',
});

// Трансформ картинок

let divFst = document.querySelector('.main-projects-first');
let imgFst = document.querySelector('.main-projects-first__img');

divFst.onmouseover = function(e) {
  imgFst.style.transform = 'translate(300px, 100px)';
  imgFst.style.transition = '1s';
};

divFst.onmouseout = function(e) {
  imgFst.style.transform = '';
  imgFst.style.transition = '1s';
};

let divSec = document.querySelector('.main-projects-second');
let imgSec = document.querySelector('.main-projects-second__img');

divSec.onmouseover = function(e) {
  imgSec.style.transform = 'translate(-300px, 100px)';
  imgSec.style.transition = '1s';
};

divSec.onmouseout = function(e) {
  imgSec.style.transform = '';
  imgSec.style.transition = '1s';
};


// Карта

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.670105600206185, lng: -73.91681154897643 },
    zoom: 13,
    mapId: '13ddb7fec0d33786'
  });

  let marker = new google.maps.Marker({
    position: { lat: 40.680205600206285, lng: -73.91681154897643 },
    map: map,
    title: 'Тот самый маркер',
    animation: google.maps.Animation.BOUNCE,
    icon: "/img/marker-icon.ico",
});
};