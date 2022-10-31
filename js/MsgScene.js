const backBtn = document.getElementById("backBtn");

const guide = document.querySelector('.cont-guide');
const link = document.querySelector('.link');
const chat_main = document.querySelector('.chat_main');

const container = document.querySelector('.container');

document.getElementById("factcheck_modal").style.display = "none";
document.getElementById("modal1").style.display = "none";
document.getElementById("modal2").style.display = "none";

guide.style.display = "none";

//뒤로가기
backBtn.addEventListener("click", function() {
    var link = 'MsgList.html';
    location.href=link;
   })



// 속도 조절해서 스크롤 내려가게 하기
//https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=ksh81850&logNo=220295946447
// setInterval("scrollToBottom()",150);

//한번에 쭉 내려가게 하기 (좀 더 부드러움)
function scrollToBottom(){
    chat_main.scrollTop = chat_main.scrollHeight;
    guide.style.top="45em";
    guide.style.display = "";
}

//전체 동작
setTimeout(function () {   
    scrollToBottom();

    setTimeout(function () {   
        flashing();
      }, 800);

  }, 800);

//말풍선 애니메이션
function flashing(){

    guide.classList.add('animate__bounceIn');
    link.classList.add('animate__flash');
                
    setTimeout(function() {
    
        guide.classList.remove('animate__flash');
        link.classList.remove('animate__flash');

    }, 1500);
}

function test(){
    const elem3 = document.querySelector('#factcheck_modal');
    elem3.classList.add('animate__bounceInUp');
    }
function test2(){
    const elem4 = document.querySelector('#modal1');
    elem4.classList.add('animate__animate__fadeIn');

}

function FCanim(){
    const FC1 = document.getElementById("FC1");
    const FC2 = document.getElementById("FC2");
    const FC3 = document.getElementById("FC3");
    const FC4 = document.getElementById("FC4");
    setTimeout(function() {
        FC1.classList.add('animate__bounceIn');
        setTimeout(function() {
            FC2.classList.add('animate__bounceIn');
            setTimeout(function() {
                FC3.classList.add('animate__bounceIn');
                setTimeout(function() {
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


function entry(){

document.getElementById("factcheck_modal").style.display = "none";
document.getElementById("modal1").style.display = "";
test2();

}
function next(){

document.getElementById("modal1").style.display = "none";
document.getElementById("modal2").style.display = "";

}
function ok(){

var link = 'GvFakeSite.html';
document.getElementById("modal2").style.display = "none";
location.href=link;

}



