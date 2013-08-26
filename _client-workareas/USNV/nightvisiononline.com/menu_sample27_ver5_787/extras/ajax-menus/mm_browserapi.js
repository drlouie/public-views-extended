/*
   Milonic DHTML Menu - Menu Editing API Module mm_milonicbrowserapi.js version 0.3 - May 8 2007

   Copyright 2007 (c) Milonic Solutions Limited. All Rights Reserved.
   This is a commercial software product, please visit http://www.milonic.com/ for more information.
   Open Source and Non-Profit Licenses are available on request.
*/

function mm_ajax(){}
var _mO=new Object
mm_ajax.prototype={
	version:"1.0",
	errorReporting:0,
	getAjaxObj:function()
	{ 
		var o
		try{o=new XMLHttpRequest()}
		catch(e){
			try{o=new ActiveXObject("Msxml2.XMLHTTP")}
			catch(e){o=new ActiveXObject("Microsoft.XMLHTTP")}
		}
		return o;
	},	
	stateChanged:function()
	{
		if(_mO.o.readyState==4||_mO.o.readyState=="complete")
		{
			if(_mO.o.status>=200 && _mO.o.status<300)
			{
				if(typeof(_mO.func)+" "=="function "){
					eval(_mO.func(_mO.o))
				}
				else
				{
					for(var c in _mO.func){
						if(c==_mO.p)_mO.func[c]=_mO.o.responseText
					}
				}
			}
			else
			{
				if(_mO.t.errorReporting)alert("Error: Return status: "+_mO.o.status)
			}
		}
	},
	load:function()
	{
		var g=arguments
		_mO.func=g[1];
		_mO.o=this.getAjaxObj();
		_mO.p=g[2];
		_mO.t=this
		//alert(this.url)
		if(!g[0])
		{
			if(!this.url)
			{
				if(this.errorReporting)alert("No URL Specified")
				return
			}
			g[0]=this.url
			if(this.queryString)g[0]+="?"+this.queryString
		}
		if(!g[1])
		{
			if(!this.action)
			{
				if(this.errorReporting)alert("No Action Specified")
				return
			}
			_mO.func=this.action;
		}
		if(_mO.o)
		{
			_mO.o.onreadystatechange=this.stateChanged
			_mO.o.open("GET",g[0],true)
			_mO.o.send(null)
		}

	}
}



function _maxm(f){
	_ajM=f.substr(5,f.length);
	ma=new mm_ajax();
	ma.errorReporting=true;
	ma.url=_ajM;
	ma.action=updateStyle;
	ma.load();
}

function updateStyle(ajaxObject){
	var i,M,T;
	eval(ajaxObject.responseText);
	i=_itemRef;
	M=_mn;
	_mi[i][3]=_m[M][1];
	T=getMenuByName(_mi[i][3]);
	if(!gmobj("menu"+T))createNewMenu(M); else M=T;
	_popi(i);
	menuDisplay(M,1);
}