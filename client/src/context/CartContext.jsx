import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext()

const CartContextProvider = ( props ) => {

    const [cart, setCart] = useState([
        //{
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
        // },
    ])
    
    const [ productDrawerState, setProductDrawerState ] = useState(false)
    const [ userAccount ] = useState({
        fName: "Carmen",
        lName: "Santiago",
        email: "santaCarmelita@gmail.com",
    })
    const [ subTotal, setSubtotal] = useState(0)
    

    useEffect(()=> {       
        //If cart has items update local storage
        //else cart state is empty so pull from localStorage
        console.log("In use Effect")
        console.log("Cart", cart)
        if(cart.length === 0){
            console.log("Copy cart from local storage")
            localStorage.setItem('cart', JSON.stringify(cart))
        }else{  
            setCart(JSON.parse(localStorage.getItem('cart')))
        }

        //Calc: Cart's SubTotal 
        let subCounter = 0
        cart.forEach(item => {
        subCounter+= (item.quantity * item.price)
        })
        setSubtotal( subCounter.toFixed(2) )
    }, [cart])



    return( 
        <CartContext.Provider value={{
            //State
            cart, setCart,
            userAccount,
            productDrawerState, setProductDrawerState,
            subTotal,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContextProvider }