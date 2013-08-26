ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false
var xpos = -230;
var ypos = 0;
var timerA = '';
var timerB = '';
var trigByLoad = 0;
var finishedLoading = 0;
var timesCalled = 0;
var radioSequenceDistrupted = 0;

var moveI = '';
var moveO = '';
var sIT = '';
var cIT = '';

function runit() {
	//- theX = '' + document.getElementById("blockDiv").style.left + '';
	//- bdTOP = '' + document.getElementById("blockDiv").style.top + '';
	//- XP = theX.split("px");
	//- YP = split(bdTOP,"px");
	//- xpos = XP[0];
	//- ypos = YP[0];

/*
	window.status = "Digital art sequence playing . . .";
	timerA.thisTimeout = window.setTimeout(checkPos,15000);
	slowFadeIn('blockDiv','13000');
	timerB.thisTimeout = window.setTimeout(checkPos2nd,24000);
*/
}

/*
function checkPos() {
	// cant distrupt while in transition
	if (finishedLoading == 0 && (xpos == 0 || xpos == -230) && timesCalled != 0) { radioSequenceDistrupted = 1; window.status = ""; }

	// if first call, finished loading or distrupted seq
	if (finishedLoading == 1 || timesCalled == 0 || radioSequenceDistrupted == 1) {
		if (xpos == 0) { moveOut(); }
		else if (xpos == -230) { moveIn(); }
		timesCalled++;
	}
	if (timerA.thisTimeout) { window.clearTimeout(timerA.thisTimeout); }
}
// only if not distrupted
function checkPos2nd() { 
	if (radioSequenceDistrupted == 0) { finishedLoading = 1; window.status = ""; checkPos(); } 

	if (timerB.thisTimeout) { window.clearTimeout(timerB.thisTimeout); }
}
	
function moveIn() {
	if (xpos < 0) {
		xpos += 2;
		document.getElementById("blockDiv").style.left = xpos + "px";
		moveI.thisTimeout = window.setTimeout("moveIn()",1);
	
		if (ns4) document.blockDiv.document.images['radiobar'].src = off.src
		else document.images['radiobar'].src = off.src
	}
	else {
		if (moveI.thisTimeout) { window.clearTimeout(moveI.thisTimeout); }	
	}
}

function moveOut() {
	if (xpos > -230){
		xpos -= 2;
		document.getElementById("blockDiv").style.left = xpos + "px";
		moveO.thisTimeout = window.setTimeout("moveOut()",1);
		
		if (ns4) document.blockDiv.document.images['radiobar'].src = on.src
		else document.images['radiobar'].src = on.src
	}
	else {
		if (moveO.thisTimeout) { window.clearTimeout(moveO.thisTimeout); }	
	}
}
*/
function stretchIt(who,toWhat) {
	if (ns4) main = document.who
	if (ie4) main = who.style
	if (document.getElementById) main = document.getElementById(""+who+"").style

	if (sIT.thisTimeout) { window.clearTimeout(sIT.thisTimeout); }		
	
	var currHeight = main.height;
	sH = currHeight.split("px");
	tsH = Number(sH[0]);
	if (tsH > toWhat) {
		compressIt(who,toWhat);
	}
	else if (tsH < toWhat){
		mySH = Number(tsH += 10);
		main.height = mySH + "px";
		sIT.thisTimeout = window.setTimeout('stretchIt(\''+who+'\','+toWhat+')',1);
	}

}

function compressIt(who,toWhat) {
	if (ns4) main = document.who
	if (ie4) main = who.style
	if (document.getElementById) main = document.getElementById(""+who+"").style

	if (cIT.thisTimeout) { window.clearTimeout(cIT.thisTimeout); }

	var currHeight = main.height;
	sH = currHeight.split("px");
	tsH = Number(sH[0]);
	if (tsH < toWhat) {
		stretchIt(who,toWhat);
	}
	else if (tsH > toWhat){
		mySH = Number(tsH -= 10);
		main.height = mySH + "px";
		cIT.thisTimeout = window.setTimeout('compressIt(\''+who+'\','+toWhat+')',1);
	}
}

function showObject(obj) {
	if (ns4) obj.visibility = "show"
	else if (ie4) obj.visibility = "visible"
}

function hideObject(obj) {
	if (ns4) obj.visibility = "hide"
	else if (ie4) obj.visibility = "hidden"
}