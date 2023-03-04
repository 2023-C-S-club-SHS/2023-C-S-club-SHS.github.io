const gradient = (document.getElementById("content-gradient2") as HTMLDivElement);

window.onscroll = function() {
    gradient.style.transform = "translateY(-" + window.scrollY + "px)" + "scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
}