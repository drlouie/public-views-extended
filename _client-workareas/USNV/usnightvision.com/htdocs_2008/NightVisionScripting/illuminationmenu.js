/*
   Deluxe Menu Data File
   Created by Deluxe Tuner v2.0
   http://deluxe-menu.com
*/


// -- Deluxe Tuner Style Names
var itemStylesNames=["Individual Style",];
var menuStylesNames=["Individual Style",];
// -- End of Deluxe Tuner Style Names

//--- Common
var isHorizontal=0;
var smColumns=1;
var smOrientation=0;
var smViewType=0;
var dmRTL=0;
var pressedItem=-1;
var itemCursor="pointer";
var itemTarget="_self";
var statusString="link";
var blankImage="/NightVisionImages/spacer.gif";

//--- Dimensions
var menuWidth="10";
var menuHeight="10";
var smWidth="";
var smHeight="";

//--- Positioning
var absolutePos=0;
var posX="10";
var posY="10";
var topDX=-109;
var topDY=22;
var DX=0;
var DY=0;

//--- Font
var fontStyle="normal 11px Tahoma";
var fontColor=["#000000","#FFFFFF"];
var fontDecoration=["none","none"];
var fontColorDisabled="#AAAAAA";

//--- Appearance
var menuBackColor="";
var menuBackImage="";
var menuBackRepeat="repeat";
var menuBorderColor="";
var menuBorderWidth=0;
var menuBorderStyle="solid";

//--- Item Appearance
var itemBackColor=["",""];
var itemBackImage=["",""];
var itemBorderWidth=0;
var itemBorderColor=["#FFFFFF","#FFFFFF"];
var itemBorderStyle=["solid","solid"];
var itemSpacing=1;
var itemPadding="0";
var itemAlignTop="left";
var itemAlign="left";
var subMenuAlign="";

//--- Icons
var iconTopWidth=16;
var iconTopHeight=16;
var iconWidth=18;
var iconHeight=18;
var arrowWidth=7;
var arrowHeight=7;
var arrowImageMain=["",""];
var arrowImageSub=["/NightVisionImages/arr_black_2.gif","/NightVisionImages/arr_black_22.gif"];

//--- Separators
var separatorImage="/NightVisionImages/sep_grey.gif";
var separatorWidth="80%";
var separatorHeight="0";
var separatorAlignment="right";
var separatorVImage="";
var separatorVWidth="0";
var separatorVHeight="100%";

//--- Floatable Menu
var floatable=0;
var floatIterations=6;
var floatableX=1;
var floatableY=1;

//--- Movable Menu
var movable=0;
var moveWidth=12;
var moveHeight=20;
var moveColor="#DECA9A";
var moveImage="";
var moveCursor="move";
var smMovable=0;
var closeBtnW=15;
var closeBtnH=15;
var closeBtn="";

//--- Transitional Effects & Filters
var transparency="100";
var transition=24;
var transOptions="";
var transDuration=350;
var transDuration2=200;
var shadowLen=3;
var shadowColor="#F2F5F7";
var shadowTop=0;

//--- CSS Support (CSS-based Menu)
var cssStyle=1;
var cssSubmenu="submenu2";
var cssItem=["item12","item22"];
var cssItemText=["text12","text22"];

//--- Advanced
var dmObjectsCheck=0;
var saveNavigationPath=1;
var showByClick=0;
var noWrap=1;
var pathPrefix_img="";
var pathPrefix_link="";
var smShowPause=200;
var smHidePause=1000;
var smSmartScroll=1;
var smHideOnClick=1;
var dm_writeAll=0;

//--- AJAX-like Technology
var dmAJAX=0;
var dmAJAXCount=0;

//--- Dynamic Menu
var dynamic=0;

//--- Keystrokes Support
var keystrokes=1;
var dm_focus=1;
var dm_actKey=113;

var itemStyles = [
    ["CSS=topitem12,topitem22","CSSText=toptext12,toptext22"],
];
var menuStyles = [
    ["CSS=topsubmenu2"],
];

var menuItems = [
    ["","", "/NightVisionImages/NightVisionMenus/mainIllumination_off.gif", "/NightVisionImages/NightVisionMenus/mainIllumination_over.gif", , , "0", "0", , ],
        ["|Flashlights","/US-Night-Vision-Accessories.htm", "/NightVisionImages/NightVisionMenus/a3_off.gif", "/NightVisionImages/NightVisionMenus/a1_over.gif", , , , , , ],
        ["|-","", "/NightVisionImages/spacer.gif", "/NightVisionImages/spacer.gif", , , , , , ],
   		["|Floodlights & Spotlights","/US-Night-Vision-Accessories.htm", "/NightVisionImages/NightVisionMenus/a3_off.gif", "/NightVisionImages/NightVisionMenus/a1_over.gif", , , , , , ],
        ["|-","", "/NightVisionImages/spacer.gif", "/NightVisionImages/spacer.gif", , , , , , ],
        ["|Weapon Mounted Lights","", "/NightVisionImages/NightVisionMenus/a3_off.gif", "/NightVisionImages/NightVisionMenus/a1_over.gif", , , , , , ],
        ["|-","", "/NightVisionImages/spacer.gif", "/NightVisionImages/spacer.gif", , , , , , ],
   		["|IR Illuminators (Infrared)","/US-Night-Vision-Accessories.htm", "/NightVisionImages/NightVisionMenus/a3_off.gif", "/NightVisionImages/NightVisionMenus/a1_over.gif", , , , , , ],			
];

dm_init();
