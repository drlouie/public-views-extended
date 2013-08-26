function dashstrip_last() {
	var mods = document.getElementsByClassName('module');
	mods.each(function(mod){
		var last = mod.getElementsByTagName('LI');
		var len = last.length;
		for (i = 0; i < len; i++) {
			if (i == (len-1)) {
				if (!last[i].hasClassName('last')) {
					last[i].toggleClassName('last');
				}
			} else {
				if (last[i].hasClassName('last')) {
					last[i].toggleClassName('last');
				}
			}
		} 
	});
}

function init() {
	dashstrip_last();
}