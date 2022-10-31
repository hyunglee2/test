const newBtn = document.querySelector('.btn-new');
const player_list = document.querySelector('.player-list');
const player_list_item = document.querySelector('.player-list_item');
const length = localStorage.length;
const keys = Object.keys(window.localStorage);

player_list.style.visibility_item = 'hidden';
//+++++++++++현재 사용자 데이터로 셋팅하기+++++++++++++++++
const player = localStorage.getItem('player_now');//지금 사용자 누구
//const parse_data = JSON.parse(localStorage.getItem(player));//지금 사용자 데이터
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//이름 입력 화면으로 이동
newBtn.addEventListener("click", function () {
    var link = 'InputName.html';
    location.href = link;
})


//filtered : local에 등록되어있는 플레이어 배열 (player_now 제외))
let filtered = keys.filter((element) => element !== 'player_now');
//
console.log(filtered);
const cnt = filtered.length;
console.log(cnt);


for (var i = 0; i < cnt; i++) {

    //alert(i);

    var key = filtered[i]; //filtered 배열의 i번째 요소 (i번째 사용자 명) 가져와서 key에

    const value = window.localStorage.getItem(key); // key에 맞는 value 
    var now_key = key; //현재 플레이어 특정

    //player_info에 플레이어 정보 UI 저장
    var player_info = [
        `
        <div class="player-list_item player1" >
        <div class="player-profile">
            <h1 class="name" id="name">
            플레이어 이름</h1>
        </div>
        <div class="player-time">
            2022-09-05 11:58
        </div>
        <div class="btn_wrap">
            <button class="btn btn-continue" type="button" raised="true" id="">
                이어서 진행
            </button>
            <button class="btn btn-delete" type="button" raised="true" id="">삭제</button>
        </div>
        <div class="progress_wrap">
            <div class="progress-top">
                <div class="progress-left">
                    <div class="progress_title">카톡</div>
                    <div class="progress-bar">
                        <div class="progress">
                            <progress class="talk_prog" value="0" max="100">
                        </div>
                    </div>
                </div>
                <div class="progress-right">
                    <div class="progress_title">메시지</div>
                    <div class="progress-bar">
                        <div class="progress">
                            <progress class="msg_prog" value="0" max="100">
                        </div>
                    </div>
                </div>
            </div>
            <div class="progress-mid">
                <div class="progress-left">
                    <div class="progress_title">카페</div>
                    <div class="progress-bar">
                        <div class="progress">
                            <progress class="cafe_prog" value="0" max="100">
                        </div>
                    </div>
                </div>
                <div class="progress-right">
                    <div class="progress_title">블로그</div>
                    <div class="progress-bar">
                        <div class="progress">
                            <progress class="blog_prog" value="0" max="100">
                        </div>
                    </div>
                </div>
            </div>
            <div class="progress-bottom">
                <div class="progress-left">
                    <div class="progress_title">동영상</div>
                    <div class="progress-bar">
                        <div class="progress">
                            <progress class="video_prog" value="0" max="100">
                        </div>
                    </div>
                </div>
                <div class="progress-right">
                    <div class="progress_title">뉴스</div>
                    <div class="progress-bar">
                        <div class="progress">
                            <progress class="news_prog" value="0" max="100">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
         `
    ]

    // 클래스 특정하기 
    var div = document.createElement('div'); // div 태그 생성
    div.setAttribute('class', key); // 생성된 div의 class명에 key 추가 
    div.innerHTML = player_info; // key div 내부를 player_info (UI HTML)로 채우기 
    document.getElementById('here').append(div); //문서의 here  위치에 div 덧붙이기
    //console.log(now_key);

    //플레이어 명 바꾸기
    $($('.name')[i]).text(now_key); // i번째 'name' class자리의 텍스트를 now_key로 채우기

    //타임스탬스 값 바꾸기
    var parse_data = JSON.parse(localStorage.getItem(now_key));//지금 사용자 데이터
    var play_time = parse_data.acti_data[6].play_time;
    $($('.player-time')[i]).text(play_time); 


    //카톡 진행도
    let talk_cnt = 0;
    const talk1Data = parse_data.acti_data[0].talk1;
    const talk2Data = parse_data.acti_data[0].talk2;
    const talk3Data = parse_data.acti_data[0].talk3;
    if (talk1Data == 'done') { talk_cnt += 1;} 
    if (talk2Data == 'done') { talk_cnt += 1;} 
    if (talk3Data == 'done') { talk_cnt += 1;} 
    talk_fill = 100/3*talk_cnt;
    $($('.talk_prog')[i]).val(talk_fill); 
    
    //메시지 진행도
    let msg_cnt = 0;
    const msg1Data = parse_data.acti_data[1].msg1;
    const msg2Data = parse_data.acti_data[1].msg2;
    const msg3Data = parse_data.acti_data[1].msg3;
    if (msg1Data == 'done') { msg_cnt += 1;} 
    if (msg2Data == 'done') { msg_cnt += 1;} 
    if (msg3Data == 'done') { msg_cnt += 1;} 
    //console.log(msg_cnt);
    msg_fill = 100/3*msg_cnt;
    $($('.msg_prog')[i]).val(msg_fill); 

    //카페 진행도
    let cafe_cnt = 0;
    const cafe1Data = parse_data.acti_data[2].cafe1;
    const cafe2Data = parse_data.acti_data[2].cafe2;
    const cafe3Data = parse_data.acti_data[2].cafe3;
    if (cafe1Data == 'done') { cafe_cnt += 1;} 
    if (cafe2Data == 'done') { cafe_cnt += 1;} 
    if (cafe3Data == 'done') { cafe_cnt += 1;} 
    //console.log(cafe_cnt);
    cafe_fill = 100/3*cafe_cnt;
    $($('.cafe_prog')[i]).val(cafe_fill); 

    //블로그 진행도
    let blog_cnt = 0;
    const blog1Data = parse_data.acti_data[3].blog1;
    const blog2Data = parse_data.acti_data[3].blog2;
    const blog3Data = parse_data.acti_data[3].blog3;
    if (blog1Data == 'done') { blog_cnt += 1;} 
    if (blog2Data == 'done') { blog_cnt += 1;} 
    if (blog3Data == 'done') { blog_cnt += 1;} 
    //console.log(blog_cnt);
    blog_fill = 100/3*blog_cnt;
    $($('.blog_prog')[i]).val(blog_fill); 

    //동영상 진행도
    let video_cnt = 0;
    const video1Data = parse_data.acti_data[4].video1;
    const video2Data = parse_data.acti_data[4].video2;
    const video3Data = parse_data.acti_data[4].video3;
    const video4Data = parse_data.acti_data[4].video4;
    if (video1Data == 'done') { video_cnt += 1;} 
    if (video2Data == 'done') { video_cnt += 1;} 
    if (video3Data == 'done') { video_cnt += 1;} 
    if (video4Data == 'done') { video_cnt += 1;} 
    //console.log(video_cnt);
    video_fill = 100/4*video_cnt;
    $($('.video_prog')[i]).val(video_fill); 

    //뉴스 진행도
    let news_cnt = 0;
    const news1Data = parse_data.acti_data[5].news1;
    const news2Data = parse_data.acti_data[5].news2;
    const news3Data = parse_data.acti_data[5].news3;
    const news4Data = parse_data.acti_data[5].news4;
    if (news1Data == 'done') { news_cnt += 1;} 
    if (news2Data == 'done') { news_cnt += 1;} 
    if (news3Data == 'done') { news_cnt += 1;} 
    if (news4Data == 'done') { news_cnt += 1;} 
    //console.log(news_cnt);
    news_fill = 100/4*news_cnt;
    $($('.news_prog')[i]).val(news_fill); 



    // function player1() {
    //     var player_edit_pre = JSON.parse(localStorage.getItem(now_key));//지금 사용자 데이터

    //     localStorage["player_now"] = now_key;
    // }

}

//이어하기
$(".btn-continue").click(function(){
    
    var myClasses = $($($(this).parents()).parents()).parents();
    var myClass = myClasses[0];
    var myClassName = $(myClass).attr('class');
    
    //console.log(myClassName);
    window.localStorage.setItem("player_now", myClassName);
    
    var link = 'TypeSelection.html';
    location.href = link;
    
});

//플레이어 삭제
$(".btn-delete").click(function(){
    
    var myClasses = $($($(this).parents()).parents()).parents();
    var myClass = myClasses[0];
    var myClassName = $(myClass).attr('class');
    
    //console.log(myClassName);
    window.localStorage.removeItem(myClassName);
    location.reload(true);
    
});

function data_reset() {
    window.localStorage.clear();
    location.reload(true);
}




