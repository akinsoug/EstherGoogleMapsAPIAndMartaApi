var map;


function initMap() {

	
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
		zoom: 15,
		scrollwheel: false
	});
	

	var image2 = {url: '/image2.PNG',  scaledSize: new google.maps.Size(50, 50)};
	
	for (i=0; i<busLocations.length; i++){
		let marker = new google.maps.Marker({
		    position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
		    map: map,
		    icon: image2
		});
		
		

		let contentString = '<h2>' + busLocations[i].VEHICLE + '</h2>';
//		var contentString = "stringggg";

		let infowindow = new google.maps.InfoWindow({
		   content: contentString
		});
		
		google.maps.event.addListener(marker, 'click', function() {
			   infowindow.open(map,marker);
			});
		
	}
	



	var image = {url: '/Fly.PNG',  scaledSize: new google.maps.Size(50, 50)};

	var marker2 = new google.maps.Marker({
		position: { lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng) },
	    map: map,
	    icon: image,
	    animation: google.maps.Animation.BOUNCE
	});



	

	
	
	/*
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
		zoom: 15,
		scrollwheel: false
	});
	var image = {url: '/custom_marker.png', scaledSize: new google.maps.Size(50, 50)};
//	var image = {url: '/image2.PNG', scaledSize: new google.maps.Size(50, 50)};
	for (i=0; i<busLocations.length; i++){
		var marker = new google.maps.Marker({
//		    position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
//		    map: map,
			position: coords,
		    map: map,
		    icon: image
		});
		
		
		var contentString = '<h2>' + bus.VEHICLE + '</h2>';

		var infowindow = new google.maps.InfoWindow({
		   content: contentString
		});

		google.maps.event.addListener(marker, 'click', function() {
		   infowindow.open(map,marker);
		});
		
		
	}
	
	var marker2 = new google.maps.Marker({
		position: { lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng) },
	    map: map,
	    icon: image,
	    animation: google.maps.Animation.BOUNCE
	});

	
	*/
}




//file:///D:/workspace-spring-tool-suite-4-4.5.1---2/TransitApp/src/main/resources/static/image2.PNG