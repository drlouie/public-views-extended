b1off= new Image(); b1off.src="Pinnacle_Images/but1Index.gif";
b1on= new Image(); b1on.src="Pinnacle_Images/but1Index_ov.gif";
b2off= new Image(); b2off.src="Pinnacle_Images/but2Index.gif";
b2on= new Image(); b2on.src="Pinnacle_Images/but2Index_ov.gif";

//radioControl
on = new Image(); on.src = "Pinnacle_Images/show_radio.gif"; 
off = new Image(); off.src = "Pinnacle_Images/hide_radio.gif";

//bottomLogosIndex.gif
BLI = new Image(); BLI.src = "Pinnacle_Images/bottomLogosIndex.gif";
BB = new Image(); BB.src = "Pinnacle_Images/backerBottom.jpg";
BI = new Image(); BI.src = "Pinnacle_Images/bottomIndex.jpg";
BI2 = new Image(); BI2.src = "Pinnacle_Images/backerIndex.jpg";
TI = new Image(); TI.src = "Pinnacle_Images/topIndex.jpg";

var pageStates = new Array();
var pSC = '';
var lSC = '';
var lastPage = '';
var lastPageContent = '';
// from home
function showShowcase() {
	// always maintain states (only 3 page states MAX)
//	pageStates["homeContents"] = document.getElementById("mainLayer").innerHTML;
	//-- STEP 1: shortenMainLayer
//	fadeOut('MainTable',1);
//	fadeOut('mainLayer',1);
	//compressIt('mainLayer',10);
	// timeout for LOADING sequence

	// hide form if showing
	hideForm1();
	toggleMousieF1('off');
	if (pSC.thisTimeout) { window.clearTimeout(pSC.thisTimeout); }
	pSC.thisTimeout = window.setTimeout('prepareShowcase()',1);
}
function prepareShowcase() {
//	fadeIn('mainLayer',1);
	// this gets called within the flash movie (called whenever needed, including loadtime)
	flashCom('expand','mainLayer','500');
	// save lastPageSeen before overwritting
//	pageStates["lastPageSeen"] = document.getElementById("mainLayer").innerHTML;
//	flashCom('expand','mainLayer','30');
//	document.getElementById("mainLayer").innerHTML = "<img src='Pinnacle_Images/spacer.gif' border='0' width='790' height='360'>";
	if (document.getElementById) {
		if (lSC.thisTimeout) { window.clearTimeout(lSC.thisTimeout); }
		lSC.thisTimeout = window.setTimeout('loadShowcase()',1);
	}
}
function loadShowcase() {
	// upon first entry we set the backHome to BACKHOME
	if (lastPage == '') { document.getElementById("backHome").innerHTML = document.getElementById("mainLayer").innerHTML; }
	document.getElementById("mainLayer").innerHTML = document.getElementById("showcaseMovie").innerHTML;
	lastPage = 'showcaseMovie';
}
// only from flash [no checks for status of wrap]
function loadNewShowcase() {
	document.getElementById("mainLayer").innerHTML = '';
	prepareShowcase();
}

// internal flash script connection
function flashCom (com, who, arg) {
//	alert(com);
 	if (com == "expand") {
		stretchIt(who,arg);
  	}
//	return false;
}
function goBackHome() {
	//if (lastPageContent != '' && lastPage != '') { document.getElementById(""+lastPage+"").innerHTML = lastPageContent; }
	if (lastPage != '') {
//		alert(document.getElementById("backHome").innerHTML);

		document.getElementById("mainLayer").innerHTML = document.getElementById("backHome").innerHTML;
		document.getElementById("backHome").innerHTML = '';
		lastPage = '';
		lastPageContent = '';
	

		// if not already home with homepage contents in place make it so and show it
		compressIt('mainLayer',360);
	}
	if (showingMap == 1) {
		closeMap();
	}
	if (showingPDF == 1) {
		closePDF();
	}
}
// auto for IE not so for NS
// for changing showcase movie
function makeShowcase(who) {
	if (showingMap == 1) {
		closeMap();
	}
	if (showingPDF == 1) {
		closePDF();
	}
	elSHOW1 = '<table width="790" border="0" cellpadding="0" cellspacing="0" style="background-image: url(Pinnacle_Images/backerIndex.jpg); background-repeat: repeat-y; background-position: left top;"><tr><td align="center"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="774" height="500"><param name="movie" value="PacificOne_Residential_Showcase.swf"><param name="quality" value="high"><param name="wmode" value="transparent">';
	elSHOW2 = '<embed src="PacificOne_Residential_Showcase.swf" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="774" height="500"></embed></object></td></tr></table>';
	what = 'Showcase.swf?showcaseXML=' + who;
	newSHOW1 = elSHOW1.replace(/Showcase.swf/,what);
	newSHOW2 = elSHOW2.replace(/Showcase.swf/,what);
	document.getElementById("showcaseMovie").innerHTML = "";
	document.getElementById("showcaseMovie").innerHTML = newSHOW1 + '' + newSHOW2;
	
	document.getElementById("mainLayer").innerHTML = document.getElementById("showcaseMovie").innerHTML;
}

var showingForm1 = 0;
function toggleForm1() {
	if (showingForm1 == 0) { showForm1(); }
	else { hideForm1(); }
}
function showForm1() {
	if (showingForm1 == 0) {
		showingForm1 = 1;
		document.getElementById("paper1").innerHTML = document.getElementById("form1").innerHTML;
		document.getElementById("paper1").style.visibility = 'visible';
		// if enter showcase button not already off turn it off
		toggleMousieF1('on');
		if (document.images.but2Index.src != b2off.src) { document.images.but2Index.src = b2off.src; }
	}
}
function hideForm1() {
	if (showingForm1 == 1) { 
		showingForm1 = 0;
		document.getElementById("paper1").style.visibility = 'hidden';
		document.images.but1Index.src = b1off.src;
		toggleMousieF1('on');
	}
}

function toggleMousieF1(what) {
	if (showingForm1 == 0) {
		if (what == 'on') { document.images.but1Index.src = b1on.src; }
		if (what == 'off') { document.images.but1Index.src = b1off.src; }
	}
}


// makeRadio
var doneNOW = 0;
function playM() {
//	plM();
	doneNOW++;
}
function plM() {
//	if (document.musplPla || window.musplPla) {
//	if (document.musplPla) {
//		document.musplPla.Rewind();
//		document.musplPla.Play();
//	}
}

