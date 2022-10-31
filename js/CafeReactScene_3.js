const backBtn = document.getElementById("backBtn");

const guide_wrap1 = document.getElementById("guide_wrap1");
const guide_wrap2 = document.getElementById("guide_wrap2");
const guide = document.querySelector('.cont-guide');
const guide2 = document.getElementById("guide2");
const guide_text = document.querySelector('#guide_text');

const cursor_here = document.querySelector('.cursor_here');
const cursor_wrap_2 = document.getElementById("cursor_wrap_2");
const cursor2 = document.querySelector("cursor2");
const copy = document.querySelector('.copy');
const cafe_item2 = document.querySelector('.cafe_item2');

const text_wrap2 = document.querySelector('.text_wrap2');

const container = document.querySelector('.container');
const cafebar = document.querySelector('.cafebar');
const text_wrap = document.querySelector('.text_wrap');
const my_wrap = document.querySelector('.my_wrap');

document.getElementById("factcheck_modal").style.display = "none";
document.getElementById("modal1").style.display = "none";
document.getElementById("modal2").style.display = "none";
my_wrap.style.display = "none";
guide.style.display = "none";
guide2.style.display = "none";
guide.style.top = ".8em";

const cursor = document.querySelector('.cursor');

//popper
const { createPopper } = Popper;
createPopper(cursor_here, cursor, {
    placement: 'top',
});


//뒤로가기
backBtn.addEventListener("click", function () {
    var link = 'CafeList.html';
    location.href = link;
})

//복사하기 누르면
my_wrap.addEventListener("click", function () {
    factcheck_intro();
})

//애니메이션
function flashing() {

    guide.classList.add('animate__headShake');
    cafe_item2.classList.add('animate__headShake');

    setTimeout(function () {
        guide.classList.remove('animate__headShake');
        cafe_item2.classList.remove('animate__headShake');
    }, 1500);
}

//애니메이션
function flashing2() {

    guide2.classList.add('animate__headShake');
    text_wrap.classList.add('animate__headShake');
    setTimeout(function () {
        guide2.classList.remove('animate__headShake');
        text_wrap.classList.remove('animate__headShake');
    }, 1500);
}

// 애니메이션 동작
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
    my_wrap.style.display = "none";
    guide2.style.display = "none";
    container.style.opacity = "0.3";
    cafebar.style.opacity = "0.3";

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

    var link = 'lastScene_cafe.html';
    document.getElementById("modal2").style.display = "none";
    location.href = link;

}

function paste() {
    cafe_item2.classList.remove('animate__animated');
    container.style.opacity = "0.3";
    guide_wrap1.style.display = "none";
    my_wrap.style.display = "";
    guide.style.display = "none";

    setTimeout(function () {
        flashing2();
        setTimeout(function () {
            //guide2.style.display = "";
            flashing2();
            setTimeout(function () {
                flashing2();
            }, 5000);
        }, 5000);
    }, 1000);

}