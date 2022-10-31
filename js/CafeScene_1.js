const backBtn = document.getElementById("backBtn");

const container = document.querySelector('.container');
const reactions = document.querySelector('.reactions');
const share = document.querySelector('.share');

const factcheck_modal = document.querySelector('.factcheck_modal_1');
const factcheck_modal_2 = document.querySelector('.factcheck_modal_2');
const factcheck_modal_3 = document.querySelector('.factcheck_modal_3');
const factcheck_modal_4 = document.querySelector('.factcheck_modal_4');
const factcheck_modal_5 = document.querySelector('.factcheck_modal_5');

const cafe_main = document.querySelector('.cafe_main');

const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');

factcheck_modal.style.display = "none";
factcheck_modal_2.style.display = "none";
const modal2_1 = document.querySelector('.modal2_1');
const modal2_2 = document.querySelector('.modal2_2');
const modal3_1 = document.querySelector('.modal3_1');
const modal3_2 = document.querySelector('.modal3_2');
const modal4_1 = document.querySelector('.modal4_1');
const modal4_2 = document.querySelector('.modal4_2');
const modal5_1 = document.querySelector('.modal5_1');

modal2_1.style.display = "none";
modal3_1.style.display = "none";
modal3_2.style.display = "none";
modal4_1.style.display = "none";
modal4_2.style.display = "none";
modal5_1.style.display = "none";

modal1.style.display = "none";
factcheck_modal_2.style.display = "none";
factcheck_modal_3.style.display = "none";
factcheck_modal_4.style.display = "none";
factcheck_modal_5.style.display = "none";

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');

cursor_wrap_1.style.zIndex = "20";
cursor_wrap_2.style.zIndex = "20";
cursor_wrap_3.style.zIndex = "20";
cursor_wrap_4.style.zIndex = "20";
cursor_wrap_5.style.zIndex = "50";

cursor_wrap_2.style.visibility = "hidden";
cursor_wrap_3.style.visibility = "hidden";
cursor_wrap_4.style.visibility = "hidden";
cursor_wrap_5.style.visibility = "hidden";



//뒤로가기
backBtn.addEventListener("click", function () {
    var link = 'CafeList.html';
    location.href = link;
})

//한번에 쭉 내려가게 하기 (좀 더 부드러움)
function scrollToMiddle() {
    cafe_main.scrollTop = cafe_main.scrollHeight *0.2;
}
function scrollToBottom() {
    cafe_main.scrollTop = cafe_main.scrollHeight;
}

const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'left',
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
                offset: [0,-70],
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
                offset: [-50,-50],
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
                offset: [30,-50],
            },
        },
    ],
});

createPopper(cursor_pos_5, cursor_wrap_5, {
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,0],
            },
        },
    ],
});

//페이지 로드시 동작 - 팩트체크1 유도
setTimeout(function () {
    flashing();
    setTimeout(function () {
        flashing();
        setTimeout(function () {
            flashing();
            setTimeout(function () {
                flashing();
            }, 5000);
        }, 5000);
    }, 3000);
}, 100);

//팩트체크2 유도
function check2() {
    cursor_wrap_2.style.visibility = "visible";
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
    }, 400);
}

//팩트체크3 유도
function check3() {
    scrollToMiddle();
    cursor_wrap_3.style.visibility = "visible";
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
    }, 800);
}

//팩트체크4 유도
function check4() {
    scrollToBottom();
    cursor_wrap_4.style.visibility = "visible";
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
    }, 800);
}

//팩트체크5 유도
function check5() {
    cursor_wrap_5.style.visibility = "visible";
    setTimeout(function () {
        flashing5();
        setTimeout(function () {
            flashing5();
            setTimeout(function () {
                flashing5();
                setTimeout(function () {
                    flashing5();
                }, 5000);
            }, 5000);
        }, 3000);
    }, 800);
}


//애니메이션 1
function flashing() {

    cursor_pos_1.classList.add('animate__headShake');

    setTimeout(function () {

        cursor_pos_1.classList.remove('animate__headShake');
    }, 1500);
}
//애니메이션2
function flashing2() {

    cursor_pos_2.classList.add('animate__headShake');
    setTimeout(function () {

        cursor_pos_2.classList.remove('animate__headShake');
    }, 1500);
}

//말풍선 애니메이션3
function flashing3() {

    cursor_pos_3.classList.add('animate__headShake');

    setTimeout(function () {

        cursor_pos_3.classList.remove('animate__headShake');

    }, 1500);
}

//말풍선 애니메이션4
function flashing4() {

    cursor_pos_4.classList.add('animate__headShake');

    setTimeout(function () {

        cursor_pos_4.classList.remove('animate__headShake');
    }, 1500);
}

//말풍선 애니메이션5
function flashing5() {

    cursor_pos_5.classList.add('animate__headShake');

    setTimeout(function () {

        cursor_pos_5.classList.remove('animate__headShake');
    }, 1500);
}

function anim() {
    factcheck_modal.classList.add('animate__bounceInUp');
}
function anim2() {
    factcheck_modal_2.classList.add('animate__bounceInUp');
}
function anim3() {
    factcheck_modal_3.classList.add('animate__bounceInUp');
}
function anim4() {
    factcheck_modal_4.classList.add('animate__bounceInUp');
}
function anim5() {
    factcheck_modal_5.classList.add('animate__bounceInUp');
}


function FCanim() {
    const FC1 = document.getElementById("FC1");
    const FC2 = document.getElementById("FC2");
    const FC3 = document.getElementById("FC3");
    const FC4 = document.getElementById("FC4");
    setTimeout(function () {
        FC1.classList.add('animate__bounceIn');
        setTimeout(function () {
            FC2.classList.add('animate__bounceIn');
            setTimeout(function () {
                FC3.classList.add('animate__bounceIn');
                setTimeout(function () {
                    FC4.classList.add('animate__bounceIn');
                }, 300);
            }, 300);
        }, 300);
    }, 300);
}
function FCanim2() {
    const FC1 = document.getElementById("FC1_2");
    const FC2 = document.getElementById("FC2_2");
    const FC3 = document.getElementById("FC3_2");
    const FC4 = document.getElementById("FC4_2");
    setTimeout(function () {
        FC1.classList.add('animate__bounceIn');
        setTimeout(function () {
            FC2.classList.add('animate__bounceIn');
            setTimeout(function () {
                FC3.classList.add('animate__bounceIn');
                setTimeout(function () {
                    FC4.classList.add('animate__bounceIn');
                }, 300);
            }, 300);
        }, 300);
    }, 300);
}

function FCanim3() {
    const FC1 = document.getElementById("FC1_3");
    const FC2 = document.getElementById("FC2_3");
    const FC3 = document.getElementById("FC3_3");
    const FC4 = document.getElementById("FC4_3");
    setTimeout(function () {
        FC1.classList.add('animate__bounceIn');
        setTimeout(function () {
            FC2.classList.add('animate__bounceIn');
            setTimeout(function () {
                FC3.classList.add('animate__bounceIn');
                setTimeout(function () {
                    FC4.classList.add('animate__bounceIn');
                }, 300);
            }, 300);
        }, 300);
    }, 300);
}
function FCanim4() {
    const FC1 = document.getElementById("FC1_4");
    const FC2 = document.getElementById("FC2_4");
    const FC3 = document.getElementById("FC3_4");
    const FC4 = document.getElementById("FC4_4");
    setTimeout(function () {
        FC1.classList.add('animate__bounceIn');
        setTimeout(function () {
            FC2.classList.add('animate__bounceIn');
            setTimeout(function () {
                FC3.classList.add('animate__bounceIn');
                setTimeout(function () {
                    FC4.classList.add('animate__bounceIn');
                }, 300);
            }, 300);
        }, 300);
    }, 300);
}
function FCanim5() {
    const FC1 = document.getElementById("FC1_5");
    const FC2 = document.getElementById("FC2_5");
    const FC3 = document.getElementById("FC3_5");
    const FC4 = document.getElementById("FC4_5");
    setTimeout(function () {
        FC1.classList.add('animate__bounceIn');
        setTimeout(function () {
            FC2.classList.add('animate__bounceIn');
            setTimeout(function () {
                FC3.classList.add('animate__bounceIn');
                setTimeout(function () {
                    FC4.classList.add('animate__bounceIn');
                }, 300);
            }, 300);
        }, 300);
    }, 300);
}

//사용자 동작이벤트(날짜 클릭해보세요)에 따라 '팩트체크' 모달 활성화
function factcheck_intro_1() {
    cursor_wrap_1.style.display = "none";
    cursor_pos_1.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal.style.display = "";
    anim();
    setTimeout(function () {
        FCanim();
    }, 300);
}

//사용자 동작이벤트(기자 클릭해보세요)에 따라 '팩트체크' 모달 활성화
function factcheck_intro_2() {
    cursor_wrap_2.style.display = "none";
    cursor_pos_2.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal_2.style.display = "";
    anim2();
    setTimeout(function () {
        FCanim2();
    }, 300);
}

//사용자 동작이벤트(내용 클릭)에 따라 '팩트체크' 모달 활성화
function factcheck_intro_3() {
    cursor_wrap_3.style.display = "none";
    cursor_pos_3.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal_3.style.display = "";
    anim3();
    setTimeout(function () {
        FCanim3();
    }, 300);
}

//사용자 동작이벤트(저작권? 클릭)에 따라 '팩트체크' 모달 활성화
function factcheck_intro_4() {
    cursor_wrap_4.style.display = "none";
    cursor_pos_4.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal_4.style.display = "";
    anim4();
    setTimeout(function () {
        FCanim4();
    }, 300);
}

//사용자 동작이벤트(저작권? 클릭)에 따라 '팩트체크' 모달 활성화
function factcheck_intro_5() {
    cursor_wrap_5_1.style.display = "none";
    cursor_pos_5_1.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal_5.style.display = "";
    anim5();
    setTimeout(function () {
        FCanim5();
    }, 300);
}

function entry_1() {
    factcheck_modal.style.display = "none";
    modal1.style.display = "";
}
function ok_1() {
    modal1.style.display = "none";
    container.style.opacity = "1.0";
    check2();
}

function entry_2() {
    factcheck_modal_2.style.display = "none";
    modal2_1.style.display = "";
}
function ok_2() {
    modal2_1.style.display = "none";
    container.style.opacity = "1.0";
    check3();
}

function entry_3() {
    factcheck_modal_3.style.display = "none";
    modal3_1.style.display = "";
}
function next_3() {
    modal3_1.style.display = "none";
    modal3_2.style.display = "";
}
function ok_3() {
    modal3_2.style.display = "none";
    container.style.opacity = "1.0";
    check4();
}

function entry_4() {
    factcheck_modal_4.style.display = "none";
    modal4_1.style.display = "";
}


function next_4() {
  modal4_1.style.display = "none";
  modal4_2.style.display = "";
}

function ok_4() {
    modal4_2.style.display = "none";
    container.style.opacity = "1.0";
    check5();
}

function entry_5() {
    factcheck_modal_5.style.display = "none";
    modal5_1.style.display = "";
}

function ok_5() {
    modal5_1.style.display = "none";
    container.style.opacity = "1.0";
    check6();
}

function paste() {
  share.classList.remove('animate__animated');
  container.style.opacity = "0.3";
  cursor_wrap_5.style.display = "none";
  // my_wrap.style.display = "";
  // cursor_pos_4_1.style.display = "none";

  setTimeout(function () {
      flashing5();
      setTimeout(function () {
          //guide2.style.display = "";
          flashing5();
          setTimeout(function () {
              flashing5();
          }, 5000);
      }, 5000);
  }, 1000);
}