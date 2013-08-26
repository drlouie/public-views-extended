//-->>
//-->> TIMER
var secs
var timerID = null
var timerRunning = false
var delay = 100

function InitializeHomeTransients() {
    // Set the length of the timer, in seconds
    secs = 0
    StopTheClock()
    StartTheTimer()
}
function StopTheClock() {
    if(timerRunning)
        clearTimeout(timerID)
    		timerRunning = false
}

function StartTheTimer() {
	if (secs==7) { blendimage('blenddiv1','blendimage1','/Pinnacle_Images/artistry/1.gif',1500); }
	if (secs==8) { blendimage('blenddiv2','blendimage2','/Pinnacle_Images/artistry/2.gif',1500); }
	if (secs==9) { blendimage('blenddiv3','blendimage3','/Pinnacle_Images/artistry/3.gif',1500); }
	if (secs==10) { blendimage('blenddiv4','blendimage4','/Pinnacle_Images/artistry/4.gif',1500); }
	if (secs==11) { blendimage('blenddiv5','blendimage5','/Pinnacle_Images/artistry/5.gif',1500); }
	if (secs==12) { blendimage('blenddiv6','blendimage6','/Pinnacle_Images/artistry/6.gif',1500); }
	if (secs==13) { blendimage('blenddiv7','blendimage7','/Pinnacle_Images/artistry/7.gif',1500); StopTheClock(); }
    else {
        // window.status = secs
        secs = secs + 1
        timerRunning = true
        timerID = self.setTimeout("StartTheTimer()", delay)
    }
}
//-->> TIMER
//-->>



function opacity(id, opacStart, opacEnd, millisec) {
	//speed for each frame
	var speed = Math.round(millisec / 100);
	var timer = 0;

	//determine the direction for the blending, if start and end are the same nothing happens
	if(opacStart > opacEnd) {
		for(i = opacStart; i >= opacEnd; i--) {
			setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
			timer++;
		}
	} else if(opacStart < opacEnd) {
		for(i = opacStart; i <= opacEnd; i++)
			{
			setTimeout("changeOpac(" + i + ",'" + id + "')",(timer * speed));
			timer++;
		}
	}
}

//change the opacity for different browsers
function changeOpac(opacity, id) {
	var object = document.getElementById(id).style; 
	object.opacity = (opacity / 100);
	object.MozOpacity = (opacity / 100);
	object.KhtmlOpacity = (opacity / 100);
	object.filter = "alpha(opacity=" + opacity + ")";
}

function shiftOpacity(id, millisec) {
	//if an element is invisible, make it visible, else make it ivisible
	if(document.getElementById(id).style.opacity == 0) {
		opacity(id, 0, 100, millisec);
	} else {
		opacity(id, 100, 0, millisec);
	}
}

function blendimage(divid, imageid, imagefile, millisec) {
	var speed = Math.round(millisec / 100);
	var timer = 0;
	
	//set the current image as background
	document.getElementById(divid).style.backgroundImage = "url(" + document.getElementById(imageid).src + ")";
	
	//make image transparent
	changeOpac(0, imageid);
	
	//make new image
	document.getElementById(imageid).src = imagefile;

	//fade in image
	for(i = 0; i <= 80; i++) {
		setTimeout("changeOpac(" + i + ",'" + imageid + "')",(timer * speed));
		timer++;
	}
}

function currentOpac(id, opacEnd, millisec) {
	//standard opacity is 100
	var currentOpac = 100;
	
	//if the element has an opacity set, get it
	if(document.getElementById(id).style.opacity < 100) {
		currentOpac = document.getElementById(id).style.opacity * 100;
	}

	//call for the function that changes the opacity
	opacity(id, currentOpac, opacEnd, millisec)
}