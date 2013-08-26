oMenu=new menuObj('oMenu') //Place a name for the menu in there. Must be uniqe for each menu

//Setting menu object variables

//Style variables NOTE: The stylesheet have been removed. Use this instead! (some styles are there by default, like position:absolute ++)
oMenu.clMain='padding:2px; font-family:verdana; font-size:11px' //The style for the main menus
oMenu.clSub='padding:2px; font-family:verdana; font-size:11px' //The style for the submenus
oMenu.clSubSub='padding:2px; font-family:verdana; font-size:11px' //The style for the subsubmenus
oMenu.clAMain='text-decoration:none; color:#FFFFCC' //The style for the main links
oMenu.clASub='text-decoration:none; color:#FFFFCC' //The style for the sub links
oMenu.clASubSub='text-decoration:none; color:#FFFFCC' //The style for the subsub links

//Background bar properties
oMenu.backgroundbar=1 //Set to 0 if no backgroundbar
oMenu.backgroundbarfromleft=0 //The left placement of the backgroundbar in pixel or %
oMenu.backgroundbarfromtop=100 //The top placement of the backgroundbar  in pixel or %
oMenu.backgroundbarsize="100%" //The size of the bar in pixel or %
oMenu.backgroundbarcolor="Black" //The backgroundcolor of the bar

oMenu.mainheight=18 //The height of the main menuitems in pixel or %
oMenu.mainwidth=120 //The width of the main menuitems  in pixel or %

/*These are new variables. In this example they are set like the previous version*/
oMenu.subwidth=oMenu.mainwidth // ** NEW ** The width of the submenus
oMenu.subheight=20 //The height if the subitems in pixel or % 

oMenu.subsubwidth=oMenu.mainwidth // ** NEW ** The width of the subsubmenus in pixel or % 
oMenu.subsubheight=oMenu.subheight //** NEW ** The height if the subsubitems in pixel or % 


//Writing out the style for the menu (leave this line!)
oMenu.makeStyle()

oMenu.subplacement=oMenu.mainheight //** NEW ** Relative to the main item
oMenu.subsubXplacement=125 //** NEW ** The X placement of the subsubmenus, relative to the sub item
oMenu.subsubYplacement=4 //** NEW ** The Y placement of the subsubmenus, relative to the sub item

oMenu.mainbgcoloroff='#000000' //The backgroundcolor of the main menuitems
oMenu.mainbgcoloron='#5F5F5F' //The backgroundcolor on mouseover of the main menuitems
oMenu.subbgcoloroff='#000000' //The backgroundcolor of the sub menuitems
oMenu.subbgcoloron='#5F5F5F' //The backgroundcolor on mouseover of the sub menuitems
oMenu.subsubbgcoloroff='#000000' //The backgroundcolor of the subsub menuitems
oMenu.subsubbgcoloron='#5F5F5F' //The backgroundcolor on mouseover of the subsub menuitems
oMenu.stayoncolor=0 //Do you want the menus to stay on the mouseovered color when clicked?

oMenu.menuspeed=10 //The speed of the clipping in px
oMenu.menusubspeed=15 //The speed of the submenus clipping in px

oMenu.menurows=1 //Set to 0 if you want rows and to 1 if you want columns

oMenu.menueventon="mouse" //Set this to "mouse" if you want the menus to appear onmouseover, set it to "click" if you want it to appear onclick
oMenu.menueventoff="mouse" //Set this to "mouse" if you them to disappear onmouseout, if not set it to "click"

//Placement of the menuitems

//Example in %:
//oMenu.menuplacement=new Array("20%","40%","60%","50%","65%") //Remember to make the arrays contain as many values as you have main menuitems

//Example in px: (remember to use the ' ' around the numbers)
//oMenu.menuplacement=new Array(10,200,300,400,500)

//Example right beside eachother (only adding the pxbetween variable)
oMenu.menuplacement=0

//If you use the "right beside eachother" you cant how many pixel there should be between each here
oMenu.pxbetween=0 //in pixel or %

//And you can set where it should start from the left here
oMenu.fromleft=0 //in pixel or %

//This is how much from the top the menu should be.
oMenu.fromtop=100 //in pixel or %

/********************************************************************************
Construct your menus below
********************************************************************************/

//FIND A PERSON MENU
//Main items:
// makeMain(MAIN_NUM,'TEXT','LINK','FRAME_TARGET') (set link to 0 if you want submenus of this menu item)
oMenu.makeMain(0,'Find A Person',0)
	//Sub items:
	// makeSub(MAIN_NUM,SUB_NUM,'TEXT','LINK',TOTAL,'FRAME_TARGET') (set link to 0 if you want submenus of this menu item)
	oMenu.makeSub(0,0,'Link 1','http://www.danhausen.com',5)
	oMenu.makeSub(0,1,'Link 2','#',5)
	oMenu.makeSub(0,2,'Link 3','#',5)
	oMenu.makeSub(0,3,'Link 4','#',5)
	oMenu.makeSub(0,4,'Link 5','#',5)


//FIND A SCHOOL MENU
oMenu.makeMain(1,'Find A School',0)
	oMenu.makeSub(1,0,'Link 1','#',3)
	oMenu.makeSub(1,1,'Link 2','#',3)
	oMenu.makeSub(1,2,'Link 3','#',3)

//CITY GUIDES MENU		
oMenu.makeMain(2,'City Guides',0)
	oMenu.makeSub(2,0,'Arizona',0,2)
	oMenu.makeSub(2,1,'Arkansas',0,2)
	
		oMenu.makeSubSub(2,0,0,'Pheonix','#',3)
		oMenu.makeSubSub(2,0,1,'Tucson','#',3)
		oMenu.makeSubSub(2,0,2,'Berkeley','#',3)	
		oMenu.makeSubSub(2,0,3,'Central Coast','#',3)	
		
		oMenu.makeSubSub(2,1,0,'Fayetteville','#',3)
		oMenu.makeSubSub(2,1,1,'Fort Smith','#',3)
		oMenu.makeSubSub(2,1,2,'Hot Springs','#',3)	
		oMenu.makeSubSub(2,1,3,'Little Rock','#',3)
		
//SHOPPING GUIDES MENU		
oMenu.makeMain(3,'Shopping Guides',0)
	oMenu.makeSub(3,0,'Link 1',0,2)
	oMenu.makeSub(3,1,'Link 2',0,2)
	oMenu.makeSub(3,2,'Link 3',0,2)
	
//DRIVING DIRECTIONS MENU		
oMenu.makeMain(4,'Driving Directions',0)
	oMenu.makeSub(4,0,'Arizona',0,2)
	oMenu.makeSub(4,1,'Arkansas',0,2)
	oMenu.makeSub(4,2,'California',0,2)
	
		
//When all the menus are written out we initiates the menu
oMenu.construct()	