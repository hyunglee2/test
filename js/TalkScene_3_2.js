
const player = localStorage.getItem('player_now');
const container = document.querySelector('.container');

const talk_main = document.querySelector('.talk_main');

const bubble = document.querySelector('.bubble');
const bubble5 = document.getElementById("bubble5");
const emo = document.getElementById("emo");
const modal = document.getElementById("modal");
bubble5.style.display = "none";
modal.style.display = "none";

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');

bubble.innerText = "서울지검 김규범 검사입니다." + '\n' + "금융 사기단을 검거하여 조사 중인데, " + player + " 님 명의 계좌가 범행에 사용한 것으로 확인되어 피해자 50여 명이 고소한 상태입니다.";

//뒤로가기
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function () {
    var link = 'TalkList.html';
    location.href = link;
})

//popper
const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'left',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-20,20],
            },
        },
    ],
});

//자동 스크롤
function scrollToBottom() {
    talk_main.scrollTop = talk_main.scrollHeight;
}


//채팅 나타나기 (0.8초 뒤 실행)
scrollToBottom();
//채팅 나타나기 (0.8초 뒤 실행)
setTimeout(function () {
    bubble5.style.display = "";
    scrollToBottom();
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
        }, 100);
}, 800);


//애니메이션 1
function flashing() {

    cursor_pos_1.classList.add('animate__headShake');

    setTimeout(function () {

        cursor_pos_1.classList.remove('animate__headShake');
    }, 1500);
}

function anim() {
    modal.classList.add('animate__bounceInUp');
}


function FCanim() {
    setTimeout(function () {
        emo.classList.add('animate__bounceIn');
    }, 300);

}

//사용자 동작이벤트(날짜 클릭해보세요)에 따라 '팩트체크' 모달 활성화
function factcheck_intro_1() {
    cursor_wrap_1.style.display = "none";
    bubble5.classList.remove('animate__animated');
    container.style.opacity = "0.2";
    modal.style.display = "";
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
    anim();
    requestAnimationFrame(loop);
    setTimeout(function () {
        FCanim();
        
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
    var link = 'lastScene_talk.html';
    location.href = link;
}
