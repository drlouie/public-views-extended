b1off= new Image(); b1off.src="PacificOne_Residential_Images/but1Index.gif";
b1on= new Image(); b1on.src="PacificOne_Residential_Images/but1Index_ov.gif";
b2off= new Image(); b2off.src="PacificOne_Residential_Images/but2Index.gif";
b2on= new Image(); b2on.src="PacificOne_Residential_Images/but2Index_ov.gif";

//radioControl
on = new Image(); on.src = "PacificOne_Residential_Images/show_radio.gif"; 
off = new Image(); off.src = "PacificOne_Residential_Images/hide_radio.gif";

//bottomLogosIndex.gif
BLI = new Image(); BLI.src = "PacificOne_Residential_Images/bottomLogosIndex.gif";
BB = new Image(); BB.src = "PacificOne_Residential_Images/backerBottom.jpg";
BI = new Image(); BI.src = "PacificOne_Residential_Images/bottomIndex.jpg";
BI2 = new Image(); BI2.src = "PacificOne_Residential_Images/backerIndex.jpg";
TI = new Image(); TI.src = "PacificOne_Residential_Images/topIndex.jpg";

var pageStates = new Array();
// from home
function showShowcase() {
	// always maintain states (only 3 page states MAX)
	pageStates["homeContents"] = document.getElementById("mainLayer").innerHTML;
	// shortenMainLayer
	compressIt('mainLayer',10);
	// loadShowcase into mainLayer
//	setTimeout('loadShowcase()',5000);
	setTimeout('prepareShowcase()',1000);


}
function prepareShowcase() {
	// this gets called within the flash movie (called whenever needed, including loadtime)
	stretchIt('mainLayer',30);

	// save lastPageSeen before overwritting
	pageStates["lastPageSeen"] = document.getElementById("mainLayer").innerHTML;

	flashCom('expand','mainLayer','30');

	document.getElementById("mainLayer").innerHTML = "<img src='PacificOne_Residential_Images/spacer.gif' border='0' width='790' height='360'>";
	
	if (document.getElementById) {
		setTimeout('loadShowcase()',100);
	}
}

function loadShowcase() {
	flashCom('expand','mainLayer','500');
	// now place showcaseMovie into mainLayer
	document.getElementById("mainLayer").innerHTML = document.getElementById("showcaseMovie").innerHTML;
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
	// if not already home with homepage contents in place make it so and show it
	if (pageStates["homeContents"]) {
		if (pageStates["homeContents"] != document.getElementById("mainLayer").innerHTML) {
			// save lastPageSeen before overwritting
			pageStates["lastPageSeen"] = document.getElementById("mainLayer").innerHTML;
			// now place homeContents back into mainLayer
			document.getElementById("mainLayer").innerHTML = pageStates["homeContents"];
		}
		// then show it
		stretchIt('mainLayer',360);
	}
}

// makeRadio
var doneNOW = 0;
function playM() {
	if (doneNOW == 1) {
//-->		document.images.radiobar.src = on.src;
	}
	else if (doneNOW > 1) {
//-->		plM();
	}
	doneNOW++;
}
function plM() {
	if (document.musplPla) {
//-->		document.musplPla.Play();
	}
}

