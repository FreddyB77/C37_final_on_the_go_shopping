import React, { useContext, useState, useEffect } from 'react'
import { Button, Drawer } from '@material-ui/core'

import trashIcon from '../../assets/imgs/trashIcon.svg'
import { CartContext } from '../../context/CartContext'


const PdpDrawer = () => {
    const { productDrawerState, setProductDrawerState,
            cart, userCart } = useContext(CartContext)
    const [ cartQuantity, setCartQuantity] = useState(0)
    const [ recentScan, setRecentScan ] = useState([])

    useEffect( ()=> {
        setRecentScan(() => userCart[userCart.length - 1])
        console.log(recentScan)
        //setProductDrawerState(false)
    }, [userCart])
        
    return (
        <div>
            {/*Scanned Item */}
            <React.Fragment key="item-result">
            <Drawer 
                open={productDrawerState}
                id="scanned-drawer"
                anchor='bottom'
                onClose={() => (true)}
            >
                <div className="scan-scannedDrawer-result"> 
                <div id="scan-drawer-result-left">
                    <img 
                        src={userCart[0].image} 
                        style={{width:"100%"}} 
                        alt="Product image"
                    />
                    <img 
                        src={trashIcon} 
                        alt="Trashbin icon"
                    />
                </div>
                <div id="scan-drawer-result-right">

                    <h1>{userCart[0].title}</h1>
                    <p>{userCart[0].description}</p>
                    <h5>${userCart[0].price}</h5>

                    <div id="scan-item-quantity">
                    <Button onClick={() => {
                        if(cartQuantity !== 0){setCartQuantity(cartQuantity-1)}}} 
                    >
                        <h1>-</h1> 
                    </Button>
                    <h1>{cartQuantity}</h1>
                    <Button onClick= {() => setCartQuantity(cartQuantity+1)}>
                        <h1>+</h1>
                    </Button>
                    </div>
                </div>
                </div>
            </Drawer>
            </React.Fragment>
        </div>
    )
}

export default PdpDrawer
