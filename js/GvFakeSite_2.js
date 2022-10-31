const guide = document.querySelector('.cont-guide');
const input = document.querySelector('.input_form2');
const here = document.querySelector('.here');
const cursor = document.querySelector('.cursor');


document.getElementById("factcheck_modal").style.display = "none";
document.getElementById("modal1").style.display = "none";
document.getElementById("modal2").style.display = "none";
//guide.style.display = "none";

const container = document.querySelector('.container');

//전체 동작
setTimeout(function () {
    flashing();
    setTimeout(function () {
        //guide.style.display = "";
        flashing();
        setTimeout(function () {
            flashing();
        }, 5000);
    }, 5000);
}, 1000);

//popper
const { createPopper } = Popper;
createPopper(here, cursor, {
    placement: 'bottom',
});

function flashing() {
    input.classList.add('animate__headShake');
    setTimeout(function () {
        input.classList.remove('animate__headShake');
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
    container.style.opacity = "0.2";
    const factcheck_modal = document.getElementById("factcheck_modal");
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
    var link = 'lastScene_msg.html';
    document.getElementById("modal2").style.display = "none";
    location.href = link;
}



