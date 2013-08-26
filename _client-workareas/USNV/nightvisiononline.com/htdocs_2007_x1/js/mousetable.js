// Title: Mouse Over Table BGColor Changer
// Description: Allows for dynamic switching of Table Background Colors
// Version: 1.0
// Date: October 28, 2002 (mm-dd-yyyy)
// Author: Luis Rodriguez <drlouie@netmediasol.com>

function runto(cual,highlightcolor){
source=cual;
while(source.tagName!="TR")
source=source.parentElement
if (source.style.backgroundColor!=highlightcolor&&source.id!="ignore")
source.style.backgroundColor=highlightcolor
}

function runback(cual,originalcolor){
source=cual;
while(source.tagName!="TR")
source=source.parentElement
if (source.style.backgroundColor!=originalcolor&&source.id!="ignore")
source.style.backgroundColor=originalcolor
}

function TDrunto(cual,highlightcolor){
source=cual;
while(source.tagName!="TD")
source=source.parentElement
if (source.style.backgroundColor!=highlightcolor&&source.id!="ignore")
source.style.backgroundColor=highlightcolor
}

function TDrunback(cual,originalcolor){
source=cual;
while(source.tagName!="TD")
source=source.parentElement
if (source.style.backgroundColor!=originalcolor&&source.id!="ignore")
source.style.backgroundColor=originalcolor
}

function FONTrunto(cual,color){
	document.getElementById(""+cual+"").style.color = color;
}