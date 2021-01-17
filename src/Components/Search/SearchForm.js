import React from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import {FormControlLabel, IconButton, Switch} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';

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
      // document.getElementById("ss").value=`Latitude: ${lat}, Longitude: ${lng}`
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
          document.getElementById("ss").value=response.address.city
          console.log(response.address.state); 
          return; 
      } 
  } 
} 

getCoordintes();

export default function SearchForm({ params, onParamChange }) {
  return (
    <div className="form">
    <Form className="mt-4">
      <Form.Row className="align-items-end">
        <Form.Group className="col-7" as={Col}>
          <Form.Control onChange={onParamChange} value={params.title} name="description" type="text" placeholder="Search"/>
        </Form.Group>
        <Form.Group as={Col}>
          <div>
          <Form.Control id="ss" onChange={onParamChange} value={params.location} name="location" type="text" placeholder="Location"/>
          </div>
        </Form.Group>
        <Form.Group>
          
        </Form.Group>
        {/* <IconButton  onClick={getCoordintes()}>
          <RoomIcon/>
          </IconButton> */}
        <Form.Group as={Col} xs="auto" className="ml-2">
          {/* <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" /> */}

          <FormControlLabel className="mb-2"
    control={<Switch checked={params.full_time} onChange={onParamChange} value={params.location} />}
    label="Fulltime"
  />
  <Button variant="secondary" onClick={onParamChange} value={params.location}>Search</Button>
        </Form.Group>
        
      </Form.Row>
    </Form>
    </div>
  )
}
