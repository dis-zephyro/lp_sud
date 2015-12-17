
$('.btn-more').click(function(){
    $('.process-hide').slideToggle('fast');
});



$('.lawyer').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.lawyers-list'
});
$('.lawyers-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.lawyer',
    arrows: false,
    centerMode: false,
    focusOnSelect: true
});


$('.lawyers-nav.prev').click(function(){
    $('.lawyers-list').slick('slickPrev');
});

$('.lawyers-nav.next').click(function(){
    $('.lawyers-list').slick('slickNext');
});


$('.review-block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
});


$('.review-more .btn').click(function(){
    $('.review-block').slick('slickNext');
});


$(".btn-modal").fancybox({
    'padding' : 0
});


// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [57.9947,55.9464],
        zoom: 15,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([57.9947,55.9464], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [47, 69],
        iconImageOffset: [-23, -70]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}