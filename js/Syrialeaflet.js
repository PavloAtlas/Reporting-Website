var mymap = L.map('SyriaMap').setView([35.184644, 38.105432], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

var myStyle = {
    "color": "#b53737"
};

L.geoJson(SyrianBorders, {style:myStyle,}).addTo(mymap)
.bindPopup("<b>Syrian Government</b>"	);









var myLayer = L.geoJson(News, {
    onEachFeature: function(feature, layer) {
    	layer.bindPopup(feature.properties.Headline + "<br>" + "<a href='" + feature.properties.Link + "'>" + feature.properties.Link + "</a>" + "<br>" + feature.properties.time                              );
    }		
}).addTo(mymap);
