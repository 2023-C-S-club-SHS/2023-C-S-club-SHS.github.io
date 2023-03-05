const logo = (document.getElementById("animationlogo") as HTMLElement)
const mainlogo = (document.getElementById("mainlogo") as HTMLElement)
const menu = (document.getElementsByClassName("menu") as HTMLCollectionOf<HTMLElement>);
const content = (document.getElementById('content') as HTMLElement);
const end = (document.getElementsByClassName('end')[0] as HTMLElement);
const margin: number = window.innerWidth * 0.1;
let Scroll: number = 0;
let interval: ReturnType<typeof setInterval>;
const rpms: number = (logo.clientWidth - 100) / 300;
let rpm: number = 0;

function animation() {
    let disable: boolean = false;
    clearInterval(interval);
    const scale: number = 1 - Scroll / 300;
    logo.style.width = (scale * 10 * margin + 100).toString() + "px";
    if (matchMedia('(min-width: 1025px)').matches) {
        logo.style.left = (Scroll / 1000 + margin).toString() + "px";
        if (logo.clientWidth < 90) disable = true;
    } else {
        logo.style.left = (Scroll / 1000).toString() + "px";
        if (logo.clientWidth < window.innerHeight * 0.1) disable = true;
    }
    // logo.style.transform = "rotateZ(" + (scale * 360 + 1.2).toString() + "deg)";
    rpm += rpms;
    if (disable) {
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