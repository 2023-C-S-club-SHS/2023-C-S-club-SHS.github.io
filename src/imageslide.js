const slide = document.querySelector('.images')
const slideItems = document.querySelectorAll('.slide')
const maxSlide = slideItems.length;
let currSlide = 1;
let timeout = null;
let slideWidth = 0;

window.onload = function(){
    if (matchMedia('(min-width: 1025px)').matches) {
        slideWidth = slide.clientWidth;
        next();
    }
}

function previous() {
    currSlide--;
    if (currSlide > 0) {

    } else {
        currSlide = maxSlide;
    }
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
    });
    clearInterval(timeout);
    timeout = setInterval(next, 6000);
}

function next() {
    currSlide++;
    if (currSlide <= maxSlide) {

    } else {
        currSlide = 1;
    }
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
    });
    clearInterval(timeout);
    timeout = setInterval(next, 6000);
}

window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
    next();
    previous();
});

window.onkeydown = function(e) {
    if (e.key === 'ArrowLeft') {
        previous();
    } else if (e.key === 'ArrowRight') {
        next();
    }
}