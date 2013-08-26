/*
   Milonic JavaScript API js-api.js version 0.6 - August 8 2007

   Copyright 2007 (c) Milonic Solutions Limited. All Rights Reserved.
   This is a commercial software product, please visit http://www.milonic.com/ for more information.
   Open Source and Non-Profit Licenses are available on request.
*/

var ua=navigator.userAgent.toLowerCase()
isOpera=(ua.indexOf('opera')>-1)
isSafari=(ua.indexOf('safari')>-1||ua.indexOf('konq')>-1)
isGecko=(!isOpera&&!isSafari&&ua.indexOf('gecko')>-1)
isIE=(!isOpera&&ua.indexOf('msie')>-1);
isIE7=(isIE&&ua.indexOf('msie 7')>-1);
isSafari=(ua.indexOf('safari')>-1)
isDTD=(document.compatMode=='CSS1Compat')

var _oA=[];
var jsapi={
	addCSS:function(t,s)
	{
		var S=document.createElement("link");
		S.href=jsapi.getPath()+"themes/"+s+"/"+t+"/"+s+".css";
		S.rel="stylesheet";
		S.type="text/css";
		document.getElementsByTagName('HEAD').item(0).appendChild(S);
	},
	fileDetail:function(f)
	{
		f=f.split("/");
		return{file:f[f.length-1]}
	},
	getHTMLValue:function(h,n)
	{
		var A=h.split(n)
		B=A[1].split(" ")
		return this.ereg_replace("\"","",B[0])
	},
	getPath:function()
	{
		var S,a,s,V
		S=document.getElementsByTagName("script")
		for(a=0;a<S.length;a++)
		{
			V=S[a].src
			s=V.split("\/");
			if(s[s.length-1]=="js-api.js"){
				return V.substr(0,V.length-9)
			}
		}
	},
	include:function(f)
	{
		var P=this.getPath()
		document.write('<scr'+'ipt type="text/javascript" src="'+P+'js-api-'+f+'.js"></scr'+'ipt>');
	},
	max:function()
	{
		var v,a,n;
		n=0;
		v=arguments;
		for(a=0;a<v.length;a++)if(!isNaN(v[a])&&v[a]>n)n=v[a];
		return n;
	},	
	min:function()
	{
		var v,a,n;
		v=arguments;
		for(a=0;a<v.length;a++){
			if(!n)n=v[a];
			if(!isNaN(v[a])&&v[a]<n&&v[a]>0)n=v[a];
		}
		return n;
	},
	getBrowserDimension:function()
	{
		var d,e,b,h,w,S;
		d=document;
		e=d.documentElement;
		b=d.body;
		
		//alert("b.clientHeight "+b.clientHeight)
		//alert("window.innerHeight "+window.innerHeight)
		//alert("e.clientHeight "+e.clientHeight)
		
		// Need to tidy this function - code is quite poor, does work though!
		if(isIE){
			if(e.clientHeight)h=e.clientHeight; else h=b.clientHeight
			w=b.clientWidth
		}
		else
		{
			h=window.innerHeight
			w=window.innerWidth
		}
		
		//h=this.min(b.clientHeight,window.innerHeight,e.clientHeight);
		//w=this.min(b.clientWidth,window.innerWidth);
		if(e.clientWidth)w=e.clientWidth;
		S=this.getScrolling(d);
		//alert(S.top)
		return {
			height:h,
			width:w,
			scrollTop:S.top,
			scrollLeft:S.left
		}
	},
	getScrolling:function(d)
	{
		var e=d.documentElement,b=d.body,l,t;
		// Need to tidy this function - code is quite poor but it works, sort of
		l=0
		t=0
		if(e.scrollTop)t=e.scrollTop
		if(e.scrollLeft)l=e.scrollLeft
		if(b.scrollTop)t=b.scrollTop
		if(b.scrollLeft)l=b.scrollLeft		
		//alert("e.scrollTop "+e.scrollTop)
		//alert("b.scrollTop "+b.scrollTop)
		//alert(t)
		return {left:l,top:t}
	},
	setBrowserDimension:function()
	{
		/*
		var d,e,b,h,w;
		d=document;
		e=d.documentElement;
		b=d.body;
		h=this.min(b.clientHeight,window.innerHeight,e.clientHeight);
		w=this.min(b.clientWidth,window.innerWidth);
		if(e.clientWidth)w=e.clientWidth;
		return {
			height:h,
			width:w,
			scrollLeft:Math.max(e.scrollLeft,b.scrollLeft),
			scrollTop:Math.max(e.scrollTop,b.scrollTop)
		}
		*/
	},
	getDimension:function(v)
	{
		v=this.getObj(v)
    		return {width:v.offsetWidth,height:v.offsetHeight}
	},
	setDimension:function()
	{
		var g,p,v;
		p="px";
		g=arguments;
		v=this.getObj(g[0]);
		if(g[1]!=null)v.style.height=g[1]+p;
		if(g[2]!=null)v.style.width=g[2]+p;
	},	
	getPosition:function(g)
	{
		g=this.getObj(g)
		var h,w,o,t,l
		h=g.offsetHeight;                         // h is the height
		w=g.offsetWidth;                          // w is the width				
		t=0                                         // set top value to zero by default
		l=0                                         // set left value to zero by default
		while(g!=null)                              // Loop through all offsettops 
		{
			//alert(t + "-  " + g.id)
			t+=g.offsetTop;
			l+=g.offsetLeft;
			g=g.offsetParent;              // Incluing the parent values.
		}

/*				
			if(sfri)                                     // If the browser is Safari will need to make small adjustment
			{
				l-=_dBL                             // deduct document.body.offsetLeft from the left value
				t-=_dBT                             // deduct document.body.offsetTop from the top value
			}
*/

			
/*				if(mac&&_dB)                                      // IE on the Mac takes the margin into account, this bit fixes it.
			{
				
				_mcdb=_dB.currentStyle
				_mcf=_mcdb.marginTop
				if(_mcf)t=t+$pU(_mcf)              // if a Top margin has been specified (Default is 10 by the way)
				_mcf=_mcdb.marginLeft
				if(_mcf)l=l+$pU(_mcf)              // if a Left margin has been specified (Default is 10 by the way)
			}
*/					
			//_g1=new Array(t,l,h,w);                 // put all the above found values into an array for passing back to the caller
			
		return{top:t,left:l}
	},
	setPosition:function()
	{
		var g,p,v;
		p="px";
		g=arguments
		v=g[0]
		this.makeMovable(v)
		if(g[1]!=null)v.style.top=g[1]+p;
		if(g[2]!=null)v.style.left=g[2]+p;
	},
	getLoc:function(v)
	{
		var p=this.getPosition(v),d=this.getDimension(v)
		return{t:p.top,l:p.left,h:d.height,w:d.width}
	},
	setLoc:function()
	{
		var g,p,v,t=null,l=null,h=null,w=null;
		g=arguments
		v=g[0]
		this.setPosition(v,g[1],g[2])
		this.setDimension(v,g[3],g[4])
	},
	getObj:function(v,w)
	{
		if(!w)w=window
		if(typeof(v)=="string")v=w.document.getElementById(v);
		return v
	},	
	setAlignment:function(o,p)
	{
		o=this.getObj(o)
		var d,t,l,r,a
		l=null
		t=null
		d=this.getBrowserDimension()
		r=this.getDimension(o)
		o.style.position="absolute"
		a=this.getDimension(o)
		if(p.indexOf("left")!=-1)l=0;
		if(p.indexOf("center")!=-1)l=(d.width/2)-(a.width/2)
		if(p.indexOf("right")!=-1)l=(d.width)-(a.width)
		if(p.indexOf("top")!=-1)t=0
		if(p.indexOf("middle")!=-1)t=(d.height/2)-(a.height/2)
		if(p.indexOf("bottom")!=-1)t=(d.height)-(a.height)
		if(t)t=t+d.scrollTop;
		if(l)l=l+d.scrollLeft;
		this.setPosition(o,t,l)
	},
	fixAligment:function(o,p)
	{
		// This function keeps an object at the specified position regardless of browser dimension changes.
		//setAlignment
		//alert()
	},
	makeMovable:function(v)
	{
		v.style.position="absolute"
	},
	show:function(v)
	{
		v.style.visibility="visible"
	},	
	hide:function(v)
	{
		v.style.visibility="hidden"
	},	
	removeHTML:function(v)
	{
		var t,i,T,x;
		t="";
		T=v.length;
		for(i=0;i<T;i++){if(v.charAt(i)!="<")t+= v.substr(i,1);else{x=v.substr(i).indexOf(">");i+=x;}}
		return(t);
	},
	makeCamelName:function(v)
	{
		var p=v.indexOf("-")
		while(p>0){
			v=v.substr(0,p)+v.substr(p+1,1).toUpperCase()+v.substr(p+2,v.length);
			p=v.indexOf("-");
		}
		return v
	},
	parseStyle:function(v,s)
	{
		var x,p=s.split(";"),pos,P,V;
		for(x=0;x<p.length;x++){
			A=p[x].split(":");
			P=A[0];
			V=A[1];
			if(V)eval("v.style."+jsapi.makeCamelName(P)+"='"+V+"'");
		}
		
	},
	fixedPosition:function(v,f)
	{	
		var F
		if((isIE7&&isDTD)||!isIE)v.style.position="fixed";
		else{
			F=0;
			if(f)F=f
			this.followScroll(v,null,F)
		}
	},
	copyOf:function()
	{
	
	},
	newObj:function()
	{
		
	},
	getMouseCoords:function(e)
	{
		if(window.event)e=window.event
		return{x:e.clientX,y:e.clientY}
	},
	addEvent:function(o,t,f)
	{
		if(o.attachEvent)o.attachEvent("on"+t,f);else o.addEventListener(t,f,false)
	},
	removeEvent:function(o,t,f)
	{
		if(o.detachEvent)o.detachEvent("on"+t,f);else o.removeEventListener(t,f,false)
	},
	cancelEvent:function(e)
	{
		if(!e)return false;
		e.returnValue=false;
		e.cancelBubble=true
		if(e.preventDefault){
			e.preventDefault();
			e.stopPropagation&&e.stopPropagation()
		}
		return false
	},
	resize:function(v)
	{
		//function to resize an object
	},
	keypressed:function()
	{
		// function to get the key that has been pressed
	},
	addClass:function()
	{
	},	
	randomizeArray: function(v)
	{
		return v;
	},
	extend:function(d)
	{
		for(var p in jsapi)d[p]=jsapi[p];
		return d;
	},
	addElement:function(d,v)
	{
		var e=document.createElement(v);
		d.appendChild(e);
		return e
	},
	fixZI:function(v)
	{	
		var e,p;
		if(isIE&&!isIE7){
			if(!v.iframe){
				e=this.addElement(document.body,"iframe",v);
				e.src="javascript:false";
				e.style.filter="Alpha(Opacity=0)"
				v.iframe=e
			}
			e=v.iframe
			p=this.getPosition(v)
			this.setPosition(e,p.top,p.left)
			p=this.getDimension(v)
			this.setDimension(e,p.height,p.width)
			e.style.zIndex=null
		}
	},
	fixArgs:function(o,a,s)
	{
		s=s.split(",")
		for(x=0;x<s.length;x++)        // Loop through each item insde fixargs string
		if(a[x])     
		//alert("o."+s[x]+"='"+a[x]+"'")
		eval("o."+s[x]+"='"+a[x]+"'")  // set the object property based on the argument
	},
	extractArgs:function(i)
	{
		var p,v,a,q,O={},C=";",B="`";
		i=i.split(C);
		for(var a=0;a<i.length;a++){	
			var q=i[a].indexOf(B);
			if(q!=-1){
				_tI=i[a]
				if(q==i[a].lastIndexOf(B)){
					for(var b=a;b<i.length;b++){
						if(i[b+1]){
							_tI+=C+i[b+1];
							a++;
							if(i[b+1].indexOf(B)!=-1)b=i.length;
						}
					}
				}
				i[a]=_tI.replace(/`/g,"")
			}
			q=i[a].indexOf("=");
			if(q!=-1){
				v=i[a].slice(q+1);
				p=i[a].slice(0,q);
			}
			eval("O."+p+"=\""+v+"\"")
		}
		return O
	},	
	replace:function(n,r,h,p)
	{
		var e=new RegExp(n,p);
		return h.replace(e,r);
	},
	ereg_replace:function(n,r,h) // needle,replacement,haystack
	{
		return this.replace(n,r,h,"g");
	},
	eregi_replace:function(n,r,h)// needle,replacement,haystack
	{
		return this.replace(n,r,h,"gi");
	},
	lastFunc:function()
	{
	
	},
	setDocState:function()
	{
		jsapi.documentState="complete"
	},
	docState:function()
	{
		var d=document,r=d.readyState;
		if(r&&r!="complete")setTimeout("jsapi.docState()",50);else jsapi.setDocState();
		if(!r)d.addEventListener('DOMContentLoaded',jsapi.setDocState,false);
	},
	testfunction:
	{
		alert:function()
		{
			alert("Test Alert")
		},
		alert2:function()
		{
			alert("Test Alert 2")
		}	
	}
}
jsapi.documentState="loading"
setTimeout("jsapi.docState()",50)







Function.prototype.closure=function(){
	var M=this,obj=arguments[0];
	return function(){
		return M.apply(obj);
	}
}


//alert(jsapi.getScriptPath())

//jsapi.init()

function showObjProps(_w)
{
	a=document.getElementById("objProps")
	if(!a)
	{
		var a=document.createElement("div")
		a.id="objProps" 
		if(document.body.appendChild)
		{
			document.body.appendChild(a)
			a.style.position="absolute"
			a.style.border="1px solid gray"
			a.style.padding="4px"
			a.style.top="200px"
			a.style.left="100px"
			a.style.height="650px"
			a.style.width="450px"
			a.style.fontFamily="verdana"
			a.style.fontSize="10px"
			a.style.overflow="scroll"
			a.style.background="white"
		}

	}
	
	var h=""
	for(_cO in _w)
	{
		//if(_w[_cO]!="")
		h+=_cO+" - '" +_w[_cO]+"'<br>"
	}
	h.replace(/ /g,"&nbsp;") 
	a.innerHTML=h
}


