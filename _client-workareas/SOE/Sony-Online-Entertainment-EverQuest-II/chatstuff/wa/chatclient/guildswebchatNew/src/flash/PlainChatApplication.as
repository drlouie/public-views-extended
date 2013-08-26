/*
 * PlainChatApplication.as
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
class PlainChatApplication
{
	public function PlainChatApplication()
	{
	}

	private function start(aMovie:MovieClip):Void
	{
		// passed in from web page
		//var sessionID = "186980960";
		//var sessionID = "556484419";
		var sessionID = "540184213";
		var gameName = "EQ2";
		var worldName = "Beta 1 (US English)";
		var guildName = "Knights of Zek";
		// static
		var chatServer = "sdplatdev1.station.sony.com";
		var chatRoomServer = "sdplatdev1.station.sony.com";
		var chatName = "WebChat";
		var chatResource = "WebClient";

		aMovie.scaleMode = "noScale";
		aMovie.align = "TL";

		var userColor = "#0000FF";
		var serverColor = "#006600";
		var otherColor = "#000000";

		var connection:ChatConnection = new ChatConnection();
		var channel:GuildChannel = connection.getGuildChannel();

		var status:GuildStatus = channel.getGuildStatus();

		// customize DataGrid
		// easy, but less flexible way
		// aMovie.cdgChatRoster.columnNames = ["guildRank", "name"];

		var col1:DataGridColumn = new DataGridColumn("guildRank");
		//col1.width = 150;
		col1.headerText = "guildRank";

		// We will actually need to do a custom cell renderer to display icons, something like:
		// col1.cellRenderer = ...

		var col2:DataGridColumn = new DataGridColumn("shortName");
		//col2.width = 150;

		var col3:DataGridColumn = new DataGridColumn("location");
		//col3.width = 150;

		var col4:DataGridColumn = new DataGridColumn("ignoring");
		//col4.width = 150;

		var col5:DataGridColumn = new DataGridColumn("level");
		//col5.width = 150;

		var col6:DataGridColumn = new DataGridColumn("race");
		//col6.width = 150;

		var col7:DataGridColumn = new DataGridColumn("archetype");
		//col7.width = 150;

		var col8:DataGridColumn = new DataGridColumn("citizenship");
		//col8.width = 150;

		var col9:DataGridColumn = new DataGridColumn("fullName");

		// By manually adding columns, we tell the data grid to only
		// show these columns
		/*
		aMovie.cdgChatRoster.addColumn(col1);
		aMovie.cdgChatRoster.addColumn(col2);
		aMovie.cdgChatRoster.addColumn(col3);
		aMovie.cdgChatRoster.addColumn(col4);
		aMovie.cdgChatRoster.addColumn(col5);
		aMovie.cdgChatRoster.addColumn(col6);
		aMovie.cdgChatRoster.addColumn(col7);
		aMovie.cdgChatRoster.addColumn(col8);
		aMovie.cdgChatRoster.addColumn(col9);
		*/

		aMovie.cdgChatRoster.dataProvider = channel.getRoster();
		//cdgChatRoster.dataProvider = channel.room;

		// Event handler
		var eventHandler = new Object();
		eventHandler.handleEvent = function( eventObj )
		{
			//trace ("** SOE in movie handleEvent: " + eventObj.type);
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
					/*
				case "change":
					trace (eventObj.target.selectedIndex);
					trace (eventObj.target.selectedItem);
					var a:Avatar = Avatar(eventObj.target.selectedItem);
					trace (a.name);
					trace (a.level);
					trace (a.archetype);
					//trace (eventObj.target.selectedIndex);
					break;
					*/
				case "error":
					addToChatOutput("client error: " + eventObj.data);
					break;

				case "cellFocusIn":
				case "cellFocusOut":
					trace (eventObj.target.selectedIndex);
					trace (eventObj.target.selectedItem);
					var a:Avatar = Avatar(eventObj.target.selectedItem);
					trace (a.shortName);
					trace (a.level);
					trace (a.archetype);
					//trace (eventObj.target.selectedIndex);
					break;
			}
		}

		eventHandler.sendButtonClicked = function()
		{
			var typed:String = aMovie.ctiChatInput.text;
			if (typed.charAt(0) == '/')
			{
				processCommand(typed.substr(1, typed.length - 1));
			}
			else
			{
				sendMessage( aMovie.ctiChatInput.text );
			}
			aMovie.ctiChatInput.text = "";
		}

		// Keyboard listener
		var keyListener = new Object();
		keyListener.onKeyUp = function()
		{
			if( eval( Selection.getFocus() ) == aMovie.ctiChatInput.label && Key.getCode() == Key.ENTER )
			{
				// Mimic send button click
				eventHandler.sendButtonClicked();
			}
		}

		// Listener setup
		connection.addEventListener( "loginSuccess", eventHandler );
		connection.addEventListener( "selectCharacterSuccess", eventHandler );
		connection.addEventListener( "error", eventHandler );
		channel.addEventListener( "groupMessage", eventHandler );

		connection.addEventListener( "privateMessage", eventHandler );
		aMovie.cbtSendChat.addEventListener( "click", eventHandler.sendButtonClicked );
		// Would this work?
		//cbtSendChat.onClick = eventHandler.sendButtonClicked;
		Key.addListener( keyListener );
		aMovie.addListener( eventHandler );

		// DataGrid listener
		//aMovie.cdgChatRoster.addEventListener("cellPress", eventHandler);
		aMovie.cdgChatRoster.addEventListener("cellFocusIn", eventHandler);
		aMovie.cdgChatRoster.addEventListener("change", eventHandler);
		aMovie.cdgChatRoster.addEventListener("cellFocusOut", eventHandler);

		// TODO: handle nickname
		function addToChatOutput( nickname, text )
		{
			if( connection.getCharacterName() == nickname )
			{
				var output = "<font color=\"" + userColor + "\">" + nickname + ": ";
			}
			else if( nickname == null )
			{
				var output = "<font color=\"" + serverColor + "\">* ";
			}
			else
			{
				var output = "<font color=\"" + otherColor + "\">" + nickname + ": ";
			}

			output += text + "<br/>";

			aMovie.ctaChatOutputWindow.text += output;

			// hack hardcode to test out auto-scroll down
			aMovie.ctaChatOutputWindow.vPosition = 10000;
		}

		function sendMessage( messageBody )
		{
			channel.sendGuildMessage( messageBody );
		}

		// helper

		function processCommand(command:String):Void
		{
			addToChatOutput("command", command);
			if (command.charAt(0) == 't')
			{
				var pieces:Array = command.substr(2).split(" ");
				trace("$$ send private message to: " + pieces[0] + ": " + pieces[1]);
				connection.sendPrivateMessage(pieces[0], pieces[1]);
			}
		}

		// these are now passed from the connection to the channel
		//channel.setRoomName(guildName);
		channel.setConferenceServer(chatRoomServer);

		//connection.loginDev(name, resource, password, server);
		//connection.loginDev('lrodriguez','lrodriguez',null);
		connection.login(sessionID, chatServer, gameName, worldName, guildName, chatName, chatResource);

		}

	/** The entry point into the application.
	  *
	  * @param aMovie The movie clip to attach the chat application to. Probably, but doesn't have to be, the main movie (the stage).
	  */
	public static function main(aMovie:MovieClip):Void
	{
		var application:PlainChatApplication = new PlainChatApplication();
		application.start(aMovie);
	}
}
