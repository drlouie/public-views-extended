
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

if (document.bbsform.message.value == "%%Muamessage%%" || document.bbsform.message.value == " " || document.bbsform.message.value.length <= 0) {
    missingdrop += "\n     - Message Body is missing";
	if (thefirst == "") { thefirst = "message"; }
}else if (document.bbsform.message.value.length <= 5) {
    missingdrop += "\n     - Message Body must be at least 5 characters in length";
	if (thefirst == "") { thefirst = "message"; }
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

