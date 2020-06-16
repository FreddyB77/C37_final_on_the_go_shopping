import React, { useContext, useState, useEffect } from 'react'
import { Button, Drawer } from '@material-ui/core'

import trashIcon from '../../assets/imgs/trashIcon.svg'
import { CartContext } from '../../context/CartContext'


const PdpDrawer = () => {
    const { productDrawerState, setProductDrawerState,
            cart, lastLookup, setLastLookUp } = useContext(CartContext)

    useEffect(() => {
        console.log("useEffect-Triggered");
        setProductDrawerState(false);

    }, [lastLookup])
 
    function handleSub(){
        if(lastLookup.quantity !== 0){
            console.log(typeof lastLookup.quantity)
            const qty = lastLookup.quantity - 1
            setLastLookUp({...lastLookup, quantity: qty})
            console.log("Sub", lastLookup)
    }}

    function handleAdd(){
        let qty = Number((lastLookup.quantity) + 1)
        console.log(qty)
        setLastLookUp({...lastLookup, quantity: qty})
        console.log("Add", lastLookup)
    }

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
                        src={lastLookup?.image} 
                        style={{width:"100%"}} 
                        alt="Product image"
                    />
                    <img 
                        src={trashIcon} 
                        alt="Trashbin icon"
                        onClick={() => {setProductDrawerState(false)}}
                    />
                </div>
                <div id="scan-drawer-result-right">

                    <h1>{lastLookup?.title}</h1>
                    <p>{lastLookup?.description}</p>
                    <h5>${lastLookup?.price}</h5>

                    <div id="scan-item-quantity">
                    <Button onClick={() => handleSub()}>
                        <h1>-</h1> 
                    </Button>
                    
                    <h1>{lastLookup?.quantity}</h1>
                    <Button onClick= {() => handleAdd()}>
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
