<!-- Begin hiding script from older browsers

function toolTips(evt,currElem) {
  if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
    tipWin = eval("document.all." + currElem + ".style");
    tipWin.top = parseInt(evt.y)+15;
    tipWin.left = Math.max(2,parseInt(evt.x)+-215);
    tipWin.visibility = "visible";
    tipWin.status = "";
  }
  if ((navigator.appName == "Netscape") && (parseInt(navigator.appVersion) >= 4)) {
    tipWin = eval("document." + currElem);
    tipWin.top = parseInt(evt.pageY)+15;
    tipWin.left = Math.max(2,parseInt(evt.pageX)+-215);
    tipWin.visibility = "visible";
    tipWin.status = "";
  }
}


function tipDown(currElem) {
  if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
    tipWin = eval("document.all." + currElem + ".style");
    tipWin.visibility = "hidden";
  }
  if ((navigator.appName == "Netscape") && (parseInt(navigator.appVersion) >= 4)) {
    tipWin = eval("document." + currElem);
    tipWin.visibility = "hidden";
  }
}
-->
