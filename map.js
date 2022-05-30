// map js
function renderMap(){
  let googleMap = document.createElement("script")
  
  googleMap.async = true
  googleMap.defer = true
  googleMap.type = "text/javascript"
  googleMap.src = "https://maps.googleapis.com/maps/api/js?callback=initMap&key="

  fetch("http://localhost:3000/apiKeys")
  .then(response => response.json())
  .then(data => {
    googleMap.src += data.googleKey
    document.body.appendChild(googleMap)
  })
}

function initMap(){
  let options = {
    zoom: 15,
    center: {lat:40.7401, lng:-73.9903}
  }
  let map = new google.maps.Map(document.getElementById("loctionContainer"), options)
}

document.addEventListener('DOMContentLoaded', () => {
  // renderMap()
})