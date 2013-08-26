/********************************************************************************
Copyright (C) 1999 Thomas Brattli
This script is made by and copyrighted to Thomas Brattli at www.bratta.com
Visit for more great scripts. This may be used freely as long as this msg is intact!
I will also appriciate any links you could give me.
********************************************************************************/
//Default browsercheck, added to all scripts!
function checkBrowser(){
	this.ver=navigator.appVersion
	this.dom=document.getElementById?1:0
	this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom)?1:0;
	this.ie4=(document.all && !this.dom)?1:0;
	this.ns5=(this.dom && parseInt(this.ver) >= 5) ?1:0;
	this.ns4=(document.layers && !this.dom)?1:0;
	this.bw=(this.ie5 || this.ie4 || this.ns4 || this.ns5)
	return this
}
bw=new checkBrowser()
//With nested layers for netscape, this function hides the layer if it's visible and visa versa
function showHide(div,nest){
	obj=bw.dom?document.getElementById(div).style:bw.ie4?document.all[div].style:bw.ns4?nest?document[nest].document[div]:document[div]:0; 
	if(obj.visibility=='visible' || obj.visibility=='show') obj.visibility='hidden'
	else obj.visibility='visible'
}
//Shows the div
function show(div,nest){
	obj=bw.dom?document.getElementById(div).style:bw.ie4?document.all[div].style:bw.ns4?nest?document[nest].document[div]:document[div]:0; 
	obj.visibility='visible'
}
//Hides the div
function hide(div,nest){
	obj=bw.dom?document.getElementById(div).style:bw.ie4?document.all[div].style:bw.ns4?nest?document[nest].document[div]:document[div]:0; 
	obj.visibility='hidden'
}

/*


<div id="divLinks">
	Regular: 
	<a href="#" onclick="hide('test')">hide 1</A> - 
	<a href="#" onclick="show('test')">show 1</A>
	
	<br><br>
	Nested layers: 
	<a href="#" onclick="hide('test3','test2')">hide 3</A> -
	<a href="#" onclick="show('test3','test2')">show 3</A>
	
	<br><br>
	Mouseover:
	<a href="#" onmouseover="show('test3','test2'); show('test')" onmouseout="hide('test3','test2'); hide('test')">show/hide 1 & 3</A>	
	<br><br>
	
	Showhide
	<a href="#" onclick="showHide('test')">showhide 1</A>	
	<a href="#" onclick="showHide('test3','test2')">showhide 3</A>	
</div>
<div id="test">Layer 1</div>
<div id="test2">Layer 2<br>
	<div id="test3">Layer 3</div>
</div>

YOUR REGULAR BODY CONTENT GOES IN HERE


*\