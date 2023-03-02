function idcheck() {
    let input = (document.getElementById("studentId") as HTMLInputElement);
    if (/[1-2]\d{4}/.test(input.value) && input.value.length === 5) {
        return true;
    }
    else if (/\d{5}/.test(input.value) && input.value.length === 5) {
        alert("1학년 또는 2학년만 지원 가능합니다.");
        input.value = "";
        return false;
    }
    else {
        alert("학번은 5자리 숫자로 입력해주세요.");
        input.value = "";
        return false;
    }
}

function namecheck() {
    let input = (document.getElementById("name") as HTMLInputElement);
    if (/[가-힣]{2,}/.test(input.value) && 2 <= input.value.length) {
        input.value = input.value.replace(/[^가-힣]/g, "");
        return true;
    }
    else {
        alert("이름은 한글로 2글자 이상 입력해주세요.");
        input.value = "";
        return false;
    }
}

function telcheck() {
    let input = (document.getElementById("tel") as HTMLInputElement);
    if (/010\d{4}\d{4}/.test(input.value) && input.value.length === 11) {
        return true;
    }
    else {
        alert("연락처는 휴대전화번호(01000000000)으로 입력해주세요.");
        input.value = "";
        return false;
    }
}

function filecheck() {
    let input = (document.getElementById("file") as HTMLInputElement);
    if (input.files!.length > 5) {
        alert("파일은 5개까지만 업로드 가능합니다.");
        input.value = "";
        return false;
    }
    for (let i = 0; i < input.files!.length; i++) {
        if ((input.files as FileList)[i].size > (8 * 1024 * 1024)) {
            alert((input.files as FileList)[i].name + "의 크기가 8mb 를 넘습니다.");
            input.value = "";
            return false;
        }
    }
    return true;
}

function questioncheck() {
    let input1 = document.getElementById("answer1");
    let input2 = document.getElementById("answer2");
    if (input1!.innerText.length <= 0) {
        alert("1번 문항을 작성해주세요.");
        return false;
    }
    else if (input2!.innerText.length <= 0) {
        alert("2번 문항을 작성해주세요.");
        return false;
    }
    else {
        return true;
    }
}

function agreecheck() {
let input = (document.getElementById("agree") as HTMLInputElement);
    if (input.checked) {
        return true;
    }
    else {
        alert("개인정보 수집 및 이용에 동의해주세요.");
        return false;
    }
}