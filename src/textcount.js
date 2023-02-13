function counttext(question) {
    let text = document.getElementById('answer'+String(question)).innerText
    let textlength = text.length
    document.getElementById('count' + String(question)).innerText = '('+ String(textlength) + '자)'
}