let index = 0;
window.onload = function(){
    slideShow();
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
}

function slideShow() {
    next()
    setTimeout(slideShow, 6000);
}