$(document).ready(function () {
 $('.testiSlide').slick({
 slidesToShow: 2,
 slidesToScroll: 1,
 autoplay: true,
 autoplaySpeed: 3000,
 responsive: [{
 breakpoint: 850,
 settings: {
 slidesToShow: 1,
 slidesToScroll: 1,
 infinite: true,
 }
 }]
 });
});