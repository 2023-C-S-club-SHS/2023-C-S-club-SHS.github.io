const slide = document.querySelector('.images')
const slideItems = document.querySelectorAll('.slide')
const maxSlide = slideItems.length;
let currSlide = 1;
let timeout = null;
let slideWidth = 0;

const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

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
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
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
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
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

for (let i = 0; i < maxSlide; i++) {
    paginationItems[i].addEventListener("click", () => {
        currSlide = i + 1;
        const offset = slideWidth * (currSlide - 1);
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    });
}