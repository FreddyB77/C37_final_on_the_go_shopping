import React, {  useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import './location.css';

const LocationCards = ({grocery}) => {
  let history = useHistory();
  //const { grocery, setPrimaryStore } = useContext(LocationContext);

  // const [ primaryStore, setPrimaryStore ] = useState(JSON.parse(window.localStorage.getItem('prime')))
  // const [ grocery ] = useState(JSON.parse(window.localStorage.getItem('stores')))

  const handleStoreSubmit = (store) => {
    // setPrimaryStore(store);
    window.localStorage.setItem('prime', store)
    //history.push('/home');
  };

  return (
    <div className="grocerylist">
      {grocery?.map((grocery,key) => (
        <Button
        id='lCards'
          key={`geo-${key}`}
          onClick={() => window.localStorage.setItem('prime', grocery.name)}
          href="/home"
        >
          <div className="grocery-int-button">
            <h1>{grocery.name}</h1>
            <p>{grocery.distance} miles away</p>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default LocationCards;
