const guide = document.querySelector('.cont-guide');
const apply = document.querySelector('.apply_modal');
const loading = document.querySelector('.modal_loading');
const container = document.querySelector('.container');

guide.style.display = "none";
apply.style.display = "none";
loading.style.display = "none";


//전체 동작
setTimeout(function () {

    apply.style.display = "";
    setTimeout(function () {

        applyAnim();

    }, 800);

}, 800);


//애니메이션

function applyAnim() {

    guide.style.display = "";
    guide.style.top = "16em";
    guide.classList.add('animate__bounceIn');
    // apply.classList.add('animate__flash');

    setTimeout(function () {

        guide.classList.remove('animate__flash');
        // apply.classList.remove('animate__flash');

    }, 1500);
}

function modal_loading() {
    guide.style.display = "none";
    apply.style.display = "none";
    container.style.opacity = "0.2";
    loading.style.display = "";
    movePage();
}


function movePage() {
    var link = 'GvFakeSite_2.html';

    setTimeout(function () {

        location.href = link;;

    }, 2000);

}