import React, { useRef, useEffect, useState, useContext } from 'react';
import { Button, Drawer, TextField, OutlineInput, OutlinedInput } from '@material-ui/core'
import axios from 'axios'


import Quag from '../../components/QuagSample'
import BackNav from '../../components/BackNav'
import { CartContext } from '../../context/CartContext'

import '../../components/buttons/button.css'
import './scanner.css'

function Scanner({history}) {
  const { lastScanned, setLastScanned } = useContext(CartContext)

  const htmlRef = useRef("hello");
  const [ renderManual, setRenderManual] = useState(false)
  const [ onScan, setOnScanned] = useState(true)
  const [ upcManual, setUPCManual ] = useState('')
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
          open={false} 
          id="scanned-drawer"
          anchor='bottom'
          onClose={() => (true)}
      >
        <h1>Enter barcode number</h1>
        
      </Drawer>
    </React.Fragment>


    </div>
  );
}

export default Scanner;
