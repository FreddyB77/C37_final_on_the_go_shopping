import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CartContext = React.createContext()

const CartContextProvider = ( props ) => {

    const [cart, setCart] = useState([
        {
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1   
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1    
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1
        },{
            name: "Tide Original Liquid Laundry Detergent",
            img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
            size: "154 fl oz",
            price: 19.99,
            quantity: 1    
        }
    ])
    const [ userCart, setUserCart ] = useState([{
        name: "Tide Original Liquid Laundry Detergent",
        img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
        size: "154 fl oz",
        price: 19.99,
        quantity: 1
    }])
    const [ lastScanned, setLastScanned] = useState(false) 
    const [ productDrawerState, setproductDrawerState ] = useState(false)
    const [userAccount, setUserAccount ] = useState({
        fName: "Carmen",
        lName: "Santiago",
        email: "santaCarmelita@gmail.com",
    })
    // 028400045735
    function updateCart(results) {
        axios.get(`/products/${results}`)
        .then((res) => {
            // let test = userCart
            // test.push(res.data[0])
            setUserCart(res.data)
        })
        .catch( err => console.log(err))
    } 
    
    return(
        <CartContext.Provider value={{
            cart, 
            lastScanned, 
            userAccount,
            productDrawerState,
            setproductDrawerState,
            updateCart,
            userCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContextProvider }