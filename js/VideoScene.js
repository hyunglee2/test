const backBtn = document.getElementById("backBtn");

const like = document.querySelector('.like_topside');
const guide = document.querySelector('.cont-guide');

document.getElementById("factcheck_modal").style.display = "none";
document.getElementById("modal1").style.display = "none";
document.getElementById("modal2").style.display = "none";

const container = document.querySelector('.container');

// guide.style.display="none";


//뒤로가기
backBtn.addEventListener("click", function () {
    var link = 'VideoList.html';
    location.href = link;
})

//애니메이션
function flashing() {

    guide.classList.add('animate__bounceIn');
    like.classList.add('animate__flash');

    setTimeout(function () {
        guide.classList.remove('animate__bounceIn');
        like.classList.remove('animate__flash');
    }, 1500);
}

// 애니메이션 동작
setTimeout(function () {
    flashing();

    setTimeout(function () {
        flashing();

    }, 2000);

}, 100);

//반짝반짝
function flashing() {
    const elem1 = document.querySelector('.cont-guide');
    const elem2 = document.querySelector('.bubble_image');

    elem1.classList.add('animate__bounceIn');
    elem2.classList.add('animate__flash');

    setTimeout(function () {

        elem1.classList.remove('animate__flash');
        elem2.classList.remove('animate__flash');
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

    // setTimeout(function () {   
    test();
    setTimeout(function () {
        FCanim();

    }, 300);
    //   }, 400);

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

    var link = 'lastScene_video.html';
    document.getElementById("modal2").style.display = "none";
    location.href = link;

}