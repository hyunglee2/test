const savedName = sessionStorage.getItem("userName");
const chat1Data = sessionStorage.getItem("chat1");
const chat2Data = sessionStorage.getItem("chat2");
const chat3Data = sessionStorage.getItem("chat3");
const chat4Data = sessionStorage.getItem("chat4");
const chat5Data = sessionStorage.getItem("chat5");

//채팅방 상단 이름표기
document.getElementById('user-name-field').innerText = savedName + "님의 채팅방";

//뒤로가기
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function () {
  //histroy.go(-1);
  var link = 'TypeSelection.html';
  location.href = link;
})

// n번째 채팅 div 클릭해보세요시 키값 'chatn'과 value 'done' session storage에 저장 
function chat1() {
  sessionStorage["chat1"] = 'done';
}
function chat2() {
  sessionStorage["chat2"] = 'done';
}
function chat3() {
  sessionStorage["chat3"] = 'done';
}
function chat4() {
  sessionStorage["chat4"] = 'done';
}
function chat5() {
  sessionStorage["chat5"] = 'done';
}

//session storage에 저장된 value값에 따라뱃지 hidden/visible
if (chat1Data == 'done') {
  document.getElementById("chat1-badge").style.display = "none";
} else {
  document.getElementById("chat1-badge").style.display = "";
}
if (chat2Data == 'done') {
  document.getElementById("chat2-badge").style.display = "none";
} else {
  document.getElementById("chat2-badge").style.display = "";
}
if (chat3Data == 'done') {
  document.getElementById("chat3-badge").style.display = "none";
} else {
  document.getElementById("chat3-badge").style.display = "";
}
if (chat4Data == 'done') {
  document.getElementById("chat4-badge").style.display = "none";
} else {
  document.getElementById("chat4-badge").style.display = "";
}
if (chat5Data == 'done') {
  document.getElementById("chat5-badge").style.display = "none";
} else {
  document.getElementById("chat5-badge").style.display = "";
}
