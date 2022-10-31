
//+++++++++++현재 사용자 데이터로 셋팅하기+++++++++++++++++
const player = localStorage.getItem('player_now');//지금 사용자 누구
const parse_data = JSON.parse(localStorage.getItem(player));//지금 사용자 데이터
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const backBtn = document.getElementById("backBtn");

const video1 = document.querySelector('.video1');
const video2 = document.querySelector('.video2');
const video3 = document.querySelector('.video3');
const video4 = document.querySelector('.video4');

const video1_title = document.querySelector('.video1_title');
const video2_title = document.querySelector('.video2_title');
const video3_title = document.querySelector('.video3_title');
const video4_title = document.querySelector('.video4_title');

const video1Data = parse_data.acti_data[4].video1;
const video2Data = parse_data.acti_data[4].video2;
const video3Data = parse_data.acti_data[4].video3;
const video4Data = parse_data.acti_data[4].video4;

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');

cursor_wrap_1.style.zIndex = "20";
cursor_wrap_2.style.zIndex = "20";
cursor_wrap_3.style.zIndex = "20";
cursor_wrap_4.style.zIndex = "20";

cursor_wrap_1.style.display = "none";
cursor_wrap_2.style.display = "none";
cursor_wrap_3.style.display = "none";
cursor_wrap_4.style.display = "none";

//뒤로가기
backBtn.addEventListener("click", function () {
  var link = 'TypeSelection.html';
  location.href = link;
})

//popper
const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-20,-100],
            },
        },
    ],
});
createPopper(cursor_pos_2, cursor_wrap_2, {
  placement: 'right',
  modifiers: [
      {
          name: 'offset',
          options: {
              offset: [-20,-100],
          },
      },
  ],
});

createPopper(cursor_pos_3, cursor_wrap_3, {
  placement: 'right',
  modifiers: [
      {
          name: 'offset',
          options: {
              offset: [-20,-100],
          },
      },
  ],
});

createPopper(cursor_pos_4, cursor_wrap_4, {
  placement: 'right',
  modifiers: [
      {
          name: 'offset',
          options: {
              offset: [-20,-100],
          },
      },
  ],
});

//video 클릭해보세요시 JSON값 변경
video1.addEventListener("click", function () {
  parse_data.acti_data[4].video1 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
video2.addEventListener("click", function () {
  parse_data.acti_data[4].video2 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
video3.addEventListener("click", function () {
  parse_data.acti_data[4].video3 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
video4.addEventListener("click", function () {
  parse_data.acti_data[4].video4 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})

//session storage에 저장된 value값에 따라 변화
if (video1Data == 'done') {
  video1.style.opacity = "0.3";
} else {
  video1.style.opacity = "1.0";
  video1Flashing();
}

if (video2Data == 'done') {
  video2.style.opacity = "0.3";
} else {
  video2.style.opacity = "1.0";
  if (video1Data == 'done') {
    video2Flashing();
  }
}

if (video3Data == 'done') {
  video3.style.opacity = "0.3";
} else {
  video3.style.opacity = "1.0";
  if (video1Data == 'done' && video2Data == 'done') {
    video3Flashing();
  }
}
if (video4Data == 'done') {
  video4.style.opacity = "0.3";
} else {
  video4.style.opacity = "1.0";
  if (video1Data == 'done' && video2Data == 'done' && video3Data == 'done') {
    video4Flashing();
  }
}




// -------------------video1----------------------
function flashing1() {
  video1_title.classList.add('animate__headShake');

  setTimeout(function () {
    video1_title.classList.remove('animate__headShake');
  }, 1500);
}

function video1Flashing() {
  cursor_wrap_1.style.display = "";
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

// -------------------video2----------------------
function flashing2() {
  video2_title.classList.add('animate__headShake');
  setTimeout(function () {
    video2_title.classList.remove('animate__headShake');
  }, 1500);
}

function video2Flashing() {
  cursor_wrap_2.style.display = "";
  cursor_wrap_1.style.display = "none";

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

// -------------------video3----------------------
function flashing3() {
  video3_title.classList.add('animate__headShake');
  setTimeout(function () {
    video3_title.classList.remove('animate__headShake');
  }, 1500);
}

function video3Flashing() {
  cursor_wrap_3.style.display = "";
  cursor_wrap_2.style.display = "none";
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

// -------------------video4----------------------
function flashing4() {
  video4_title.classList.add('animate__headShake');
  setTimeout(function () {
    video4_title.classList.remove('animate__headShake');
  }, 1500);
}

function video4Flashing() {
  cursor_wrap_4.style.display = "";
  cursor_wrap_3.style.display = "none";
  setTimeout(function () {
    flashing4();
    setTimeout(function () {
        flashing4();
        setTimeout(function () {
            flashing4();
            setTimeout(function () {
                flashing4();
            }, 5000);
        }, 5000);
    }, 3000);
  }, 100);
}