var total_page = 12;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

//오디오 배열 선언, 페이지 수 대로 배열에 mp3 넣기
const audioArray = [];
for (j = 1; j <= total_page; j++) {
    audio = new Audio(`./assets/audios/${j}.mp3`);
    audioArray.push(audio);
}

//정답 처리할 영역 클래스 명
//correctAnswer 로 지정한 class 외 영역 클릭 시 모달창 출력
//-> 후에 for 문 써서 pg_n_answer 로 통일하기
const pageClickArea = [
    {
        page: 0,
        correctAnswer: "pg_0_answer"
    },
    {
        page: 1,
        correctAnswer: "pg_1_answer"
    },
    {
        page: 2,
        correctAnswer: "pg_2_answer",
    },
    {
        page: 3,
        correctAnswer: "pg_3_answer"
    },
    {
        page: 4,
        correctAnswer: "pg_4_answer",
    },
    {
        page: 5,
        correctAnswer: "pg_5_answer",
    },
    {
        page: 6,
        correctAnswer: "pg_6_answer",
    },
    {
        page: 7,
        correctAnswer: "pg_7_answer",
    },
    {
        page: 8,
        correctAnswer: "pg_8_answer"
    },
    {
        page: 9,
        correctAnswer: "pg_9_answer"
    },
    {
        page: 10,
        correctAnswer: "pg_10_answer"
    },
    {
        page: 11,
        correctAnswer: "pg_11_answer"
    },
    {
        page: 12,
        correctAnswer: "pg_12_answer"
    },
];

// -=----------------------------------------------------------------------------------------------------------------------
//페이지 수만큼 0부터 {}, 공간이 있어야 함
// 넘버링 주의

// {
//     page: 3,
//     inputableAnswer: "서울디지털재단"
// },
// 위 형식 맞춰서 ""안에 답 넣으면 됨
// 답에는 공백이 없어야 함
const inputAnswer = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "‘시작하기’ 버튼을 클릭하세요."
    },
    {
        page: 1,
        instruction: "‘자동결제 등록’ 문구 부분을 눌러주세요."
    },
    {
        page: 2,
        instruction: "‘편리한 자동 결제 수단 등록’ 박스를 눌러주세요."
    },
    {
        page: 3,
        instruction: "‘신용/체크카드’ 영역을 눌러주세요."
    },
    {
        page: 4,
        instruction: "모든 항목이 필수 항목입니다. ‘전체 동의하기’에 체크해 주세요."
    },
    {
        page: 5,
        instruction: "‘동의하고 계속하기’ 버튼을 눌러주세요."
    },
    {
        page: 6,
        instruction: "‘필수항목 전체동의’를 눌러주세요."
    },
    {
        page: 7,
        instruction: "필수항목만 모두 동의하였습니다.‘확인’버튼을 눌러 약관 동의를 완료합니다."
    },
    {
        page: 8,
        instruction: "이름 란에 이름을 한글로만 입력해 주세요"
    },
    {
        page: 9,
        instruction: "주민등록번호 13자리를 숫자만 입력해 주세요."
    },
    {
        page: 10,
        instruction: "휴대폰번호 11자리를 숫자만 입력하고 ‘인증번호 요청’을 눌러주세요."
    },
    {
        page: 11,
        instruction: "‘월디신용카드’를 누르면 실습이 완료됩니다."
    },
];


//*******************************************************************************
//**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
// const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_pos_7 = document.querySelector('.cursor_pos_7');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
// const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
const cursor_wrap_7 = document.querySelector('.cursor_wrap_7');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
// cursor_wrap_4.style.zIndex = "100";
cursor_wrap_5.style.zIndex = "100";
cursor_wrap_7.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,0],
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
                offset: [200,200],
            },
        },
    ],
});
createPopper(cursor_pos_3, cursor_wrap_3, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [220,50],
            },
        },
    ],
});

createPopper(cursor_pos_5, cursor_wrap_5, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [200,10],
            },
        },
    ],
});
createPopper(cursor_pos_7, cursor_wrap_7, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [200,10],
            },
        },
    ],
});
// createPopper(cursor_pos_6, cursor_wrap_6, {
//     placement: 'bottom',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [250,10],
//             },
//         },
//     ],
// });