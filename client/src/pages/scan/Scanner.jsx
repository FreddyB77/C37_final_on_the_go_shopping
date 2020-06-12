import React, { useRef, useEffect, useState, useContext } from 'react';
import { Button, Drawer, TextField, OutlineInput, OutlinedInput } from '@material-ui/core'
import axios from 'axios'


import Quag from '../../components/QuagSample'
import BackNav from '../../components/navs/BackNav'
import { CartContext } from '../../context/CartContext'

import trashIcon from '../../assets/imgs/trashIcon.svg'

import '../../components/buttons/button.css'
import './scanner.css'

function Scanner({history}) {
  const { lastScanned, setLastScanned, cart } = useContext(CartContext)

  const htmlRef = useRef("hello");
  const [ cartQuantity, setCartQuantity] = useState(0)

  const [ renderManual, setRenderManual] = useState(false)
  const [ onScan, setOnScanned] = useState(true)
  const [ upcManual, setUPCManual ] = useState('')
  const [ productDrawerState, setproductDrawerState ] = useState(false)
  const [ itemScanned, setItemScanned] = useState({
    name: "",
    img: "",    
    size: "",
    price: 4.99,
    quantity: 1
})

  const handleScan = () => {
    setOnScanned(!onScan)
  }
  //028400045735
  const handleManualSearch = () => {
    if(upcManual.length < 13 ) { 
      axios.get(`/products/${upcManual}`)
        .then( res => { 
            console.log("Scanned Item")
            setLastScanned(res.data)
            console.log(res.data)
            console.log(`Last Scanned ${lastScanned}`)
        })
    }
    setRenderManual(false)
    setproductDrawerState(true)
    setTimeout( () => setproductDrawerState(false), 5000)
  }

  useEffect(() => {
    if(itemScanned){
      console.log("item Scanned:")
      console.log(itemScanned)
      setItemScanned('')
    }
  }, [itemScanned])

  return (
    <div className="scan-page">
      <BackNav history={history} />
      <div className="scanner-border">
        <div className="scanner-container">
          <h1 id="scanner-border-text">Align the Barcode</h1>
          <div 
            className='scanner-cam-container'
            style={{overflow:"hidden"}}
          >
            {/*  Requires HTTP=true to work */
            <Quag 
              id="quag"
              refPage={htmlRef}
              handleScan={handleScan} 
              setScan={onScan}
            />
            }
            
          </div>
        </div>
        <div className="scanner-instruction">
            Hold the Phone Still<br/>
            The scanning will be automatic
        </div>
      </div>

      <Button 
        className="button-lg-hollow"
        onClick={() => setRenderManual(true)}>
        Enter manually
      </Button>

      {/* Manual Drawer*/ }
      <React.Fragment key="manual">
        <Drawer 
            open={renderManual} 
            id="manual-drawer"
            anchor='bottom'
            onClose={() => setRenderManual(false)}
        >
          <h1>Enter barcode number</h1>
          <TextField 
              id="outline-basic" 
              variant="outlined"
              type="number"
              onChange={ e => setUPCManual(e.target.value) }
          />
          <Button className="button-lg-green" onClick={() => handleManualSearch()}>
            Enter
          </Button>
        </Drawer>
    </React.Fragment>

    {/*Scanned Item */}
    <React.Fragment key="item-result">
      <Drawer 
          open={productDrawerState}
          id="scanned-drawer"
          anchor='bottom'
          onClose={() => (true)}
      >
        <div class="scan-scannedDrawer-result"> 
          <div id="scan-drawer-result-left">
            <img src={"https://picsum.photos/200/300"} style={{width:"100%"}} />
            <img src={trashIcon} />
          </div>
          <div id="scan-drawer-result-right">

            <h1>{cart[0].name}</h1>
            <p>{cart[0].size}</p>
            <h5>${cart[0].price}</h5>

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
  );
}

export default Scanner;
