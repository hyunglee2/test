const cursor_wrap = document.querySelector('.cursor_wrap');
const guide_wrap = document.querySelector('.guide_wrap');
const cursor = document.querySelector('.cursor');
const psfakeBtn = document.getElementById("psfakeBtn");
const event_wrap = document.getElementById("event_wrap");

//popper
const { createPopper } = Popper;
createPopper(psfakeBtn, guide_wrap, {
    placement: 'right',
});

setTimeout(function () {
    flashing();
    setTimeout(function () {
        //guide.style.display = "";
        flashing();
        setTimeout(function () {
            flashing();
        }, 5000);

    }, 5000);
}, 200);

function flashing() {
    psfakeBtn.classList.add('animate__headShake');
    setTimeout(function () {
        //guide.classList.remove('animate__headShake');
        psfakeBtn.classList.remove('animate__headShake')
    }, 1500);
}
