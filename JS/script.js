var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var navbar = document.querySelector(".navpart-2");
var bar = document.querySelector(".menu");
var flag = 0;

bar.addEventListener("click", () => {
    if (flag == 0) {
        navbar.style.transform = "translateY(0)";
        flag += 1;
    }
    else {
        navbar.style.transform = "translateY(-100%)";
        flag -= 1;
    }
})