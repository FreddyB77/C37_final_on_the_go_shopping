import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext()

const CartContextProvider = ( props ) => {

    const [cart, setCart] = useState([])
    
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
        let localStatus = Boolean(JSON.parse(window.localStorage.getItem('cart')))
        if(cart.length === 0 && localStatus){
            setCart(JSON.parse(window.localStorage.getItem('cart', cart)))
        }else if ( cart.length > 0 ){  
            window.localStorage.setItem('cart', JSON.stringify(cart))
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