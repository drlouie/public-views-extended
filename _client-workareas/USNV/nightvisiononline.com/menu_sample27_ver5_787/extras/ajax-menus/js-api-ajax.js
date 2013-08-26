/*
   Milonic JavaScript API js-api-ajax.js version 0.2 - August 18 2007

   Copyright 2007 (c) Milonic Solutions Limited. All Rights Reserved.
   This is a commercial software product, please visit http://www.milonic.com/ for more information.
   Open Source and Non-Profit Licenses are available on request.
*/
jsapi=jsapi.extend({ajax:function(){}})
jsapi.ajax.prototype={
	stateChanged:function(){
		if (this.A.readyState==4){
			this.status=this.A.status;
			if(this.status==200)if(this.action)this.action(this.A.responseText, this.A.responseXML)
		}
	},
	getAjaxObject:function(t){
		var o;
		try{o=new XMLHttpRequest()}
		catch(e){
			try{o=new ActiveXObject("Msxml2.XMLHTTP")}
			catch(e){o=new ActiveXObject("Microsoft.XMLHTTP")}
		}
		return o;
	},	
	load:function(){
		var t=this;
		t.status=null;
		t.A=t.getAjaxObject();
		t.A.onreadystatechange=function(){t.stateChanged()};
		t.A.open("GET",t.url,true);
		t.A.setRequestHeader("Pragma","no-cache");
		t.A.setRequestHeader("Cache-control","no-cache");
		t.A.send(null);
	},
	upload:function(){
		var t=this;
		t.A=t.getAjaxObject(),E=t.errorReporting,P="";
		if(t.parameters)P="?"+t.parameters;
		if(!t.url){if(E)alert("AJAX Error: No URL Specified");return}
		t.A.onreadystatechange=function(){t.stateChanged()};
		t.A.open("POST",t.url+P,true);
		t.A.action=t.action;
		t.A.errorRep=E;
		t.A.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		t.A.setRequestHeader("Content-length", t.content.length);
		t.A.setRequestHeader("Connection", "close");
		t.A.send("content="+t.content);
	}
}

/*
jsapi.ajax.prototype={
	getAjaxObject:function(t){
		var o;
		try{o=new XMLHttpRequest()}
		catch(e){
			try{o=new ActiveXObject("Msxml2.XMLHTTP")}
			catch(e){o=new ActiveXObject("Microsoft.XMLHTTP")}
		}
		return o;
	},
	stateChanged:function(){
		var t=this;
		
		if(t.A.readyState==4||t.A.readyState=="complete"){
			if(t.A.status>=200 && t.A.status<300){
				if(typeof(t.A.action)+" "=="function ")eval(t.A.action(t.A))
			}
			else{
				if(t.A.errorRep)alert("AJAX Error: Request Failed with a HTTP Status of: "+t.A.status)
			}
		}
	},
	load:function(){
		var t=this;
		t.A=t.getAjaxObject(),E=t.errorReporting;
		if(t.A){
			if(!t.url){if(E)alert("AJAX Error: No URL Specified");return}
			
			t.A.onreadystatechange=function(){t.stateChanged();};
			
			
			//t.A.onreadystatechange=t.stateChanged.closure(t);
			t.A.action=t.action;
			t.A.errorRep=E;
			t.A.open("GET",t.url,true);
			t.A.send(null);
		}
	},
	upload:function(){
		var t=this;
		t.A=t.getAjaxObject(),E=t.errorReporting,P="";
		if(t.parameters)P="?"+t.parameters;
		if(!t.url){if(E)alert("AJAX Error: No URL Specified");return}
		//t.A.onreadystatechange=t.stateChanged.closure(t);
		t.A.open("POST",t.url+P,true);
		t.A.action=t.action;
		t.A.errorRep=E;
		t.A.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		t.A.setRequestHeader("Content-length", t.content.length);
		t.A.setRequestHeader("Connection", "close");
		t.A.send("content="+t.content);
	}
}
*/


function _maxm(f){
	_ajM=f.substr(5,f.length);
	ma=new jsapi.ajax();
	ma.itemRef=_itemRef
	ma.errorReporting=true;
	ma.url=_ajM;
	ma.action=updateStyle;
	ma.load();
}

function updateStyle(ajaxText,ajaxXML){
	var i,M,T;
	eval(ajaxText);
	i=this.itemRef;
	M=_mn;
	_mi[i][3]=_m[M][1];
	T=getMenuByName(_mi[i][3]);
	if(!gmobj("menu"+T))createNewMenu(M); else M=T;	
	if(i==_trueItemRef){
		_ofMT=1;
		_popi(i);
	}
	_ofMT=0;
}
