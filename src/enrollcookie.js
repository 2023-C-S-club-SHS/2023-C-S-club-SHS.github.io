window.onbeforeunload = function() {
    saveCookie();
}

window.onload = function() {
    loadCookie();
    counttext(1);
    counttext(2);
}

function saveCookie() {
    Cookies.set('id', document.getElementById("studentId").value)
    Cookies.set('name', document.getElementById("name").value)
    Cookies.set('tel', document.getElementById("tel").value)
    Cookies.set('a1', document.getElementById("answer1").innerText)
    Cookies.set('a2', document.getElementById("answer2").innerText)
    alert("저장되었습니다. 브라우저를 닫으면 내용이 사라집니다.\n(파일은 저장되지 않습니다.)")
}

function loadCookie() {
    if (Cookies.get('id') !== undefined) document.getElementById("studentId").value = Cookies.get('id')
    if (Cookies.get('name') !== undefined) document.getElementById("name").value = Cookies.get('name')
    if (Cookies.get('tel') !== undefined) document.getElementById("tel").value = Cookies.get('tel')
    if (Cookies.get('a1') !== undefined) document.getElementById("answer1").innerText = Cookies.get('a1')
    if (Cookies.get('a2') !== undefined) document.getElementById("answer2").innerText = Cookies.get('a2')
}