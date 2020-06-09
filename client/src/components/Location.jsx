import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

//Grab Location to pull nearby grocery store

const Location = () => {
    const [ location, setLocation ] = useState({})
    const [ boolLoc, setBoolLoc ] = useState(false)
    const [ groceryStores, setGroceryStores] = useState([])

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0 
    }
    function success(pos){
        let crd = pos.coords;
        setLocation(crd)
        setBoolLoc(true)
    }
    function error(err){
        console.warn(`ERROR(${err.code}): ${err.message}`)
        navigator.geolocation.getCurrentPosition( success, error, options)
    }

    useEffect(()=> {
        console.log("in UseEffect")
        if(boolLoc){
            axios({
                method: 'POST',
                url: `http://localhost:8080/location`,
                data:{ 
                    long: location.longitude,
                    lat: location.latitude
                    }
            }).then(store => {
                console.log("In Axios Response")
                setGroceryStores(store.data)
                setBoolLoc(false)
            }).catch( error => console.error(error) )
    }}, [boolLoc])

        navigator.geolocation.getCurrentPosition( success, error, options)
    
    return(
        <div>
            <h1>test</h1>
            {groceryStores && groceryStores.map( store => {
                return(
                    <div className='lCards-container'>
                        <span className='lCard-storeName'>{store.name}</span>
                        <a href={`geo:${store.address[0]} ${store.address[1]}`} className='lCard-storeAddress'>{`${store.address[0]} ${store.address[1]}`}</a>
                        <span className='lCard-storeDistance'>{store.distance}</span>
                    </div>
                )
            })
            }
            
        </div>
    )
}

export default Location
