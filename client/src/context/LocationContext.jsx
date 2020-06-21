import React, { useState } from 'react'

export const LocationContext = React.createContext()

const LocationContextProvider = ( props ) => {
    const [ grocery, setGrocery ] = useState([{name: "Test Store", address: ["ABC", "1234"], distance: "0.5"}])
    const [ zip, setZipCode ] = useState('')
    const [ primaryStore, setPrimaryStore ] = useState()

    return( 
        <LocationContext.Provider value={{
            //States
            grocery, setGrocery,
            primaryStore, setPrimaryStore,
            zip, setZipCode
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}

export  {LocationContextProvider}