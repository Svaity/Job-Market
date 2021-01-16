function getCoordintes() { 
  var options = { 
      enableHighAccuracy: true, 
      timeout: 5000, 
      maximumAge: 0 
  }; 

  function success(pos) { 
      var crd = pos.coords; 
      var lat = crd.latitude.toString(); 
      var lng = crd.longitude.toString(); 
      var coordinates = [lat, lng]; 
      console.log(`Latitude: ${lat}, Longitude: ${lng}`); 
      document.getElementById("ss").value=`Latitude: ${lat}, Longitude: ${lng}`
      getCity(coordinates); 
      return ; 

  } 

  function error(err) { 
      console.warn(`ERROR(${err.code}): ${err.message}`); 
  } 

  navigator.geolocation.getCurrentPosition(success, error, options); 
} 


// Step 2: Get city name 
function getCity(coordinates) { 
  var xhr = new XMLHttpRequest(); 
  var lat = coordinates[0]; 
  var lng = coordinates[1]; 

  // Paste your LocationIQ token below. 
  xhr.open('GET', " https://us1.locationiq.com/v1/reverse.php?key=pk.28505c1b21facbcb055691bd11f5ce99&lat=" + 
  lat + "&lon=" + lng + "&format=json", true); 
  xhr.send(); 
  xhr.onreadystatechange = processRequest; 
  xhr.addEventListener("readystatechange", processRequest, false); 

  function processRequest(e) { 
      if (xhr.readyState === 4 && xhr.status === 200) { 
          var response = JSON.parse(xhr.responseText); 
          // city = response.address.city; 
          document.getElementById("ss").value=response.address.state
          console.log(response.address.state); 
          return; 
      } 
  } 
} 
