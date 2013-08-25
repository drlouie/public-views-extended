ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false
var xpos = -230;
var ypos = 0;

function runit() {
//	theX = document.getElementById("blockDiv").style.left;
//	XP = theX.split("px");
//	YP = split(document.getElementById("blockDiv").style.top,"px");
//	xpos = XP[0];
//	ypos = YP[0];
}

function checkPos() {
//-->	if (xpos == 0) { moveOut(); }
//-->	else if (xpos == -230) { moveIn(); }
}

function moveIn() {
	if (xpos < 0) {		
	xpos += 10;
	document.getElementById("blockDiv").style.left = xpos + "px";
	setTimeout("moveIn()",1);
	
	if (ns4) document.blockDiv.document.images['radiobar'].src = off.src
	else document.images['radiobar'].src = off.src
	}
}

function moveOut() {
	if (xpos > -230){		
	xpos -= 10;
	document.getElementById("blockDiv").style.left = xpos + "px";
	setTimeout("moveOut()",1);
		
	if (ns4) document.blockDiv.document.images['radiobar'].src = on.src
	else document.images['radiobar'].src = on.src
	}
}

function stretchIt(who,toWhat) {
	if (ns4) main = document.who
	if (ie4) main = who.style
	if (document.getElementById) main = document.getElementById(""+who+"").style

	var currHeight = main.height;
	sH = currHeight.split("px");
	tsH = Number(sH[0]);
	if (tsH > toWhat) {
		compressIt(who,toWhat);
	}
	else if (tsH < toWhat){
		mySH = Number(tsH += 10);
		main.height = mySH + "px";
		setTimeout('stretchIt(\''+who+'\','+toWhat+')',1);
	}

}

function compressIt(who,toWhat) {
	if (ns4) main = document.who
	if (ie4) main = who.style
	if (document.getElementById) main = document.getElementById(""+who+"").style

	var currHeight = main.height;
	sH = currHeight.split("px");
	tsH = Number(sH[0]);
	if (tsH < toWhat) {
		stretchIt(who,toWhat);
	}
	else if (tsH > toWhat){
		mySH = Number(tsH -= 10);
		main.height = mySH + "px";
		setTimeout('compressIt(\''+who+'\','+toWhat+')',1);
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