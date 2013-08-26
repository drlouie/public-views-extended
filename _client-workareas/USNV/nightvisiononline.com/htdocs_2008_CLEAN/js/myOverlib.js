//\//////////////////////////////////////////////////////////////////////////////////
//\  overLIB 3.50  --  This notice must remain untouched at all times.
//\  Copyright Erik Bosrup 1998-2001. All rights reserved.
//\
//\  By Erik Bosrup (erik@bosrup.com).  Last modified 2001-08-28.
//\  Portions by Dan Steinman (dansteinman.com). Additions by other people are
//\  listed on the overLIB homepage.
//\
//\  Get the latest version at http://www.bosrup.com/web/overlib/
//\
//\  This script is published under an open source license. Please read the license
//\  agreement online at: http://www.bosrup.com/web/overlib/license.html
//\  If you have questions regarding the license please contact erik@bosrup.com.
//\
//\  This script library was originally created for personal use. By request it has
//\  later been made public. This is free software. Do not sell this as your own
//\  work, or remove this copyright notice. For full details on copying or changing
//\  this script please read the license agreement at the link above.
//\
//\  Please give credit on sites that use overLIB and submit changes of the script
//\  so other people can use them as well. This script is free to use, don't abuse.
//\//////////////////////////////////////////////////////////////////////////////////
//\mini


////////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
// Don't touch these. :)
////////////////////////////////////////////////////////////////////////////////////
var INARRAY		=	101;
var CAPARRAY		=	102;
var STICKY		=	103;
var BACKGROUND		=	104;
var NOCLOSE		=	105;
var CAPTION		=	106;
var LEFT		=	107;
var RIGHT		=	108;
var CENTER		=	109;
var OFFSETX		=	1010;
var OFFSETY		=	1011;
var FGCOLOR		=	1012;
var BGCOLOR		=	1013;
var TEXTCOLOR		=	1014;
var CAPCOLOR		=	1015;
var CLOSECOLOR		=	1016;
var WIDTH		=	1017;
var BORDER		=	1018;
var STATUS		=	1019;
var AUTOSTATUS		=	1020;
var AUTOSTATUSCAP	=	1021;
var HEIGHT		=	1022;
var CLOSETEXT		=	1023;
var SNAPX		=	1024;
var SNAPY		=	1025;
var FIXX		=	1026;
var FIXY		=	1027;
var FGBACKGROUND	=	1028;
var BGBACKGROUND	=	1029;
var PADX		=	1030; // PADX2 out
var PADY		=	1031; // PADY2 out
var FULLHTML		=	1034;
var ABOVE		=	1035;
var BELOW		=	1036;
var CAPICON		=	1037;
var TEXTFONT		=	1038;
var CAPTIONFONT		=	1039;
var CLOSEFONT		=	1040;
var TEXTSIZE		=	1041;
var CAPTIONSIZE		=	1042;
var CLOSESIZE		=	1043;
var FRAME		=	1044;
var TIMEOUT		=	1045;
var FUNCTION		=	1046;
var DELAY		=	1047;
var HAUTO		=	1048;
var VAUTO		=	1049;
var CLOSECLICK		=	1050;
var CSSOFF		=	1051;
var CSSSTYLE		=	1052;
var CSSCLASS		=	1053;
var FGCLASS		=	1054;
var BGCLASS		=	1055;
var TEXTFONTCLASS	=	1056;
var CAPTIONFONTCLASS	=	1057;
var CLOSEFONTCLASS	=	1058;
var PADUNIT		=	1059;
var HEIGHTUNIT		=	1060;
var WIDTHUNIT		=	1061;
var TEXTSIZEUNIT	=	1062;
var TEXTDECORATION	=	1063;
var TEXTSTYLE		=	1064;
var TEXTWEIGHT		=	1065;
var CAPTIONSIZEUNIT	=	1066;
var CAPTIONDECORATION	=	1067;
var CAPTIONSTYLE	=	1068;
var CAPTIONWEIGHT	=	1069;
var CLOSESIZEUNIT	=	1070;
var CLOSEDECORATION	=	1071;
var CLOSESTYLE		=	1072;
var CLOSEWEIGHT		=	1073;


////////////////////////////////////////////////////////////////////////////////////
// DEFAULT CONFIGURATION
// You don't have to change anything here if you don't want to. All of this can be
// changed on your html page or through an overLIB call.
////////////////////////////////////////////////////////////////////////////////////

// Main background color (the large area)
// Usually a bright color (white, yellow etc)
if (typeof myOl_fgcolor == 'undefined') { var myOl_fgcolor = "#D7A368";}
	
// Border color and color of caption
// Usually a dark color (black, brown etc)
if (typeof myOl_bgcolor == 'undefined') { var myOl_bgcolor = "#000000";}
	
// Text color
// Usually a dark color
if (typeof myOl_textcolor == 'undefined') { var myOl_textcolor = "#0";}
	
// Color of the caption text
// Usually a bright color
if (typeof myOl_capcolor == 'undefined') { var myOl_capcolor = "#EB0000";}
	
// Color of "Close" when using Sticky
// Usually a semi-bright color
if (typeof myOl_closecolor == 'undefined') { var myOl_closecolor = "#9999FF";}

// Font face for the main text
if (typeof myOl_textfont == 'undefined') { var myOl_textfont = "Verdana,Arial,Helvetica";}

// Font face for the caption
if (typeof myOl_captionfont == 'undefined') { var myOl_captionfont = "Verdana,Arial,Helvetica";}

// Font face for the close text
if (typeof myOl_closefont == 'undefined') { var myOl_closefont = "Verdana,Arial,Helvetica";}

// Font size for the main text
// When using CSS this will be very small.
if (typeof myOl_textsize == 'undefined') { var myOl_textsize = "2";}

// Font size for the caption
// When using CSS this will be very small.
if (typeof myOl_captionsize == 'undefined') { var myOl_captionsize = "1";}

// Font size for the close text
// When using CSS this will be very small.
if (typeof myOl_closesize == 'undefined') { var myOl_closesize = "1";}

// Width of the popups in pixels
// 100-300 pixels is typical
if (typeof myOl_width == 'undefined') { var myOl_width = "400";}

// How thick the myOl_border should be in pixels
// 1-3 pixels is typical
if (typeof myOl_border == 'undefined') { var myOl_border = "1";}

// How many pixels to the right/left of the cursor to show the popup
// Values between 3 and 12 are best
if (typeof myOl_offsetx == 'undefined') { var myOl_offsetx = 10;}
	
// How many pixels to the below the cursor to show the popup
// Values between 3 and 12 are best
if (typeof myOl_offsety == 'undefined') { var myOl_offsety = 10;}

// Default text for popups
// Should you forget to pass something to overLIB this will be displayed.
if (typeof myOl_text == 'undefined') { var myOl_text = "Default Text"; }

// Default caption
// You should leave this blank or you will have problems making non caps popups.
if (typeof myOl_cap == 'undefined') { var myOl_cap = ""; }

// Decides if sticky popups are default.
// 0 for non, 1 for stickies.
if (typeof myOl_sticky == 'undefined') { var myOl_sticky = 0; }

// Default background image. Better left empty unless you always want one.
if (typeof myOl_background == 'undefined') { var myOl_background = ""; }

// Text for the closing sticky popups.
// Normal is "Close".
if (typeof myOl_close == 'undefined') { var myOl_close = "Close"; }

// Default vertical alignment for popups.
// It's best to leave RIGHT here. Other options are LEFT and CENTER.
if (typeof myOl_hpos == 'undefined') { var myOl_hpos = RIGHT; }

// Default status bar text when a popup is invoked.
if (typeof myOl_status == 'undefined') { var myOl_status = ""; }

// If the status bar automatically should load either text or caption.
// 0=nothing, 1=text, 2=caption
if (typeof myOl_autostatus == 'undefined') { var myOl_autostatus = 0; }

// Default height for popup. Often best left alone.
if (typeof myOl_height == 'undefined') { var myOl_height = -1; }

// Horizontal grid spacing that popups will snap to.
// 0 makes no grid, anything else will cause a snap to that grid spacing.
if (typeof myOl_snapx == 'undefined') { var myOl_snapx = 0; }

// Vertical grid spacing that popups will snap to.
// 0 makes no grid, andthing else will cause a snap to that grid spacing.
if (typeof myOl_snapy == 'undefined') { var myOl_snapy = 0; }

// Sets the popups horizontal position to a fixed column.
// Anything above -1 will cause fixed position.
if (typeof myOl_fixx == 'undefined') { var myOl_fixx = -1; }

// Sets the popups vertical position to a fixed row.
// Anything above -1 will cause fixed position.
if (typeof myOl_fixy == 'undefined') { var myOl_fixy = -1; }

// Background image for the popups inside.
if (typeof myOl_fgbackground == 'undefined') { var myOl_fgbackground = ""; }

// Background image for the popups frame.
if (typeof myOl_bgbackground == 'undefined') { var myOl_bgbackground = ""; }

// How much horizontal left padding text should get by default when BACKGROUND is used.
if (typeof myOl_padxl == 'undefined') { var myOl_padxl = 10; }

// How much horizontal right padding text should get by default when BACKGROUND is used.
if (typeof myOl_padxr == 'undefined') { var myOl_padxr = 10; }

// How much vertical top padding text should get by default when BACKGROUND is used.
if (typeof myOl_padyt == 'undefined') { var myOl_padyt = 10; }

// How much vertical bottom padding text should get by default when BACKGROUND is used.
if (typeof myOl_padyb == 'undefined') { var myOl_padyb = 10; }

// If the user by default must supply all html for complete popup control.
// Set to 1 to activate, 0 otherwise.
if (typeof myOl_fullhtml == 'undefined') { var myOl_fullhtml = 0; }

// Default vertical position of the popup. Default should normally be BELOW.
// ABOVE only works when HEIGHT is defined.
if (typeof myOl_vpos == 'undefined') { var myOl_vpos = BELOW; }

// Default height of popup to use when placing the popup above the cursor.
if (typeof myOl_aboveheight == 'undefined') { var myOl_aboveheight = 0; }

// Default icon to place next to the popups caption.
if (typeof myOl_caption == 'undefined') { var myOl_capicon = ""; }

// Default frame. We default to current frame if there is no frame defined.
if (typeof myOl_frame == 'undefined') { var myOl_frame = self; }

// Default timeout. By default there is no timeout.
if (typeof myOl_timeout == 'undefined') { var myOl_timeout = 0; }

// Default javascript funktion. By default there is none.
if (typeof myOl_function == 'undefined') { var myOl_function = Function(); }

// Default timeout. By default there is no timeout.
if (typeof myOl_delay == 'undefined') { var myOl_delay = 0; }

// If overLIB should decide the horizontal placement.
if (typeof myOl_hauto == 'undefined') { var myOl_hauto = 1; }

// If overLIB should decide the vertical placement.
if (typeof myOl_vauto == 'undefined') { var myOl_vauto = 1; }



// If the user has to click to close stickies.
if (typeof myOl_closeclick == 'undefined') { var myOl_closeclick = 0; }

// This variable determines if you want to use CSS or inline definitions.
// CSSOFF=no CSS    CSSSTYLE=use CSS inline styles    CSSCLASS=use classes
if (typeof myOl_css == 'undefined') { var myOl_css = CSSOFF; }

// Main background class (eqv of fgcolor)
// This is only used if CSS is set to use classes (myOl_css = CSSCLASS)
if (typeof myOl_fgclass == 'undefined') { var myOl_fgclass = ""; }

// Frame background class (eqv of bgcolor)
// This is only used if CSS is set to use classes (myOl_css = CSSCLASS)
if (typeof myOl_bgclass == 'undefined') { var myOl_bgclass = ""; }

// Main font class
// This is only used if CSS is set to use classes (myOl_css = CSSCLASS)
if (typeof myOl_textfontclass == 'undefined') { var myOl_textfontclass = ""; }

// Caption font class
// This is only used if CSS is set to use classes (myOl_css = CSSCLASS)
if (typeof myOl_captionfontclass == 'undefined') { var myOl_captionfontclass = ""; }

// Close font class
// This is only used if CSS is set to use classes (myOl_css = CSSCLASS)
if (typeof myOl_closefontclass == 'undefined') { var myOl_closefontclass = ""; }

// Unit to be used for the text padding above
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
// Options include "px", "%", "in", "cm" and more
if (typeof myOl_padunit == 'undefined') { var myOl_padunit = "px";}

// Unit to be used for height of popup
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
// Options include "px", "%", "in", "cm" and more
if (typeof myOl_heightunit == 'undefined') { var myOl_heightunit = "px";}

// Unit to be used for width of popup
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
// Options include "px", "%", "in", "cm" and more
if (typeof myOl_widthunit == 'undefined') { var myOl_widthunit = "px";}

// Font size unit for the main text
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_textsizeunit == 'undefined') { var myOl_textsizeunit = "px";}

// Decoration of the main text ("none", "underline", "line-through" or "blink")
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_textdecoration == 'undefined') { var myOl_textdecoration = "none";}

// Font style of the main text ("normal" or "italic")
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_textstyle == 'undefined') { var myOl_textstyle = "normal";}

// Font weight of the main text ("normal", "bold", "bolder", "lighter", ect.)
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_textweight == 'undefined') { var myOl_textweight = "normal";}

// Font size unit for the caption
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_captionsizeunit == 'undefined') { var myOl_captionsizeunit = "px";}

// Decoration of the caption ("none", "underline", "line-through" or "blink")
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_captiondecoration == 'undefined') { var myOl_captiondecoration = "none";}

// Font style of the caption ("normal" or "italic")
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_captionstyle == 'undefined') { var myOl_captionstyle = "normal";}

// Font weight of the caption ("normal", "bold", "bolder", "lighter", ect.)
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_captionweight == 'undefined') { var myOl_captionweight = "bold";}

// Font size unit for the close text
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_closesizeunit == 'undefined') { var myOl_closesizeunit = "px";}

// Decoration of the close text ("none", "underline", "line-through" or "blink")
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_closedecoration == 'undefined') { var myOl_closedecoration = "none";}

// Font style of the close text ("normal" or "italic")
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_closestyle == 'undefined') { var myOl_closestyle = "normal";}

// Font weight of the close text ("normal", "bold", "bolder", "lighter", ect.)
// Only used if CSS inline styles are being used (myOl_css = CSSSTYLE)
if (typeof myOl_closeweight == 'undefined') { var myOl_closeweight = "normal";}



////////////////////////////////////////////////////////////////////////////////////
// ARRAY CONFIGURATION
// You don't have to change anything here if you don't want to. The following
// arrays can be filled with text and html if you don't wish to pass it from
// your html page.
////////////////////////////////////////////////////////////////////////////////////

// Array with texts.
if (typeof myOl_texts == 'undefined') { var myOl_texts = new Array("Text 0", "Text 1"); }

// Array with captions.
if (typeof myOl_caps == 'undefined') { var myOl_caps = new Array("Caption 0", "Caption 1"); }


////////////////////////////////////////////////////////////////////////////////////
// END CONFIGURATION
// Don't change anything below this line, all configuration is above.
////////////////////////////////////////////////////////////////////////////////////







////////////////////////////////////////////////////////////////////////////////////
// INIT
////////////////////////////////////////////////////////////////////////////////////

// Runtime variables init. Used for runtime only, don't change, not for config!
var myO3_text = "";
var myO3_cap = "";
var myO3_sticky = 0;
var myO3_background = "";
var myO3_close = "Close";
var myO3_hpos = RIGHT;
var myO3_offsetx = 2;
var myO3_offsety = 2;
var myO3_fgcolor = "";
var myO3_bgcolor = "";
var myO3_textcolor = "";
var myO3_capcolor = "";
var myO3_closecolor = "";
var myO3_width = 100;
var myO3_border = 1;
var myO3_status = "";
var myO3_autostatus = 0;
var myO3_height = -1;
var myO3_snapx = 0;
var myO3_snapy = 0;
var myO3_fixx = -1;
var myO3_fixy = -1;
var myO3_fgbackground = "";
var myO3_bgbackground = "";
var myO3_padxl = 0;
var myO3_padxr = 0;
var myO3_padyt = 0;
var myO3_padyb = 0;
var myO3_fullhtml = 0;
var myO3_vpos = BELOW;
var myO3_aboveheight = 0;
var myO3_capicon = "";
var myO3_textfont = "Verdana,Arial,Helvetica";
var myO3_captionfont = "Verdana,Arial,Helvetica";
var myO3_closefont = "Verdana,Arial,Helvetica";
var myO3_textsize = "1";
var myO3_captionsize = "1";
var myO3_closesize = "1";
var myO3_frame = self;
var myO3_timeout = 0;
var myO3_timerid = 0;
var myO3_allowmove = 0;
var myO3_function = Function();
var myO3_delay = 0;
var myO3_delayid = 0;
var myO3_hauto = 0;
var myO3_vauto = 0;
var myO3_closeclick = 0;

var myO3_css = CSSOFF;
var myO3_fgclass = "";
var myO3_bgclass = "";
var myO3_textfontclass = "";
var myO3_captionfontclass = "";
var myO3_closefontclass = "";
var myO3_padunit = "px";
var myO3_heightunit = "px";
var myO3_widthunit = "px";
var myO3_textsizeunit = "px";
var myO3_textdecoration = "";
var myO3_textstyle = "";
var myO3_textweight = "";
var myO3_captionsizeunit = "px";
var myO3_captiondecoration = "";
var myO3_captionstyle = "";
var myO3_captionweight = "";
var myO3_closesizeunit = "px";
var myO3_closedecoration = "";
var myO3_closestyle = "";
var myO3_closeweight = "";



// Display state variables
var myO3_x = 0;
var myO3_y = 0;
var myO3_allow = 0;
var myO3_showingsticky = 0;
var myO3_removecounter = 0;

// Our layer
var myOver = null;


// Decide browser version
var ns4 = (document.layers)? true:false;
var ns6 = (document.getElementById)? true:false;
var ie4 = (document.all)? true:false;
var ie5 = false;

// Microsoft Stupidity Check(tm).
if (ie4) {
	if ((navigator.userAgent.indexOf('MSIE 5') > 0) || (navigator.userAgent.indexOf('MSIE 6') > 0)) {
		ie5 = true;
	}
	if (ns6) {
		ns6 = false;
	}
}


// Capture events, alt. diffuses the overlib function.
if ( (ns4) || (ie4) || (ns6)) {
	document.onmousemove = mouseMove
	if (ns4) document.captureEvents(Event.MOUSEMOVE)
} else {
	myOverlib = no_myOverlib;
	nd = no_myOverlib;
	ver3fix = true;
}


// Fake function for 3.0 users.
function no_myOverlib() {
	return ver3fix;
}



////////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////


// myOverlib(arg0, ..., argN)
// Loads parameters into global runtime variables.
function myOverlib() {
	
	// Load defaults to runtime.
	myO3_text = myOl_text;
	myO3_cap = myOl_cap;
	myO3_sticky = myOl_sticky;
	myO3_background = myOl_background;
	myO3_close = myOl_close;
	myO3_hpos = myOl_hpos;
	myO3_offsetx = myOl_offsetx;
	myO3_offsety = myOl_offsety;
	myO3_fgcolor = myOl_fgcolor;
	myO3_bgcolor = myOl_bgcolor;
	myO3_textcolor = myOl_textcolor;
	myO3_capcolor = myOl_capcolor;
	myO3_closecolor = myOl_closecolor;
	myO3_width = myOl_width;
	myO3_border = myOl_border;
	myO3_status = myOl_status;
	myO3_autostatus = myOl_autostatus;
	myO3_height = myOl_height;
	myO3_snapx = myOl_snapx;
	myO3_snapy = myOl_snapy;
	myO3_fixx = myOl_fixx;
	myO3_fixy = myOl_fixy;
	myO3_fgbackground = myOl_fgbackground;
	myO3_bgbackground = myOl_bgbackground;
	myO3_padxl = myOl_padxl;
	myO3_padxr = myOl_padxr;
	myO3_padyt = myOl_padyt;
	myO3_padyb = myOl_padyb;
	myO3_fullhtml = myOl_fullhtml;
	myO3_vpos = myOl_vpos;
	myO3_aboveheight = myOl_aboveheight;
	myO3_capicon = myOl_capicon;
	myO3_textfont = myOl_textfont;
	myO3_captionfont = myOl_captionfont;
	myO3_closefont = myOl_closefont;
	myO3_textsize = myOl_textsize;
	myO3_captionsize = myOl_captionsize;
	myO3_closesize = myOl_closesize;
	myO3_timeout = myOl_timeout;
	myO3_function = myOl_function;
	myO3_delay = myOl_delay;
	myO3_hauto = myOl_hauto;
	myO3_vauto = myOl_vauto;
	myO3_closeclick = myOl_closeclick;
	
	myO3_css = myOl_css;
	myO3_fgclass = myOl_fgclass;
	myO3_bgclass = myOl_bgclass;
	myO3_textfontclass = myOl_textfontclass;
	myO3_captionfontclass = myOl_captionfontclass;
	myO3_closefontclass = myOl_closefontclass;
	myO3_padunit = myOl_padunit;
	myO3_heightunit = myOl_heightunit;
	myO3_widthunit = myOl_widthunit;
	myO3_textsizeunit = myOl_textsizeunit;
	myO3_textdecoration = myOl_textdecoration;
	myO3_textstyle = myOl_textstyle;
	myO3_textweight = myOl_textweight;
	myO3_captionsizeunit = myOl_captionsizeunit;
	myO3_captiondecoration = myOl_captiondecoration;
	myO3_captionstyle = myOl_captionstyle;
	myO3_captionweight = myOl_captionweight;
	myO3_closesizeunit = myOl_closesizeunit;
	myO3_closedecoration = myOl_closedecoration;
	myO3_closestyle = myOl_closestyle;
	myO3_closeweight = myOl_closeweight;
	

	// Special for frame support, over must be reset...
	if ( (ns4) || (ie4) || (ns6) ) {
		myO3_frame = myOl_frame;
		if (ns4) over = myO3_frame.document.myOverDiv
		if (ie4) over = myO3_frame.myOverDiv.style
		if (ns6) over = myO3_frame.document.getElementById("myOverDiv");
	}
	
	
	// What the next argument is expected to be.
	var parsemode = -1;
	
	var ar = arguments;

	for (i = 0; i < ar.length; i++) {

		if (parsemode < 0) {
			// Arg is maintext, unless INARRAY
			if (ar[i] == INARRAY) {
				myO3_text = myOl_texts[ar[++i]];
			} else {
				myO3_text = ar[i];
			}

			parsemode = 0;
		} else {
			// Note: NS4 doesn't like switch cases with vars.
			if (ar[i] == INARRAY) { myO3_text = myOl_texts[ar[++i]]; continue; }
			if (ar[i] == CAPARRAY) { myO3_cap = myOl_caps[ar[++i]]; continue; }
			if (ar[i] == STICKY) { myO3_sticky = 1; continue; }
			if (ar[i] == BACKGROUND) { myO3_background = ar[++i]; continue; }
			if (ar[i] == NOCLOSE) { myO3_close = ""; continue; }
			if (ar[i] == CAPTION) { myO3_cap = ar[++i]; continue; }
			if (ar[i] == CENTER || ar[i] == LEFT || ar[i] == RIGHT) { myO3_hpos = ar[i]; continue; }
			if (ar[i] == OFFSETX) { myO3_offsetx = ar[++i]; continue; }
			if (ar[i] == OFFSETY) { myO3_offsety = ar[++i]; continue; }
			if (ar[i] == FGCOLOR) { myO3_fgcolor = ar[++i]; continue; }
			if (ar[i] == BGCOLOR) { myO3_bgcolor = ar[++i]; continue; }
			if (ar[i] == TEXTCOLOR) { myO3_textcolor = ar[++i]; continue; }
			if (ar[i] == CAPCOLOR) { myO3_capcolor = ar[++i]; continue; }
			if (ar[i] == CLOSECOLOR) { myO3_closecolor = ar[++i]; continue; }
			if (ar[i] == WIDTH) { myO3_width = ar[++i]; continue; }
			if (ar[i] == BORDER) { myO3_border = ar[++i]; continue; }
			if (ar[i] == STATUS) { myO3_status = ar[++i]; continue; }
			if (ar[i] == AUTOSTATUS) { myO3_autostatus = 1; continue; }
			if (ar[i] == AUTOSTATUSCAP) { myO3_autostatus = 2; continue; }
			if (ar[i] == HEIGHT) { myO3_height = ar[++i]; myO3_aboveheight = ar[i]; continue; } // Same param again.
			if (ar[i] == CLOSETEXT) { myO3_close = ar[++i]; continue; }
			if (ar[i] == SNAPX) { myO3_snapx = ar[++i]; continue; }
			if (ar[i] == SNAPY) { myO3_snapy = ar[++i]; continue; }
			if (ar[i] == FIXX) { myO3_fixx = ar[++i]; continue; }
			if (ar[i] == FIXY) { myO3_fixy = ar[++i]; continue; }
			if (ar[i] == FGBACKGROUND) { myO3_fgbackground = ar[++i]; continue; }
			if (ar[i] == BGBACKGROUND) { myO3_bgbackground = ar[++i]; continue; }
			if (ar[i] == PADX) { myO3_padxl = ar[++i]; myO3_padxr = ar[++i]; continue; }
			if (ar[i] == PADY) { myO3_padyt = ar[++i]; myO3_padyb = ar[++i]; continue; }
			if (ar[i] == FULLHTML) { myO3_fullhtml = 1; continue; }
			if (ar[i] == BELOW || ar[i] == ABOVE) { myO3_vpos = ar[i]; continue; }
			if (ar[i] == CAPICON) { myO3_capicon = ar[++i]; continue; }
			if (ar[i] == TEXTFONT) { myO3_textfont = ar[++i]; continue; }
			if (ar[i] == CAPTIONFONT) { myO3_captionfont = ar[++i]; continue; }
			if (ar[i] == CLOSEFONT) { myO3_closefont = ar[++i]; continue; }
			if (ar[i] == TEXTSIZE) { myO3_textsize = ar[++i]; continue; }
			if (ar[i] == CAPTIONSIZE) { myO3_captionsize = ar[++i]; continue; }
			if (ar[i] == CLOSESIZE) { myO3_closesize = ar[++i]; continue; }
			if (ar[i] == FRAME) { opt_FRAME(ar[++i]); continue; }
			if (ar[i] == TIMEOUT) { myO3_timeout = ar[++i]; continue; }
			if (ar[i] == FUNCTION) { opt_FUNCTION(ar[++i]); continue; }
			if (ar[i] == DELAY) { myO3_delay = ar[++i]; continue; }
			if (ar[i] == HAUTO) { myO3_hauto = (myO3_hauto == 0) ? 1 : 0; continue; }
			if (ar[i] == VAUTO) { myO3_vauto = (myO3_vauto == 0) ? 1 : 0; continue; }
			if (ar[i] == CLOSECLICK) { myO3_closeclick = (myO3_closeclick == 0) ? 1 : 0; continue; }
			if (ar[i] == CSSOFF) { myO3_css = ar[i]; continue; }
			if (ar[i] == CSSSTYLE) { myO3_css = ar[i]; continue; }
			if (ar[i] == CSSCLASS) { myO3_css = ar[i]; continue; }
			if (ar[i] == FGCLASS) { myO3_fgclass = ar[++i]; continue; }
			if (ar[i] == BGCLASS) { myO3_bgclass = ar[++i]; continue; }
			if (ar[i] == TEXTFONTCLASS) { myO3_textfontclass = ar[++i]; continue; }
			if (ar[i] == CAPTIONFONTCLASS) { myO3_captionfontclass = ar[++i]; continue; }
			if (ar[i] == CLOSEFONTCLASS) { myO3_closefontclass = ar[++i]; continue; }
			if (ar[i] == PADUNIT) { myO3_padunit = ar[++i]; continue; }
			if (ar[i] == HEIGHTUNIT) { myO3_heightunit = ar[++i]; continue; }
			if (ar[i] == WIDTHUNIT) { myO3_widthunit = ar[++i]; continue; }
			if (ar[i] == TEXTSIZEUNIT) { myO3_textsizeunit = ar[++i]; continue; }
			if (ar[i] == TEXTDECORATION) { myO3_textdecoration = ar[++i]; continue; }
			if (ar[i] == TEXTSTYLE) { myO3_textstyle = ar[++i]; continue; }
			if (ar[i] == TEXTWEIGHT) { myO3_textweight = ar[++i]; continue; }
			if (ar[i] == CAPTIONSIZEUNIT) { myO3_captionsizeunit = ar[++i]; continue; }
			if (ar[i] == CAPTIONDECORATION) { myO3_captiondecoration = ar[++i]; continue; }
			if (ar[i] == CAPTIONSTYLE) { myO3_captionstyle = ar[++i]; continue; }
			if (ar[i] == CAPTIONWEIGHT) { myO3_captionweight = ar[++i]; continue; }
			if (ar[i] == CLOSESIZEUNIT) { myO3_closesizeunit = ar[++i]; continue; }
			if (ar[i] == CLOSEDECORATION) { myO3_closedecoration = ar[++i]; continue; }
			if (ar[i] == CLOSESTYLE) { myO3_closestyle = ar[++i]; continue; }
			if (ar[i] == CLOSEWEIGHT) { myO3_closeweight = ar[++i]; continue; }
		}
	}

	if (myO3_delay == 0) {
		return myOverlib350();
	} else {
		myO3_delayid = setTimeout("myOverlib350()", myO3_delay);

		if (myO3_sticky) {
			return false;
		} else {
			return true;
		}
	}
}



// Clears popups if appropriate
function nd() {
	if ( myO3_removecounter >= 1 ) { myO3_showingsticky = 0 };
	if ( (ns4) || (ie4) || (ns6) ) {
		if ( myO3_showingsticky == 0 ) {
			myO3_allowmove = 0;
			if (over != null) hideObject(over);
		} else {
			myO3_removecounter++;
		}
	}
	
	return true;
}







////////////////////////////////////////////////////////////////////////////////////
// OVERLIB 3.50 FUNCTION
////////////////////////////////////////////////////////////////////////////////////


// This function decides what it is we want to display and how we want it done.
function myOverlib350() {

	// Make layer content
	var layerhtml;

	if (myO3_background != "" || myO3_fullhtml) {
		// Use background instead of box.
		layerhtml = myOl_content_background(myO3_text, myO3_background, myO3_fullhtml);
	} else {
		// They want a popup box.

		// Prepare popup background
		if (myO3_fgbackground != "" && myO3_css == CSSOFF) {
			myO3_fgbackground = "BACKGROUND=\""+myO3_fgbackground+"\"";
		}
		if (myO3_bgbackground != "" && myO3_css == CSSOFF) {
			myO3_bgbackground = "BACKGROUND=\""+myO3_bgbackground+"\"";
		}

		// Prepare popup colors
		if (myO3_fgcolor != "" && myO3_css == CSSOFF) {
			myO3_fgcolor = "BGCOLOR=\""+myO3_fgcolor+"\"";
		}
		if (myO3_bgcolor != "" && myO3_css == CSSOFF) {
			myO3_bgcolor = "BGCOLOR=\""+myO3_bgcolor+"\"";
		}

		// Prepare popup height
		if (myO3_height > 0 && myO3_css == CSSOFF) {
			myO3_height = "HEIGHT=" + myO3_height;
		} else {
			myO3_height = "";
		}

		// Decide which kinda box.
		if (myO3_cap == "") {
			// Plain
			layerhtml = myOl_content_simple(myO3_text);
		} else {
			// With caption
			if (myO3_sticky) {
				// Show close text
				layerhtml = myOl_content_caption(myO3_text, myO3_cap, myO3_close);
			} else {
				// No close text
				layerhtml = myOl_content_caption(myO3_text, myO3_cap, "");
			}
		}
	}
	
	// We want it to stick!
	if (myO3_sticky) {
		myO3_showingsticky = 1;
		myO3_removecounter = 0;
	}
	
	// Write layer
	layerWrite(layerhtml);
	
	// Prepare status bar
	if (myO3_autostatus > 0) {
		myO3_status = myO3_text;
		if (myO3_autostatus > 1) {
			myO3_status = myO3_cap;
		}
	}

	// When placing the layer the first time, even stickies may be moved.
	myO3_allowmove = 0;

	// Initiate a timer for timeout
	if (myO3_timeout > 0) {          
		if (myO3_timerid > 0) clearTimeout(myO3_timerid);
		myO3_timerid = setTimeout("cClick()", myO3_timeout);
	}

	// Show layer
	disp(myO3_status);

	// Stickies should stay where they are.	
	if (myO3_sticky) {
		myO3_allowmove = 0;
		return false;
	} else {
		return true;
	}
}



////////////////////////////////////////////////////////////////////////////////////
// LAYER GENERATION FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////

// Makes simple table without caption
function myOl_content_simple(text) {
	if (myO3_css == CSSCLASS) txt = "<TABLE WIDTH="+myO3_width+" BORDER=0 CELLPADDING="+myO3_border+" CELLSPACING=0 class=\""+myO3_bgclass+"\"><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 class=\""+myO3_fgclass+"\"><TR><TD VALIGN=TOP><FONT class=\""+myO3_textfontclass+"\">"+text+"</FONT></TD></TR></TABLE></TD></TR></TABLE>";
	if (myO3_css == CSSSTYLE) txt = "<TABLE WIDTH="+myO3_width+" BORDER=0 CELLPADDING="+myO3_border+" CELLSPACING=0 style=\"background-color: "+myO3_bgcolor+"; height: "+myO3_height+myO3_heightunit+";\"><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 style=\"color: "+myO3_fgcolor+"; background-color: "+myO3_fgcolor+"; height: "+myO3_height+myO3_heightunit+";\"><TR><TD VALIGN=TOP><FONT style=\"font-family: "+myO3_textfont+"; color: "+myO3_textcolor+"; font-size: "+myO3_textsize+myO3_textsizeunit+"; text-decoration: "+myO3_textdecoration+"; font-weight: "+myO3_textweight+"; font-style:"+myO3_textstyle+"\">"+text+"</FONT></TD></TR></TABLE></TD></TR></TABLE>";
	if (myO3_css == CSSOFF) txt = "<TABLE WIDTH="+myO3_width+" BORDER=0 CELLPADDING="+myO3_border+" CELLSPACING=0 "+myO3_bgcolor+" "+myO3_height+"><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 "+myO3_fgcolor+" "+myO3_fgbackground+" "+myO3_height+"><TR><TD VALIGN=TOP><FONT FACE=\""+myO3_textfont+"\" COLOR=\""+myO3_textcolor+"\" SIZE=\""+myO3_textsize+"\">"+text+"</FONT></TD></TR></TABLE></TD></TR></TABLE>";

	set_background("");
	return txt;
}




// Makes table with caption and optional close link
function myOl_content_caption(text, title, close) {
	closing = "";
	closeevent = "onMouseOver";

	if (myO3_closeclick == 1) closeevent = "onClick";
	if (myO3_capicon != "") myO3_capicon = "<IMG SRC=\""+myO3_capicon+"\"> ";

	if (close != "") {
		if (myO3_css == CSSCLASS) closing = "<TD ALIGN=RIGHT><A HREF=\"/\" "+closeevent+"=\"return cClick();\" class=\""+myO3_closefontclass+"\">"+close+"</A></TD>";
		if (myO3_css == CSSSTYLE) closing = "<TD ALIGN=RIGHT><A HREF=\"/\" "+closeevent+"=\"return cClick();\" style=\"color: "+myO3_closecolor+"; font-family: "+myO3_closefont+"; font-size: "+myO3_closesize+myO3_closesizeunit+"; text-decoration: "+myO3_closedecoration+"; font-weight: "+myO3_closeweight+"; font-style:"+myO3_closestyle+";\">"+close+"</A></TD>";
		if (myO3_css == CSSOFF) closing = "<TD ALIGN=RIGHT><A HREF=\"/\" "+closeevent+"=\"return cClick();\"><FONT COLOR=\""+myO3_closecolor+"\" FACE=\""+myO3_closefont+"\" SIZE=\""+myO3_closesize+"\">"+close+"</FONT></A></TD>";
	}

	if (myO3_css == CSSCLASS) txt = "<TABLE WIDTH="+myO3_width+" BORDER=0 CELLPADDING="+myO3_border+" CELLSPACING=0 class=\""+myO3_bgclass+"\"><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD><FONT class=\""+myO3_captionfontclass+"\">"+myO3_capicon+title+"</FONT></TD>"+closing+"</TR></TABLE><TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 class=\""+myO3_fgclass+"\"><TR><TD VALIGN=TOP><FONT class=\""+myO3_textfontclass+"\">"+text+"</FONT></TD></TR></TABLE></TD></TR></TABLE>";
	if (myO3_css == CSSSTYLE) txt = "<TABLE WIDTH="+myO3_width+" BORDER=0 CELLPADDING="+myO3_border+" CELLSPACING=0 style=\"background-color: "+myO3_bgcolor+"; background-image: url("+myO3_bgbackground+"); height: "+myO3_height+myO3_heightunit+";\"><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD><FONT style=\"font-family: "+myO3_captionfont+"; color: "+myO3_capcolor+"; font-size: "+myO3_captionsize+myO3_captionsizeunit+"; font-weight: "+myO3_captionweight+"; font-style: "+myO3_captionstyle+";\">"+myO3_capicon+title+"</FONT></TD>"+closing+"</TR></TABLE><TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 style=\"color: "+myO3_fgcolor+"; background-color: "+myO3_fgcolor+"; height: "+myO3_height+myO3_heightunit+";\"><TR><TD VALIGN=TOP><FONT style=\"font-family: "+myO3_textfont+"; color: "+myO3_textcolor+"; font-size: "+myO3_textsize+myO3_textsizeunit+"; text-decoration: "+myO3_textdecoration+"; font-weight: "+myO3_textweight+"; font-style:"+myO3_textstyle+"\">"+text+"</FONT></TD></TR></TABLE></TD></TR></TABLE>";
	if (myO3_css == CSSOFF) txt = "<TABLE WIDTH="+myO3_width+" BORDER=0 CELLPADDING="+myO3_border+" CELLSPACING=0 "+myO3_bgcolor+" "+myO3_bgbackground+" "+myO3_height+"><TR><TD><TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD><B><FONT COLOR=\""+myO3_capcolor+"\" FACE=\""+myO3_captionfont+"\" SIZE=\""+myO3_captionsize+"\">"+myO3_capicon+title+"</FONT></B></TD>"+closing+"</TR></TABLE><TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 "+myO3_fgcolor+" "+myO3_fgbackground+" "+myO3_height+"><TR><TD VALIGN=TOP><FONT COLOR=\""+myO3_textcolor+"\" FACE=\""+myO3_textfont+"\" SIZE=\""+myO3_textsize+"\">"+text+"</FONT></TD></TR></TABLE></TD></TR></TABLE>";

	set_background("");
	return txt;
}

// Sets the background picture, padding and lots more. :)
function myOl_content_background(text, picture, hasfullhtml) {
	if (hasfullhtml) {
		txt = text;
	} else {
		if (myO3_css == CSSCLASS) txt = "<TABLE WIDTH="+myO3_width+myO3_widthunit+" BORDER=0 CELLPADDING=0 CELLSPACING=0 HEIGHT="+myO3_height+myO3_heightunit+"><TR><TD COLSPAN=3 HEIGHT="+myO3_padyt+myO3_padunit+"></TD></TR><TR><TD WIDTH="+myO3_padxl+myO3_padunit+"></TD><TD VALIGN=TOP WIDTH="+(myO3_width-myO3_padxl-myO3_padxr)+myO3_padunit+"><FONT class=\""+myO3_textfontclass+"\">"+text+"</FONT></TD><TD WIDTH="+myO3_padxr+myO3_padunit+"></TD></TR><TR><TD COLSPAN=3 HEIGHT="+myO3_padyb+myO3_padunit+"></TD></TR></TABLE>";
		if (myO3_css == CSSSTYLE) txt = "<TABLE WIDTH="+myO3_width+myO3_widthunit+" BORDER=0 CELLPADDING=0 CELLSPACING=0 HEIGHT="+myO3_height+myO3_heightunit+"><TR><TD COLSPAN=3 HEIGHT="+myO3_padyt+myO3_padunit+"></TD></TR><TR><TD WIDTH="+myO3_padxl+myO3_padunit+"></TD><TD VALIGN=TOP WIDTH="+(myO3_width-myO3_padxl-myO3_padxr)+myO3_padunit+"><FONT style=\"font-family: "+myO3_textfont+"; color: "+myO3_textcolor+"; font-size: "+myO3_textsize+myO3_textsizeunit+";\">"+text+"</FONT></TD><TD WIDTH="+myO3_padxr+myO3_padunit+"></TD></TR><TR><TD COLSPAN=3 HEIGHT="+myO3_padyb+myO3_padunit+"></TD></TR></TABLE>";
		if (myO3_css == CSSOFF) txt = "<TABLE WIDTH="+myO3_width+" BORDER=0 CELLPADDING=0 CELLSPACING=0 HEIGHT="+myO3_height+"><TR><TD COLSPAN=3 HEIGHT="+myO3_padyt+"></TD></TR><TR><TD WIDTH="+myO3_padxl+"></TD><TD VALIGN=TOP WIDTH="+(myO3_width-myO3_padxl-myO3_padxr)+"><FONT FACE=\""+myO3_textfont+"\" COLOR=\""+myO3_textcolor+"\" SIZE=\""+myO3_textsize+"\">"+text+"</FONT></TD><TD WIDTH="+myO3_padxr+"></TD></TR><TR><TD COLSPAN=3 HEIGHT="+myO3_padyb+"></TD></TR></TABLE>";
	}
	set_background(picture);
	return txt;
}

// Loads a picture into the div.
function set_background(pic) {
	if (pic == "") {
		if (ie4) over.backgroundImage = "none";
		if (ns6) over.style.backgroundImage = "none";
	} else {
		if (ns4) {
			over.background.src = pic;
		} else if (ie4) {
			over.backgroundImage = "url("+pic+")";
		} else if (ns6) {
			over.style.backgroundImage = "url("+pic+")";
		}
	}
}



////////////////////////////////////////////////////////////////////////////////////
// HANDLING FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////


// Displays the popup
function disp(statustext) {
	if ( (ns4) || (ie4) || (ns6) ) {
		if (myO3_allowmove == 0) 	{
			placeLayer();
			showObject(over);
			myO3_allowmove = 1;
		}
	}

	if (statustext != "") {
		self.status = statustext;
	}
}

// Decides where we want the popup.
function placeLayer() {
	var placeX, placeY;
	
	// HORIZONTAL PLACEMENT
	if (myO3_fixx > -1) {
		// Fixed position
		placeX = myO3_fixx;
	} else {
		winoffset = (ie4) ? myO3_frame.document.body.scrollLeft : myO3_frame.pageXOffset;
		if (ie4) iwidth = myO3_frame.document.body.clientWidth;
		if (ns4) iwidth = myO3_frame.innerWidth; // was screwed in mozilla, fixed now?
		if (ns6) iwidth = myO3_frame.outerWidth;
		
		// If HAUTO, decide what to use.
		if (myO3_hauto == 1) {
			if ( (myO3_x - winoffset) > ((eval(iwidth)) / 2)) {
				myO3_hpos = LEFT;
			} else {
				myO3_hpos = RIGHT;
			}
		}
		
		// From mouse
		if (myO3_hpos == CENTER) { // Center
			placeX = myO3_x+myO3_offsetx-(myO3_width/2);
		}
		if (myO3_hpos == RIGHT) { // Right
			placeX = myO3_x+myO3_offsetx;
			if ( (eval(placeX) + eval(myO3_width)) > (winoffset + iwidth) ) {
				placeX = iwidth + winoffset - myO3_width;
				if (placeX < 0) placeX = 0;
			}
		}
		if (myO3_hpos == LEFT) { // Left
			placeX = myO3_x-myO3_offsetx-myO3_width;
			if (placeX < winoffset) placeX = winoffset;
		}
	
		// Snapping!
		if (myO3_snapx > 1) {
			var snapping = placeX % myO3_snapx;
			if (myO3_hpos == LEFT) {
				placeX = placeX - (myO3_snapx + snapping);
			} else {
				// CENTER and RIGHT
				placeX = placeX + (myO3_snapx - snapping);
			}
			if (placeX < winoffset) placeX = winoffset;
		}
	}

	
	
	// VERTICAL PLACEMENT
	if (myO3_fixy > -1) {
		// Fixed position
		placeY = myO3_fixy;
	} else {
		scrolloffset = (ie4) ? myO3_frame.document.body.scrollTop : myO3_frame.pageYOffset;

		// If VAUTO, decide what to use.
		if (myO3_vauto == 1) {
			if (ie4) iheight = myO3_frame.document.body.clientHeight;
			if (ns4) iheight = myO3_frame.innerHeight;
			if (ns6) iheight = myO3_frame.outerHeight;

			iheight = (eval(iheight)) / 2;
			if ( (myO3_y - scrolloffset) > iheight) {
				myO3_vpos = ABOVE;
			} else {
				myO3_vpos = BELOW;
			}
		}


		// From mouse
		if (myO3_vpos == ABOVE) {
			if (myO3_aboveheight == 0) {
				var divref = (ie4) ? myO3_frame.document.all['myOverDiv'] : over;
				myO3_aboveheight = (ns4) ? divref.clip.height : divref.offsetHeight;
			}

			placeY = myO3_y - (myO3_aboveheight + myO3_offsety);
			if (placeY < scrolloffset) placeY = scrolloffset;
		} else {
			// BELOW
			placeY = myO3_y + myO3_offsety;
		}

		// Snapping!
		if (myO3_snapy > 1) {
			var snapping = placeY % myO3_snapy;
			
			if (myO3_aboveheight > 0 && myO3_vpos == ABOVE) {
				placeY = placeY - (myO3_snapy + snapping);
			} else {
				placeY = placeY + (myO3_snapy - snapping);
			}
			
			if (placeY < scrolloffset) placeY = scrolloffset;
		}
	}


	// Actually move the object.	
	repositionTo(over, placeX, placeY);
}


// Moves the layer
function mouseMove(e) {
	if ( (ns4) || (ns6) ) {myO3_x=e.pageX; myO3_y=e.pageY;}
	if (ie4) {myO3_x=event.x; myO3_y=event.y;}
	if (ie5) {myO3_x=event.x+myO3_frame.document.body.scrollLeft; myO3_y=event.y+myO3_frame.document.body.scrollTop;}
	
	if (myO3_allowmove == 1) {
		placeLayer();
	}
}

// The Close onMouseOver function for stickies
function cClick() {
	hideObject(over);
	myO3_showingsticky = 0;
	
	return false;
}


// Makes sure target frame has overLIB
function compatibleframe(frameid) {        
	if (ns4) {
		if (typeof frameid.document.myOverDiv =='undefined') return false;
	} else if (ie4) {
		if (typeof frameid.document.all["myOverDiv"] =='undefined') return false;
	} else if (ns6) {
		if (frameid.document.getElementById('myOverDiv') == null) return false;
	}

	return true;
}



////////////////////////////////////////////////////////////////////////////////////
// LAYER FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////


// Writes to a layer
function layerWrite(txt) {
	txt += "\n";
	
        if (ns4) {
                var lyr = myO3_frame.document.myOverDiv.document

                lyr.write(txt)
                lyr.close()
        } else if (ie4) {
		myO3_frame.document.all["myOverDiv"].innerHTML = txt
	} else if (ns6) {
		range = myO3_frame.document.createRange();
		range.setStartBefore(over);
		domfrag = range.createContextualFragment(txt);
		while (over.hasChildNodes()) {
			over.removeChild(over.lastChild);
		}
		over.appendChild(domfrag);
	}
}

// Make an object visible
function showObject(obj) {
        if (ns4) obj.visibility = "show";
        else if (ie4) obj.visibility = "visible";
	else if (ns6) obj.style.visibility = "visible";
}

// Hides an object
function hideObject(obj) {
        if (ns4) obj.visibility = "hide";
        else if (ie4) obj.visibility = "hidden";
	else if (ns6) obj.style.visibility = "hidden";
        
	if (myO3_timerid > 0) clearTimeout(myO3_timerid);
	if (myO3_delayid > 0) clearTimeout(myO3_delayid);
	myO3_timerid = 0;
	myO3_delayid = 0;
        self.status = "";
}

// Move a layer
function repositionTo(obj,xL,yL) {
	if ( (ns4) || (ie4) ) {
	        obj.left = xL;
	        obj.top = yL;
	} else if (ns6) {
		obj.style.left = xL + "px";
		obj.style.top = yL+ "px";
	}
}





////////////////////////////////////////////////////////////////////////////////////
// PARSER FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////


// Defines which frame we should point to.
function opt_FRAME(frm) {
        myO3_frame = compatibleframe(frm) ? frm : myOl_frame;

	if ( (ns4) || (ie4 || (ns6)) ) {
		if (ns4) over = myO3_frame.document.myOverDiv;
		if (ie4) over = myO3_frame.myOverDiv.style;
		if (ns6) over = myO3_frame.document.getElementById("myOverDiv");
	}

	return 0;
}

// Calls an external function
function opt_FUNCTION(callme) {
	myO3_text = callme()
	return 0;
}




//end (For internal purposes.)
////////////////////////////////////////////////////////////////////////////////////
// OVERLIB 2 COMPATABILITY FUNCTIONS
// If you aren't upgrading you can remove the below section.
////////////////////////////////////////////////////////////////////////////////////

// Converts old 0=left, 1=right and 2=center into constants.
function vpos_convert(d) {
	if (d == 0) {
		d = LEFT;
	} else {
		if (d == 1) {
			d = RIGHT;
		} else {
			d = CENTER;
		}
	}
	
	return d;
}

// Simple popup
function dts(d,text) {
	myO3_hpos = vpos_convert(d);
	myOverlib(text, myO3_hpos, CAPTION, "");
}

// Caption popup
function dtc(d,text, title) {
	myO3_hpos = vpos_convert(d);
	myOverlib(text, CAPTION, title, myO3_hpos);
}

// Sticky
function stc(d,text, title) {
	myO3_hpos = vpos_convert(d);
	myOverlib(text, CAPTION, title, myO3_hpos, STICKY);
}

// Simple popup right
function drs(text) {
	dts(1,text);
}

// Caption popup right
function drc(text, title) {
	dtc(1,text,title);
}

// Sticky caption right
function src(text,title) {
	stc(1,text,title);
}

// Simple popup left
function dls(text) {
	dts(0,text);
}

// Caption popup left
function dlc(text, title) {
	dtc(0,text,title);
}

// Sticky caption left
function slc(text,title) {
	stc(0,text,title);
}

// Simple popup center
function dcs(text) {
	dts(2,text);
}

// Caption popup center
function dcc(text, title) {
	dtc(2,text,title);
}

// Sticky caption center
function scc(text,title) {
	stc(2,text,title);
}
