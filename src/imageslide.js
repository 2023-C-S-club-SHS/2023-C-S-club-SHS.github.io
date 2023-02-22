const slide = document.querySelector('.images')
let slideItems = document.querySelectorAll('.slide')
let maxSlide = slideItems.length - 1;
let currSlide = 1;
let timeout = null;
let slideWidth = 0;

const pagination = document.querySelector(".slide_pagination");

function create_pagination() {
    pagination.innerHTML = "";
    for (let i = 0; i < maxSlide; i++) {
        if (i === currSlide - 1) pagination.innerHTML += `<li class="active">•</li>`;
        else pagination.innerHTML += `<li>•</li>`;
    }
}

create_pagination();

let paginationItems = document.querySelectorAll(".slide_pagination > li");

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
    timeout = setInterval(next, 8000);
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
    timeout = setInterval(next, 8000);
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

function addpaginationevent() {
    for (let i = 0; i < maxSlide; i++) {
        paginationItems[i].removeEventListener("click", () => {});
        paginationItems[i].addEventListener("click", () => {
            currSlide = i + 1;
            const offset = slideWidth * (currSlide - 1);
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1].classList.add("active");
            clearInterval(timeout);
            timeout = setInterval(next, 8000);
        });
    }
}

addpaginationevent();