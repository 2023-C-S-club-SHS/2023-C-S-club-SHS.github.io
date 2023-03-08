function counttext(question: number) {
    let text: string = (document.getElementById('answer'+String(question))?.innerText) as string
    let textlength: number = (text?.length as number)
    if (textlength >= 450) {
        alert("450자 이상 입력할 수 없습니다.");
        document.getElementById('answer'+String(question))!.innerText = text?.slice(0, 449)
        textlength = 449
    }
    document.getElementById('count' + String(question))!.innerText = '('+ String(textlength) + '/450자)'
}