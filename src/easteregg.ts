let click: number = 0;

function on_click() {
    click++;
    if (click % 20 === 10) {
        if (location.href.includes("gallery.html")) {
            if (matchMedia("(max-width: 1025px)").matches) {
                document.getElementById("imgeasteregg")!.style.display = "block";
            } else {
                easteregg1();
            }
        }
    }
    else if (click % 20 === 0) {
        if (location.href.includes("gallery.html")) {
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
    (document.getElementsByClassName('menubar') as HTMLCollectionOf<HTMLElement>)[0].style.backgroundImage = "url('resources/easteregg1.jpeg')";
    (document.getElementsByClassName('menubar') as HTMLCollectionOf<HTMLElement>)[0].style.backgroundImage = "url('../resources/easteregg1.jpeg')";
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
    document.getElementById('enroll')!.style.color = "lawngreen";
    (document.getElementsByClassName('bonobono') as HTMLCollectionOf<HTMLElement>)[0].style.display = "none";
    (document.getElementsByClassName('menubar') as HTMLCollectionOf<HTMLElement>)[0].style.backgroundImage = "none";
}

// 이 함수를 찾으셨군요!!!! 한 번 실행해보는건 어때요?
function easterEgg() {
    console.log(decodeURIComponent(atob('JUVDJUEwJTgwJUVEJTlEJUFDJTIwJUVCJThGJTk5JUVDJTk1JTg0JUVCJUE2JUFDJUVDJTk3JTkwJUVDJTg0JTlDJUVCJThBJTk0JTIwJUVDJTk4JUFDJUVEJTk1JUI0JTIwTlZJRElBJTIwSmV0c29uJTIwTmFubyUyMEJvdCVFQyU5RCU4NCUyMCVFQyU5RCVCNCVFQyU5QSVBOSVFRCU5NSVCNCUyMCVFRCU5NCU4NCVFQiVBMSU5QyVFQyVBMCU5RCVFRCU4QSVCOCVFQiVBNSVCQyUyMCVFQyVBNyU4NCVFRCU5NiU4OSUyMCVFRCU5NSVBMCUyMCVFQyU5OCU4OCVFQyVBMCU5NSVFQyU5RCVCNCVFQiU5RSU4RCVFQiU4QiU4OCVFQiU4QiVBNCElMjAlMjAlRUMlOUQlQjQlMjAlRUIlODIlQjQlRUMlOUElQTklRUMlOUQlODAlMjAlRUMlOUQlQkMlRUElQjglODklMjAlRUIlQjklODQlRUIlQjAlODAlRUMlOUQlQjQlRUMlOTclOTAlRUMlOUElOTQhJTIwJUVBJUJDJUFEJTIwJUVEJTk4JUJDJUVDJTlFJTkwJUVCJUE3JThDJTIwJUVDJTk1JThDJUVBJUIzJUEwJTIwJUVDJTlFJTg4JUVDJTlDJUJDJUVDJTg0JUI4JUVDJTlBJTk0IQ==')));
}