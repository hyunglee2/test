
//const go_nextBtn = document.getElementById("go-nextBtn"); 
//const nextBtn = document.getElementById("nextBtn"); 

const bubble1 = document.getElementById("bubble1"); 
const bubble2 = document.getElementById("bubble2");
const guide = document.getElementById("guide");  
const container = document.querySelector('.container');
guide.style.top = '0em';


document.getElementById("factcheck_modal").style.display = "none";
document.getElementById("modal1").style.display = "none";
document.getElementById("modal2").style.display = "none";
bubble1.style.display = "none";
bubble2.style.display = "none";
guide.style.display = "none";


//채팅 나타나기 (0.8초 뒤 실행)
setTimeout(function () {
   bubble1.style.display = "";
   setTimeout(function () {
        bubble2.style.display = "";   
        setTimeout(function () {
          guide.style.display = "";   
          setTimeout(function () {   
            flashing();

          }, 400);

        }, 800);
   }, 800);
}, 800);

//반짝반짝
function flashing(){
const elem1 = document.querySelector('.cont-guide');
const elem2 = document.querySelector('.bubble_image');

            elem1.classList.add('animate__bounceIn');
            elem2.classList.add('animate__flash');
            
            setTimeout(function() {

                elem1.classList.remove('animate__flash');
                elem2.classList.remove('animate__flash');
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
function factcheck_intro(){
    container.style.opacity = "0.2";
    const factcheck_modal = document.getElementById("factcheck_modal");
    const guide = document.getElementById("guide"); 
    guide.style.display = "none";
    bubble2.style.display = "";
    factcheck_modal.style.display = "";

    // setTimeout(function () {   
         test();
         setTimeout(function() {
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
    
    var link = 'lastScene_msg.html';
    document.getElementById("modal2").style.display = "none";
    location.href=link;

}

//뒤로가기 버튼
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function() {
  var link = 'ChatroomList.html';
  location.href=link;
 })

// nextBtn.addEventListener("click", function() {
    
//    document.getElementById("factcheck_modal").style.display = "none";
//    document.getElementById("modal1").style.display = "";
    
//  })