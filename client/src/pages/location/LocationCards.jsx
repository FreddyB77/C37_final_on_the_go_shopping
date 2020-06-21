import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { LocationContext } from '../../context/LocationContext'
import { useHistory } from 'react-router-dom'

import BackArrow from '../../components/buttons/BackArrow'
import './location.css'

const LocationCards = () => {
    let history = useHistory();
    const { grocery, setPrimaryStore } = useContext(LocationContext) 

    const handleStoreSubmit = (store) => {
        setPrimaryStore(store);
        history.push("/home")
    }

    return (
        <div className="grocerylist">
            {grocery?.map(grocery => (
                    <Button onClick={() => handleStoreSubmit(grocery.name)}>
                        <div className="grocery-int-button">
                            <h1>{grocery.name}</h1>
                            <p>{grocery.distance} miles away</p>
                        </div>
                    </Button>
            ))}
        </div>
        )
}

export default LocationCards
