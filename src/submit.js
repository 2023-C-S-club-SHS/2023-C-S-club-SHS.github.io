async function submit() {
    if (idcheck() && namecheck() && telcheck() && filecheck() && questioncheck() && agreecheck()) {

    }
    else {
        return;
    }
    if (confirm("정말로 제출하시겠습니까?")) {

    }
    else {
        return false;
    }
    let tel = "";
    for (let i = 0; i < 11; i++) {
        if (i === 3 || i === 7) {
            tel += "-";
        }
        tel += document.getElementById("tel").value[i];
    }
    let content = {
        "embeds":
            [
                {
                    "title": document.getElementById("studentId").value + " " + document.getElementById("name").value,
                    "fields": [
                        {
                            "name": "연락처",
                            "value": tel
                        },
                        {
                            "name": "1. 컴퓨터 과학부에 지원하게 된 동기를 작성해주세요",
                            "value": "```" + document.getElementById("answer1").innerText + "```"
                        },
                        {
                            "name": "2. 본인이 생각하는 자신의 장점과 단점을 작성해주세요",
                            "value": "```" + document.getElementById("answer2").innerText + "```"
                        }
                    ],
                    "footer": {
                        "text": await fetch("https://jsonip.com").then(r => r.json()).then(d => d["ip"])
                    },
                    "color": 5814783
                }
            ]
    };
    const formData = new FormData();
    formData.append('payload_json',JSON.stringify(content))
    const formFileData = new FormData();
    for (let i = 0; i < document.getElementById('file').files.length; i++) {
        formFileData.append('file['+String(i)+']', document.getElementById('file').files[i]);
    }

    await fetch("https://discord.com/api/webhooks/1075454765691064410/1LNQHU5Pw07A7W4Vvds7bSzRUJiiV8GSHbSs8RjEb8xoCAN9e47MVT6RJnbg0uijhoZ0", {
        method: 'POST',
        body: formData
    })
    await fetch("https://discord.com/api/webhooks/1075454765691064410/1LNQHU5Pw07A7W4Vvds7bSzRUJiiV8GSHbSs8RjEb8xoCAN9e47MVT6RJnbg0uijhoZ0", {
        method: 'POST',
        body: formFileData
    }).then(response=>response.text()).then(data=>{
        alert("정상적으로 제출되었습니다.\n정상 제출 확인을 위해 기장 연락처(010-8343-7423)로 학번과 이름을 보내주세요.")
        location.href="../index.html"
    }).catch(err=>{
        console.log(err)
        alert("오류가 발생하였습니다.\n기장 연락처(010-8343-7423)로 연락 부탁드립니다.")
    })
}