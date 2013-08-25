    if (GBrowserIsCompatible()) { 
		document.getElementById("map").innerHTML = '';		
      // A function to create the marker and set up the event window
      // Dont try to unroll this function. It has to be here for the function closure
      // Each instance of the function preserves the contends of a different instance
      // of the "marker" and "html" variables which will be needed later when the event triggers.    
      function createMarker(point,html) {
        var marker = new GMarker(point);
        GEvent.addListener(marker, "click", function() {
          marker.openInfoWindowHtml(html);
        });
        return marker;
      }

      // Display the map, with some controls and set the initial location 
/**/
/*  parent only because we using infrinit */
/**/
      var map = new GMap2(document.getElementById("map"));
      map.addControl(new GLargeMapControl());
      map.addControl(new GMapTypeControl());
//      map.setCenter(new GLatLng(43.907787,-79.359741),8);
      map.setCenter(new GLatLng(lat,lon),13);
      // Set up three markers with info windows 


      var point = new GLatLng(lat,lon);
      var marker = createMarker(point,'<div style="font-family:arial,verdana,helvetica;font-size:10px;"><nobr>'+ a +'</nobr><br><nobr>'+ c +', '+ s +' '+ z +'</nobr><br><br>Entire website is for sale AS-IS or fully customized to your business needs and requirements. It&lsquo;s<br>simply here to promote to you, our prospective client, the Internet Engineering capabilties and<br>Website Design expertise you will only come to find with a team of technology geniuses such as<br>our own. Simply give us a call or use any of the forms within this website to get in contact with us<br>when you&lsquo;re ready to begin moving forward with your technological ideas and project(s).<br><br><b>Call: 909.489.2484</b><br><br>Enjoy,<br>NetMedia Solutions<br><br>HINT: You can use the "Hybrid" button to get a <i>Live Aerial View</i> of this property and map!<br></div>');
      map.addOverlay(marker);
/*    
      var point = new GLatLng(43.91892,-78.89231);
      var marker = createMarker(point,'Some stuff to display in the<br>Second Info Window')
      map.addOverlay(marker);

      var point = new GLatLng(43.82589,-79.10040);
      var marker = createMarker(point,'Some stuff to display in the<br>Third Info Window')
      map.addOverlay(marker);
*/
    }
    
    // display a warning if the browser was not compatible
    else {
      alert("Sorry, the Google Maps API is not compatible with this browser");
    }