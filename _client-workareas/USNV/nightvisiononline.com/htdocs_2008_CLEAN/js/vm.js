	var firstOff = new Image();
	var firstOn = new Image();
	var firstOnOver = new Image();

	var prevOff = new Image();
	var prevOn = new Image();
	var prevOnOver = new Image();

	var nextOff = new Image();
	var nextOn = new Image();
	var nextOnOver = new Image();

	var lastOff = new Image();
	var lastOn = new Image();
	var lastOnOver = new Image();

	firstOff.src = "/nvi/pagingButtons_firstOff.gif";
	firstOn.src = "/nvi/pagingButtons_firstOn.gif";
	firstOnOver.src = "/nvi/pagingButtons_firstOnOver.gif";	

	prevOff.src = "/nvi/pagingButtons_prevOff.gif";
	prevOn.src = "/nvi/pagingButtons_prevOn.gif";
	prevOnOver.src = "/nvi/pagingButtons_prevOnOver.gif";	

	nextOff.src = "/nvi/pagingButtons_nextOff.gif";
	nextOn.src = "/nvi/pagingButtons_nextOn.gif";
	nextOnOver.src = "/nvi/pagingButtons_nextOnOver.gif";	

	lastOff.src = "/nvi/pagingButtons_lastOff.gif";
	lastOn.src = "/nvi/pagingButtons_lastOn.gif";
	lastOnOver.src = "/nvi/pagingButtons_lastOnOver.gif";		
	

var theCB = 0;
var countT = 0;
function trigger(myurl) {
	var myurl = myurl;

	if (myurl.indexOf("?") != -1) {
		if (countT != 0) { theCB = '&CB=' + countT + ''; }
		frame.loadpage(''+myurl+'&'+theCB+'');
		countT++;
	}
	else {
		frame.loadpage(''+myurl+'');
	}

}

function hoverTD(who,whoElse) {
	who.style.background = '#23390D';
	who.style.color = '#D6D6D6';
	miElse1 = ""+whoElse+"1";
	miElse2 = ""+whoElse+"2";
	miElse3 = ""+whoElse+"3";
	if (document.getElementById(""+miElse1+"")) {
		document.getElementById(""+miElse1+"").style.background = '#23390D';
		document.getElementById(""+miElse1+"").style.color = '#D6D6D6';
		if (document.getElementById(""+miElse2+"")) {
			document.getElementById(""+miElse2+"").style.background = '#23390D';
			document.getElementById(""+miElse2+"").style.color = '#D6D6D6';
		}
		if (document.getElementById(""+miElse3+"")) {
			document.getElementById(""+miElse3+"").style.background = '#23390D';
			document.getElementById(""+miElse3+"").style.color = '#D6D6D6';
		}
	}
}
function backTD(who,whoElse,backbg) {
	who.style.background = ''+backbg+'';
	who.style.color = '#000000';
	miElse1 = ""+whoElse+"1";
	miElse2 = ""+whoElse+"2";
	miElse3 = ""+whoElse+"3";
	if (document.getElementById(""+miElse1+"")) {
		document.getElementById(""+miElse1+"").style.background = ''+backbg+'';
		document.getElementById(""+miElse1+"").style.color = '#000000';
		if (document.getElementById(""+miElse2+"")) {
			document.getElementById(""+miElse2+"").style.background = ''+backbg+'';
			document.getElementById(""+miElse2+"").style.color = '#000000';
		}
		if (document.getElementById(""+miElse3+"")) {
			document.getElementById(""+miElse3+"").style.background = ''+backbg+'';
			document.getElementById(""+miElse3+"").style.color = '#000000';
		}
	}
}



var lasNuevas = new Array();
var lasWiki = new Array();

var newsC = 5;
var todosNews = 0;
function moreNews() {
	// less than 20 or as many available if less
	if (newsC < todosNews) {
		currINNER = ""+ document.getElementById("news").innerHTML +"";
		document.getElementById("news").innerHTML = ""+ currINNER +""+ lasNuevas[newsC] +"";
		newsC++;
	}
}
function lessNews() {
	// less than 20 or as many available if less
	var nuevasNuevas = '';
	if (newsC > 2) {
		document.getElementById("news").innerHTML = '';

		newsC--;
		i = 1;
		while (i < newsC) {
			nuevasNuevas = nuevasNuevas + "" + lasNuevas[i];
			i++;
		}
		document.getElementById("news").innerHTML = ""+ nuevasNuevas +"";
	}

}



var wikiC = 6;
var todosWiki = 0;
function moreWiki() {
	// less than 20 or as many available if less
	if (wikiC < todosWiki) {
		currINNERw = ""+ document.getElementById("wiki").innerHTML +"";
		document.getElementById("wiki").innerHTML = ""+ currINNERw +""+ lasWiki[wikiC] +"";
		wikiC++;
	}
}
function lessWiki() {
	// less than 20 or as many available if less
	var nuevasWiki = '';
	if (wikiC > 2) {
		wikiC--;
		i = 1;
		while (i < wikiC) {
			nuevasWiki = nuevasWiki + "" + lasWiki[i];
			i++;
		}
		document.getElementById("wiki").innerHTML = ""+ nuevasWiki +"";
	}

}
