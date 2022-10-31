const cursor_wrap = document.querySelector('.cursor_wrap');
const guide_wrap = document.querySelector('.guide_wrap');
const cursor = document.querySelector('.cursor');
const ps_fake_main = document.querySelector('.ps-fake-main');
const anim_here = document.querySelector('.anim_here');
const event_wrap = document.getElementById("event_wrap");
const container = document.querySelector('.container');

document.getElementById("factcheck_modal").style.display = "none";
document.getElementById("modal1").style.display = "none";
document.getElementById("modal2").style.display = "none";


//popper
const { createPopper } = Popper;
createPopper(ps_fake_main, cursor, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [30, -110],
            },
        },
    ],
});


setTimeout(function () {
    //guide.style.display = "";
    flashing();
    setTimeout(function () {
        flashing();
    }, 5000);

}, 5000);

function flashing() {
    ps_fake_main.classList.add('animate__headShake');
    setTimeout(function () {
        //guide.classList.remove('animate__headShake');
        ps_fake_main.classList.remove('animate__headShake')
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

//사용자 동작이벤트에 따라 '팩트체크' 모달 활성화
function factcheck_intro() {
    cursor.style.display = "none";
    ps_fake_main.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    factcheck_modal.style.display = "";
    test();
    setTimeout(function () {
        FCanim();
    }, 300);
}


function entry() {

    document.getElementById("factcheck_modal").style.display = "none";
    document.getElementById("modal1").style.display = "";
    test2();

}
function next() {

    document.getElementById("modal1").style.display = "none";
    document.getElementById("modal2").style.display = "";

}
function ok() {
    var link = 'TalkScene_3_2.html';
    location.href = link;

}