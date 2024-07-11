
const client_reivew_section_inner = $(".client-reivew-section-inner");
client_reivew_section_inner.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        960: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
});


const client_review_small_card_slider = $(".client-review-small");
client_review_small_card_slider.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        960: {
            items: 3,
        },
        1200: {
            items: 3,
        },
    },
});
// event page js 