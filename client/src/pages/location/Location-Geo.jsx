import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import BackArrow from '../../components/buttons/BackArrow';
import { LocationContext } from '../../context/LocationContext';
import LocationCards from './LocationCards';
import { CircularProgress } from '@material-ui/core';

//Grab Location to pull nearby grocery store

const LocationGeo = () => {
  const { grocery, setGrocery } = useContext(LocationContext);

  const [location, setLocation] = useState({});
  const [boolLoc, setBoolLoc] = useState(false);

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  function success(pos) {
    let crd = pos.coords;
    setLocation(crd);
    setBoolLoc(true);
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    axios({
      method: 'POST',
      url: `http://localhost:8080/location/mobile`,
      data: { long: location.longitude, lat: location.latitude }
    })
      .then((store) => {
        setGrocery(store.data);
        window.localStorage.setItem('stores', JSON.stringify(store.data));
        window.localStorage.setItem('prime', JSON.stringify(store.data[0]));
      })
      .catch((error) => console.error(error));
  }, [boolLoc]);

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <div>
      <BackArrow />
      {grocery && <LocationCards />}
      {!boolLoc && <CircularProgress />}
    </div>
  );
};

export default LocationGeo;
