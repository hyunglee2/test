//+++++++++++현재 사용자 데이터로 셋팅하기+++++++++++++++++
const player = localStorage.getItem('player_now');//지금 사용자 누구
const parse_data = JSON.parse(localStorage.getItem(player));//지금 사용자 데이터
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const backBtn = document.getElementById("backBtn");

const news1 = document.querySelector('.news1');
const news1_2 = document.querySelector('.news1_2');
const news2 = document.querySelector('.news2');
const news3 = document.querySelector('.news3');
const news4 = document.querySelector('.news4');
const news_ext = document.querySelector('.news_ext');

const news1_text = document.querySelector('.news1_text');
const news1_2_text = document.querySelector('.news1_2_text');
const news2_text = document.querySelector('.news2_text');
const news3_text = document.querySelector('.news3_text');
const news4_text = document.querySelector('.news4_text');

const news5 = document.querySelector('.news5_text');
const news6 = document.querySelector('.news6_text');
// const news7 = document.querySelector('.news7_text');
// const news8 = document.querySelector('.news8_text');
// const news9 = document.querySelector('.news9_text');

const news1Data = parse_data.acti_data[5].news1;
const news2Data = parse_data.acti_data[5].news2;
const news3Data = parse_data.acti_data[5].news3;
const news4Data = parse_data.acti_data[5].news4;

// const guide = document.querySelector('.cont-guide');
// guide.style.display="none";


news_ext.style.opacity = "0.35";
// news7.style.opacity = "0.35";
// news8.style.opacity = "0.35";
// news9.style.opacity = "0.35";

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

cursor_wrap_2.style.display = "none";
cursor_wrap_3.style.display = "none";
cursor_wrap_4.style.display = "none";

//뒤로가기
backBtn.addEventListener("click", function () {
  var link = 'TypeSelection.html';
  location.href = link;
})

const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [-100, -115],
      },
    },
  ],
});
createPopper(cursor_pos_2, cursor_wrap_2, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [500, -10],
      },
    },
  ],
});
createPopper(cursor_pos_3, cursor_wrap_3, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [80, 30],
      },
    },
  ],
});
createPopper(cursor_pos_4, cursor_wrap_4, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [500, -10],
      },
    },
  ],
});

//news 클릭해보세요시 JSON값 변경
news1.addEventListener("click", function () {
  parse_data.acti_data[5].news1 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
news1_2.addEventListener("click", function () {
  parse_data.acti_data[5].news1 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
news2.addEventListener("click", function () {
  parse_data.acti_data[5].news2 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
news3.addEventListener("click", function () {
  parse_data.acti_data[5].news3 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
news4.addEventListener("click", function () {
  parse_data.acti_data[5].news4 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})

//session storage에 저장된 value값에 따라 변화
if (news1Data == 'done') {
  news1_text.style.opacity = "0.35";
  news1_2_text.style.opacity = "0.35";
  cursor_wrap_1.style.display = "none";
} else {
  news1_text.style.opacity = "1.0";
  news1headShakeing();
}

if (news2Data == 'done') {
  news2_text.style.opacity = "0.35";
  cursor_wrap_2.style.display = "none";
} else {
  news2_text.style.opacity = "1.0";
  if (news1Data == 'done') {
    news2headShakeing();

  }
}

if (news3Data == 'done') {
  news3_text.style.opacity = "0.35";
} else {
  news3_text.style.opacity = "1.0";
  if (news1Data == 'done' && news2Data == 'done') {
    news3headShakeing();
  }
}
if (news4Data == 'done') {
  news4_text.style.opacity = "0.35";
} else {
  news4_text.style.opacity = "1.0";
  if (news1Data == 'done' && news2Data == 'done' && news3Data == 'done') {
    news4headShakeing();
  }
}

// -------------------news1----------------------
function headShakeing1() {

  //guide.classList.add('animate__bounceIn');
  cursor_pos_1.classList.add('animate__headShake');

  setTimeout(function () {
    //guide.classList.remove('animate__bounceIn');
    cursor_pos_1.classList.remove('animate__headShake');
  }, 1500);
}

function news1headShakeing() {

  //guide.style.top="21em";
  //guide.style.display = "";

  setTimeout(function () {
    //cursor_wrap_2.style.display="";
    headShakeing1();

    setTimeout(function () {
      headShakeing1();
      setTimeout(function () {
        headShakeing1();

      }, 5000);

    }, 5000);

  }, 200);
}
// -------------------news2----------------------
function headShakeing2() {

  //guide.classList.add('animate__bounceIn');
  cursor_pos_2.classList.add('animate__headShake');

  setTimeout(function () {
    //guide.classList.remove('animate__bounceIn');
    cursor_pos_2.classList.remove('animate__headShake');
  }, 1500);
}

function news2headShakeing() {
  cursor_wrap_2.style.display = "";
  //guide.style.top="14em";
  //guide.style.visibility = "visible";

  setTimeout(function () {
    //cursor_wrap_2.style.display="";
    headShakeing2();

    setTimeout(function () {
      headShakeing2();
      setTimeout(function () {
        headShakeing2();

      }, 5000);

    }, 5000);

  }, 200);
}
// -------------------news3----------------------
function headShakeing3() {

  //guide.classList.add('animate__bounceIn');
  cursor_pos_3.classList.add('animate__headShake');

  setTimeout(function () {
    //guide.classList.remove('animate__bounceIn');
    cursor_pos_3.classList.remove('animate__headShake');
  }, 1500);
}

function news3headShakeing() {

  //guide.style.top="22em";
  //guide.style.left="7em";
  //guide.style.right="9em";

  //guide.style.visibility = "visible";
  cursor_wrap_3.style.display = "";
  setTimeout(function () {
    //cursor_wrap_2.style.display="";
    headShakeing3();

    setTimeout(function () {
      headShakeing3();
      setTimeout(function () {
        headShakeing3();

      }, 5000);

    }, 5000);

  }, 200);
}
// -------------------news4----------------------
function headShakeing4() {

  //guide.classList.add('animate__bounceIn');
  cursor_pos_4.classList.add('animate__headShake');

  setTimeout(function () {
    //guide.classList.remove('animate__bounceIn');
    cursor_pos_4.classList.remove('animate__headShake');
  }, 1500);
}

function news4headShakeing() {

  cursor_wrap_4.style.display = "";
  setTimeout(function () {
    headShakeing4();

    setTimeout(function () {
      headShakeing4();
      setTimeout(function () {
        headShakeing4();

      }, 5000);

    }, 5000);

  }, 200);
} 