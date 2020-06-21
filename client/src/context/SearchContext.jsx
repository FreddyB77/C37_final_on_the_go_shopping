import React, { useState } from 'react'
import axios from 'axios'

export const SearchContext = React.createContext()

export const SearchContextProvider = ( props ) => {
  
  
    const [ scanSearch, setScanSearch ] = useState({})
    const [ userSearch, setUserSearch ] = useState({})
    

    function handleSearch(search, history){
        axios.get(`/products/search/${search}`)
            .then(res => {
              setUserSearch({searchKey: search, searchResult: [...res.data]})
              history.push("/category/list")
              })
            .catch(e => console.log(e))
    }

    function upcSearch(upc){
        axios.get(`/products/${upc}`)
            .then(res => setScanSearch(res.data[0]))
            .catch(e => console.log(e))
    }

    function handlePDPSearch(search, history){
      axios.get(`/products/search/${search}`)
          .then(res => {
            setUserSearch({searchKey: search, searchResult: [...res.data]})
            history.push(`/pdp/${search}`)
            })
          .catch(e => console.log(e))
  }
    



  return(
    <SearchContext.Provider value={{
        //State
        scanSearch, setScanSearch,
        userSearch, setUserSearch,
        //Functions
        handleSearch, 
        handlePDPSearch,
        upcSearch
    }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default { SearchContextProvider }
