ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false

function runit() {
	if (ns4) block = document.blockDiv
	if (ie4) block = blockDiv.style
	block.xpos = parseInt(block.left)
	block.ypos = parseInt(block.top)
}

function checkPos() {
	if (block.xpos == 0) { moveOut(); }
	else if (block.xpos == -230) { moveIn(); }
}

function moveIn() {
	if (block.xpos < 0) {		
	block.xpos += 10		
	block.left = block.xpos
	setTimeout("moveIn()",1);
	
	if (ns4) document.blockDiv.document.images['radiobar'].src = off.src
	else document.images['radiobar'].src = off.src
	}
}

function moveOut() {
	if (block.xpos > -230){		
	block.xpos -= 10		
	block.left = block.xpos
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
	if (tsH < toWhat){
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
	if (tsH > toWhat){
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