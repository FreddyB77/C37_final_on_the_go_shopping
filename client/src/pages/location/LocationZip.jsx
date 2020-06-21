import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core'
import { Paper, } from '@material-ui/core'
import { LocationContext } from '../../context/LocationContext'
import { useHistory } from 'react-router-dom'

import BackArrow from '../../components/buttons/BackArrow'
import RoomIcon from '@material-ui/icons/Room';
import './location.css'

const LocationZip = () => {
    let history = useHistory()

    const { grocery, setGrocery, 
            primaryStore, setPrimaryStore,
            zip, setZipCode 
        } = useContext(LocationContext)   
    const [ renderStat, setRenderStat ] = useState(false)

    const fetchGrocery = (e) => {
        e.preventDefault()
        axios({
            method: 'GET',
            url: `/location/zip/${zip}`
        }).then((data) => {
            setGrocery(data.data)
            setRenderStat(true)
        }).catch((e) => console.log(e))
    }

    const handleStoreSubmit = (store) => {
        setPrimaryStore(store);
        history.push("/home")
    }

    const LocationCards = () => (
            <div className="grocerylist">
            <Button id="shopping-location">
                <RoomIcon/>Shopping in {zip}
            </Button>
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
    

    return (
        <div>
        <BackArrow />
        <form className="zipFinder" onSubmit={(e) => fetchGrocery(e)}>
            <h1 id="enter-zipCode">Enter Zip Code</h1>
            <Paper 
                component="form" 
                className="searchBar-container" 
            >
                <TextField
                    style={{margin:"60px 0 0 0"}}
                    id="outlined-number"
                    type="number"
                    variant="outlined"
                    onChange={e => setZipCode(e.target.value)}
                />
            </Paper>
                
            <Button type="submit" id="zipSubmit">
                Search
            </Button>
        </form>
        
        { renderStat && <LocationCards /> } 
        
        </div>
    )
}

export default LocationZip
