/*
   Milonic DHTML Menu Item Activator Module  mmpagehighlighter.js version 1.1 July 13 2005
   This module is only compatible with the Milonic DHTML Menu version 5.16 or higher

   Copyright 2005 (c) Milonic Solutions Limited. All Rights Reserved.
   This is a commercial software product, please visit http://www.milonic.com/ for more information.

	Upload the file to your website, then:
	Add this line AFTER your menu_data.js file: <script src="/mmpagehighlighter.js" type=text/javascript></script>

	Used for highlighting a menu item by showmenu,text or item number based on pagematch properties
	Syntax is:
	
	mmItemActiveByShowMenu("dhtml menu") // highlights a menu item based on its Showmenu value
	mmItemActivateByText("image map sample") // highlights a menu item based on its Text value
	mmItemActivateByNumber(5) // highlights a menu item based on its Numberical Order
	
	The text properties are non case sensitive
*/

function _doHLK(_i){
	_I=_mi[_i]
	$w(_I)
	itemOff(_i);	
}
function _findItem(_txt,_opt){
	for(_a=0;_a<_mi.length;_a++){
		_I=_mi[_a]
		if($tU(_I[_opt])==$tU(_txt))_doHLK(_a)
	}
}
function mmItemActiveByShowMenu(_txt){_findItem(_txt,3)}
function mmItemActivateByText(_txt){_findItem(_txt,1)}
function mmItemActivateByNumber(_txt){_doHLK(_txt)}


/*
//Syntax Samples:
mmItemActiveByShowMenu("dhtml menu")
mmItemActivateByText("about us")
mmItemActivateByNumber(5)
*/