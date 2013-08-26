
function validateInfo() {
var missingdrop = "";
var thefirst = "";

if (document.bbsform.subject.value == "" || document.bbsform.subject.value == " " || document.bbsform.subject.value.length <= 0) {
    missingdrop += "\n     - Message Subject is missing";
	if (thefirst == "") { thefirst = "subject"; }
}

if (!document.bbsform.url.value == "" && !document.bbsform.url.value == " " && !document.bbsform.url.value.length <= 0) {
    if (document.bbsform.url.value.indexOf("://") == -1) {
		missingdrop += "\n     - URL must have the type of server the link is on (http:// or ftp:// or rns:// etc...)";
		missingdrop += "\n       Example: http://www.mywebsite.com/";
		if (thefirst == "") { thefirst = "url"; }
	}
}

if (document.bbsform.message.value == "" || document.bbsform.message.value == " " || document.bbsform.message.value.length <= 0) {
    missingdrop += "\n     - Message Body is missing";
	if (thefirst == "") { thefirst = "message"; }
}else if (document.bbsform.message.value.length <= 4) {
    missingdrop += "\n     - Message Body must be at least 5 characters in length";
	if (thefirst == "") { thefirst = "message"; }
}


// Check Common form fields
if (document.bbsform.name.value == "" || document.bbsform.name.value == " " || document.bbsform.name.value.length <= 0) {
    missingdrop += "\n     - Username is missing";
	if (thefirst == "") { thefirst = "name"; }
}
	
// CHECK EMAIL
  if (document.bbsform.email.value == "")	{
    missingdrop += "\n     - Email Address is missing";
	if (thefirst == "") { thefirst = "email"; }
  } else if ((document.bbsform.email.value.indexOf('\@') == -1) || 
        (document.bbsform.email.value.indexOf('.') == -1)) {
    missingdrop += "\n     - Email Address's Format should be: username\@company.com";
	if (thefirst == "") { thefirst = "email"; }
  }
  if ((document.bbsform.email.value.indexOf(',') != -1)) {
    missingdrop += "\n     - Commas are not allowed in email addresses";
	if (thefirst == "") { thefirst = "email"; }
  }
  if ((document.bbsform.email.value.indexOf(';') != -1)) {
    missingdrop += "\n     - Semicolons are not allowed in email addresses";
	if (thefirst == "") { thefirst = "email"; }
  }
  if ((document.bbsform.email.value.indexOf(':') != -1)) {
    missingdrop += "\n     - Colons are not allowed in email addresses";
	if (thefirst == "") { thefirst = "email"; }
  }
  if ((document.bbsform.email.value.indexOf('&') != -1)) {
    missingdrop += "\n     - Ampersands are not allowed in email addresses";
	if (thefirst == "") { thefirst = "email"; }
  }
  if ((document.bbsform.email.value.indexOf(' ') != -1)) {
    missingdrop += "\n     - Spaces are not allowed in email addresses";
	if (thefirst == "") { thefirst = "email"; }
  }


if (document.bbsform.pDub.value == "" || document.bbsform.pDub.value == " " || document.bbsform.pDub.value.length <= 0) {
    missingdrop += "\n     - Password is missing";
	if (thefirst == "") { thefirst = "pDub"; }
}else if (document.bbsform.pDub.value.length <= 7 || document.bbsform.pDub.value.length >= 13) {
    missingdrop += "\n     - Password must be between 8-12 characters in length";
	if (thefirst == "") { thefirst = "pDub"; }
}else if (document.bbsform.pDub2.value == "" || document.bbsform.pDub2.value == " " || document.bbsform.pDub2.value.length <= 0) {
    missingdrop += "\n     - Re-Type Password is missing";
	if (thefirst == "") { thefirst = "pDub2"; }
}else if (document.bbsform.pDub.value != document.bbsform.pDub2.value) {
    missingdrop += "\n     - Password and Re-Type Password dont match!";
	if (thefirst == "") { thefirst = "pDub"; }
}

if (document.bbsform.challenger.value == "" || document.bbsform.challenger.value == " " || document.bbsform.challenger.value.length <= 0) {
    missingdrop += "\n     - Challenge Code must be entered";
	if (thefirst == "") { thefirst = "challenger"; }
}else if (document.bbsform.challenger.value.length <= 5) {
    missingdrop += "\n     - Challenge Code must be 6 characters in length";
	if (thefirst == "") { thefirst = "challenger"; }
}


  
// If anything comes back wrong alert and detain form, else submit info
if (missingdrop != "") {
   	missingdrop ="___________________________________________                   \n\n" + "  Sorry, we cant process your request because the\n  following fields are either blank or filled incorrectly:\n" + "___________________________________________                   \n\n" +
   	missingdrop + "\n\n___________________________________________                   " + "\n\n   To continue, check fields and submit form again!" + "\n___________________________________________";
    alert(missingdrop);
	document.bbsform[thefirst].focus();
    return false;
}
else {
	htmlUsOut();
	return true;
}
}

// HTML TAGGING SCRIPT FOR HTML 4.0 COMPLIANT CHARACTERS ON ALL BROWSERS
// By Drlouie \@ NetMedia Solutions
// info\@NetMediaSol.com for help
// Copyright 2001 NetMedia Solutions
function htmlUsOut() {
	leName = document.bbsform.name.value;
	leName = leName.replace(/®/g, "&reg;");
	leName = leName.replace(/™/g, "&#153;");
	leName = leName.replace(/©/g, "&copy;");
	leName = leName.replace(/‘/g, "&#8216;");
	leName = leName.replace(/'/g, "&#8216;");
	leName = leName.replace(/\\"/g, "&#34;");
	leName = leName.replace(/\\n\\n/g, "<br><br>");
	leName = leName.replace(/\\n/g, "<br>");
	leName = leName.replace(/\\/g, "");
	leName = leName.replace(/>/g, "&gt;");
	leName = leName.replace(/</g, "&lt;");
	leName = leName.replace(/}/g, "[");
	leName = leName.replace(/{/g, "]");
	document.bbsform.name.value = leName;

	
	leSubject = document.bbsform.subject.value;
	leSubject = leSubject.replace(/®/g, "&reg;");
	leSubject = leSubject.replace(/™/g, "&#153;");
	leSubject = leSubject.replace(/©/g, "&copy;");
	leSubject = leSubject.replace(/‘/g, "&#8216;");
	leSubject = leSubject.replace(/'/g, "&#8216;");
	leSubject = leSubject.replace(/\\"/g, "&#34;");
	leSubject = leSubject.replace(/\\/g, "");
	leSubject = leSubject.replace(/>/g, "&gt;");
	leSubject = leSubject.replace(/</g, "&lt;");
	leSubject = leSubject.replace(/}/g, "[");
	leSubject = leSubject.replace(/{/g, "]");
	document.bbsform.subject.value = leSubject;
	
	leMessage = document.bbsform.message.value;
	leMessage = leMessage.replace(/®/g, "&reg;");
	leMessage = leMessage.replace(/™/g, "&#153;");
	leMessage = leMessage.replace(/©/g, "&copy;");
	leMessage = leMessage.replace(/‘/g, "&#8216;");
	leMessage = leMessage.replace(/'/g, "&#8216;");
	leMessage = leMessage.replace(/\\"/g, "&#34;");
	leMessage = leMessage.replace(/\\/g, "");
	leMessage = leMessage.replace(/>/g, "&gt;");
	leMessage = leMessage.replace(/</g, "&lt;");
	leMessage = leMessage.replace(/}/g, "[");
	leMessage = leMessage.replace(/{/g, "]");

	document.bbsform.message.value = leMessage;
}

