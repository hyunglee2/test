const cursor_wrap = document.querySelector('.cursor_wrap');
const guide_wrap = document.querySelector('.guide_wrap');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const guide_wrap_2 = document.querySelector('.guide_wrap_2');
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const div_wrap = document.querySelector('.div_wrap');
const div_wrap2 = document.querySelector('.div_wrap2');
const player = localStorage.getItem('player_now');

const talk_main = document.querySelector('.talk_main');

const bubble = document.querySelector('.bubble');
const here = document.querySelector('.here');
const bubble1 = document.getElementById("bubble1");
const bubble2 = document.getElementById("bubble2");
const bubble3 = document.getElementById("bubble3");
const bubble4 = document.getElementById("bubble4");
const guide = document.getElementById("guide1");
const guide2 = document.getElementById("guide2");
const container = document.querySelector('.container');

const factcheck_modal = document.querySelector('.factcheck_modal_1');
const factcheck_modal_2 = document.querySelector('.factcheck_modal_2');
const modal2 = document.querySelector('.modal2');

const modal = document.querySelector('.modal1');
const modal1_2 = document.querySelector('.modal1_2');


document.getElementById("factcheck_modal").style.display = "none";
document.getElementById("modal1").style.display = "none";
factcheck_modal_2.style.display = "none";
modal1_2.style.display = "none";
modal2.style.display = "none";
// factcheck_modal_2.style.top="50%";
// factcheck_modal_2.style.left="50%";


// guide.style.right = '-20%';

// document.getElementById("factcheck_modal").style.display = "none";
// document.getElementById("modal1").style.display = "none";
// document.getElementById("modal2").style.display = "none";
div_wrap.style.display = "none";
cursor_wrap.style.display = "none";
bubble1.style.display = "none";
bubble2.style.display = "none";
bubble3.style.display = "none";
bubble4.style.display = "none";

bubble.innerText = "서울지검 김규범 검사입니다." + '\n' + "금융 사기단을 검거하여 조사 중인데, " + player + " 님 명의 계좌가 범행에 사용한 것으로 확인되어 피해자 50여 명이 고소한 상태입니다.";

//뒤로가기
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function () {
    var link = 'TalkList.html';
    location.href = link;
})

//자동 스크롤
function scrollToBottom() {
    talk_main.scrollTop = talk_main.scrollHeight;
}

//popper
const { createPopper } = Popper;
createPopper(bubble, cursor, {
    placement: 'right',
});
createPopper(cursor, div_wrap, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-70, 20],
            },
        },
    ],
});

createPopper(bubble4, cursor_wrap_2, {
    placement: 'right',
});
createPopper(cursor2, div_wrap2, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-70, 20],
            },
        },
    ],
});

//채팅 나타나기 (0.8초 뒤 실행)
setTimeout(function () {
    cursor_wrap.style.display = "";
    bubble1.style.display = "";
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
}, 800);


function FactCheck2() {
    setTimeout(function () {
        bubble2.style.display = "";
        scrollToBottom();
        setTimeout(function () {
            bubble3.style.display = "";
            scrollToBottom();
            setTimeout(function () {
                bubble4.style.display = "";
                scrollToBottom();
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
            }, 800);
        }, 800);
    }, 800);
}



//반짝반짝
function flashing() {

    if (container.style.opacity != "0.2") {
        //guide.classList.add('animate__headShake');
        bubble1.classList.add('animate__headShake');
        setTimeout(function () {
            //guide.classList.remove('animate__headShake');
            bubble1.classList.remove('animate__headShake')
        }, 1500);
    } else {

        guide.style.display = "none";

    }
}
function flashing2() {
    //div_wrap2.style.display = "";
    //div_wrap2.classList.add('animate__headShake');
    bubble3.classList.add('animate__headShake');
    setTimeout(function () {
        //div_wrap2.classList.remove('animate__headShake');
        bubble3.classList.remove('animate__headShake')
    }, 1500);
}
function test() {
    const elem3 = document.querySelector('#factcheck_modal');
    elem3.classList.add('animate__bounceInUp');
}
function test2() {
    const elem4 = document.querySelector('#modal1');
    elem4.classList.add('animate__animate__fadeIn');
}
function anim2() {
    factcheck_modal_2.classList.add('animate__bounceInUp');
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

//사용자 동작이벤트에 따라 '팩트체크' 모달 활성화
function factcheck_intro() {
    cursor.style.display = "none";
    bubble1.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal.style.display = "";
    test();
    setTimeout(function () {
        FCanim();
    }, 300);
}

//사용자 동작이벤트(신분증 클릭해보세요)에 따라 '팩트체크' 모달 활성화
function factcheck_intro2() {
    //guide.style.display = "none";
    container.style.opacity = "0.2";
    factcheck_modal_2.style.display = "";
    anim2();
    setTimeout(function () {
        FCanim2();
    }, 300);
}

function entry() {

    document.getElementById("factcheck_modal").style.display = "none";
    document.getElementById("modal1").style.display = "";
    test2();

}
function next() {

    document.getElementById("modal1").style.display = "none";
    modal1_2.style.display = "";

}
function ok() {
    modal1_2.style.display = "none";
    container.style.opacity = "1.0";
    FactCheck2();

}
function entry_2() {
    factcheck_modal_2.style.display = "none";
    modal2.style.display = "";
    test2();

}
function ok_2() {
    var link = 'PSFakeSite.html';
    location.href = link;
}
