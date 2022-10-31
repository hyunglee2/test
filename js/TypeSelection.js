const typeselect_h1 = document.querySelector('.typeselect_h1');
//const player = JSON.stringify(localStorage.getItem('player_now'));
const player = localStorage.getItem('player_now');


typeselect_h1.innerText = player + "님의 팩트체크";
