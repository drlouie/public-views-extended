// Title: Common Popup Window Script
// Description: Allows for dynamic Popup Windows with Width/Height and Center Placement of Screen
// Version: 1.0
// Date: October 28, 2002 (mm-dd-yyyy)
// Author: Luis Rodriguez <drlouie@thesuperscripter>

function popWindow(url,nombre,w,h,closeit) {
	muyExtra = '';
	if (window.open) {
		//GET SIZE OF WINDOW/SCREEN
		windowW = w;
		windowH = h;
		var windowX = (screen.width/2)-(windowW/2);
		var windowY = (screen.height/2)-(windowH/2);

		if (closeit == "resize") {
			muyExtra = ",resizable=1";
		}
		var myExtra = "status=no,menubar=no,toolbar=no,scrollbars=yes,menubar=no,addressbar=0" + muyExtra + "";

		var poppedWindow = window.open(url,nombre,'width='+w+',height='+h+',top='+windowY+',left=' + windowX + ',' + myExtra + '');
		if (closeit == "YES" || closeit == "yes") { parent.window.close(); }
		else { poppedWindow.focus(); }
	}
	else {
		alert('Your security settings are not allowing our popup windows to function. Please make sure your security software allows popup windows from our site.');
	}
}



function remakeWindow(w,h) {
	window.resizeTo(w,h);
	windowW = w;
	windowH = h;
	var windowX = (screen.width/2)-(windowW/2);
	var windowY = (screen.height/2)-(windowH/2);
	window.moveTo(windowX, windowY);
	window.resizeTo(w,h);
}