const logo = (document.getElementById("animationlogo") as HTMLElement)
const mainlogo = (document.getElementById("mainlogo") as HTMLElement)
const menu = (document.getElementsByClassName("menu") as HTMLCollectionOf<HTMLElement>);
const content = (document.getElementsByClassName('content')[0] as HTMLElement);
const end = (document.getElementsByClassName('end')[0] as HTMLElement);
let Scroll: number = 0;
let interval: ReturnType<typeof setInterval>;
const rpms: number = (logo.clientWidth - 100) / 300;
let rpm: number = 0;

function animation() {
    clearInterval(interval);
    const scale: number = 1 - Scroll / 300;
    const margin: number = document.getElementsByTagName('body')[0].clientWidth * 0.1;
    logo.style.width = (scale * 10 * margin + 100).toString() + "px";
    if (matchMedia('(min-width: 1025px)').matches) {
        logo.style.left = (Scroll / 1000 + margin).toString() + "px";
    } else {
        logo.style.left = (Scroll / 1000).toString() + "px";
    }
    logo.style.transform = "rotateZ(" + (scale * 360 + 1.2).toString() + "deg)";
    rpm += rpms;
    if (logo.clientWidth < 90) {
        clearInterval(interval);
        logo.style.display = "none";
        mainlogo.style.display = "block";
        setTimeout(function () {
            for (let i = 0; i < menu.length; i++) {
                menu[i].style.display = "inline"
                menu[i].style.animation = "fadein 1s"
            }
        }, 200);
        setTimeout(function ()
        {
            content.style.display = "block"
            content.style.animation = "fadein 1s"
            end.style.display = "block"
            end.style.animation = "fadein 1s"
        }, 700);
    }
    else {
        interval = setInterval(animation, 1);
    }
    Scroll++;
}