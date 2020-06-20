import React, { useState } from 'react'
import axios from 'axios'

export const SearchContext = React.createContext()

export const SearchContextProvider = ( props ) => {
  
    const [ scanSearch, setScanSearch ] = useState({})
    const [ userSearch, setUserSearch ] = useState({})
    

    function handleSearch(search, history){
        console.log("Handle Search", search)
        history.push("/category/list")
        axios.get(`/products/search/${search}`)
            .then(res => setUserSearch({searchKey: search, searchResult: [...res.data]}))
            .catch(e => console.log(e))
    }

    function upcSearch(upc){
        axios.get(`/products/${upc}`)
            .then(res => setScanSearch(res.data[0]))
            .catch(e => console.log(e))
        console.log("Scan Search", scanSearch)
    }

    



  return(
    <SearchContext.Provider value={{
        //State
        scanSearch, setScanSearch,
        userSearch, setUserSearch,
        //Functions
        handleSearch, upcSearch
    }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default { SearchContextProvider }
