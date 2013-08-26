var g_iCount = new Number();

// CHANGE THE COUNTDOWN NUMBER HERE - ADD ONE TO IT //
var g_iCount = 15;

function startCountdown(){
       if((g_iCount - 1) >= 0){
               g_iCount = g_iCount - 1;
               numberCountdown.innerText = 'This window will automatically forward itself in ' + g_iCount + ' seconds' ;
               setTimeout('startCountdown()',1000);
       }
		else {
			runSwitch();
		}
}

function runSwitch() {
	document.location.href = 'index.htm';
}


function triggerClose() {
	window.close();
}