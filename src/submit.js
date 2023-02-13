async function submit() {
    if (idcheck() && namecheck() && telcheck() && checkSize()) {

    }
    else {
        return;
    }
    let content = {
        "embeds":
            [
                {
                    "title": document.getElementById("studentId").value + document.getElementById("name").value,
                    "fields": [
                        {
                            "name": "연락처",
                            "value": document.getElementById("tel").value
                        },
                        {
                            "name": "1. 컴퓨터 과학부 동아리에 지원하게 된 동기를 작성해주세요",
                            "value": "```" + document.getElementById("answer1").innerText + "```"
                        },
                        {
                            "name": "2. 본인이 생각하는 자신의 장점과 단점을 작성해주세요",
                            "value": "```" + document.getElementById("answer2").innerText + "```"
                        }
                    ],
                    "color": 5814783
                }
            ]
    };
    const formData = new FormData();
    formData.append('payload_json',JSON.stringify(content))
    for (let i = 0; i < document.getElementById('file').files.length; i++) {
        formData.append('file['+String(i)+']', document.getElementById('file').files[i]);
    }

    const response = await fetch("https://canary.discord.com/api/webhooks/1074543197704945705/To7RD6HWbeq_hetr-2ir1u5vbdRtEIpjGlqcqadPsNEibTj2drSzNXx9W49IIyakNqOE", {
        method: 'POST',
        body: formData
    }).then(response=>response.text()).then(data=>{
        alert("정상적으로 제출되었습니다.\n정상 제출 확인을 위해 기장 연락처(010-8343-7423)로 학번과 이름을 보내주세요.")
    }).catch(err=>{
        console.log(err)
        alert("오류가 발생하였습니다.\n기장 연락처(010-8343-7423)로 연락 부탁드립니다.")
    })
}