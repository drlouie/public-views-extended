	var showcaseXML = '';
	var theCB = 0;
	var countT = 0;
	function tiralo(myurl) {
		if (myurl == 1) { myurl = "http://www.google.com/"; }
		frame.loadpage(myurl);
		countT++;
	}
	var showingMap = 0;
	var showingPDF = 0;
	var showingSCHEDULE = 0;
	function parseMap(la,lo,a,c,s,z) {
		hideForm1();
		showingMap = 1;
		document.getElementById('divLoad').style.visibility = 'visible';
		tiralo('website_design_gmap.htm?la='+la+'&lo='+lo+'&a='+a+'&c='+c+'&s='+s+'&z='+z+'');
	}
	function closeMap() {
		showingMap = 0;
		document.getElementById('divLoad').style.visibility = 'hidden';
	}
	function castPDF(sid,pid) {
		hideForm1();
		showingPDF = 1;
		document.getElementById('divLoad').style.visibility = 'visible';
		tiralo('website_development_pdfer.htm?sid='+sid+'&pid='+pid+'&pdf=1');
	}
	function closePDF() {
		showingPDF = 0;
		document.getElementById('divLoad').style.visibility = 'hidden';
	}
	function scheduleWalkthrough(sid,pid) {
		toggleForm1();
		showingSCHEDULE = 1;
//		document.getElementById('divLoad').style.visibility = 'visible';
//		tiralo('web_design_scheduler.htm?sid='+sid+'&pid='+pid+'&pdf=1');
	}
	function closeSCHEDULER() {
		showingSCHEDULE = 0;
//		document.getElementById('divLoad').style.visibility = 'hidden';
		hideForm1();
	}
	
	
function hS(){
window.status=''
return true
}