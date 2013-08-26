/*
 * ChatApplication.as
 * Copyright (C) 2004 Sony Online Entertainment
 *
 */

/*
Assumptions:
These objects have been placed on the stage:
ctaChatOutputWindow
ctiChatInput
cbtSendChat
cdgChatRoster

*/
import mx.controls.gridclasses.DataGridColumn;

import com.sony.soe.platform.guildswebchat.Avatar;
import com.sony.soe.platform.guildswebchat.ChatConnection;
import com.sony.soe.platform.guildswebchat.GuildChannel;
import com.sony.soe.platform.guildswebchat.GuildStatus;
import com.sony.soe.platform.guildswebchat.extension.ExtensionManager;
import com.sony.soe.platform.guildswebchat.Util;
/**
 * The main Chat application. Wires together the application's components
 * and the events that flow between them.
 * Flash UI code should call from the main movie's ActionScript layer with ChatApplication.main().
 * Note that additional internal ActionScript may (and probably will) exist in the movie to handle UI logic.
 *
 * @author pcourtney@soe.sony.com
 */
class ChatApplication
{
	public function ChatApplication()
	{
	}

	private function start(aMovie:MovieClip):Void
	{
		trace(" START ");

		// passed in from web page
		var sessionID = _root.userSessionID;
		var gameName = _root.userGameName;
		var worldName = _root.userWorldName;
		var guildName = _root.userGuildName;
		// static
		var chatServer = _root.userChatServer;
		var chatRoomServer = _root.userChatRoomServer;
		var chatName = _root.userChatName;
		var chatResource = _root.userChatResource;

		aMovie.scaleMode = "noScale";
		aMovie.align = "TL";

		var userColor = "#C3A66C";
		var serverColor = "#006600";
		var otherColor = "#C3A66C";

		var leaderColor = "#D87070";
		var officerColor = "#708AD8";
		var memberColor = "#C3A66C";
		var initiateColor = "#999999";
		var nonmemberColor = "#FFFFFF";




		var connection = new ChatConnection();
		var channel = connection.getGuildChannel();

		var status:GuildStatus = channel.getGuildStatus();

		var myX = "";
		var myY = "";

		var col1:DataGridColumn = new DataGridColumn("guildRank");
		col1.width = 20;
		col1.headerText = "Icon";

		col1.labelFunction = function(item:Avatar) {
			// This is weird, have to tell Flash not to display blank columns. Oh well!
			if (item != undefined)
			{
				// set global variable for myCharName
				_root.myCharName = Util.getShortName(connection.myCharacterName, connection.getGameName(), connection.getWorldName());
			 	return item.guildRankString + item.superArchetype;

				}
		}
		col1.cellRenderer = "IconCellRenderer";





		var col2:DataGridColumn = new DataGridColumn("name");
		col2.width = 200;
		col2.color = 0xffffff;
		col2.headerText = "Character";
		col2.cellRenderer = "LabelCellRenderer";





		aMovie.cdgChatRoster.addColumn(col1);
		aMovie.cdgChatRoster.addColumn(col2);


		aMovie.cdgChatRoster.dataProvider = channel.getRoster();



		aMovie.cdgChatRoster.setRowHeight(22);




		// Event handler
		var eventHandler = new Object();
		eventHandler.handleEvent = function( eventObj )
		{
			// current mouse location
			var mystartX = _root._xmouse;
			var mystartY = _root._ymouse;
			// define ICON clickable area
			var myIconLeft = aMovie.cdgChatRoster._x;
			var myIconRight = Number(aMovie.cdgChatRoster._x + 20);


			// ("** SOE in movie handleEvent: " + eventObj.type);
			switch( eventObj.type )
			{
				case "loginSuccess":
					trace ("* SOE loginSuccess: " + eventObj.characters);
					// Connect to the conference server
					connection.selectCharacter(eventObj.characters[0]);
					break;

				case "selectCharacterSuccess":
					trace ("* SOE selectCharacterSuccess: " + eventObj.data);
					channel.join();
					break;

				case "groupMessage":
					var msg = eventObj.data;
					addToChatOutput( msg.senderShortName, msg.body );
					break;

				case "privateMessage":
					var msg = eventObj.data;
					addToChatOutput( "PRIVATE: " + msg.senderShortName, msg.body );
					break;

				case "change":
                    // trace (eventObj.target.selectedIndex);
                    // trace (eventObj.target.selectedItem);
                    var a:Avatar = Avatar(eventObj.target.selectedItem);
                    // trace (a.name);
                    // trace (a.level);
                    // trace (a.archetype);
                    // trace (a.race);
					// trace(eventObj.target.selectedIndex);
					// trace('X: ' + _root._xmouse +' and Y: '+ _root._ymouse);
					// trace(eventObj.target.selectedItem.cellHeight);

					var selItemIndex = eventObj.target.selectedIndex;

					var myName = a.shortName;
					var myGame = a.game;
					var myServer = a.server;
					var myGuild = a.guild;
					var myLevel = a.level;
					var myRace = a.race;
					var myArchetype = a.archetype;
					var myGuildRank = a.guildRankString;
					var myCitizenship = a.citizenship;
					var myIgnoring = a.ignoring;
					var myLocation = a.location;

					// if NOT clicking on Icon area, run tooltip controller
					if (mystartX > myIconRight) {
						_root.tooltipController(selItemIndex, myName, myGame, myServer, myGuild, myLevel, myRace, myArchetype, myGuildRank, myCitizenship, myIgnoring, myLocation);
					}

					break;

				case "error":
					addToChatOutput("client error: " + eventObj.data);
					break;

				case "itemRollOut":
					_root.hideToolTips();
					break;

				case "itemRollOver":
					// how many dg items in list
					var length = aMovie.cdgChatRoster.length - 1;
					var myIndex = eventObj.index;
					// trace("*** Item: " + Avatar(channel.getRoster().getItemAt(myIndex)).name);

					// used to place right tooltip/tooltip2 in the right vertical position
					// ( x position gathered from 2nd column coordinates, so no need to pass )
					var selItemIndex = eventObj.index;

					var myName = Avatar(channel.getRoster().getItemAt(myIndex)).shortName;
					var myGame = Avatar(channel.getRoster().getItemAt(myIndex)).game;
					var myServer = Avatar(channel.getRoster().getItemAt(myIndex)).server;
					var myGuild = Avatar(channel.getRoster().getItemAt(myIndex)).guild;
					var myLevel = Avatar(channel.getRoster().getItemAt(myIndex)).level;
					var myRace = Avatar(channel.getRoster().getItemAt(myIndex)).race;
					var myArchetype = Avatar(channel.getRoster().getItemAt(myIndex)).archetype;
					var myGuildRank = Avatar(channel.getRoster().getItemAt(myIndex)).guildRankString;
					var myCitizenship = Avatar(channel.getRoster().getItemAt(myIndex)).citizenship;
					var myIgnoring = Avatar(channel.getRoster().getItemAt(myIndex)).ignoring;
					var myLocation = Avatar(channel.getRoster().getItemAt(myIndex)).location;


					// if mousing over on an actual cell in the list (ie: actual number of rows in list, NOT length of cells in the DG)
					if (myIndex <= length) {
						// if mouseover on icon area run tooltip controller
						if (mystartX >= myIconLeft && mystartX <= myIconRight) {
							_root.tooltipController(selItemIndex, myName, myGame, myServer, myGuild, myLevel, myRace, myArchetype, myGuildRank, myCitizenship, myIgnoring, myLocation);
						}
					}

					break;

			}
		}

		eventHandler.sendButtonClicked = function()
		{
			sendMessage( aMovie.ctiChatInput.text );

			// if less than 10 messages in history simply push new message into myHistory array
			if (_root.myHistory.length <= 9) {
				_root.myHistory.push(aMovie.ctiChatInput.text);
			}
			// else shift(remove) first item in array and push new message into myHistory array
			else {
				_root.myHistory.push(aMovie.ctiChatInput.text);
				_root.myHistory.shift();
			}

			aMovie.ctiChatInput.text = "";

		}




		var lastHF = "";
		// Keyboard listener
		var keyListener = new Object();
		keyListener.onKeyUp = function()
		{
			var muaFocusedItem = eval( Selection.getFocus() );
			if( muaFocusedItem == aMovie.ctiChatInput.label && Key.getCode() == Key.ENTER )
			{
				// Mimic send button click
				eventHandler.sendButtonClicked();
			}

			/* 38 = up & 40 = down */
			// if ESCAPE, clear chat input field
			else if( muaFocusedItem == aMovie.ctiChatInput.label && Key.getCode() == Key.ESCAPE) {
				aMovie.ctiChatInput.text = "";
				killHistoryPanel();
			}

			// if UP ARROW, parse history for user selection/view
			else if( muaFocusedItem == aMovie.ctiChatInput.label && Key.getCode() == 38) {
				if (_root.myHistory.length >= 1) {
					// if history panel not currently showing
					if (_root.historyActive == 0) {
						// set global variable to active for historyPanel
						_root.historyActive = 1;

						var myHistoryMovieIndex = _root.myHistory.length + 1;

						var historyYpos = 351;
						var historyFieldHeight = 18.05;

						if (_root.myHistory.length >= 2) {
							// multiply number of historyFields * height of historyField (subtract one hFH - by default we already used its height property)
							var removeYspace = Number(_root.myHistory.length * historyFieldHeight) - historyFieldHeight;
							var newHistoryYpos = Number(historyYpos - removeYspace);
							historyYpos = newHistoryYpos;
//							trace(historyYpos);
						}

						tellTarget ("_root.historyMovie") { gotoAndStop(myHistoryMovieIndex); }
						_root.historyMovie.h1.historyText.text = _root.myHistory[0];
						_root.historyMovie.h2.historyText.text = _root.myHistory[1];
						_root.historyMovie.h3.historyText.text = _root.myHistory[2];
						_root.historyMovie.h4.historyText.text = _root.myHistory[3];
						_root.historyMovie.h5.historyText.text = _root.myHistory[4];
						_root.historyMovie.h6.historyText.text = _root.myHistory[5];
						_root.historyMovie.h7.historyText.text = _root.myHistory[6];
						_root.historyMovie.h8.historyText.text = _root.myHistory[7];
						_root.historyMovie.h9.historyText.text = _root.myHistory[8];
						_root.historyMovie.h10.historyText.text = _root.myHistory[9];
						_root.historyMovie._x = 203;
						_root.historyMovie._y = historyYpos;





					}
					// if historyPanel already active/visible, set focus to most recent historyField
					else {
						var focusOnIndex = _root.myHistory.length;
						// focusOnField.tabEnabled = true;
						if (focusOnIndex == 1) { historyFocusIndex(focusOnIndex); }
						else if (focusOnIndex == 2) { historyFocusIndex(focusOnIndex); }
						else if (focusOnIndex == 3) { historyFocusIndex(focusOnIndex); }
						else if (focusOnIndex == 4) { historyFocusIndex(focusOnIndex); }
						else if (focusOnIndex == 5) { historyFocusIndex(focusOnIndex); }
						else if (focusOnIndex == 6) { historyFocusIndex(focusOnIndex); }
						else if (focusOnIndex == 7) { historyFocusIndex(focusOnIndex); }
						else if (focusOnIndex == 8) { historyFocusIndex(focusOnIndex); }
						else if (focusOnIndex == 9) { historyFocusIndex(focusOnIndex); }
						else if (focusOnIndex == 10) { historyFocusIndex(focusOnIndex); }
//						trace(focusOnField);
					}
				}
			}
			else if( muaFocusedItem != aMovie.ctiChatInput.label && (Key.getCode() == Key.ENTER || Key.getCode() == 38 || Key.getCode() == 40) )
			{

					var myKeyCode = Key.getCode();
					var cualFocus = Selection.getFocus();
					var lastFocus = ''+lastHF+'';
					_root.historyMovie.h1.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
					_root.historyMovie.h2.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
					_root.historyMovie.h3.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
					_root.historyMovie.h4.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
					_root.historyMovie.h5.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
					_root.historyMovie.h6.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
					_root.historyMovie.h7.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
					_root.historyMovie.h8.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
					_root.historyMovie.h9.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
					_root.historyMovie.h10.onKeyDown = runHistoryLoad(myKeyCode,cualFocus,lastFocus);
			}
//			trace(Key.getCode());
//			trace(Selection.getFocus());
		}
function runHistoryLoad(incomingKeyCode,cualFocus,lastFocus) {
	var currHL = _root.myHistory.length;
	var currFocusedNumber = cualFocus.split("e.h");
	var lastFocusedNumber = lastFocus.split("e.h");
	var myLFN = Number(""+lastFocusedNumber[1]+"");

	if (lastFocusedNumber[1] == currHL && incomingKeyCode == 38) {
		var downFocusIndex = Number(myLFN - 1);
		historyFocusIndex(downFocusIndex);
	}
	else if (incomingKeyCode == 38) {
		if(myLFN != 1) {
			var downFocusIndex = Number(myLFN - 1);
			historyFocusIndex(downFocusIndex);
		}
	}
	else if (lastFocusedNumber[1] < currHL && incomingKeyCode == 40) {
		var upFocusIndex = Number(myLFN + 1);
		historyFocusIndex(upFocusIndex);
	}
	else if (incomingKeyCode == Key.ENTER) {
		var myTextIndex = Number(currFocusedNumber[1] - 1);
		var myNewText = _root.myHistory[myTextIndex];
		_root.ctiChatInput.text = myNewText;
		killHistoryPanel();
	}
}

function killHistoryPanel() {
	if (_root.historyActive == 1) {
		var muaLength = _root.ctiChatInput.text.length;
		Selection.setFocus("_root.ctiChatInput");
		Selection.setSelection(muaLength, muaLength);
		tellTarget ("_root.historyMovie") { gotoAndStop(1); }
		_root.historyActive = 0;
		backToNormal();
	}
}
function historyFocusIndex(incomingIndex) {
	backToNormal();
	var focusOnField = '_root.historyMovie.h' + incomingIndex;
	tellTarget(focusOnField) { gotoAndStop(2); }
	if (incomingIndex == 1) {
		_root.historyMovie.h1.historyText.textColor = 0x000000;
		_root.historyMovie.h1.focusEnabled = true;
		_root.historyMovie.h1._focusrect = false;
		Selection.setFocus(_root.historyMovie.h1);
		lastHF = _root.historyMovie.h1;
//		_root.historyMovie.h1.onKeyUp = function () {
//			if (Key.isToggled(27)) {
//				trace('true');
//				killHistoryPanel();
//			}
//		}
	}
	if (incomingIndex == 2) { _root.historyMovie.h2.historyText.textColor = 0x000000; _root.historyMovie.h2.focusEnabled = true; _root.historyMovie.h2._focusrect = false; Selection.setFocus(_root.historyMovie.h2); lastHF = _root.historyMovie.h2; }
	if (incomingIndex == 3) { _root.historyMovie.h3.historyText.textColor = 0x000000; _root.historyMovie.h3.focusEnabled = true; _root.historyMovie.h3._focusrect = false; Selection.setFocus(_root.historyMovie.h3); lastHF = _root.historyMovie.h3; }
	if (incomingIndex == 4) { _root.historyMovie.h4.historyText.textColor = 0x000000; _root.historyMovie.h4.focusEnabled = true; _root.historyMovie.h4._focusrect = false; Selection.setFocus(_root.historyMovie.h4); lastHF = _root.historyMovie.h4; }
	if (incomingIndex == 5) { _root.historyMovie.h5.historyText.textColor = 0x000000; _root.historyMovie.h5.focusEnabled = true; _root.historyMovie.h5._focusrect = false; Selection.setFocus(_root.historyMovie.h5); lastHF = _root.historyMovie.h5; }
	if (incomingIndex == 6) { _root.historyMovie.h6.historyText.textColor = 0x000000; _root.historyMovie.h6.focusEnabled = true; _root.historyMovie.h6._focusrect = false; Selection.setFocus(_root.historyMovie.h6); lastHF = _root.historyMovie.h6; }
	if (incomingIndex == 7) { _root.historyMovie.h7.historyText.textColor = 0x000000; _root.historyMovie.h7.focusEnabled = true; _root.historyMovie.h7._focusrect = false; Selection.setFocus(_root.historyMovie.h7); lastHF = _root.historyMovie.h7; }
	if (incomingIndex == 8) { _root.historyMovie.h8.historyText.textColor = 0x000000; _root.historyMovie.h8.focusEnabled = true; _root.historyMovie.h8._focusrect = false; Selection.setFocus(_root.historyMovie.h8); lastHF = _root.historyMovie.h8; }
	if (incomingIndex == 9) { _root.historyMovie.h9.historyText.textColor = 0x000000; _root.historyMovie.h9.focusEnabled = true; _root.historyMovie.h9._focusrect = false; Selection.setFocus(_root.historyMovie.h9); lastHF = _root.historyMovie.h9; }
	if (incomingIndex == 10) { _root.historyMovie.h10.historyText.textColor = 0x000000; _root.historyMovie.h10.focusEnabled = true; _root.historyMovie.h10._focusrect = false; Selection.setFocus(_root.historyMovie.h10); lastHF = _root.historyMovie.h10; }
}

function backToNormal() {
	if (_root.historyMovie.h1) tellTarget("_root.historyMovie.h1") { gotoAndStop(1); } _root.historyMovie.h1.historyText.textColor = 0xFFFFFF;
	if (_root.historyMovie.h2) tellTarget("_root.historyMovie.h2") { gotoAndStop(1); } _root.historyMovie.h2.historyText.textColor = 0xFFFFFF;
	if (_root.historyMovie.h3) tellTarget("_root.historyMovie.h3") { gotoAndStop(1); } _root.historyMovie.h3.historyText.textColor = 0xFFFFFF;
	if (_root.historyMovie.h4) tellTarget("_root.historyMovie.h4") { gotoAndStop(1); } _root.historyMovie.h4.historyText.textColor = 0xFFFFFF;
	if (_root.historyMovie.h5) tellTarget("_root.historyMovie.h5") { gotoAndStop(1); } _root.historyMovie.h5.historyText.textColor = 0xFFFFFF;
	if (_root.historyMovie.h6) tellTarget("_root.historyMovie.h6") { gotoAndStop(1); } _root.historyMovie.h6.historyText.textColor = 0xFFFFFF;
	if (_root.historyMovie.h7) tellTarget("_root.historyMovie.h7") { gotoAndStop(1); } _root.historyMovie.h7.historyText.textColor = 0xFFFFFF;
	if (_root.historyMovie.h8) tellTarget("_root.historyMovie.h8") { gotoAndStop(1); } _root.historyMovie.h8.historyText.textColor = 0xFFFFFF;
	if (_root.historyMovie.h9) tellTarget("_root.historyMovie.h9") { gotoAndStop(1); } _root.historyMovie.h9.historyText.textColor = 0xFFFFFF;
	if (_root.historyMovie.h10) tellTarget("_root.historyMovie.h10") { gotoAndStop(1); } _root.historyMovie.h10.historyText.textColor = 0xFFFFFF;
}


		// Listener setup
		connection.addEventListener( "loginSuccess", eventHandler );
		connection.addEventListener( "selectCharacterSuccess", eventHandler );
		connection.addEventListener( "error", eventHandler );
		channel.addEventListener( "groupMessage", eventHandler );

		// TODO: figure out when private messages could be coming through the channel
		channel.addEventListener( "privateMessage", eventHandler );
		connection.addEventListener( "privateMessage", eventHandler );
		aMovie.cbtSendChat.addEventListener( "click", eventHandler.sendButtonClicked );


		Key.addListener( keyListener );
		aMovie.addListener( eventHandler );


		// DataGrid listener
		aMovie.cdgChatRoster.addEventListener("change", eventHandler);
		aMovie.cdgChatRoster.addEventListener("itemRollOut", eventHandler);
		aMovie.cdgChatRoster.addEventListener("itemRollOver", eventHandler);


		// TODO: handle nickname
		function addToChatOutput( nickname, text )
		{
			if( connection.getCharacterName() == nickname )
			{
				var output = "<font face=\"verdana\" color=\"" + userColor + "\">"+ "[" + aMovie.getTimeStamp() + "] </font><font face=\"verdana\" color=\"#ffffff\">" + nickname + ": ";
			}
			else if( nickname == null )
			{
				var output = "<font face=\"verdana\" color=\"" + serverColor + "\">* ";
			}
			else
			{
				var output = "<font face=\"verdana\" color=\"" + otherColor + "\">"+ "[" + aMovie.getTimeStamp() + "] </font><font face=\"verdana\" color=\"#ffffff\">" + nickname + ": ";
			}

			output += text + "<br/>";

			aMovie.ctaChatOutputWindow.text += output;

			// hack hardcode to test out auto-scroll down
			aMovie.ctaChatOutputWindow.vPosition = aMovie.ctaChatOutputWindow.vPosition + 20;
		}

		function sendMessage( messageBody )
		{
			channel.sendGuildMessage( messageBody );
		}

		// for development only, we can select:
		// main server
		// conference (room) server
		// login name and password
		channel.setConferenceServer(chatRoomServer);
//		channel.setRoomName("adev-guild1");
//		channel.setConferenceServer("conference.sdplatdev2.station.sony.com");
		// connection.loginDev("AExternalDevUser1", "password", "xp-pcourtney.ad.soe.sony.com");
//		connection.loginDev('mine1','password',"sdplatdev2.station.sony.com");
		connection.login(sessionID, chatServer, gameName, worldName, guildName, chatName, chatResource);
	}




	/** The entry point into the application.
	  *
	  * @param aMovie The movie clip to attach the chat application to. Probably, but doesn't have to be, the main movie (the stage).
	  */
	public static function main(aMovie:MovieClip):Void
	{
		var application:ChatApplication = new ChatApplication();
		application.start(aMovie);

	}
}
