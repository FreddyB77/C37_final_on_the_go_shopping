import React, { useContext, useState, useEffect } from 'react'
import { Button, Drawer } from '@material-ui/core'

import trashIcon from '../../assets/imgs/trashIcon.svg'
import { CartContext } from '../../context/CartContext'
import { SearchContext } from '../../context/SearchContext'

const PdpDrawer = () => {
    const { productDrawerState, setProductDrawerState, 
            cart, setCart } = useContext(CartContext)

    const { scanSearch, setScanSearch } = useContext(SearchContext)
 
    function handleSub(){
        let tempCart = cart
        let tempSearch = scanSearch
        let cartIndex = cart.findIndex(item => { return item.upc == scanSearch.upc})
        //If item does not exist .exe(if) else update existing item quantity
        if(cartIndex == -1 ){ 
            tempSearch.quantity -= 1
            setCart([...cart, tempSearch])
        }else{
            tempSearch = cart[cartIndex]
            if(tempSearch.quantity >= 1 ){
                tempSearch.quantity -= 1
                tempCart[cartIndex] = tempSearch
                setCart([...tempCart])
                console.log("Sub-if-else-if", cart)
            }
        }
    }

    function handleAdd(){
        let tempCart = cart
        let tempSearch = scanSearch
        //If cart is initially empty 
        if(!Boolean(cart.length)){
            console.log("Handle Add 1")
            tempSearch.quantity += 1 
            setCart([tempSearch])
        }else {
            //If cart is not empty check if item exist 
            let cartIndex = cart.findIndex(item => { return item.upc == scanSearch.upc})
            //If item does not exist .exe(if) else update existing item quantity
            if(cartIndex == -1 ){ 
                console.log("Item does")
                tempSearch.quantity += 1
                setCart([...cart, tempSearch])
            }else{
                console.log('Item does not exist ')
                tempSearch = cart[cartIndex]
                tempSearch.quantity += 1
                tempCart[cartIndex] = tempSearch
                setCart([...tempCart])
            }
        }
    }

    function handleDelete(){
        //Not really deleting just minimizes Drawer. 
        setProductDrawerState(false)
    }

    return (
        <div>
            {/*Scanned Item */}
            <React.Fragment key="item-result">
            <Drawer 
                open={productDrawerState}
                id="scanned-drawer"
                anchor='bottom'
                onClose={() => setProductDrawerState(false)}
            >
                <div className="scan-scannedDrawer-result"> 
                <div id="scan-drawer-result-left">
                    <img 
                        src={scanSearch?.image} 
                        style={{width:"100%"}} 
                        alt="Product image"
                    />
                    <img 
                        src={trashIcon} 
                        alt="Trashbin icon"
                        onClick={() => handleDelete()}
                    />
                </div>
                <div id="scan-drawer-result-right">

                    <h1>{scanSearch?.title}</h1>
                    <p>{scanSearch?.description}</p>
                    <h5>${scanSearch?.price}</h5>

                    <div id="scan-item-quantity">
                    <Button onClick={() => handleSub()}>
                        <h1>-</h1> 
                    </Button>
                    
                    <h1>{scanSearch?.quantity}</h1>
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
