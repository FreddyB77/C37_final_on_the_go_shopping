import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const SearchContext = React.createContext()

export const SearchContextProvider = ( props ) => {
  
    const [ scanSearch, setScanSearch ] = useState({
        category: "Food, Beverages & Tobacco > Food Items > Snack Foods > Chips",
        description: "Party size bag is perfect for sharingGreat for dipping in your favorite Tostitos salsa or quesoDelicious hint of lime flavor",
        image: "https://i5.walmartimages.com/asr/5f3b43fd-e7fa-412c-aa55-128b4c0d7528_1.2a895fdbef4711cc26873811f148dd9c.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
        price: 5.99,
        quantity: 1,
        title: "HI Tostitos Hint of Lime Tortilla Chips, Party Size, 18 oz Bag",
        upc: "028400045735"
    })
    const [ userSearch, setUserSearch ] = useState({ 
        searchKey: 'Chips', 
        searchResult: [{
            category: "Food, Beverages & Tobacco > Food Items > Snack Foods > Chips",
            description: "Party size bag is perfect for sharingGreat for dipping in your favorite Tostitos salsa or quesoDelicious hint of lime flavor",
            image: "https://i5.walmartimages.com/asr/5f3b43fd-e7fa-412c-aa55-128b4c0d7528_1.2a895fdbef4711cc26873811f148dd9c.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
            price: 0,
            quantity: 1,
            title: "HI Tostitos Hint of Lime Tortilla Chips, Party Size, 18 oz Bag",
            upc: "028400045735"
        },{
            category: "Food, Beverages & Tobacco > Food Items > Snack Foods > Chips",
            description: "Party size bag is perfect for sharingGreat for dipping in your favorite Tostitos salsa or quesoDelicious hint of lime flavor",
            image: "https://i5.walmartimages.com/asr/5f3b43fd-e7fa-412c-aa55-128b4c0d7528_1.2a895fdbef4711cc26873811f148dd9c.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
            price: 0,
            quantity: 1,
            title: "HI Tostitos Hint of Lime Tortilla Chips, Party Size, 18 oz Bag",
            upc: "028400045735"
        },
        ]})
    

    function handleSearch(search, history){
        console.log("Handle Search", search)
        // history.push("/category/list")
        // axios.get(`/products/search/${search}`)
        //     .then(res => setScanSearch(res.data))
        //     .then(() => history.push("/category/list"))
        //     .catch(e => console.log(e))
        // setUserSearch({...userSearch, searchKey: search})
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
