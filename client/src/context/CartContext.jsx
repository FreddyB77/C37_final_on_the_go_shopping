import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext()

const CartContextProvider = ( props ) => {
    const [cart, setCart] = useState([
        // {	
        //     title: "Tide Item 0",	
        //     image: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    	
        //     description: "154 fl oz",	
        //     price: 19.99,	
        //     upc: 0,	
        //     quantity: 1   	
        // },{	
        //     title: "Tide Item 1",	
        //     image: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    	
        //     description: "154 fl oz",	
        //     price: 19.99,	
        //     upc: 1,	
        //     quantity: 1   	
        // },{	
        //     title: "Tide Item 2",	
        //     image: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    	
        //     description: "154 fl oz",	
        //     price: 19.99,	
        //     upc: 2,	
        //     quantity: 1   	
        // },{	
        //     title: "Tide Item 3",	
        //     image: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    	
        //     description: "154 fl oz",	
        //     price: 19.99,	
        //     upc: 3,	
        //     quantity: 1   	
        // },{	
        //     title: "Tide Item 4",	
        //     image: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    	
        //     description: "154 fl oz",	
        //     price: 19.99,	
        //     upc: 4,	
        //     quantity: 1   	
        // },{	
        //     title: "Tide Item 5",	
        //     image: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    	
        //     description: "154 fl oz",	
        //     price: 19.99,	
        //     upc: 5,	
        //     quantity: 1   	
        // }
    ])
    
    const [ productDrawerState, setProductDrawerState ] = useState(false)
    const [ userAccount ] = useState({
        fName: "Carmen",
        lName: "Santiago",
        email: "santaCarmelita@gmail.com",
    })
    const [ cartTotal, setCartTotal ] = useState({
        subTotal: 0, saleTax: 0,
        savings: 0,  total: 0,

    })
    console.log( )

    useEffect(()=> {       
        //If cart > 0 update localStorage
        //else if cart is empty but localStorage isn't update localstorage
        if ( cart.length !== 0 ){  
            console.log("JSON String", JSON.stringify(cart))
            window.localStorage.setItem('cart', JSON.stringify(cart))
        }else if(cart.length === 0 && (JSON.parse(window.localStorage.getItem('cart')).length) !== 0 ){
            console.log("Elif")
            setCart(JSON.parse(window.localStorage.getItem('cart')))
        } 

        //Calc: Cart's Total 
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += (item.quantity * (item.price*100))
        })
        subtotal = subtotal.toFixed(2)/100
        const saletax = (subtotal * .07)
        const savings = (subtotal * .10)
        const total = saletax + subtotal
        setCartTotal({
            subTotal: subtotal,
            saleTax: saletax,
            savings: savings,
            total: total
        })
    }, [cart])



    return( 
        <CartContext.Provider value={{
            //State
            cart, setCart,
            userAccount,
            productDrawerState, setProductDrawerState,
            cartTotal,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContextProvider }