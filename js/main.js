
$('.btn-more').click(function(){
    $('.process-hide').slideToggle('fast');
});



$('.lawyer').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
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