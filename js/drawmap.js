
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VyYWpyb2xhbmQiLCJhIjoiY2lqajlpd2RpMDA0OXZ4bTRyamNlc2EwMyJ9.Rsk4eJZA1ZASRkR1QWp6Cw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
    center: [100, -15], // starting position
    zoom: 1// starting zoom
});
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.dragPan.disable();
map.dragRotate.disable();
map.touchZoomRotate.disable();

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.911620800000037, 52.12416220000001]
    },
    properties: {
      title: 'Mapbox',
      description: 'Hildesheim, Germany'
    }
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});
