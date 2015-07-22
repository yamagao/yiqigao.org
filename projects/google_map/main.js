/** Map with florida and county areas: hover to show county name, click to show marker and infoWindow with extension info 
*** Author: Yiqi Gao
*** Last Modified: July 20, 2015
**/
var Center = new google.maps.LatLng(27.9,-83);
var map;
var infoWindow;
var markers = {};
var tags = {};
var infoWindows = {};
function initialize() {
	// Create the map
	var mapOptions = {
		zoom: 8,
		center: Center,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	//Construct Florida Polygon
	var Florida = new google.maps.Polygon({
		paths: FloridaCoords,
		strokeColor: '#D4886A',
		strokeOpacity: 0.8,
		strokeWeight: 4,
		fillColor: '#FFC2AA',
		fillOpacity: 0.1
	});
	Florida.setMap(map);
	
	//Construct County Polygons and Animation
	for (var i = 0; i < countyCoords.counties.length; i++) {
		var polygon = new google.maps.Polygon({
			county: countyCoords.counties[i].name,
			paths: countyCoords.counties[i].coords,
			strokeColor: '#D4886A',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FFC2AA',
			fillOpacity: 0.2,
		});
		polygon.setMap(map);
		
		//Label with county name
		var tag = new MarkerWithLabel({
			position: new google.maps.LatLng(0,0),
			draggable: false,
			raiseOnDrag: false,
			map: map,
			labelContent: countyCoords.counties[i].name,
			labelAnchor: new google.maps.Point(30, 20),
			labelClass: "labels", // the CSS class for the label
			labelStyle: {opacity: 1.0},
			icon: "http://placehold.it/1x1",
			visible: false
		 });
		 tags[countyCoords.counties[i].name] = tag;
		
		//hover on the polygon to show county name
		google.maps.event.addListener(polygon, 'mousemove', function(event){
			//get polygon center and show tag there
			var bounds = new google.maps.LatLngBounds();
			this.getPath().forEach(function(element,index){bounds.extend(element)});
			tags[this.county].setPosition(bounds.getCenter());
			//tags[this.county].setPosition(markers[this.county].position);
			tags[this.county].setVisible(true);
			if(map.zoom > 10 || isInfoWindowOpen(infoWindows)){
				tags[this.county].setVisible(false);
			}
		});
		
		//hide label when unhover
		google.maps.event.addListener(polygon, "mouseout", function(event) {
			tags[this.county].setVisible(false);
		});
		
		//click tag to show marker and infoWindow
		google.maps.event.addListener(tag, 'click', function(){
			//hide all markers
			for (var name in markers) {
				markers[name].setMap(null);
			}
			
			//find county data
			for(var i = 0; i < data.counties.length; i++){
				if(data.counties[i].name == this.county){
					var dataCounty = data.counties[i];
					break;
				}
			}
			
			//set marker and infoWindow
			markers[dataCounty.name].setMap(map);
			infoWindows[dataCounty.name].open(map, markers[dataCounty.name]);
		});
		
		//click polygon to show marker and infoWindow
		google.maps.event.addListener(polygon, 'click', function(){
			//hide all markers
			for (var name in markers) {
				markers[name].setMap(null);
			}
			
			//find county data
			for(var i = 0; i < data.counties.length; i++){
				if(data.counties[i].name == this.county){
					var dataCounty = data.counties[i];
					break;
				}
			}
			
			//set marker and infoWindow
			markers[dataCounty.name].setMap(map);
			infoWindows[dataCounty.name].open(map, markers[dataCounty.name]);
		});
	}
	
	// Construct markers and infoWindows from data
	for (var i = 0; i < data.counties.length; i++) {
		var dataCounty = data.counties[i];
		var latLng = new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude);
		var marker = new google.maps.Marker({
			position: latLng,
			//title: 'Alachua'
		});
		markers[dataCounty.name] = marker;
		//marker.setMap(map);
		
		//infoWindows
		var String = "<h3>" + dataCounty.name + "</h3>FNP Contact: " + dataCounty.contact + "<br>" + dataCounty.extension + "<br>" + dataCounty.address + "<br><a href='mailto:" + dataCounty.email + "'>" + dataCounty.email + "</a><br>" + dataCounty.phone;
		var infoWindow = new google.maps.InfoWindow({
			content:  String,
			position: new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude)
		});
		infoWindows[dataCounty.name] = infoWindow;
				
		//hide markers when infoWindow is closed
		google.maps.event.addListener(infoWindow,'closeclick', function(){
			//hide all markers
			for (var name in markers) {
				markers[name].setMap(null);
			}
		});
	}		
}

//check if these is any infoWindow open
function isInfoWindowOpen(infoWindows){
	var getmap;
	for (var name in infoWindows) {
		getmap = infoWindows[name].getMap();
		if(getmap !== null && typeof getmap !== "undefined"){
			return true;
		}
	}
	return false;
}
google.maps.event.addDomListener(window, 'load', initialize);