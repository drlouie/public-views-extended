/* 

COPYRIGHT SONY ONLINE ENTERTAINMENT
BY DRLOUIE
NOT FOR DISTRIBUTION OR RE-IMPLMENTATION!

*/
function showTooltip() {
	if (document.layers) return;
	makeTipDiv('tipDiv');
	if (document.addEventListener) {
		document.addEventListener("mousemove", mouseCapture, false);
		document.addEventListener("mouseover", mouseOverOut, false);
		document.addEventListener("mouseout", mouseOverOut, false);
	}
	else {
		document.onmousemove = mouseCapture;
		document.onmouseout = mouseOverOut;
		document.onmouseover = mouseOverOut;
	}
}
function mouseCapture(e) {
	if (window.popTip) {
		popTip.mouseCapture(e); 
	}
}
function mouseOverOut(e) {
	if (!window.popTip) return;
	if (typeof(e) == "undefined") {
		e = event;
	}
	var obj = e.srcElement? e.srcElement : e.target;
	if ((obj.tagName.toLowerCase() == "img" || obj.tagName.toLowerCase() == "span") && obj.parentNode.tagName.toLowerCase() == "a") {
		obj = obj.parentNode;
	}
	if (obj.tagName && obj.tagName.toLowerCase() == "a" && !obj.noTooltip) {
		if (e.type == "mouseover" && obj.title) {
			popTip.showIt(obj.title);
			backupTitle = obj.title;
			obj.title = '';
		}
		else if (e.type == "mouseout" && obj.title == '' && typeof(backupTitle) != "undefined" && backupTitle != '') {
			popTip.hideTooltip();
			obj.title = backupTitle;
			backupTitle = '';
		}
	}
}
function makeTipDiv(divName) {
	document.write( '<div id="' + divName + '" style="position: absolute; visibility: hidden; top: 0px; left: 0px; ' );
	document.write( 'filter: alpha(opacity=100); -moz-opacity: 0; z-index: 37"><div id="tipText"></div></div>' );
}
function muaTooltip(id, delay) {
	this.id = id || "tipDiv";
	this.textId = "tipText";
	this.mouseX = 0;
	this.mouseY = 0;
	this.showTip = false;
	this.obj = null;
	this.textObj = null;
	this.fadeRate = null;
	this.delay = delay || 40;
	this.max = 90;
	
	this.currMouseX = function() {
		var coords = this.getScrollCoords();
		return this.mouseX + (document.all? coords[0] : 0);
	}
	this.currMouseY = function() {
		var coords = this.getScrollCoords();
		return this.mouseY + (document.all? coords[1] : 0);
	}
	this.showIt = function(html) {
		if (window.opera) return;
		this.showTip = true;
		if (this.fadeRate) {
			this.fadeRate.setTransperancy(0);
			this.fadeRate.fadeIn();
		}
		this.refreshIt();
		DivW(this.textObj, html);
		DivS(this.obj);
	}
	
	this.refreshIt = function() {
		var left = this.currMouseX() + 13;
		var top = this.currMouseY() + (document.all? 20: 15);
		if (this.obj.offsetWidth) {
			var wCoordinates = this.getWinCoords();
			var s = this.getScrollCoords();
			var winb = wCoordinates[1] + s[1];
			var winr = wCoordinates[0] + s[0];
			if (top + parseInt(this.obj.offsetHeight) > winb) {
				top = winb - this.obj.offsetHeight;
			}
			if (left + parseInt(this.obj.offsetWidth) > winr - 10) {
				left = winr - this.obj.offsetWidth - 10;
			}
				
		}
		this.obj.style.left = left + "px";
		this.obj.style.top = top + "px";
	}
	this.getWinCoords = function() {
		var wx;
		var hx;
		if (window.innerHeight) {
			wx = window.innerWidth;
			hx = window.innerHeight;
		}
		else if (document.documentElement && document.documentElement.clientHeight != 0) {
			wx = document.documentElement.clientWidth;
			hx = document.documentElement.clientHeight;	
		}
		else if (document.body && document.body.clientHeight) {
			wx = document.body.clientWidth;
			hx = document.body.clientHeight;
		}
		return [wx, hx];
	}
	this.getScrollCoords = function() {
  		var x = 0;
		var y = 0;
  		if (typeof(window.pageYOffset) == "number") {
    		y = window.pageYOffset;
    		x = window.pageXOffset;
  		}
		else if (document.documentElement && document.documentElement.clientWidth != 0) {
        	y = document.documentElement.scrollTop;
        	x = document.documentElement.scrollLeft;
      	}
		else if (document.body && typeof(document.body.scrollLeft) != "undefined") {
      		y = document.body.scrollTop;
      		x = document.body.scrollLeft;
    	}
		return [x, y];
	}
	this.hideTooltip = function() {
		if (window.opera) return;
		DivH(this.obj);
		this.showTip = false;
		if (this.fadeRate) this.fadeRate.setTransperancy(0);
		this.obj.style.left = this.obj.style.top = 0;
		DivW(this.textObj, "");
	}
	this.init = function() {
		if (document.layers || window.opera) return;
		this.obj = document.getElementById(this.id);
		this.textObj = document.getElementById(this.textId);
		if (!this.obj) {
			return;
		}
		this.loaded = true;
		if (window.TTlogic && (document.all || (document.getElementById && document.addEventListener))) {
			this.fadeRate = new TTlogic(this.id, this.delay, this.max);
			this.fadeRate.setTransperancy(0);
		}
	}
	this.mouseCapture = function(e) {
		var x;
		var y;
		if (window.event) {
			x = event.clientX + document.body.scrollLeft;	
			y = event.clientY + document.body.scrollTop;
		}
		else {
			x = e.pageX;
			y = e.pageY + 10;
		}
		this.mouseX = x;
		this.mouseY = y;
		if (this.obj && this.showTip) this.refreshIt();
	}
	return this;
}
if (!document.getElementById && document.all) {
	document.getElementById = function(id) { return document.all[id] }
}

function DivS(incoming) { incoming.style.visibility = "visible"; }
function DivH(incoming) { incoming.style.visibility = "hidden"; }
function DivW(incoming, html) {
	if (typeof(incoming.innerHTML) != "undefined") {
		html = html.replace(/&/,"&amp;");
		incoming.innerHTML = html;
	}
}
function runTip() {
	popTip = new muaTooltip(null, 50);
	popTip.init();
}
function TTlogic(id, frameDelay, startTransperancy) {
	this.obj = "TTlogicObj" + TTlogic.counter++; 
	eval(this.obj + " = this");
	this.layerObj = document.getElementById(id);
	this.delay = frameDelay;
	this.start = startTransperancy;
	this.opacity = 10;
	this.setTransperancy = function(transparency) {
		if (transparency > tooltipFinalOpacity) {
			transparency = tooltipFinalOpacity;
		}
		if (this.layerObj.filters) {
			this.layerObj.filters.alpha.opacity = transparency;
		}
		if (!document.all && this.layerObj.style.setProperty) {
			this.layerObj.style.setProperty("-moz-opacity", transparency / 100 , "");
		}
	}	
	this.getTransperancy = function() {
		if (document.all) {
			if (typeof(this.layerObj.filters.alpha.opacity) != "undefined") { return this.layerObj.filters.alpha.opacity; }
		}
		else if (this.layerObj.style.getPropertyValue) { return this.layerObj.style.getPropertyValue("-moz-opacity")*100; }
		return tooltipFinalOpacity;
	}
	this.fadeIn = function() {
		if (!this.layerObj) { return; }
		clearTimeout(this.timer);
		var transparency = this.getTransperancy();
	    if (transparency < this.start) {
	        this.setTransperancy(transparency + this.opacity);
	        this.timer = setTimeout(this.obj + ".fadeIn()", this.delay);
        }
	}
	return this;	
}
TTlogic.counter = 0;
showTooltip();
