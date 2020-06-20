import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const SearchContext = React.createContext()

export const SearchContextProvider = ( props ) => {
  
    const [ scanSearch, setScanSearch ] = useState({})
    const [ userSearch, setUserSearch ] = useState({
        "searchKey":"Cheese",
        "searchResult":[{
            "upc":"021000010882",
            "title":"Kraft Easy Mac Triple Cheese Macaroni and Cheese, 2.05 oz Cup",
            "description":"One 2.05 oz. cup of Kraft Easy Mac Triple Cheese Macaroni and CheeseKraft Easy Mac Triple Cheese Macaroni and Cheese is an easy dinner that's ready in just minutesQuick macaroni and cheese cups include macaroni noodles and triple cheese sauce mixContains no artificial flavors, no artificial preservatives and no artificial dyesEasy macaroni and cheese is microwaveable for convenienceMacaroni and cheese is a classic single serve meal or dorm foodMacaroni noodles and triple cheese sauce mix are individually sealed for lasting freshness",
            "category":"Hardware > Tools",
            "price":0,
            "image":"https://i5.walmartimages.com/asr/a4fc6936-9547-4db5-97b8-2593b9f8137e_3.a041a8268039d8bed2eb26c4ea9bd46b.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
            "quantity":1
        },{"upc":"044000045524","title":"PASTEURIZED CHEESE SNACK","description":"INGREDIENTS: WATER, WHEY, CHEDDAR CHEESE (MILK, SALT, CHEESE CULTURE, ENZYMES), CANOLA OIL, WHEY PROTEIN CONCENTRATE, MILK PROTEIN CONCENTRATE, CONTAINS LESS THAN 2% OF MILK, SODIUM CITRATE, SODIUM PHOSPHATE, CALCIUM PHOSPHATE, SALT, LACTIC ACID, SODIUM ALGINATE, SORBIC ACID AS A PRESERVATIVE, COLOR (ANNATTO EXTRACT, APOCAROTENAL), ENZYMES, CHEESE CULTURE.","category":"Food, Beverages & Tobacco > Food Items > Dips & Spreads > Cheese Dips & Spreads","price":0,"image":"https://i5.walmartimages.com/asr/f2eeef56-d5cd-4522-b5d1-2bb48fda7d36_1.5cf91202a3f68c802f21829c8165c4e9.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff","quantity":1},{"upc":"021000010875","title":"Kraft Easy Mac Original Flavor Macaroni and Cheese, 2.05 oz Cup","description":"One 2.05 oz. cup of Kraft Easy Mac Original Flavor Macaroni and CheeseKraft Easy Mac Original Flavor Macaroni and Cheese is an easy dinner that's ready in 3.5 minutesMacaroni and cheese dinner includes macaroni pasta and original flavor cheese sauce mixContains no artificial flavors, no artificial preservatives and no artificial dyesEasy macaroni and cheese is microwaveable for convenienceMacaroni and cheese makes a great easy dinner for kids or adultsMacaroni noodles and cheese sauce mix are individually sealed","category":"Food, Beverages & Tobacco > Food Items > Prepared Foods > Prepared Meals & Entrées","price":0,"image":"https://media.officedepot.com/images/t_extralarge%2Cf_auto/products/433590/433590_p_easy_mac_original_microwave_single_serve_dinners.jpg","quantity":1},{"upc":"850813002902","title":"Monastery Country Gouda Cheese -All Natural Freshly Handmade 2 Pound Wheel in Wax Using Fresh on the Farm Milk for Perfect Taste & Texture--Semi-soft, Sweet & Buttery","description":"","category":"Food, Beverages & Tobacco > Food Items > Dairy Products > Cheese","price":59,"quantity":1},{"upc":"707581877570","title":"Vella Sonoma County Dry Jack Cheese - 1 pound chunk","description":"Vella Sonoma County Dry Jack Cheese - 1 pound chunk","category":"Food, Beverages & Tobacco > Food Items > Dairy Products > Cheese","price":19.32,"image":"https://i5.walmartimages.com/asr/f6488f87-d4b3-48fd-8c1a-c7f53ce23844_1.49cb0b0d0811226684ae060dc00b2c84.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff","quantity":1}]})
    

    function handleSearch(search, history){
        console.log("Handle Search", search)
        history.push("/category/list")
        // axios.get(`/products/search/${search}`)
        //     .then(res => setUserSearch({searchKey: search, searchResult: [...res.data]}))
        //     .catch(e => console.log(e))
    }

    function upcSearch(upc){
        // axios.get(`/products/${upc}`)
        //     .then(res => setScanSearch(res.data[0]))
        //     .catch(e => console.log(e))
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
