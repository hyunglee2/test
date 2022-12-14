const backBtn = document.getElementById("backBtn");
const video_main = document.querySelector('.video_main');

const container = document.querySelector('.container');

var vid = document.getElementById("myVideo");
var video_src = document.getElementById("video_src");

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');

const factcheck_modal = document.querySelector('.factcheck_modal_1');
const factcheck_modal_2 = document.querySelector('.factcheck_modal_2');
const factcheck_modal_3 = document.querySelector('.factcheck_modal_3');
const factcheck_modal_4 = document.querySelector('.factcheck_modal_4');

const modal1_1 = document.querySelector('.modal1_1');
const modal1_2 = document.querySelector('.modal1_2');
const modal2_1 = document.querySelector('.modal2_1');
const modal2_2 = document.querySelector('.modal2_2');
const modal3_1 = document.querySelector('.modal3_1');
const modal3_2 = document.querySelector('.modal3_2');
const modal4_1 = document.querySelector('.modal4_1');
const modal4_2 = document.querySelector('.modal4_2');


factcheck_modal.style.display = "none";
factcheck_modal_2.style.display = "none";
factcheck_modal_3.style.display = "none";
factcheck_modal_4.style.display = "none";

modal1_1.style.display = "none";
modal1_2.style.display = "none";
modal2_1.style.display = "none";
modal2_2.style.display = "none";
modal3_1.style.display = "none";
modal3_2.style.display = "none";
modal4_1.style.display = "none";
modal4_2.style.display = "none";

cursor_wrap_1.style.zIndex = "20";
cursor_wrap_2.style.zIndex = "20";
cursor_wrap_3.style.zIndex = "20";
cursor_wrap_4.style.zIndex = "20";

//cursor_wrap_1.style.visibility = "hidden";
cursor_wrap_2.style.visibility = "hidden";
cursor_wrap_3.style.visibility = "hidden";
cursor_wrap_4.style.visibility = "hidden";



//????????????
backBtn.addEventListener("click", function () {
    var link = 'VideoList.html';
    location.href = link;
})

//????????? ??? ???????????? ?????? (??? ??? ????????????)
function scrollToMiddle() {
    video_main.scrollTop = video_main.scrollHeight *0.6;
}
function scrollToBottom() {
    video_main.scrollTop = video_main.scrollHeight;
}

const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-20,-20]
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
                offset: [-20,-20]
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
                offset: [0,-200]
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
                offset: [0,-100]
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


function check3() {
    video_play_1();
    var interval = setInterval(function(){
        if($("#myVideo").prop("paused")){
            check3_cursor();
            clearInterval(interval); 
        }
      },200);
}

function check3_cursor(){
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

//????????????2 ??????
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

    cursor_pos_2.classList.add('animate__headShake');
    setTimeout(function () {

        cursor_pos_2.classList.remove('animate__headShake');
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
    cursor_pos_2.classList.remove('animate__animated');
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
//????????? ???????????????(?????? ??????)??? ?????? '????????????' ?????? ?????????
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

function entry_1() {
    factcheck_modal.style.display = "none";
    modal1_1.style.display = "";
}
function next_1() {
    modal1_1.style.display = "none";
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
    var link = 'lastScene_video.html';
    location.href = link;
}


//????????? ?????? ??????---------------------------------------------------------------------------------------

//?????? ????????? ????????? ??????
function getCurTime() { 
  alert(vid.currentTime);
} 
//?????? ????????? ?????? ??????
function setCurTime() { 
  vid.currentTime=5;
} 
//????????? ????????????
function playVid() { 
    vid.play(); 
  } 
//?????? ???????????? ??????,??????
function video_play_1() {
    t_change();
    setTimeout(function () {
        vid.load();
        vid.play();
    }, 100);
}
function video_play_2() {
    t_change2();
    setTimeout(function () {
        vid.load();
        vid.play();
    }, 100);
}
//????????? ?????? ?????? ??????
function t_change(){
    video_src.src = "img/video2.mp4#t=5,10";
}

//????????? ?????? ?????? ??????
function t_change2(){
    video_src.src = "img/video2.mp4#t=20,25";
}


