
//+++++++++++현재 사용자 데이터로 셋팅하기+++++++++++++++++
const player = localStorage.getItem('player_now');//지금 사용자 누구
const parse_data = JSON.parse(localStorage.getItem(player));//지금 사용자 데이터
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const backBtn = document.getElementById("backBtn");

const post1 = document.querySelector('.post1');
const post2 = document.querySelector('.post2');
const post3 = document.querySelector('.post3');

const post1_title = document.querySelector('.post1_title');
const post2_title = document.querySelector('.post2_title');
const post3_title = document.querySelector('.post3_title');

const cafe1Data = parse_data.acti_data[2].cafe1;
const cafe2Data = parse_data.acti_data[2].cafe2;
const cafe3Data = parse_data.acti_data[2].cafe3;

const cursor_wrap1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap3 = document.querySelector('.cursor_wrap_3');
const cursor = document.querySelector('.cursor');
cursor_wrap1.style.right = '8em';
cursor_wrap2.style.right = '8em';
cursor_wrap3.style.right = '8em';

cursor_wrap1.style.display = "none";
cursor_wrap2.style.display = "none";
cursor_wrap3.style.display = "none";

//뒤로가기
backBtn.addEventListener("click", function () {
  var link = 'TypeSelection.html';
  location.href = link;
})


//post 클릭해보세요시 JSON값 변경
post1.addEventListener("click", function () {
  parse_data.acti_data[2].cafe1 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
post2.addEventListener("click", function () {
  parse_data.acti_data[2].cafe2 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
post3.addEventListener("click", function () {
  parse_data.acti_data[2].cafe3 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})

//session storage에 저장된 value값에 따라 변화
if (cafe1Data == 'done') {
  post1.style.opacity = "0.3";
} else {
  post1.style.opacity = "1.0";
  post1Flashing();
}

if (cafe2Data == 'done') {
  post2.style.opacity = "0.3";
} else {
  post2.style.opacity = "1.0";
  if (cafe1Data == 'done') {
    post2Flashing();
  }
}

if (cafe3Data == 'done') {
  post3.style.opacity = "0.3";
} else {
  post3.style.opacity = "1.0";
  if (cafe1Data == 'done' && cafe2Data == 'done') {
    post3Flashing();
  }
}




// -------------------post1----------------------
function flashing1() {
  post1_title.classList.add('animate__headShake');

  setTimeout(function () {
    post1_title.classList.remove('animate__headShake');
  }, 1500);
}

function post1Flashing() {
  cursor_wrap1.style.display = "";
  setTimeout(function () {
    flashing1();
    setTimeout(function () {
        flashing1();
        setTimeout(function () {
            flashing1();
            setTimeout(function () {
                flashing1();
            }, 5000);
        }, 5000);
    }, 3000);
  }, 100);
}

// -------------------post2----------------------
function flashing2() {
  post2_title.classList.add('animate__headShake');
  setTimeout(function () {
    post2_title.classList.remove('animate__headShake');
  }, 1500);
}

function post2Flashing() {
  cursor_wrap2.style.display = "";
  cursor_wrap1.style.display = "none";

  setTimeout(function () {
    flashing2();
    setTimeout(function () {
        flashing2();
        setTimeout(function () {
            flashing2();
            setTimeout(function () {
                flashing2();
            }, 5000);
        }, 5000);
    }, 3000);
  }, 100);
}

// -------------------post3----------------------
function flashing3() {
  post3_title.classList.add('animate__headShake');
  setTimeout(function () {
    post3_title.classList.remove('animate__headShake');
  }, 1500);
}

function post3Flashing() {
  cursor_wrap3.style.display = "";
  cursor_wrap2.style.display = "none";
  setTimeout(function () {
    flashing3();
    setTimeout(function () {
        flashing3();
        setTimeout(function () {
            flashing3();
            setTimeout(function () {
                flashing3();
            }, 5000);
        }, 5000);
    }, 3000);
  }, 100);
}

