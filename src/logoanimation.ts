const logo = (document.getElementById("animationlogo") as HTMLElement)
const menuBar = (document.getElementsByClassName("menubar")[0] as HTMLElement);
let Scroll: number = 0;
let interval: NodeJS.Timer;
const rpms: number = (logo.clientWidth - 100) / 300;
let rpm: number = 0;

console.log(logo.style.width);

window.onload = function () {

}

function animation() {
    clearInterval(interval);
    const scale: number = 1 - Scroll / 200;
    const margin: number = document.getElementsByTagName('body')[0].clientWidth * 0.1;
    logo.style.width = (scale * 10 * margin + 100).toString() + "px";
    logo.style.left = (Scroll / 1000 + margin).toString() + "px";
    logo.style.rotate = (scale * 360 + 1.2).toString() + "deg";
    rpm += rpms;
    if (logo.clientWidth < 100) {
        logo.style.opacity = "0";
        menuBar.style.display = "block";
        clearInterval(interval);
    }
    else {
        logo.style.opacity = "1";
        menuBar.style.display = "none";
        interval = setInterval(animation, 1);
    }
    Scroll++;
    console.log(scale);
}