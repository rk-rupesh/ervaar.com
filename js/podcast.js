// banner video js 

const video_scroll = $(".video-scroll");
video_scroll.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    responsive: {
        0: {
            items: 2,
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

document.querySelectorAll('.thumb-video').forEach(item => {
    item.addEventListener('click', function () {
        const videoSrc = this.src;
        const mainVideo = document.querySelector('.main-video');
        mainVideo.src = videoSrc;
    });
});


// short video js 

const short_video_row = $(".short-video-row");
short_video_row.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
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

const shortVideo = document.querySelectorAll('.short-videos');
shortVideo.forEach((video) => {
    video.addEventListener('click', () => {
        shortVideo.forEach((pauseVideo) => {
            if (video !== pauseVideo) {
                pauseVideo.pause();
                pauseVideo.load();
                console.log('pause video')
            }
        })
        // video.play();
        video.autoplay;
    })
})





