<script language="Javascript">

///////////////////////////////////////////////////////////////////
// This script and its counterparts are ©2001 NetMedia Solutions //
// For use ONLY with USNightVision.com                           //
// To re-use or have this script re-interfaced for your specific //
// needs please contact SServices\@NetMediaSolutions.com         //
// Prices are cheap for re-interfacing of current scripts and    //
// programs, so email us today to get you own LEGAL programming  //
// licensed for use only on YOUR site(s) or for YOUR purpose(s). //
///////////////////////////////////////////////////////////////////

function validateInfo() {
var missingdrop = "";
var thefirst = "";

// Check Common form fields
if (document.bbsform.name.value == "" || document.bbsform.name.value == " " || document.bbsform.name.value.length <= 0) {
    missingdrop += "\n     - Your USERNAME is missing";
	if (thefirst == "") { thefirst = "name"; }
}
	
// CHECK EMAIL
  if (document.bbsform.email.value == "")	{
    missingdrop += "\n     - Your Email Address is missing";
	if (thefirst == "") { thefirst = "email"; }
  } else if ((document.bbsform.email.value.indexOf('\@') == -1) || 
        (document.bbsform.email.value.indexOf('.') == -1)) {
    missingdrop += "\n     - Your Email Address's Format should be: username\@company.com";
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

if (document.bbsform.subject.value == "" || document.bbsform.subject.value == " " || document.bbsform.subject.value.length <= 0) {
    missingdrop += "\n     - Your Subject is missing";
	if (thefirst == "") { thefirst = "subject"; }
}

if (!document.bbsform.url.value == "" && !document.bbsform.url.value == " " && !document.bbsform.url.value.length <= 0) {
    if (document.bbsform.url.value.indexOf("://") == -1) {
		missingdrop += "\n     - Your URL must have the type of server the link is on (http:// or ftp:// or rns:// etc...)";
		missingdrop += "\n       Example: http://www.mywebsite.com/";
		if (thefirst == "") { thefirst = "url"; }
	}
}

if (document.bbsform.message.value == "%%Muamessage%%" || document.bbsform.message.value == " " || document.bbsform.message.value.length <= 0) {
    missingdrop += "\n     - Your message is missing, you must have a message to post";
	if (thefirst == "") { thefirst = "message"; }
}else if (document.bbsform.message.value.length <= 5) {
    missingdrop += "\n     - Your message must be at least 5 characters in length";
	if (thefirst == "") { thefirst = "message"; }
}

// If anything comes back wrong alert and detain form, else submit info
if (missingdrop != "") {
   	missingdrop ="___________________________________________                   \n\n" + "  Sorry, I cannot process your request because the\n  following fields are either blank or filled incorrectly:\n" + "___________________________________________                   \n\n" +
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
	document.bbsform.message.value = leMessage;
}
</SCRIPT>

<!--MessageInfo-->
<a name="reply"></a>
<table border="0" cellpadding="0" cellspacing="0">
  				<tr align="center">
    				<td width="12" height="12" valign="top"><img src="http://www.nightvisiononline.com/images/topleftcorner_forum.gif"></td>
					<td valign="bottom" height="12" width="209" class="leForumTop" bgcolor="#045E3B"><img src="http://www.nightvisiononline.com/images/spacer.gif" border="0" height="1" width="209"></td>
					<td valign="bottom" height="12" width="100%" class="leForumTop" bgcolor="#000000"><img src="http://www.nightvisiononline.com/images/spacer.gif" border="0" height="1" width="1"></td>
					<td width="12" height="12" valign="top"><img src="http://www.nightvisiononline.com/images/toprightcorner_forum_h1.gif"></td>
  				</tr>
				<tr>
					<td align="left" colspan="4" class="leForumLeftRight" valign="top">

						<TABLE border="0" cellpadding="10" cellspacing="0" id="ignore" width="100%">
							<tr valign="top">
								<td width="200" bgcolor="#045E3B"><font class="commonText">%%MyInstructions%%<br></font></td>
								<td align="center" bgcolor="#000000">

									<table border="0" cellpadding="3" cellspacing="0">
										<tr> 
											<td><font class="commonText" style="font-size:13px;"><font class="star1">*</font>Nickname/Username</font></td>
											<td><font class="commonText" style="font-size:13px;"><font class="star1">*</font>Email Address</font></td> 
										</tr>
										<tr>
											<td><input class="commonInput" type="text" maxlength="16" name="name" onfocus="this.style.backgroundColor='#D7A368';" onblur="this.style.backgroundColor='#CCCCCC';" %%Muaname%%></td>
											<td><input class="commonInput" type="text" name="email" onfocus="this.style.backgroundColor='#D7A368';" onblur="this.style.backgroundColor='#CCCCCC';" %%Muaemail%%></td> 
										</tr>
										<tr> 
											<td><font class="commonText" style="font-size:13px;"><font class="star1">*</font>Subject</font></td>
											<td><font class="commonText" style="font-size:13px;">Related URL</font></td>
										</tr>
										<tr> 
											<td><input class="commonInput" type="text" name="subject" maxlength="75" onfocus="this.style.backgroundColor='#D7A368';" onblur="this.style.backgroundColor='#CCCCCC';"></td> 
											<td><input class="commonInput" type="text" name="url" onfocus="this.style.backgroundColor='#D7A368';" onblur="this.style.backgroundColor='#CCCCCC';"></td> 
										</tr> 
										<tr> 
											<td colspan="2"><font class="commonText" style="font-size:13px;"><font class="star1">*</font>Message</font></td> 
										</tr> 
										<tr> 
											<td colspan="2"><textarea class="commonArea" name="message" rows="10" cols="30" onfocus="this.style.backgroundColor='#D7A368';if (this.value == '%%Muamessage%%') { this.value=''; }" onblur="this.style.backgroundColor='#CCCCCC';">%%Muamessage%%</textarea></td> 
										</tr> 
										<tr> 
											<td colspan="2"><input type="submit" class="leButton" value="Post Message" onfocus="this.style.backgroundColor='#D7A368';" onblur="this.style.backgroundColor='#CCCCCC';">&nbsp;&nbsp;<input type="reset" class="leButton" value="Reset Fields" onfocus="this.style.backgroundColor='#D7A368';" onblur="this.style.backgroundColor='#CCCCCC';"></td>
										</tr> 
									</table>

								</td>
							</tr>
						</table>

					</td>
				</tr>
  				<tr align="center">
    				<td width="12" height="12" valign="top"><img src="http://www.nightvisiononline.com/images/botleftcorner_forum.gif"></td>
					<td valign="top" height="12" width="209" class="leForumBot" bgcolor="#045E3B"><img src="http://www.nightvisiononline.com/images/spacer.gif" height="1" width="209" border="0"></td>
					<td valign="top" height="12" width="100%" class="leForumBot" bgcolor="#000000"><img src="http://www.nightvisiononline.com/images/spacer.gif" height="1" width="1" border="0"></td>
					<td width="12" height="12" valign="top"><img src="http://www.nightvisiononline.com/images/botrightcorner_forum_h1.gif"></td>
  				</tr>
			</table>
<!--PreviousReplies-->