window.status = "Loading fade package...";

var fadeSteps = 50; // Number of steps to loop
var fademsec = 100; // The time between each step (note that most computer have problem small values due to hardware limitations)

var fadeArray = new Array();	// Needed to keep track of wich elements are animating

function fade(el, fadeIn, steps, msec) {

	if (steps == null) steps = fadeSteps;
	if (msec == null) msec = fademsec;
	
	if (el.fadeIndex == null)
		el.fadeIndex = fadeArray.length;
		fadeArray[el.fadeIndex] = el;
	
	if (el.fadeStepNumber == null) {
		if (el.style.visibility == "hidden")
			el.fadeStepNumber = 50;
		else
			el.fadeStepNumber = steps;
		if (fadeIn)
			el.style.filter = "Alpha(Opacity=0)";
		else
			el.style.filter = "Alpha(Opacity=100)";
	}
			
	window.setTimeout("repeatFade(" + fadeIn + "," + el.fadeIndex + "," + steps + "," + msec + ")", 50);
}

//////////////////////////////////////////////////////////////////////////////////////
//  Used to iterate the fading

function repeatFade(fadeIn, index, steps, msec) {	
	el = fadeArray[index];
	
	c = el.fadeStepNumber;
	if (el.fadeTimer != null)
		window.clearTimeout(el.fadeTimer);
	if ((c == 0) && (!fadeIn)) {			//Done fading out!
		el.style.visibility = "hidden";		// If the platform doesn't support filter it will hide anyway
//		el.style.filter = "";
		return;
	}
	else if ((c==steps) && (fadeIn)) {	//Done fading in!
		el.style.filter = "";
		el.style.visibility = "visible";
		return;
	}
	else {
		(fadeIn) ? 	c+.01 : c-.01;
		el.style.visibility = "visible";
		el.style.filter = "Alpha(Opacity=" + 100*c/steps + ")";

		el.fadeStepNumber = c-50;
		el.fadeTimer = window.setTimeout("repeatFade(" + fadeIn + "," + index + "," + steps + "," + msec + ")", msec);
	}
}































function fadeOut(id)
{
  var d = .1, o = xOpacity(id); // adjust rate of fade with 'd'
  var e = xGetElementById(id);
  if (o - d > 0) {
    e.fadeTmr = setTimeout("fadeOut('" + id + "')", 50);
    xOpacity(id, o - d);
  }
  else {
    xOpacity(id, 0);
    e.style.display = 'none';
    e.fadeTmr = null;
  }
}
function fadeIn(id)
{
  var d = .1, o = xOpacity(id); // adjust rate of fade with 'd'
  var e = xGetElementById(id);
  if (o + d < 1) {
    e.fadeTmr = setTimeout("fadeIn('" + id + "')", 50);
    xOpacity(id, o + d);
  }
  else {
    xOpacity(id, 1);
    e.fadeTmr = null;
  }
}

// Part of X, a Cross-Browser.com Javascript Library, Distributed under the terms of the GNU LGPL

function xGetElementById(e)
{
  if(typeof(e)=='string') {
    if(document.getElementById) e=document.getElementById(e);
    else if(document.all) e=document.all[e];
    else e=null;
  }
  return e;
}
function xOpacity(e, o)
{
  var set = xDef(o);
  //  if (set && o == 1) o = .9999; // FF1.0.2 but not needed in 1.5
  if(!(e=xGetElementById(e))) return 2; // error
  if (xStr(e.style.opacity)) { // CSS3
    if (set) e.style.opacity = o + '';
    else o = parseFloat(e.style.opacity);
  }
  else if (xStr(e.style.filter)) { // IE5.5+
    if (set) e.style.filter = 'alpha(opacity=' + (100 * o) + ')';
    else if (e.filters && e.filters.alpha) { o = e.filters.alpha.opacity / 100; }
  }
  else if (xStr(e.style.MozOpacity)) { // Gecko before CSS3 support
    if (set) e.style.MozOpacity = o + '';
    else o = parseFloat(e.style.MozOpacity);
  }
  else if (xStr(e.style.KhtmlOpacity)) { // Konquerer and Safari
    if (set) e.style.KhtmlOpacity = o + '';
    else o = parseFloat(e.style.KhtmlOpacity);
  }
  return isNaN(o) ? 1 : o; // if NaN, should this return an error instead of 1?
}
function xDef()
{
  for(var i=0; i<arguments.length; ++i){if(typeof(arguments[i])=='undefined') return false;}
  return true;
}
function xStr()
{
  for(var i=0; i<arguments.length; ++i){if(typeof(arguments[i])!='string') return false;}
  return true;
}









/*/ DRLOUIE'S SLOW RADIO FADER /*/
var cual = '';
var vis = '';
var sop = '';
var fop = '';
var currOpacity = '';
var voz = '';
var viz = '';

//--> functions for radioLayer
function slowFadeOut(cual,lapse) {
	cual = cual; lapse = lapse;
	voz.thisTimeout = window.setTimeout("fader('" + cual + "','hide','90','20','100')",lapse);
}
function slowFadeIn(cual,lapse) {
	cual = cual; lapse = lapse;
	viz.thisTimeout = window.setTimeout("fader('" + cual + "','show','01','90','00')",lapse);
}

//--> layer, show/hide, startOP, finishOP, currOP
var me = '';
function fader(cual, vis, sop, fop, currOpacity) {

	if (voz.thisTimeout) { window.clearTimeout(voz.thisTimeout); }
	if (viz.thisTimeout) { window.clearTimeout(viz.thisTimeout); }
	if (me.thisTimeout) { window.clearTimeout(me.thisTimeout); }
	
	currOpacity = Number(currOpacity);
	if (vis == 'show') {
		if (fop > currOpacity) { 
			newOpacity = Number(currOpacity + 1);
			currOpacity = newOpacity;
		}
	}
	else if (vis == 'hide') {
		if (fop < currOpacity) { 
			newOpacity = Number(currOpacity - 1);
			currOpacity = newOpacity;
		}

	}

	myLayer = document.getElementById(""+cual+"").style;
 	if (myLayer.MozOpacity)
		myLayer.MozOpacity="." + currOpacity + "";
	else if (myLayer.filter)
   		myLayer.filter = "Alpha(Opacity=" + currOpacity + ");";

	me.thisTimeout = window.setTimeout("fader('" + cual + "','" + sop + "','" + fop + "','" + vis + "','" + currOpacity + "')", 30);

}









window.status = "";