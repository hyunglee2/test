//로컬에 저장할 때는 문자열로 바꾸기  (stringify)
//JSON 수정할 때는 객체로 바꾸기      (parse)

//+++++++++++현재 사용자 데이터로 셋팅하기+++++++++++++++++
const player = localStorage.getItem('player_now');//지금 사용자 누구
const parse_data = JSON.parse(localStorage.getItem(player));//지금 사용자 데이터
//alert(parse_data);                    //객체 상태로 출력하면 object로 뜸
//alert(JSON.stringify(parse_data));    //사용자데이터 문자로 바꿔 출력

//+++++++++++현재 사용자의 특정 데이터 변환하기+++++++++++++++++
parse_data.acti_data[0].talk2 = 'done';   //원하는 값으로 바꾸기 : 객체 상태
alert(JSON.stringify(parse_data));      //바꾼 값 확인하기 : 잠깐 문자열로 바꿔 확인
localStorage.setItem(player, JSON.stringify(parse_data));  //문자열로 바꿔서 로컬저장

//+++++++++++현재 사용자의 특정 데이터 변환하기+++++++++++++++++
// 1. 현재 플레이하고 있는 플레이어의 배열 JSON 값 localStorage에서 불러오기
// 2. 불러온 JSON 값대로 현재 씬에 진행도 반영하기
// 3. 클릭해보세요하면 JSON 값 변환하기 (done)으로
// 4. 변환 JSON 값 현재 플레이어의 localStorage에 저장하기 