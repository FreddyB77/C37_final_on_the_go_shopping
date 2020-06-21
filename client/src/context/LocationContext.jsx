import React, { useState, useEffect } from 'react'

export const LocationContext = React.createContext()

const LocationContextProvider = ( props ) => {
    const [ grocery, setGrocery ] = useState([])
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