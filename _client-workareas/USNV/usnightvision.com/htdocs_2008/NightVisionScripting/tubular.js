if (!defaultHighlight) { var defaultHighlight = '#718255'; }
var estaViendo = 'tech';
function moverTabs(which,who) {
	if (estaViendo != who) { which.style.color='#A41110'; }
}
function moutTabs(which,who) {
	if (estaViendo != who) { which.style.color=defaultHighlight; }
}

function toggleTab(who) {
	if (estaViendo != who) {
		if (estaViendo != '') {
			clearAllViendo();
		}
		estaViendo = who;
		document.images.buyithereTitle.src = 'NightVisionImages/buyithereTitle_trans.gif';
		document.getElementById("dynoLayer").style.visibility = 'visible';
		document.getElementById("dynoLayer").innerHTML = document.getElementById(""+who+"Layer").innerHTML;
		document.getElementById(""+who+"").style.color = '#000000';
	}
	else {
		clearAllViendo();
	}
}
function clearAllViendo() {
	document.getElementById("dynoLayer").style.visibility = 'hidden'; 
	document.getElementById("dynoLayer").innerHTML = document.getElementById("blankLayer").innerHTML;
	document.images.buyithereTitle.src = 'NightVisionImages/buyithereTitle.gif';
	document.getElementById(""+estaViendo+"").style.color = defaultHighlight;
	estaViendo = '';

}