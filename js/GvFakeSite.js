//const guide = document.querySelector('.cont-guide');
const apply = document.querySelector('.apply_modal');
const loading = document.querySelector('.modal_loading');
const container = document.querySelector('.container');
const content = document.querySelector('.content');
//const applyBtn = document.getElementById("applyBtn");
const cursor = document.querySelector('.cursor');
const applyBtn = document.querySelector('.applyBtn');
const cursor_wrap = document.querySelector('.cursor_wrap');
const guide_wrap = document.querySelector('.guide_wrap');
const div_wrap = document.querySelector('.div_wrap');
const cmd = document.querySelector('.cmd');

apply.style.display = "none";
loading.style.display = "none";

guide_wrap.top = "-2em";
//guide.style.display = "none";

apply_modal.style.left = "50%";
//popper
const { createPopper } = Popper;
createPopper(applyBtn, cursor_wrap, {
  placement: 'bottom',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [50, 10],
      },
    },
  ],
});

createPopper(cursor, div_wrap, {
  placement: 'bottom',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 60],
      },
    },
  ],
});


//전체 동작
setTimeout(function () {

  apply.style.display = "";
  setTimeout(function () {

    applyAnim();

  }, 800);

}, 800);


//애니메이션

function applyAnim() {
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
}

function modal_loading() {
  //guide.style.display = "none";
  apply.style.display = "none";
  container.style.opacity = "0.2";
  loading.style.display = "";
  cmdPage();
}


function cmdPage() {
  var link = 'GvFakeSite_2.html';

  setTimeout(function () {

    location.href = link;;

  }, 2000);

}

//반짝반짝
function flashing() {

  if (container.style.opacity != "0.2") {
    //guide.classList.add('animate__headShake');
    cmd.classList.add('animate__headShake');
    setTimeout(function () {
      //guide.classList.recmd('animate__headShake');
      cmd.classList.recmd('animate__headShake')
    }, 1500);
  } else {

    //guide.style.display = "none";

  }
}