//+++++++++++현재 사용자 데이터로 셋팅하기+++++++++++++++++
const player = localStorage.getItem('player_now');//지금 사용자 누구
const parse_data = JSON.parse(localStorage.getItem(player));//지금 사용자 데이터
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const backBtn = document.getElementById("backBtn");

const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');
const msg3 = document.querySelector('.msg3');

const msg1Data = parse_data.acti_data[1].msg1;
const msg2Data = parse_data.acti_data[1].msg2;
const msg3Data = parse_data.acti_data[1].msg3;


//채팅방 상단 이름표기
document.getElementById('user-name-field').innerText = player + "님의 메시지";

//뒤로가기
backBtn.addEventListener("click", function () {
  var link = 'TypeSelection.html';
  location.href = link;
})

//msg 클릭해보세요시 JSON값 변경
msg1.addEventListener("click", function () {
  parse_data.acti_data[1].msg1 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
msg2.addEventListener("click", function () {
  parse_data.acti_data[1].msg2 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
msg3.addEventListener("click", function () {
  parse_data.acti_data[1].msg3 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})

//localStorage에 저장
localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장

//local storage에 저장된 value값에 따라 변화
// n번째 채팅 div 클릭해보세요시 키값 'msgn'과 value 'done' session storage에 저장 
if (msg1Data == 'done') {
  msg1.style.opacity = "0.35";
  document.getElementById("msg1-badge").style.display = "none";
} else {
  msg1.style.opacity = "1.0";
  document.getElementById("msg1-badge").style.display = "";
}
if (msg2Data == 'done') {
  msg2.style.opacity = "0.35";
  document.getElementById("msg2-badge").style.display = "none";
} else {
  msg2.style.opacity = "1.0";
  document.getElementById("msg2-badge").style.display = "";
}
if (msg3Data == 'done') {
  msg3.style.opacity = "0.35";
  document.getElementById("msg3-badge").style.display = "none";
} else {
  msg3.style.opacity = "1.0";
  document.getElementById("msg3-badge").style.display = "";
}