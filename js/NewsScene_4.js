const backBtn = document.getElementById("backBtn");

//const guide = document.querySelector('.cont-guide');
const container = document.querySelector('.container');
const reactions = document.querySelector('.reactions');

const factcheck_modal = document.querySelector('.factcheck_modal_1');
const factcheck_modal_2 = document.querySelector('.factcheck_modal_2');
const factcheck_modal_3 = document.querySelector('.factcheck_modal_3');
const factcheck_modal_4 = document.querySelector('.factcheck_modal_4');
const factcheck_modal_5 = document.querySelector('.factcheck_modal_5');

const profile = document.querySelector('.writer-profile');
const date_info = document.querySelector('.date_info');
const news_main = document.querySelector('.news_main');

const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');

factcheck_modal.style.display = "none";
factcheck_modal_2.style.display = "none";
const modal3_1 = document.querySelector('.modal3_1');
const modal3_2 = document.querySelector('.modal3_2');
const modal4_1 = document.querySelector('.modal4_1');
const modal4_2 = document.querySelector('.modal4_2');
const modal5_1 = document.querySelector('.modal5_1');
const modal5_2 = document.querySelector('.modal5_2');
modal3_1.style.display = "none";
modal3_2.style.display = "none";
modal4_1.style.display = "none";
modal4_2.style.display = "none";
modal5_1.style.display = "none";
modal5_2.style.display = "none";

modal1.style.display = "none";
modal2.style.display = "none";
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
cursor_wrap_5.style.zIndex = "20";

cursor_wrap_3.style.visibility = "hidden";
cursor_wrap_4.style.visibility = "hidden";
cursor_wrap_2.style.visibility = "hidden";
cursor_wrap_5.style.visibility = "hidden";

//????????????
backBtn.addEventListener("click", function () {
    var link = 'NewsList.html';
    location.href = link;
})

//????????? ??? ???????????? ?????? (??? ??? ????????????)
function scrollToMiddle() {
    news_main.scrollTop = news_main.scrollHeight * 0.3;
}
function scrollToBottom() {
    news_main.scrollTop = news_main.scrollHeight;
}

const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'left',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-50,0],
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
                offset: [-30, -30],
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
                offset: [0,-40],
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
                offset: [-15, 10],
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
                offset: [50, 0],
            },
        },
    ],
});


//????????? ????????? ?????? - ????????????1 ??????
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

//????????????2 ??????
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

//????????????3 ??????
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

//????????????4 ??????
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

//????????????5 ??????
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
    }, 400);
}

//??????????????? 1
function flashing() {

    cursor_pos_1.classList.add('animate__headShake');

    setTimeout(function () {

        cursor_pos_1.classList.remove('animate__headShake');
    }, 1500);
}
//???????????????2
function flashing2() {

    date_info.classList.add('animate__headShake');
    setTimeout(function () {

        date_info.classList.remove('animate__headShake');
    }, 1500);
}

//????????? ???????????????3
function flashing3() {

    cursor_pos_3.classList.add('animate__headShake');

    setTimeout(function () {

        cursor_pos_3.classList.remove('animate__headShake');

    }, 1500);
}

//????????? ???????????????4
function flashing4() {

    cursor_pos_4.classList.add('animate__headShake');

    setTimeout(function () {

        cursor_pos_4.classList.remove('animate__headShake');
    }, 1500);
}

//????????? ???????????????5
function flashing5() {

    reactions.classList.add('animate__headShake');

    setTimeout(function () {

        reactions.classList.remove('animate__headShake');
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

//????????? ???????????????(?????? ??????????????????)??? ?????? '????????????' ?????? ?????????
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

//????????? ???????????????(?????? ??????????????????)??? ?????? '????????????' ?????? ?????????
function factcheck_intro_2() {
    cursor_wrap_2.style.display = "none";
    profile.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal_2.style.display = "";
    anim2();
    setTimeout(function () {
        FCanim2();
    }, 300);
}

//????????? ???????????????(?????? ??????)??? ?????? '????????????' ?????? ?????????
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

//????????? ???????????????(?????????? ??????)??? ?????? '????????????' ?????? ?????????
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

//????????? ???????????????(?????? ??????????????????)??? ?????? '????????????' ?????? ?????????
function factcheck_intro_2() {
    cursor_wrap_2.style.display = "none";
    date_info.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal_2.style.display = "";
    anim2();
    setTimeout(function () {
        FCanim2();
    }, 300);
}


//????????? ???????????????(???????????? ??????????????????)??? ?????? '????????????' ?????? ?????????
function factcheck_intro_5() {
    //guide_flipped.style.display = "none";
    cursor_wrap_5.style.display = "none";
    reactions.classList.remove('animate__animated');
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
    modal2.style.display = "";
}
function ok_2() {
    modal2.style.display = "none";
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

function next_5() {
    modal5_1.style.display = "none";
    modal5_2.style.display = "";
}

function ok_5() {
    var link = 'lastScene_news.html';
    location.href = link;
}
