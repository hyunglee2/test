//+++++++++++현재 사용자 데이터로 셋팅하기+++++++++++++++++
const player = localStorage.getItem('player_now');//지금 사용자 누구
const parse_data = JSON.parse(localStorage.getItem(player));//지금 사용자 데이터
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const backBtn = document.getElementById("backBtn");

const post1 = document.querySelector('.post1');
const post2 = document.querySelector('.post2');
const post3 = document.querySelector('.post3');

const blog1Data = parse_data.acti_data[3].blog1;
const blog2Data = parse_data.acti_data[3].blog2;
const blog3Data = parse_data.acti_data[3].blog3;

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');

const cont1 = document.querySelector('.cont1');
const cont2 = document.querySelector('.cont2');
const cont3 = document.querySelector('.cont3');

cursor_wrap_2.style.display = "none";
cursor_wrap_3.style.display = "none";

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
        offset: [-100, 200],
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
        offset: [-100, 200],
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
        offset: [-100, 200],
      },
    },
  ],
});



//post 클릭해보세요시 JSON값 변경
post1.addEventListener("click", function () {
  parse_data.acti_data[3].blog1 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
post2.addEventListener("click", function () {
  parse_data.acti_data[3].blog2 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})
post3.addEventListener("click", function () {
  parse_data.acti_data[3].blog3 = 'done';
  localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장
})

//session storage에 저장된 value값에 따라 변화
if (blog1Data == 'done') {
  post1.style.opacity = "0.4";
  cursor_wrap_1.style.display = "none";
} else {
  post1.style.opacity = "1.0";
  post1Flashing();
}

if (blog2Data == 'done') {
  post2.style.opacity = "0.4";
  cursor_wrap_2.style.display = "none";
} else {
  post2.style.opacity = "1.0";
  if (blog1Data == 'done') {
    post2Flashing();
  }
}

if (blog3Data == 'done') {
  post3.style.opacity = "0.4";
  cursor_wrap_3.style.display = "none";
} else {
  post3.style.opacity = "1.0";
  if (blog1Data == 'done' && blog2Data == 'done') {
    post3Flashing();
  }
}




// -------------------post1----------------------
function flashing1() {


  cont1.classList.add('animate__headShake');

  setTimeout(function () {

    cont1.classList.remove('animate__headShake');
  }, 1500);
}

function post1Flashing() {



  setTimeout(function () {
    flashing1();

    setTimeout(function () {
      flashing1();

    }, 5000);

  }, 5000);
}

// -------------------post2----------------------
function flashing2() {


  cont2.classList.add('animate__headShake');

  setTimeout(function () {

    cont2.classList.remove('animate__headShake');
  }, 1500);
}

function post2Flashing() {

  cursor_wrap_2.style.display = "";

  setTimeout(function () {
    flashing2();

    setTimeout(function () {
      flashing2();

    }, 5000);

  }, 5000);
}

// -------------------post3----------------------
function flashing3() {


  cont3.classList.add('animate__headShake');

  setTimeout(function () {

    cont3.classList.remove('animate__headShake');
  }, 1500);
}

function post3Flashing() {

  cursor_wrap_3.style.display = "";

  setTimeout(function () {
    flashing3();

    setTimeout(function () {
      flashing3();

    }, 5000);

  }, 5000);
} 
