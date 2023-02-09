if(window.addEventListener) window.addEventListener("load", fn_InitPage, false);
else if(window.attachEvent) window.attachEvent("onload", fn_InitPage);

if(window.addEventListener) window.addEventListener("unload", fn_FinishPage, false);
else if(window.attachEvent) window.attachEvent("onunload", fn_FinishPage);

//�꾩옱 �섏씠吏� 紐�
var hrefArray = location.href.split('/');
var arr = hrefArray[(hrefArray.length - 1)].split(".");
var thisPage = arr[0] != 'index' ? arr[0] : 1;
var thisExt = arr[0] != 'index' ? arr[arr.length - 1] : null;

//吏꾨룄泥댄겕�щ�
var _currTime = 0;
var _isComplete = false;
var _postMessage = false;
var _startPage = null;
var _initPage = false;
var _isLocal = true;

try { if(top.location.href) _isLocal = true; } catch(e) { _isLocal = false; }
if(_isLocal == false) {
	top.postMessage({ hello : 'hi' }, "*");
	window.addEventListener('message', function(e) {
		try {
			if(e.data.hello == 'hi') _postMessage = true;
			if(e.data.sp != '') _startPage = e.data.sp;
			if(e.data.complete == 'Y') _isComplete = true;
			if(e.data.ctime > 0) _currTime = e.data.ctime;
			fn_InitPage();
		} catch(e) { console.log(e); }
	});
}

//�섏씠吏� �쒖옉�� �몄텧
function fn_InitPage() {
	if(_initPage == true) return;
	if(_isLocal == true) {
		var sp = top.getStartPage();
		if(sp != '' && thisExt != null && confirm('�댁쟾�� �숈뒿�� �섏씠吏�濡� �대룞�섏떆寃좎뒿�덇퉴?')) {
			location.href = sp + "." + thisExt;
			return;
		} else {
			top._setPage(thisPage);
		}
	} else {
		if(_postMessage == false) { setTimeout(fn_InitPage, 1000); return; }
		if(_startPage != null && thisExt != null && confirm('�댁쟾�� �숈뒿�� �섏씠吏�濡� �대룞�섏떆寃좎뒿�덇퉴?')) {
			location.href = _startPage + "." + thisExt;
			return;
		} else {
			top.postMessage({ method : '_setPage', page : thisPage }, "*");
		}
	}
	_initPage = true;
}

//�섏씠吏� �쒖옉�� �몄텧
function fn_StartPage(p) {
	thisPage = p;
	if(_initPage == true) return;
	if(_isLocal == true) {
		top._setPage(thisPage);
	} else {
		if(_postMessage == false) { setTimeout(fn_InitPage, 1000); return; }
		top.postMessage({ method : '_setPage', page : thisPage }, "*");
	}
	_initPage = true;
}

//�섏씠吏� 醫낅즺�� �몄텧
function fn_FinishPage() {
	if(_initPage == false) return;
	if(_isLocal == true) {
		top._setPageComplete(thisPage);
	} else {
		top.postMessage({ method : '_setPageComplete', page : thisPage }, "*");
	}
	_initPage = false;
}

//吏꾨룄�꾨즺�щ�
function fn_IsComplete() {
	if(_isLocal == true) {
		return top._isComplete();
	} else {
		return _isComplete;
	}
}

//吏꾪뻾�쒓컙(�숈쁺�곹럹�댁�)
function fn_SetCurrTime(t) {
	if(_isLocal == true) {
		top._setCurrTime(t);
	} else {
		top.postMessage({ method : '_setCurrTime', time : t }, "*");
	}
}

//吏꾪뻾�쒓컙(�숈쁺�곹럹�댁�)
function fn_GetCurrTime() {
	if(_isLocal == true) {
		return top._getCurrTime();
	} else {
		return _currTime;
	}
}

//�쒖옉�섏씠吏�
function fn_GetStartPage() {
	if(_isLocal == true) {
		return top.getStartPage();
	} else {
		return _startPage;
	}
}