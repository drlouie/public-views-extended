
if(!window.fireworks) fireworks=new Object();

if(!fireworks.createLayer)
{

var ns4 = document.layers;
var ie4 = document.all;
fireworks.objNo=0;

fireworks.getObjId = function(){return "fireworks_obj" + fireworks.objNo++;};

fireworks.createLayer = function(theHtml)
{
	var layerId = fireworks.getObjId();

	document.write(ns4 ? "<LAYER  NAME='"+layerId+"'>"+theHtml+"</LAYER>" : 
				   "<DIV id='"+layerId+"' style='position:absolute;z-index:20;'>"+theHtml+"</DIV>" );

	var el = 	document.getElementById	? document.getElementById(layerId) :
			document.all 		? document.all[layerId] :
							  document.layers[layerId];

	if(ns4)
		el.style=el;

	return el;
}
fireworks.fxLayer = function(theHtml)
{
	if(theHtml == null) return;
	this.el = fireworks.createLayer(theHtml);
}
var proto = fireworks.fxLayer.prototype

proto.moveTo     = function(x,y){this.el.style.left = x;this.el.style.top=y;}
proto.setBgColor = function(color) { this.el.style.backgroundColor = color; } 
proto.clip       = function(x1,y1, x2,y2){ this.el.style.clip="rect("+y1+" "+x2+" "+y2+" "+x1+")"; }
if(ns4){
	proto.clip = function(x1,y1, x2,y2){
		this.el.style.clip.top	 =y1;this.el.style.clip.left	=x1;
		this.el.style.clip.bottom=y2;this.el.style.clip.right	=x2;
	}
	proto.setBgColor=function(color) { this.el.bgColor = color; }
}
if(window.opera)
	proto.setBgColor = function(color) { this.el.style.color = color==null?'transparent':color; }

if(window.innerWidth)
{
	gX=function(){return innerWidth;};
	gY=function(){return innerHeight;};
}
else
{
	gX=function(){return document.body.clientWidth;};
	gY=function(){return document.body.clientHeight;};
}
fireworks.fxLayer2 = function(theHtml)
{
	this.superC = fireworks.fxLayer;
	this.superC(theHtml + "C");
}
fireworks.fxLayer2.prototype = new fireworks.fxLayer;
}
fireworks.Spark = function(x, y)
{
	this.superC = fireworks.fxLayer;
	this.superC("*");

	this.dx 	= Math.random() * 4 - 2;
	this.dy	= Math.random() * 4 - 2;
	this.ay	= .20;
	this.x	= x;
	this.y	= y;
	this.type = 0;
}
fireworks.Spark.prototype = new fireworks.fxLayer;

fireworks.Spark.prototype.fire0 = function()
{
	var a = Math.random() * 6.294;
	var s = Math.random() * 2;
	if(Math.random() >.6) s = 2;
	this.dx = s*Math.sin(a);
	this.dy = s*Math.cos(a) - 2;
}
fireworks.Spark.prototype.fire1 = function()
{
	var a = Math.random() * 6.294;
	var s = Math.random() * 2;
	this.dx = s*Math.sin(a);
	this.dy = s*Math.cos(a) - 2;
}
fireworks.Spark.prototype.fire2 = function()
{
	var a = Math.random() * 6.294;
	var s = 2;
	this.dx = s*Math.sin(a);
	this.dy = s*Math.cos(a) - 2;
}
fireworks.Spark.prototype.fire3 = function()
{
	var a = Math.random() * 6.294;
	var s = a - Math.random();
	this.dx = s*Math.sin(a);
	this.dy = s*Math.cos(a) - 2;
}
fireworks.Spark.prototype.fire4 = function()
{
	var a = Math.random() * 6.294;
	var s = (Math.random() > 0.5) ? 2 : 1;
	if(s==1)this.setBgColor("#FFFFFF");
	s -= Math.random()/4;
	this.dx = s*Math.sin(a);
	this.dy = s*Math.cos(a) - 2;
}
fireworks.Spark.prototype.fire = function(sx, sy, fw, cl)
{
	this.setBgColor(cl);

	if(fw == 1)
		this.fire1();
	else if(fw == 2)
		this.fire2();
	else if(fw == 3)
		this.fire3();
	else if(fw == 4)
		this.fire4();
	else
		this.fire0();

	this.x	= sx;
	this.y	= sy;
	this.moveTo(sx, sy);
}
fireworks.Spark.prototype.animate = function(step)
{
	this.dy += this.ay;
	this.x += this.dx;
	this.y += this.dy;
	this.moveTo(this.x, this.y);
}
fireworks.Firework = function(numSparks)
{
	window[ this.id = fireworks.getObjId() ] = this;

	this.sparkle = new Array();
	for(i=0 ; i<numSparks; i++)
	{
		this.sparkle[i]=new fireworks.Spark(-10, -10);
		this.sparkle[i].clip(0,0,3,3);
		this.sparkle[i].setBgColor("#00FF00");
	}
	this.step = 0;
	this.timerId = -1;
	this.x = 0;
	this.y = 0;
	this.dx = 0;
	this.dy = 0;
	this.ay = 0.2;
	this.state = "Off";
}
fireworks.Firework.prototype.explode = function()
{
	var fw = Math.floor(Math.random() * 5);

	for(i=0 ; i<this.sparkle.length ; i++)
	{
		this.sparkle[i].fire(this.x, this.y, fw, this.color);
		this.sparkle[i].dx += this.dx;
		this.sparkle[i].dy += this.dy;
	}
}
fireworks.Firework.prototype.getMaxDy = function()
{
	var ydiff = gY() - 30;
	var dy    = 1;
	var dist  = 0;
	var ay    = this.ay;
	while(dist<ydiff)
	{
		dist += dy;
		dy+=ay;
	}
	return -dy;
}
fireworks.Firework.prototype.animate = function()
{
	if(this.state=="Off")
	{
		var colors = new Array("#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FFFFFF", "#FF00FF");
		this.color = colors[Math.floor(Math.random()*colors.length)];

		this.step = 0;
		this.x = gX()/2;
		this.y = gY()-10;
		this.dy = this.getMaxDy();
		this.dx = Math.random()*-8 + 4;
		this.dy += Math.random()*3;
		for(i=0 ; i<this.sparkle.length ; i++)
			this.sparkle[i].moveTo(-10,-10);
		this.sparkle[0].setBgColor(this.color);
		this.state = "Move";
	}
	else if(this.state=="Move")
	{
		this.x += this.dx;
		this.y += this.dy;
		this.dy += this.ay;
		this.sparkle[0].moveTo(this.x,this.y);
		if(this.dy > 1)
		{
			this.state="Bang"
			this.explode();
		}
	}
	else
	{
		if(this.step > 40)
			this.state="Off";

		this.step++;

		for(i=0 ; i<this.sparkle.length ; i++)
			this.sparkle[i].animate(this.step);
	}
}
fireworks.Firework.prototype.start = function()
{
	if(this.timerId == -1)
	{
		this.state = "Off";
		this.timerId = setInterval("window."+this.id+".animate()", 30);
	}
}
fireworks.Firework.prototype.stop = function()
{
	if(this.timerId != -1)
	{
		clearInterval(this.timerId);
		for(i=0 ; i<this.sparkle.length ; i++)
			this.sparkle[i].moveTo(-10,-10);
		this.timerId = -1;
		this.step = 0;
	}
}
fireworks.DisplayStart = function()
{
	if(fireworks.DisplayLoad)fireworks.DisplayLoad();
	Display1.start();
	Display2.start();
	Display3.start();
}
Display1 = new fireworks.Firework(30);
Display2 = new fireworks.Firework(30);
Display3 = new fireworks.Firework(30);
fireworks.DisplayLoad=window.onload;
window.onload=fireworks.DisplayStart;
// -->