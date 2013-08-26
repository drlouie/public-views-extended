var popupMode=1;

var blankImage="img/blank.gif";
var isHorizontal=0;
var menuWidth=0;
var absolutePos=0;
var posX=20;
var posY=10;
var floatable=0;
var floatIterations=5;
var movable=0;
var moveCursor="move";
var moveImage="img/movepic4.gif";
var moveWidth=12;
var moveHeight=18;
var fontStyle="normal 10px verdana";
var fontColor=["#000000","#FFFFFF"];
var fontDecoration=["none","none"];
var itemBackColor=["#BFBFBF","#BFBFBF"];
var itemBorderWidth=1;
var itemAlign="left";
var itemBorderColor=["#BF0000","#BF0000"];
var itemBorderStyle=["solid","solid"];
var itemBackImage=["",""];
var itemSpacing=1;
var itemPadding=5;
var itemCursor="default";
var itemTarget="";
var iconTopWidth=16;
var iconTopHeight=16;
var iconWidth=16;
var iconHeight=16;
var menuBackImage="";
var menuBackColor="";
var menuBorderColor="#BFBFBF #737373 #4D4D4D #AAAAAA ";
var menuBorderStyle=["solid"];
var menuBorderWidth=1;
var subMenuAlign="left";
var transparency=85;
var transition=10;
var transDuration=300;
var shadowColor="#C7C7C7";
var shadowLen=3;
var arrowImageMain=["img/arrow_r.gif","img/arrow_r.gif"];
var arrowImageSub=["img/arrow_r.gif","img/arrow_r.gif"];
var arrowWidth=7;
var arrowHeight=7;

var separatorImage="img/separ1.gif";
var separatorWidth="100%";
var separatorHeight="5";
var separatorAlignment="center";

var separatorVImage="img/separ1.gif";
var separatorVWidth="100&";
var separatorVHeight="5";
var statusString="text";
var pressedItem=-2;

var menuItems = [
   ["Open Link","testlink.html"],
   ["Open Link in New Window","testlink.html","","","","_blank"],
   ["More Info","testlink.html"],
     ["|Help &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ","testlink.html"],
     ["|About &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ","testlink.html"],
];

apy_init();
