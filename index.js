//slider display function
function initializeCarousel(slideshow, slidesToRoll) {
    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: slideshow,
        slidesToScroll: slidesToRoll,
        respondTo: 'slider',
        adaptiveHeight: true,
        dots: true
    });
}

//remove carousel
function destroyCarousel() {
    $('.slick-carousel').slick('unslick');
}

// Initial setup on document load
initializeCarousel(5, 5);

// Update on window resize
window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    //screen width conditions
    if (screenWidth <= 630) {
        destroyCarousel();
        initializeCarousel(1, 1);
    } 
    else if (screenWidth <= 1000) {
        destroyCarousel();
        initializeCarousel(2, 2);
    } else if (screenWidth <= 1543) {
        destroyCarousel();
        initializeCarousel(3, 3);
    } else {
        destroyCarousel();
        initializeCarousel(5, 5);
    }
});


      