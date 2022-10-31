$(document).ready(function() {

	$("div.button").click(function() {
		var $speech = $("div");
		var currentSize = $speech.css("fontSize");	/* 폰트사이즈를 알아낸다. */
		var num = parseFloat(currentSize, 10);	/* parseFloat()은 숫자가 아니면 숫자가 아니라는 뜻의 NaN을 반환한다. */
		var unit = currentSize.slice(-2);	/* 끝에서부터 두자리의 문자를 가져온다. */

		if(this.id == "switcher-large"){
			num *= 1.4;	/* num = num * 1.4 와 동일하다. */
		} else if(this.id == "switcher-small") {
			num /= 1.4;	/* num = num / 1.4 와 동일하다. */
		}

		$speech.css("fontSize", num + unit);
	});

});