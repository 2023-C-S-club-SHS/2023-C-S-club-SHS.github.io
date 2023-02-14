function idcheck() {
    let input = document.getElementById("studentId");
    if (/\d{5}/.test(input.value) && input.value.length === 5) {
        return true;
    }
    else {
        alert("학번은 5자리 숫자로 입력해주세요.");
        input.value = null;
        return false;
    }
}

function namecheck() {
    let input = document.getElementById("name");
    if (/[가-힣]{2,}/.test(input.value) && 2 <= input.value.length) {
        input.value = input.value.replace(/[^가-힣]/g, "");
        return true;
    }
    else {
        alert("이름은 한글로 2글자 이상 입력해주세요.");
        input.value = null;
        return false;
    }
}

function telcheck() {
    let input = document.getElementById("tel");
    if (/010\d{4}\d{4}/.test(input.value) && input.value.length === 11) {
        return true;
    }
    else {
        alert("연락처는 휴대전화번호(01000000000)으로 입력해주세요.");
        input.value = null;
        return false;
    }
}

function filecheck() {
    let input = document.getElementById("file");
    if (input.files.length > 5) {
        alert("파일은 5개까지만 업로드 가능합니다.");
        input.value = null;
        return false;
    }
    for (let i = 0; i < input.files.length; i++) {
        if (input.files[i].size > (8 * 1024 * 1024)) {
            alert(input.files[i].name + "의 크기가 8mb 를 넘습니다.");
            input.value = null;
            return false;
        }
    }
    return true;
}

function questioncheck() {
    let input1 = document.getElementById("answer1");
    let input2 = document.getElementById("answer2");
    if (input1.innerText.length <= 0) {
        alert("1번 문항을 작성해주세요.");
        return false;
    }
    else if (input2.innerText.length <= 0) {
        alert("2번 문항을 작성해주세요.");
        return false;
    }
    else {
        return true;
    }
}