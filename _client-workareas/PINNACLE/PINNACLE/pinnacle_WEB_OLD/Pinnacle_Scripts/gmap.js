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
      map.setCenter(new GLatLng(lat,lon),15);
      // Set up three markers with info windows 

      var point = new GLatLng(lat,lon);
      var marker = createMarker(point,'<div style="width:240px">Some stuff to display in the First Info Window. With a <a href="http://www.econym.demon.co.uk">Link</a> to my home page</div>');
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