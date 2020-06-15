import React, { useRef, useEffect, useState, useContext } from 'react';
import { Button } from '@material-ui/core'
import { CartContext } from '../../context/CartContext'

import Quag from '../../components/QuagSample'
import BackNav from '../../components/navs/BackNav'
import ManualScanDrawer from '../../components/drawer/ManualScan'
import PdpDrawer from '../../components/drawer/PdpDrawer'

import '../../components/buttons/button.css'
import './scanner.css'

function Scanner({history}) {
  const { userCart } = useContext(CartContext)

  const htmlRef = useRef("hello");
  const [ renderManual, setRenderManual] = useState(false)
  const [ onScan, setOnScanned] = useState(true)
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
  const handleManualClose = () => {
    setRenderManual(false)
  }

  useEffect(() => {
    if(itemScanned){
      console.log("item Scanned:")
      console.log(itemScanned)
      setItemScanned('')
    }
  }, [itemScanned])


  useEffect(()=> {
    if (userCart){
      console.log("UserCart", userCart)
    } else console.log("Fail")
  }, [userCart])

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
            {/*  Requires HTTP=true to work */}
            <Quag 
              id="quag"
              refPage={htmlRef}
              handleScan={handleScan} 
              setScan={onScan}
            />
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
    
    <ManualScanDrawer 
      manualStatus={renderManual} 
      handleManualClose={handleManualClose}
    />

    <PdpDrawer />

    


    </div>
  );
}

export default Scanner;
