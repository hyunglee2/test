//+++++++++++현재 사용자 데이터로 셋팅하기+++++++++++++++++
const player = localStorage.getItem('player_now');//지금 사용자 누구
const parse_data = JSON.parse(localStorage.getItem(player));//지금 사용자 데이터
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const backBtn = document.getElementById("backBtn");

const talk1 = document.querySelector('.talk1');
const talk2 = document.querySelector('.talk2');
const talk3 = document.querySelector('.talk3');

const talk1Data = parse_data.acti_data[0].talk1;
const talk2Data = parse_data.acti_data[0].talk2;
const talk3Data = parse_data.acti_data[0].talk3;


//채팅방 상단 이름표기
document.getElementById('user-name-field').innerText = player + "님의 채팅";

//뒤로가기
backBtn.addEventListener("click", function () {
  var link = 'TypeSelection.html';
  location.href = link;
})

//talk 클릭해보세요시 JSON값 변경
talk1.addEventListener("click", function () {
  parse_data.acti_data[0].talk1 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
talk2.addEventListener("click", function () {
  parse_data.acti_data[0].talk2 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
talk3.addEventListener("click", function () {
  parse_data.acti_data[0].talk3 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})

//localStorage에 저장
localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장

//local storage에 저장된 value값에 따라 변화
// n번째 채팅 div 클릭해보세요시 키값 'chatn'과 value 'done' session storage에 저장 
if (talk1Data == 'done') {
  talk1.style.opacity = "0.35";
  document.getElementById("chat1-badge").style.display = "none";
} else {
  talk1.style.opacity = "1.0";
  document.getElementById("chat1-badge").style.display = "";
}
if (talk2Data == 'done') {
  talk2.style.opacity = "0.35";
  document.getElementById("chat2-badge").style.display = "none";
} else {
  talk2.style.opacity = "1.0";
  document.getElementById("chat2-badge").style.display = "";
}
if (talk3Data == 'done') {
  talk3.style.opacity = "0.35";
  document.getElementById("chat3-badge").style.display = "none";
} else {
  talk3.style.opacity = "1.0";
  document.getElementById("chat3-badge").style.display = "";
}




