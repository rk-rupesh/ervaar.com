
const hideGratisBook = () => {
    let gratisEbook = document.getElementById('gratis-ebook');
    gratisEbook.style.display = 'none'

}
let closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', hideGratisBook);


const client_review_slider = $(".client-review-slider");
client_review_slider.owlCarousel({
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

