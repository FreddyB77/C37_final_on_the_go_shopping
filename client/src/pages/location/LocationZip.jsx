import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Button, TextField } from '@material-ui/core'
import { Paper, } from '@material-ui/core'
import { LocationContext } from '../../context/LocationContext'
import { useHistory } from 'react-router-dom'

import BackArrow from '../../components/buttons/BackArrow'
import RoomIcon from '@material-ui/icons/Room';
import LocationCards from './LocationCards'

import './location.css'

const LocationZip = () => {
    let history = useHistory()

    const { grocery, setGrocery, 
            primaryStore, setPrimaryStore,
            zip, setZipCode 
        } = useContext(LocationContext)   
    const [renderStat, setRenderStat ] = useState(false)

    const fetchGrocery = (e) => {
        e.preventDefault()
        axios({
            method: 'GET',
            url: `http://localhost:8080/location/zip/${zip}`
        }).then((data) => {
            setGrocery(data.data)
            window.localStorage.setItem('stores', JSON.stringify(data.data))
            window.localStorage.setItem('prime', JSON.stringify(data.data[0]))
            setRenderStat(true)
        }).catch((e) => console.log(e))
    }

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
        
        { renderStat && <LocationCards/> } 
        
        </div>
    )
}

export default LocationZip
