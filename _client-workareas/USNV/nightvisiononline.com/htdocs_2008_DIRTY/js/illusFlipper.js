///////////////////////////////////////////////////////////////////
// This script and its counterparts are ©2001 NetMedia Solutions //
// For use ONLY with USNightVision.com                          //
// To re-use or have this script re-interfaced for your specific //
// needs please contact SServices\@NetMediaSolutions.com         //
// Prices are cheap for re-interfacing of current scripts and    //
// programs, so email us today to get you own LEGAL programming  //
// licensed for use only on YOUR site(s) or for YOUR purpose(s). //
///////////////////////////////////////////////////////////////////

function timeFlip() {
	object = new Array;
	object[0] = new Object();
	object[0].src = "images/forum_illus_armydude.jpg";	
	object[1] = new Object();
	object[1].src = "images/forum_illus_home.jpg";		
	object[2] = new Object();
	object[2].src = "images/forum_illus_jailhouse.jpg";	
	object[3] = new Object();
	object[3].src = "images/forum_illus_rampagent.jpg";	
	object[4] = new Object();
	object[4].src = "images/forum_illus_rifleboy.jpg";	
	object[5] = new Object();
	object[5].src = "images/forum_illus_smokedpeople.jpg";	
	object[6] = new Object();
	object[6].src = "images/forum_illus_targeted.jpg";

// do not edit anything below this line

var j = 0
var p = object.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = object[i]
}
	var whichImage = Math.round(Math.random()*(p-1));

	document.leImagen.src = object[whichImage].src;
	
	setTimeout("timeFlip()", 15000);
}