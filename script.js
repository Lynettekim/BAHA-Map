mapboxgl.accessToken = 'pk.eyJ1IjoibHluZXR0ZWtpbSIsImEiOiJjbWhiOXZudWoxeDNvMmtwdTRjZTcxdmcxIn0.-LL7vBclw7jWTwVAleNHdw';
const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/lynettekim/cmhb9zp12001c01sm6h9k27ok', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });