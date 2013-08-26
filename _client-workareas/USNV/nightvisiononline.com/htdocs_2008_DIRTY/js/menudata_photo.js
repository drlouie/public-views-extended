var popupMode=1;

var blankImage="nvi/spacer.gif";
var isHorizontal=0;
var menuWidth=0;
var absolutePos=0;
var posX=20;
var posY=10;
var floatable=0;
var floatIterations=5;
var movable=0;
var moveCursor="move";
var moveImage="";
var moveWidth=12;
var moveHeight=18;
var fontStyle="normal 10px verdana";
var fontColor=["#000000","#FFFFFF"];
var fontDecoration=["none","none"];
var itemBackColor=["#BFBFBF","#000000"];
var itemBorderWidth=0;
var itemAlign="left";
var itemBorderColor=["#009900","#009900"];
var itemBorderStyle=["solid","solid"];
var itemBackImage=["",""];
var itemSpacing=0;
var itemPadding=3;
var itemCursor="pointer";
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
var transparency=95;
var transition=21;
var transDuration=150;
var shadowColor="#C7C7C7";
var shadowLen=3;
var arrowImageMain=["nvi/arrowPhoto.gif","nvi/arrowPhoto.gif"];
var arrowImageSub=["nvi/arrowPhoto.gif","nvi/arrowPhoto.gif"];
var arrowWidth=7;
var arrowHeight=7;

var separatorImage="";
var separatorWidth="100%";
var separatorHeight="5";
var separatorAlignment="center";

var separatorVImage="";
var separatorVWidth="100&";
var separatorVHeight="5";
var statusString="text";
var pressedItem=-2;

var menuItems = [
   [" Attach Selected Photo To"],
%%ELDYNSCRIPT%%
   [" Detach Selected Photo From &nbsp;"],
%%ELDYNSCRIPT2%%
   [" Edit Selected Photo","javascript:editPhoto();"],
   [" Delete Selected Photo &nbsp; &nbsp;","javascript:deletePhoto();"],

   ["Preview Selected Photo"],
   ["| &nbsp; in Browser [ HTML ] &nbsp; &nbsp; &nbsp;","javascript:photoBrowse();"],
   ["| &nbsp; in Gallery [ FLASH ] &nbsp; &nbsp; &nbsp;","javascript:photoGallery();"],

   [" Other Functions"],
   ["| &nbsp; Upload a Photograph &nbsp; &nbsp; &nbsp;","javascript:uploadPhoto();","","","","_blank"],
];

apy_init();


