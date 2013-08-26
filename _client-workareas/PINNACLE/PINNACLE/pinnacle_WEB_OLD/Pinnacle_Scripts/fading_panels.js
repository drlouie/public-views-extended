var gBox = null; // the box currently visible
window.onload = function()
{
  var i = 1, a;
  while (null != (a = xGetElementById('lnk' + (i++)))) {
    a.onmouseover = lnkOver;
    a.onmouseout = lnkOut;
  }
  gBox = xGetElementById('box0'); 
}
function lnkOver()
{
  chkTmr();
  fadeOut(gBox.id);
  gBox = xGetElementById('box' + this.id.substr(3));
  chkTmr();
  xOpacity(gBox, 0);
  gBox.style.display = 'block';
  fadeIn(gBox.id);
}
function lnkOut()
{
  chkTmr();
  fadeOut(gBox.id);
  gBox = xGetElementById('box0');
  chkTmr();
  xOpacity(gBox, 0);
  gBox.style.display = 'block';
  fadeIn(gBox.id);
}
function chkTmr()
{
  if (gBox.fadeTmr) {
    clearTimeout(gBox.fadeTmr);
    gBox.fadeTmr = null;
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
