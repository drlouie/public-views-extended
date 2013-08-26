// Title: Watermark
// Description: Watermark allows for a section of a screen to be held at a specified location.
// Version: 1.0
// Date: October 28, 2002 (mm-dd-yyyy)
// Author: Luis Rodriguez <drlouie@tstonramp.com>

function initWatermark(){
	dd=document;NS=(dd.layers)?1:0;IE=(dd.all)?1:0

	// for Netscape 4. and for IE 4..5 / Netscape 6
	if(NS){
		obg=dd.layers['divLeftBottom']
	} 
	else {
		obg=dd.getElementById('divLeftBottom');obg=obg.style
	}
	document.getElementById("divLeftBottom").style.visibility = 'visible';
	
	setInterval('jumpWatermark()',1)// <- each 500 milliseconds jumping to the place needed
}

function jumpWatermark(){
	//detect page scrolling
	currentHeight = document.body.clientHeight - 59;
	if(IE)vt=dd.body.scrollTop+currentHeight; else vt=window.pageYOffset+currentHeight;
	obg.top=vt // moving
}