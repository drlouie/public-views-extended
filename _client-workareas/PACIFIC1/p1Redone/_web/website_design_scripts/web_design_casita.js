ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false

b1off= new Image(); b1off.src="website_design_imagery/web_development_button1.gif";
b1on= new Image(); b1on.src="website_design_imagery/web_development_button1_ov.gif";
b2off= new Image(); b2off.src="website_design_imagery/web_development_button2.gif";
b2on= new Image(); b2on.src="website_design_imagery/web_development_button2_ov.gif";

BLI = new Image(); BLI.src = "website_design_imagery/bottomLogosIndex.gif";
BB = new Image(); BB.src = "website_design_imagery/website_designers.jpg";
BI = new Image(); BI.src = "website_design_imagery/website_developers.gif";
BI2 = new Image(); BI2.src = "website_design_imagery/website-design.jpg";

var pageStates = new Array();
var pSC = '';
var lSC = '';
var lastPage = '';
var lastPageContent = '';



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



function runit() { }


function showShowcase() {
	hideForm1();
	hide_website_design_case();
	hide_website_development_case();
	hide_web_design_case();
	toggleMousieF1('off');
	if (pSC.thisTimeout) { window.clearTimeout(pSC.thisTimeout); }
	pSC.thisTimeout = window.setTimeout('prepareShowcase()',1);
}
function prepareShowcase() {
	flashCom('expand','mainLayer','500');
		if (document.getElementById) {
		if (lSC.thisTimeout) { window.clearTimeout(lSC.thisTimeout); }
		lSC.thisTimeout = window.setTimeout('loadShowcase()',1);
	}
}
function loadShowcase() {
	if (lastPage == '') { document.getElementById("backHome").innerHTML = document.getElementById("mainLayer").innerHTML; }
	document.getElementById("mainLayer").innerHTML = document.getElementById("showcaseMovie").innerHTML;
	lastPage = 'showcaseMovie';
}
function loadNewShowcase() {
	document.getElementById("mainLayer").innerHTML = '';
	prepareShowcase();
}

function flashCom (com, who, arg) {
 	if (com == "expand") {
		stretchIt(who,arg);
  	}
}
function website_design_home() {
	goBackHome();
}
function goBackHome() {
	if (lastPage != '') {

		document.getElementById("mainLayer").innerHTML = document.getElementById("backHome").innerHTML;
		document.getElementById("backHome").innerHTML = '';
		lastPage = '';
		lastPageContent = '';
	

		compressIt('mainLayer',360);
	}
	if (showingMap == 1) {
		closeMap();
	}
	if (showingPDF == 1) {
		closePDF();
	}
}

function makeShowcase(who) {
	if (showingMap == 1) {
		closeMap();
	}
	if (showingPDF == 1) {
		closePDF();
	}
	elSHOW1 = '<table width="790" border="0" cellpadding="0" cellspacing="0" style="background-image: url(website_design_imagery/website-design.jpg); background-repeat: repeat-y; background-position: left top;"><tr><td align="center"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="774" height="500"><param name="movie" value="website_design_gallery.swf"><param name="quality" value="high"><param name="wmode" value="transparent">';
	elSHOW2 = '<embed src="website_design_gallery.swf" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="774" height="500"></embed></object></td></tr></table>';
	Cual = 'gallery.swf?showcaseNAME=' + who;
	newSHOW1 = elSHOW1.replace(/gallery.swf/,Cual);
	newSHOW2 = elSHOW2.replace(/gallery.swf/,Cual);
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

		toggleMousieF1('on');
		if (document.images.web_development_button2.src != b2off.src) { document.images.web_development_button2.src = b2off.src; }
	}
}
function hideForm1() {
	if (showingForm1 == 1) { 
		showingForm1 = 0;
		document.getElementById("paper1").style.visibility = 'hidden';
		document.images.web_development_button1.src = b1off.src;
		toggleMousieF1('on');
	}
}
var showingWebsiteDesignCase = 0;
var showingWebDevelopmentCase = 0;
var showingWebDesignCase = 0;
function website_design_case() {
	if (showingWebsiteDesignCase == 1) { hide_website_design_case(); }
	else { show_website_design_case(); }
}
function show_website_design_case() {
	hideForm1();
	document.getElementById("website_design_information").innerHTML = document.getElementById("website_design_case_study_part1").innerHTML;
	document.getElementById("website_design_information").style.visibility = 'visible';
	showingWebsiteDesignCase = 1;
}
function hide_website_design_case() {
	document.getElementById("website_design_information").style.visibility = 'hidden';
	showingWebsiteDesignCase = 0;
}

function web_design_case() {
	if (showingWebDesignCase == 1) { hide_web_design_case(); }
	else { show_web_design_case(); }
}
function show_web_design_case() {
	hideForm1();
	document.getElementById("website_design_information").innerHTML = document.getElementById("web_design_case_study_part1").innerHTML;
	document.getElementById("website_design_information").style.visibility = 'visible';
	showingWebDesignCase = 1;
}
function hide_web_design_case() {
	document.getElementById("website_design_information").style.visibility = 'hidden';
	showingWebDesignCase = 0;
}
function website_development_case() {
	if (showingWebDevelopmentCase == 1) { hide_website_development_case(); }
	else { show_website_development_case(); }
}
function show_website_development_case() {
	hideForm1();
	document.getElementById("website_design_information").innerHTML = document.getElementById("website_development_case_study_part1").innerHTML;
	document.getElementById("website_design_information").style.visibility = 'visible';
	showingWebDevelopmentCase = 1;
}
function hide_website_development_case() {
	document.getElementById("website_design_information").style.visibility = 'hidden';
	showingWebDevelopmentCase = 0;
}

function toggleMousieF1(Cual) {
	if (showingForm1 == 0) {
		if (Cual == 'on') { document.images.web_development_button1.src = b1on.src; }
		if (Cual == 'off') { document.images.web_development_button1.src = b1off.src; }
	}
}



function stretchIt(who,toCual) {
	if (ns4) main = document.who
	if (ie4) main = who.style
	if (document.getElementById) main = document.getElementById(""+who+"").style

	if (sIT.thisTimeout) { window.clearTimeout(sIT.thisTimeout); }		
	
	var currHeight = main.height;
	sH = currHeight.split("px");
	tsH = Number(sH[0]);
	if (tsH > toCual) {
		compressIt(who,toCual);
	}
	else if (tsH < toCual){
		mySH = Number(tsH += 10);
		main.height = mySH + "px";
		sIT.thisTimeout = window.setTimeout('stretchIt(\''+who+'\','+toCual+')',1);
	}

}

function compressIt(who,toCual) {
	if (ns4) main = document.who
	if (ie4) main = who.style
	if (document.getElementById) main = document.getElementById(""+who+"").style

	if (cIT.thisTimeout) { window.clearTimeout(cIT.thisTimeout); }

	var currHeight = main.height;
	sH = currHeight.split("px");
	tsH = Number(sH[0]);
	if (tsH < toCual) {
		stretchIt(who,toCual);
	}
	else if (tsH > toCual){
		mySH = Number(tsH -= 10);
		main.height = mySH + "px";
		cIT.thisTimeout = window.setTimeout('compressIt(\''+who+'\','+toCual+')',1);
	}
}


