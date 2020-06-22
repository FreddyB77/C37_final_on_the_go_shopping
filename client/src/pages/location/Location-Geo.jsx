import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackArrow from '../../components/buttons/BackArrow';
// import { LocationContext } from '../../context/LocationContext';
import LocationCards from './LocationCards';
import { CircularProgress } from '@material-ui/core';

//Grab Location to pull nearby grocery store

const LocationGeo = () => {
  const [location, setLocation] = useState({});
  const [boolLoc, setBoolLoc] = useState(false);
  const [ show, setShow] = useState(false)
  let x = 0;

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  async function success(pos) {
    console.log("Success")
    let crd = pos.coords;
    setLocation(crd);
    await setBoolLoc(true);
    x = x + 1;
  }
  function error(err) {
    console.log(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if(boolLoc && (x === 0)){
      axios({
        method: 'POST',
        url: `http://localhost:8080/location/mobile`,
        data: { long: location.longitude, lat: location.latitude }
      })
        .then((store) => {
          setShow(true)
          window.localStorage.setItem('stores', JSON.stringify(store.data));
          window.localStorage.setItem('prime', JSON.stringify(store.data[0]));
        })
        .catch((error) => console.error(error));
    }
      return ( () => setBoolLoc(false))
  }, [boolLoc]);

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <div>
      <BackArrow />
      {show && <LocationCards />}
      {!show && <CircularProgress />}
    </div>
  );
};

export default LocationGeo;
