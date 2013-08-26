/*
 * Copyright (C) 2003-2004 
 * Sean Voisen <sean@mediainsites.com>
 * Sean Treadway <seant@oncotype.dk>
 * Media Insites, Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA 
 *
 */

import com.mediainsites.xiff.data.ISerializable;
import com.mediainsites.xiff.data.XMPPStanza;

/**
 * A class for abstraction and encapsulation of IQ (info-query) data.
 * 
 * @author Sean Voisen
 * @since 2.0.0
 * @availability Flash Player 7
 * @param recipient The JID of the IQ recipient
 * @param sender The JID of the IQ sender - the server should report an error if this is falsified
 * @param iqType The type of the IQ - there are static variables declared for each type
 * @param iqID The unique ID of the IQ
 * @param iqCallback The function to be called when the server responds to the IQ
 * @param iqCallbackScope The object instance containing the callback method
 * @toc-path Data
 * @toc-sort 1
 */
class com.mediainsites.xiff.data.IQ extends XMPPStanza implements ISerializable
{
	private var myCallback:String;
	private var myCallbackScope:Object;

	private var myQueryName:String;
	private var myQueryFields:Array;
	
	// Static variables for specific type strings
	public static var SET_TYPE:String = "set";
	public static var GET_TYPE:String = "get";
	public static var RESULT_TYPE:String = "result";
	public static var ERROR_TYPE:String = "error";

	public function IQ( recipient:String, iqType:String, iqID:String, iqCallback:String, iqCallbackScope:Object )
	{
		// Flash gives a warning if superconstructor is not first, hence the inline id check
		super( recipient, null, iqType, exists( iqID ) ? iqID : generateID("iq_"), "iq" );
		
		callbackName = iqCallback;
		callbackScope = iqCallbackScope;
	}

	/**
	 * Serializes the IQ into XML form for sending to a server.
	 *
	 * @return An indication as to whether serialization was successful
	 * @availability Flash Player 7
	 */
	public function serialize( parentNode:XMLNode ):Boolean
	{
		return super.serialize( parentNode );
	}
	
	/**
	 * Deserializes an XML object and populates the IQ instance with its data.
	 *
	 * @param xmlNode The XML to deserialize
	 * @return An indication as to whether deserialization was sucessful
	 * @availability Flash Player 7
	 */
	public function deserialize( xmlNode:XMLNode ):Boolean
	{
		return super.deserialize( xmlNode );
	}
	
	/**
	 * The name of the callback function to call when a response to the IQ
	 * is received. This isn't a required property, but is useful if you
	 * need to respond to server responses to an IQ.
	 *
	 * @availability Flash Player 7
	 * @see #callbackScope
	 */
	public function get callbackName():String
	{
		return myCallback;
	}
	
	public function set callbackName( aName:String ):Void
	{
		myCallback = aName;
	}
	
	/**
	 * The scope of the callback function to call when a response to the IQ
	 * is received. This isn't a required property, but is useful if you
	 * need to respond to server responses to an IQ.
	 *
	 * @availability Flash Player 7
	 * @see #callbackName
	 */
	public function get callbackScope():Object
	{
		return myCallbackScope;
	}
	
	public function set callbackScope( scope:Object ):Void
	{
		myCallbackScope = scope;
	}
}
