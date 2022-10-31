const talk_main = document.querySelector('.talk_main');

const name_fc = document.querySelector('.name_fc');
const talk_profile_fc = document.querySelector('.talk_profile_fc');
const vaccine = document.querySelector('.vaccine');
const prev_img = document.querySelector('.prev_img');
const move_to_site = document.querySelector('.move_to_site');

const bubble1 = document.getElementById("bubble1");
const bubble2 = document.getElementById("bubble2");
const bubble3 = document.getElementById("bubble3");
const bubble4 = document.getElementById("bubble4");
const bubble5 = document.getElementById("bubble5");
const bubble6 = document.getElementById("bubble6");
const bubble7 = document.getElementById("bubble7");
const bubble8 = document.getElementById("bubble8");
//const guide = document.getElementById("guide");
const container = document.querySelector('.container');

const factcheck_modal = document.querySelector('.factcheck_modal_1');
const factcheck_modal_2 = document.querySelector('.factcheck_modal_2');
const factcheck_modal_3 = document.querySelector('.factcheck_modal_3');
const factcheck_modal_4 = document.querySelector('.factcheck_modal_4');


bubble1.style.display = "none";
bubble2.style.display = "none";
bubble3.style.display = "none";
bubble4.style.display = "none";
bubble5.style.display = "none";
bubble6.style.display = "none";
bubble7.style.display = "none";
bubble8.style.display = "none";

const modal1 = document.querySelector('.modal1');
const modal1_2 = document.querySelector('.modal1_2');
const modal2_1 = document.querySelector('.modal2_1');
const modal2_2 = document.querySelector('.modal2_2');
const modal3_1 = document.querySelector('.modal3_1');
const modal3_2 = document.querySelector('.modal3_2');
const modal4_1 = document.querySelector('.modal4_1');
const modal4_2 = document.querySelector('.modal4_2');
const modal5 = document.querySelector('.modal5');

modal1.style.display = "none";
factcheck_modal.style.display = "none";
factcheck_modal_2.style.display = "none";
factcheck_modal_3.style.display = "none";
factcheck_modal_4.style.display = "none";
modal1_2.style.display = "none";
modal2_1.style.display = "none";
modal2_2.style.display = "none";
modal3_1.style.display = "none";
modal3_2.style.display = "none";
modal4_1.style.display = "none";
modal4_2.style.display = "none";
modal5.style.display = "none";

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
cursor_wrap_5.style.zIndex = "20";

cursor_wrap_1.style.visibility = "hidden";
cursor_wrap_2.style.visibility = "hidden";
cursor_wrap_3.style.visibility = "hidden";
cursor_wrap_4.style.visibility = "hidden";
cursor_wrap_5.style.visibility = "hidden";


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
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,-25],
            },
        },
    ],
});
createPopper(cursor_pos_2, cursor_wrap_2, {
    placement: 'left',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,40],
            },
        },
    ],
});

createPopper(cursor_pos_3, cursor_wrap_3, {
    placement: 'left',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [10,0],
            },
        },
    ],
});
createPopper(cursor_pos_4, cursor_wrap_4, {
    placement: 'left',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,40],
            },
        },
    ],
});
createPopper(cursor_pos_5, cursor_wrap_5, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-20,-20],
            },
        },
    ],
});

//채팅 나타나기 (0.8초 뒤 실행)
setTimeout(function () {

    bubble1.style.display = "";
    setTimeout(function () {
        bubble2.style.display = "";
        setTimeout(function () {
            bubble3.style.display = "";
            setTimeout(function () {
                cursor_wrap_1.style.visibility = "visible";
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
            }, 800);
            
        }, 800);
    }, 800);
}, 800);

function check2() {
    setTimeout(function () {
        bubble4.style.display = "";
        scrollToBottom();
        setTimeout(function () {
            bubble5.style.display = "";
            scrollToBottom();
            setTimeout(function () {
                cursor_wrap_2.style.visibility = "visible";
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
            }, 800);

        }, 800);
    }, 800);
}
//페이지 로드시 동작 - 팩트체크2 유도
function check3() {
    setTimeout(function () {
        cursor_wrap_3.style.visibility = "visible";
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
//페이지 로드시 동작 - 팩트체크2 유도
function check4() {
    setTimeout(function () {
        bubble6.style.display = "";
        scrollToBottom();
        setTimeout(function () {
            bubble7.style.display = "";
            scrollToBottom();
                setTimeout(function () {
                    cursor_wrap_4.style.visibility = "visible";
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
            }, 800);
    }, 800);
}//페이지 로드시 동작 - 팩트체크5 유도
function check5() {
    setTimeout(function () {
        bubble8.style.display = "";
        scrollToBottom();
                setTimeout(function () {
                    cursor_wrap_5.style.visibility = "visible";
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
    }, 800);
}
//애니메이션 1
function flashing() {

    name_fc.classList.add('animate__headShake');
    talk_profile_fc.classList.add('animate__headShake');
    setTimeout(function () {
        name_fc.classList.remove('animate__headShake');
        talk_profile_fc.classList.remove('animate__headShake');
    }, 1500);
}
//애니메이션2
function flashing2() {

    prev_img.classList.add('animate__headShake');
    setTimeout(function () {

        prev_img.classList.remove('animate__headShake');
    }, 1500);
}

//말풍선 애니메이션3
function flashing3() {

    move_to_site.classList.add('animate__headShake');

    setTimeout(function () {

        move_to_site.classList.remove('animate__headShake');

    }, 1500);
}

//말풍선 애니메이션4
function flashing4() {

    bubble7.classList.add('animate__headShake');

    setTimeout(function () {

        bubble7.classList.remove('animate__headShake');

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
    modal5.classList.add('animate__bounceInUp');
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
    setTimeout(function () {
        emo.classList.add('animate__bounceIn');
    }, 300);

}

//사용자 동작이벤트(날짜 클릭해보세요)에 따라 '팩트체크' 모달 활성화
function factcheck_intro_1() {
    cursor_wrap_1.style.display = "none";
    name_fc.classList.remove('animate__animated');
    talk_profile_fc.classList.remove('animate__animated');
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
    prev_img.classList.remove('animate__animated');
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
    move_to_site.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal_3.style.display = "";
    anim3();
    setTimeout(function () {
        FCanim3();
    }, 300);
}
//사용자 동작이벤트(내용 클릭)에 따라 '팩트체크' 모달 활성화
function factcheck_intro_4() {
    cursor_wrap_4.style.display = "none";
    bubble7.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal_4.style.display = "";
    anim4();
    setTimeout(function () {
        FCanim4();
    }, 300);
}
//사용자 동작이벤트(내용 클릭)에 따라 '팩트체크' 모달 활성화
function factcheck_intro_5() {
    cursor_wrap_5.style.display = "none";
    cursor_pos_5.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    modal5.style.display = "";
        createPopper(okBtn5, drawing_canvas, {
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
    anim5();
    requestAnimationFrame(loop);
    setTimeout(function () {
        FCanim5();
    }, 800);
}

function entry_1() {
    factcheck_modal.style.display = "none";
    modal1.style.display = "";
}
function next_1() {
    modal1.style.display = "none";
    modal1_2.style.display = "";
}
function ok_1() {
    modal1_2.style.display = "none";
    container.style.opacity = "1.0";
    check2();
}

function entry_2() {
    factcheck_modal_2.style.display = "none";
    modal2_1.style.display = "";
}
function next_2() {
    modal2_1.style.display = "none";
    modal2_2.style.display = "";
}
function ok_2() {
    modal2_2.style.display = "none";
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
    var link = 'lastScene_talk.html';
    location.href = link;
}

