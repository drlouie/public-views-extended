/* System */
var flash2Installed = false; var flash3Installed = false; var flash4Installed = false; var flash5Installed = false; var flash6Installed = false; var flash7Installed = false; var maxVersion   = 7; var actualVersion  = 0; 
var hasRightVersion = false; 

var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.indexOf("Windows") != -1) ? true : false;

/* VB-Script Detection for Internet Explorer Windows */
if(isIE && isWin){
 document.write('<SCRIPT LANGUAGE=VBScript\> \n');
 document.write('on error resume next \n');
 document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
 document.write('on error resume next \n');
 document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
 document.write('on error resume next \n');
 document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
 document.write('on error resume next \n');
 document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');  
 document.write('on error resume next \n');
 document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');
 document.write('on error resume next \n');
 document.write('flash7Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))) \n');  
 document.write('</SCRIPT\> \n');
}

 


/* Detect Flash*/
function detectFlash(flV) {  

 if (navigator.plugins) {
  if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
   var isVersion2    = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
   var flashDescription  = navigator.plugins["Shockwave Flash" + isVersion2].description;

   // alert("Flash plugin description: " + flashDescription);
   var flashVersion   = parseInt(flashDescription.charAt(flashDescription.indexOf(".") - 1));
       flash2Installed   = flashVersion == 2;    
   flash3Installed   = flashVersion == 3;
   flash4Installed   = flashVersion == 4;
   flash5Installed   = flashVersion == 5;
   flash6Installed   = flashVersion == 6;
   flash7Installed   = flashVersion >= 7;
  }
 }

 

 for (var i = 2; i <= maxVersion; i++) {  
  if (eval("flash" + i + "Installed") == true) actualVersion = i;
 }

 if(navigator.userAgent.indexOf("WebTV") != -1) actualVersion = 3;  
// alert("version detected: " + actualVersion);

 if (actualVersion >= flV) { hasRightVersion = true; } 
 else { hasRightVersion = false; }
}

 

 


/* Make Flash*/
function writeFlash(strFlash, strNoFlash, flVersion) {
 var posVersion = strFlash.search(/#version=.+/);
 if(posVersion != -1) {
  var objectTagVersion =
strFlash.substring(posVersion+9,posVersion+10);
  if (objectTagVersion != flVersion) {
   flVersion = objectTagVersion;
  }
 }
 // alert(flVersion);

 detectFlash(flVersion);

 if(hasRightVersion) { document.location.href = stringFlash; } 
 else { document.location.href = stringNoFlash; }
 
}

var flashVersion = 7;
var stringFlash = 'WelcomeHome.html';
var stringNoFlash = 'NeedFlash.html';
writeFlash(stringFlash, stringNoFlash, flashVersion);
