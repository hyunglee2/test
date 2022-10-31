
const inputBtn = document.getElementById("inputBtn");
const userName = document.getElementById("userName");


let text = '{"acti_data":[' +
    '{"talk1":"","talk2":"","talk3":"" },' +
    '{"msg1":"","msg2":"","msg3":"" },' +
    '{"cafe1":"","cafe2":"","cafe3":""},' +
    '{"blog1":"","blog2":"","blog3":"" },' +
    '{"video1":"","video2":"","video3":"","video4":"" },' +
    '{"news1":"","news2":"","news3":"","news4":"" },'+
    '{"play_time":"" }  ]} ';

//const get_data = JSON.parse(localStorage.getItem('player'));

inputBtn.addEventListener("click", function () {
    const inputName = userName.value;

    if (inputName == "") {
        alert("이름을 입력해 주세요!")
        return false;
    } else {

        localStorage["player_now"] = inputName;
        localStorage[inputName] = text;
        //const player = localStorage.getItem("player_now");
        //const test_data = localStorage.getItem('player');
        timeInput();
        location.href = "TypeSelection.html";
    }
})

// 엔터키 처리 이벤트
userName.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        inputBtn.click();
    }
});

// timestamp
const time = Date.now();
const date = new Date(time); //타임스탬프를 인자로 받아 Date 객체 생성
/* 생성한 Date 객체에서 년, 월, 일, 시, 분을 각각 문자열 곧바로 추출 */
var year = date.getFullYear().toString().slice(-2); //년도 뒤에 두자리
var month = ("0" + (date.getMonth() + 1)).slice(-2); //월 2자리 (01, 02 ... 12)
var day = ("0" + date.getDate()).slice(-2); //일 2자리 (01, 02 ... 31)
var hour = ("0" + date.getHours()).slice(-2); //시 2자리 (00, 01 ... 23)
var minute = ("0" + date.getMinutes()).slice(-2); //분 2자리 (00, 01 ... 59)
//var second = ("0" + date.getSeconds()).slice(-2); //초 2자리 (00, 01 ... 59)
var returnDate = year + "년" + month + "월" + day + "일 " + hour + ":" + minute ;

//console.log(returnDate); //타임스탬프 콘솔로 확인

function timeInput(){
//타임스탬프 저장
const player = localStorage.getItem('player_now');//지금 사용자 누구
const parse_data = JSON.parse(localStorage.getItem(player));//지금 사용자 데이터
const timeData = parse_data.acti_data[6].play_time;
parse_data.acti_data[6].play_time = returnDate;
localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
}