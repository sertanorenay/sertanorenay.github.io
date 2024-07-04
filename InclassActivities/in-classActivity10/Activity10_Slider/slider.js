$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 250,
        slideMargin: 10,
        pause: 3000,
        pager: true,
        pagerSelector: '#pager',
        pagerType: 'short'
    });
});
