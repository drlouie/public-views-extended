// Title: Common Popup Window Script
// Description: Allows for dynamic Popup Windows with Width/Height and Center Placement of Screen
// Version: 1.0
// Date: October 28, 2002 (mm-dd-yyyy)
// Author: Luis Rodriguez <drlouie@netmediasol.com>

function popWindow(url,name,w,h,closeit) {
	if (window.open) {
		//GET SIZE OF WINDOW/SCREEN
		windowW = w;
		windowH = h;
		var windowX = (screen.width/2)-(windowW/2);
		var windowY = (screen.height/2)-(windowH/2);
	
		var myExtra = "";
		if (name == "LOGWIN") { myExtra = ",status=1"; }
	
		var poppedWindow = window.open(url,name,'width='+w+',height='+h+',top='+windowY+',left=' + windowX + myExtra + '');
		if (closeit == "YES") { parent.window.close(); }
		else { poppedWindow.focus(); }
	}
	else {
		alert('Your security settings are not allowing our popup windows to function. Please make sure your security software allows popup windows from our site.');
	}
}