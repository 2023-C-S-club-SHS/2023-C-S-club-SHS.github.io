let click: number = 0;

function on_click() {
    click++;
    if (click % 20 === 10) {
        if (location.href.includes("index.html")) {
            if (matchMedia("(max-width: 1025px)").matches) {
                document.getElementById("imgeasteregg")!.style.display = "block";
            } else {
                easteregg1();
            }
        }
    }
    else if (click % 20 === 0) {
        if (location.href.includes("index.html")) {
            if (matchMedia("(max-width: 1025px)").matches) {
                document.getElementById("imgeasteregg")!.style.display = "none";
            } else {
                easteregg3();
            }
        }
        easteregg4();
    }
}

function easteregg1() {
    slideItems = document.querySelectorAll('.slide');
    maxSlide = slideItems.length;
    create_pagination();
    currSlide--;
    paginationItems = document.querySelectorAll(".slide_pagination > li");
    next();
    addpaginationevent();
}

function easteregg2() {
    let body = document.querySelector('body') as HTMLElementTagNameMap["body"];
    body.style.backgroundImage = "url('resources/easteregg1.jpeg')";
    body.style.backgroundImage = "url('../resources/easteregg1.jpeg')";
    document.getElementById('enroll')!.style.color = "purple";
    (document.getElementsByClassName('bonobono') as HTMLCollectionOf<HTMLElement>)[0].style.display = "block";
}

function easteregg3() {
    slideItems = document.querySelectorAll('.slide');
    maxSlide = slideItems.length - 1;
    create_pagination();
    currSlide--;
    paginationItems = document.querySelectorAll(".slide_pagination > li");
    next();
    addpaginationevent();
}

function easteregg4() {
    let body = document.querySelector('body') as HTMLElementTagNameMap["body"];
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "#0f223c"
    document.getElementById('enroll')!.style.color = "lawngreen";
    (document.getElementsByClassName('bonobono') as HTMLCollectionOf<HTMLElement>)[0].style.display = "none";
}