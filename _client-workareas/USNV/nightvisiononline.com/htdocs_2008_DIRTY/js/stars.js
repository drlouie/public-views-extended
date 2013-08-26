//preload stars
pic1= new Image(); pic1.src="/nvi/star_blackBG_" + "0" + "star.gif";
pic2= new Image(); pic2.src="/nvi/star_blackBG_" + ".5" + "star.gif";
pic3= new Image(); pic3.src="/nvi/star_blackBG_" + "1" + "star.gif";
pic4= new Image(); pic4.src="/nvi/star_blackBG_" + "1.5" + "star.gif";
pic5= new Image(); pic5.src="/nvi/star_blackBG_" + "2" + "star.gif";
pic6= new Image(); pic6.src="/nvi/star_blackBG_" + "2.5" + "star.gif";
pic7= new Image(); pic7.src="/nvi/star_blackBG_" + "3" + "star.gif";
pic8= new Image(); pic8.src="/nvi/star_blackBG_" + "3.5" + "star.gif";
pic9= new Image(); pic9.src="/nvi/star_blackBG_" + "4" + "star.gif";
pic10= new Image(); pic10.src="/nvi/star_blackBG_" + "4.5" + "star.gif";
pic11= new Image(); pic11.src="/nvi/star_blackBG_" + "5" + "star.gif";


var currStar = '0';
var currPID = '0';
var loggedIn = '0';
function setCurrentStar(nume,pid) { 
//	alert(nume + ' ' + pid);
	currStar = nume; 
	currPID = pid; 
}

function resetStars() { 
//	alert('k');
	if (document.images.StarRatesWhite) { document.images.StarRatesWhite.src = '/nvi/starRate_whiteBG_' + currStar + 'star.gif'; }
	if (document.images.StarRatesBlack) { document.images.StarRatesBlack.src = '/nvi/starRate_blackBG_' + currStar + 'star.gif'; }
}
function mouseStars(nume) {
//	alert('k');
	if (document.images.StarRatesWhite) { document.images.StarRatesWhite.src = '/nvi/starRate_whiteBG_' + nume + 'star.gif'; }
	if (document.images.StarRatesBlack) { document.images.StarRatesBlack.src = '/nvi/starRate_blackBG_' + nume + 'star.gif'; }
}

var PID = '0';
var callID = '0';
function rateMe(nume) {
	resetStars();
	trigger('/Rate.htm?PID=' + currPID + '&rate=' + nume + '&c='+callID+'');
	callID++;
}
