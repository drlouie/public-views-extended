fixMozillaZIndex=true; //Fixes Z-Index problem  with Mozilla browsers but causes odd scrolling problem, toggle to see if it helps
_menuCloseDelay=500;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;




with(contextStyle=new mm_style()){
bordercolor="#999999";
borderstyle="solid";
borderwidth=1;
fontfamily="arial, verdana, tahoma";
fontsize="75%";
fontstyle="normal";
headerbgcolor="#4F8EB6";
headerborder=1;
headercolor="#ffffff";
offbgcolor="#ffffff";
offcolor="#000000";
onbgcolor="#ECF4F9";
onborder="1px solid #316AC5";
oncolor="#000000";
outfilter="randomdissolve(duration=0.4)";
overfilter="Fade(duration=0.2);Shadow(color=#777777', Direction=135, Strength=3)";
padding=3;
pagebgcolor="#eeeeee";
pageborder="1px solid #ffffff";
pageimage="http://www.milonic.com/menuimages/db_red.gif";
separatorcolor="#999999";
subimage="http://www.milonic.com/menuimages/black_13x13_greyboxed.gif";
}

with(milonic=new menuname("contextMenu")){
margin=3;
style=contextStyle;
top="offset=2";
aI("image=http://www.milonic.com/menuimages/home.gif;text=Milonic Home Page;url=/;");
aI("image=http://www.milonic.com/menuimages/print.gif;separatorsize=1;text=Print;url=javascript:window.print();");
aI("image=http://www.milonic.com/menuimages/back.gif;text=Back;url=javascript:history.go(-1);");
aI("image=http://www.milonic.com/menuimages/forward.gif;text=Forward;url=javascript:history.go(1);");
aI("image=http://www.milonic.com/menuimages/browser.gif;text=Refresh;url=javascript:history.go(0);");
aI("separatorsize=1;text=View Page Source;url=javascript:Vsrc();");
aI("showmenu=Context Menu Samples;text=Menu samples;");
aI("text=Disable This Menu;url=`javascript:var contextDisabled=true;");
}

with(milonic=new menuname("Context Menu Samples")){
itemwidth=227;
margin=3;
overflow="scroll";
style=contextStyle;
aI("text=Plain Text Horizontal Style DHTML Menu Bar;url=menusample1.php;")
aI("text=Vertical Plain Text Menu;url=menusample2.php;")
aI("text=Using The Popup Menu Function Positioned by Images;url=menusample24.php;")
aI("text=Classic XP Style Menu;url=menusample82.php;")
aI("text=XP Style;url=menusample86.php;")
aI("text=Office XP Style Menu;url=menusample47.php;")
aI("text=Office 2003 Style Menu;url=menusample46.php;")
aI("text=Apple Mac Style Menu;url=menusample72.php;")
aI("text=Amazon Style Tab Menu;url=menusample74.php;")
aI("text=Milonic Home Menu;url=menusample78.php;")
aI("text=Windows 98 Style Menu;url=menusample13.php;")
aI("text=Multiple Styles Menu;url=menusample5.php;")
aI("text=Multi Colored Menu Items;url=menusample80.php;")
aI("text=Multi Colored Menus Using Styles;url=menusample7.php;")
aI("text=Multi Tab;url=menusample50.php;")
aI("text=Tab Top;url=menusample52.php;")
aI("text=Multi Columns;url=menusample73.php;")
aI("text=100% Width Span Menu;url=menusample26.php;")
aI("text=Follow Scrolling Style Menu;url=menusample10.php;")
aI("text=Menu Positioning With Offsets;url=menusample23.php;")
aI("text=Table Based (Relative) Menus;url=menusample9.php;")
aI("text=Opening Windows and Frames with the Menu;url=menusample11.php;")
aI("text=Menus Over Form Selects, Flash and Java Applets;url=menusample14.php;")
aI("text=Activating Functions on Mouseover;url=menusample15.php;")
aI("text=Drag Drop Menus;url=menusample22.php;")
aI("text=Menus with Header Type Items;url=menusample8.php;")
aI("text=Right To Left Openstyle;url=menusample65.php;")
aI("text=Up Openstyle Featuring Headers;url=menusample33.php;")
aI("text=DHTML Menus and Tooltips;url=menusample6.php;")
aI("text=Unlimited Level Menus Example;url=menusample67.php;")
aI("text=Context Right Click Menu;url=menusample27.php;")
aI("text=Menus built entirely from images;url=menusample18.php;")
aI("text=Static Images Sample;url=menusample16.php;")
aI("text=Rollover Swap Images Sample;url=menusample17.php;")
aI("text=Background Item Images;url=menusample20.php;")
aI("text=Background Image Buttons;url=menusample89.php;")
aI("text=Menu Background Images;url=menusample76.php;")
aI("text=Creating Texture with Menu Background Images;url=menusample19.php;")
aI("text=Static Background Item Images;url=menusample71.php;")
aI("text=Vertical Static Background Item Images;url=menusample87.php;")
aI("text=World Map Sample;url=menusample92.php;")
aI("text=US Map Sample;url=menusample91.php;")
aI("text=Image Map Sample;url=menusample4.php;")
aI("text=Rounded Edges Imperial Style;url=menusample21.php;")
aI("text=Corporation;url=menusample40.php;")
aI("text=International;url=menusample70.php;")
aI("text=Clean;url=menusample32.php;")
aI("text=3D Gradient Block;url=menusample57.php;")
aI("text=Descreet;url=menusample42.php;")
aI("text=Agriculture;url=menusample41.php;")
aI("text=Breeze;url=menusample29.php;")
aI("text=Chart;url=menusample66.php;")
aI("text=Cartoon;url=menusample77.php;")
aI("text=Start Button Menu;url=menusample69.php;")
aI("text=Tramline;url=menusample54.php;")

}

drawMenus();

