var g_iCount = new Number();

// CHANGE THE COUNTDOWN NUMBER HERE - ADD ONE TO IT //
var g_iCount = 20;

function startCountdown(){
       if((g_iCount - 1) >= 0){
               g_iCount = g_iCount - 1;
               numberCountdown.innerText = 'This window will automatically close in ' + g_iCount + ' seconds' ;
               setTimeout('startCountdown()',1000);
       }
		else {
			runKill();
		}
}

function runKill() {
	window.close();
}


function triggerClose() {
	window.close();
}