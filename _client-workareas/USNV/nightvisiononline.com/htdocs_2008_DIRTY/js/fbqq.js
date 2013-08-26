var defIn = 'Your comments: 200 Characters MAX';
var thirdIn = 'Type your comments here: 200 Characters MAX';
var sixthIn = 'Posting comments to a blog requires some typing. Please type in your feedback message here: 200 Characters MAX';
var countBlurs = 0;
var cualIn = '';

var phid = 1;
var pid = 1;
var aln = "FoRcEd_Photography";
var whosAskin = '';
var rootDocT = '';
var cancelAddComment = '';
var hasArtistComments = '';


function checkStat(who,cualIn) {
	countBlurs++;
	if (countBlurs == 6 || countBlurs == 8 || countBlurs == 10) { myNew = sixthIn; }
	else if (countBlurs >= 2) { myNew = thirdIn; }
	else { myNew = defIn; }

	if (cualIn != defIn) {
		if (cualIn == '' || cualIn == ' ') { who.value = myNew; }
		else { who.value = cualIn; }
	}
	else { who.value = myNew; }
}

function contentsChanged(who,cualIn) {
	if (cualIn == defIn || cualIn == thirdIn || cualIn == sixthIn) { who.value = ''; }
	else { who.value = cualIn; }
}

function textLimit() {
	if (document.addComment) {
		if (document.addComment.bod.value.length > 200) {
			document.addComment.bod.value = document.addComment.bod.value.substring(0, 200);
			alert("Your message is longer than 200 characters in length, we have truncated it to be 200 characters long...");
		} 
		return true;
	}
}




function logMeIn() {
	window.open("/login.htm?LL=fg&PID="+phid+"&AN="+aln+"","login");
}


function blanket() {
	viewComments();
}	


function addComment() {
	alert('/FBComments.htm?lz=add&PID=' + phid + '&AN=' + aln + '');
	trigger('/FBComments.htm?lz=add&PID=' + phid + '&AN=' + aln + '');
	countBlurs = 0;
}


function submitComment() {
	if (document.addComment) {
		pid = document.addComment.PID.value;
		an = document.addComment.AN.value;
		bod = document.addComment.bod.value;
		if (bod != defIn && bod != thirdIn && bod != sixthIn && bod != "" && bod != " ") { 
			thebod = bod.replace(/@/gi, "");
			thebod = thebod.replace(/~/gi, "");
			thebod = thebod.replace(/$/gi, "");
			thebod = thebod.replace(/#/gi, "");
			thebod = thebod.replace(/&/gi, "");
			thebod = thebod.replace(/^/gi, "");
			thebod = thebod.replace(/=/gi, "");
			thebod = thebod.replace(/\+/gi, "");
			thebod = thebod.replace(/|/gi, "");
			thebod = thebod.replace(/>/gi, "");
			thebod = thebod.replace(/</gi, "");
			thebod = thebod.replace(/\n/gi, "%%br%%");
			// pre trans cleanup
			trigger('/FBComments.htm?lz=submitC&PID=' + pid + '&AN=' + an + '&mes=' + thebod + '');
		}
		else {
			return false;
		}
	}
	countBlurs = 0;
}
function viewComments() {
	trigger('/FBComments.htm?lz=view&PID=' + phid + '&AN=' + aln + '');
	countBlurs = 0;
}
