function InitializeForm() { 
	document.bbsform.name.value = getcookie('name'); 
	document.bbsform.email.value = getcookie('email');
	document.bbsform.url.value = getcookie('url'); 
} 
 
function getcookieval (offset) { 
	var endstr = document.cookie.indexOf (";", offset); 
	if (endstr == -1) 
	endstr = document.cookie.length; 
	return unescape(document.cookie.substring(offset, endstr)); 
} 
 
function getcookie (name) { 
	var arg = name + "="; 
	var alen = arg.length; 
	var clen = document.cookie.length; 
	var i = 0; 
	while (i < clen) { 
		var j = i + alen; 
		if (document.cookie.substring(i, j) == arg) 
		return getcookieval (j); 
		i = document.cookie.indexOf(" ", i) + 1; 
		if (i == 0) break; 
	} 
	return null; 
} 
 
function setcookie (name, value) { 
	var argv = setcookie.arguments; 
	var argc = setcookie.arguments.length; 
	var expires = (argc > 2) ? argv[2] : null; 
	var path = (argc > 3) ? argv[3] : null; 
	var domain = (argc > 4) ? argv[4] : null; 
	var secure = (argc > 5) ? argv[5] : false; 
	document.cookie = name + "=" + escape (value) + 
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
	((path == null) ? "" : ("; path=" + path)) + 
	((domain == null) ? "" : ("; domain=" + domain)) + 
	((secure == true) ? "; secure" : ""); 
} 
 
function set_name(form) { 
	var expdate = new Date (); 
	expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000 * 31)); 
	var username = form.name.value 
	var emailname = form.email.value
	var linkname = form.url.value
	if (username != "") { 
		setcookie ("forumname", username, expdate); 
	} 
	if (emailname != "") { 
		setcookie ("forumemail", emailname, expdate); 
	}
	if (linkname != "") {
		setcookie ("forumlink", linkname, expdate);
	}
}