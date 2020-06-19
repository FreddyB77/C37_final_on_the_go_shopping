import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CartContext = React.createContext()

const CartContextProvider = ( props ) => {

    const [cart, setCart] = useState([
        /*
        {
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            UPC: 1,
            quantity: 1   
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            UPC: 2,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            UPC: 3,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            UPC: 4,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            UPC: 5,
            quantity: 1
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            UPC: 6,
            quantity: 1    
        }
        */
    ])
    const [ userCart, setUserCart ] = useState([])
    const [ lastLookup, setLastLookUp ] = useState({
        category: "Food, Beverages & Tobacco > Food Items > Snack Foods > Chips",
        description: "Party size bag is perfect for sharingGreat for dipping in your favorite Tostitos salsa or quesoDelicious hint of lime flavor",
        image: "https://i5.walmartimages.com/asr/5f3b43fd-e7fa-412c-aa55-128b4c0d7528_1.2a895fdbef4711cc26873811f148dd9c.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
        price: 0,
        quantity: 1,
        title: "HI Tostitos Hint of Lime Tortilla Chips, Party Size, 18 oz Bag",
        upc: "028400045735"
    })
    const [ userSearchResults, setUserSearchResults ] = useState([])
    const [ lastScanned, setLastScanned] = useState(false) 
    const [ productDrawerState, setProductDrawerState ] = useState(false)
    const [ userAccount, setUserAccount ] = useState({
        fName: "Carmen",
        lName: "Santiago",
        email: "santaCarmelita@gmail.com",
    })
    // 028400045735
    function updateCart(results) {
        console.log("updateCart")
        // axios.get(`/products/${results}`)
        // .then((res) => {
        //     setLastLookUp(res.data[0])
        //     console.log(res.data[0])
        // })
        // .catch( err => console.log(err))
        setProductDrawerState(true)
        setLastLookUp(lastLookup)
    } 

    function handleSearch(search, history){
        console.log(search)
        axios.get(`/products/search/${search}`)
            .then(res => setUserSearchResults(res.data))
            .then(() => history.push("/category/list"))
            .catch(e => console.log(e))
    }
    
    useEffect(()=> {
        console.log(Boolean(localStorage.getItem("cart")))
        if( !localStorage.getItem("cart")){
            console.log("Truthy")
            localStorage.setItem("cart", cart);
        }
        localStorage.setItem("cart", cart);
        console.log("Initial Mount")
    }, [])

    useEffect(()=> {
        console.log("Use Effect cart")
        localStorage.setItem("cart", cart)
    }, [cart])



    return(
        <CartContext.Provider value={{
            cart, setCart,
            lastScanned, 
            userAccount,
            productDrawerState,
            setProductDrawerState,
            userSearchResults,
            updateCart,
            userCart, setUserCart, 
            lastScanned,
            handleSearch,
            lastLookup, setLastLookUp
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContextProvider }