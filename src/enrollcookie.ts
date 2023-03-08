window.onbeforeunload = function() {
    if (location.href.includes("enroll.html")) {
        saveCookie();
    }
    saveEasteregg();
}

window.onload = function() {
    if (location.href.includes("enroll.html")) {
        loadCookie();
        counttext(1);
        counttext(2);
    } else if (location.href.includes("gallery.html")) {
        if (matchMedia('(min-width: 1025px)').matches) {
            slideWidth = slide.clientWidth;
            next();
        }
    } else {
        interval = setInterval(animation, 1);
    }
    loadEasteregg();
    console.log("당신은 개발자 도구를 열으셨군요!\n소스 코드에 면접이 도움이 될만한 것이 있을지도 몰라요!\n한 번 찾아보는건 어때요?")
}

function saveCookie() {
    Cookies.set('name', (document.getElementById("name") as HTMLInputElement)?.value);
    Cookies.set('tel', (document.getElementById("tel") as HTMLInputElement)?.value);
    Cookies.set('a1', document.getElementById("answer1")?.innerText!);
    Cookies.set('a2', document.getElementById("answer2")?.innerText!);
    alert("저장되었습니다. 브라우저를 닫으면 내용이 사라집니다.\n(파일은 저장되지 않습니다.)")
}

function loadCookie() {
    if (Cookies.get('name') !== undefined) (document.getElementById("name") as HTMLInputElement)!.value = Cookies.get('name')!
    if (Cookies.get('tel') !== undefined)  (document.getElementById("tel") as HTMLInputElement)!.value = Cookies.get('tel')!
    if (Cookies.get('a1') !== undefined) document.getElementById("answer1")!.innerText = Cookies.get('a1')!
    if (Cookies.get('a2') !== undefined) document.getElementById("answer2")!.innerText = Cookies.get('a2')!
}

function eraseCookie() {
    if (confirm("정말로 초기화하시겠습니까?")) {

    }
    else {
        return false;
    }
    Cookies.remove('id');
    Cookies.remove('name');
    Cookies.remove('tel');
    Cookies.remove('a1');
    Cookies.remove('a2');
    (document.getElementById("number") as HTMLInputElement)!.value = "";
    (document.getElementById("name") as HTMLInputElement)!.value = "";
    (document.getElementById("tel") as HTMLInputElement)!.value = "";
    document.getElementById("answer1")!.innerText = "";
    document.getElementById("answer2")!.innerText = "";
    counttext(1)
    counttext(2)
    alert("정상적으로 삭제되었습니다.")
}

function saveEasteregg() {
    Cookies.set('easteregg', String((document.getElementById("enroll")!.style.color === "purple")))
}

function loadEasteregg() {
    if (Cookies.get('easteregg') === "true") {
        click = 10;
        easteregg2();
        if (location.href.includes("gallery.html")) {
            document.getElementById("imgeasteregg")!.style.display = "block";
            easteregg1();
        }
    }
}