let index = 0;
let timeout = null;
window.onload = function(){
    if (matchMedia('(min-width: 1025px)').matches) {
        next();
    }
}


function previous() {
    const x = document.getElementsByClassName("slide");
    let i;
    index--;
    if (index <= 0) {
        index = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[index - 1].style.display = "block";
    clearInterval(timeout);
    timeout = setInterval(slideShow, 8000);
}

function next() {
    const x = document.getElementsByClassName("slide");
    let i;
    index++;
    if (index > x.length) {
        index = 1;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[index - 1].style.display = "block";
    clearInterval(timeout);
    timeout = setInterval(slideShow, 8000);
}

function slideShow() {
    next()
}