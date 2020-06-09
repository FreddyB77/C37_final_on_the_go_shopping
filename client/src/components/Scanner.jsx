import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@material-ui/core'
import Quag from './Quag'

import './scanner.css'

function Scanner({history}) {
  const htmlRef = useRef();
  const [ renderManual, setRenderManual] = useState(false)
  const [ onScan, setOnScanned] = useState(false)
  const [ itemScanned, setItemScanned] = useState({
    name: "",
    img: "",    
    size: "",
    price: 4.99,
    quantity: 1
})


  const handleBack = () => {
    history.goBack();
  }

  const ScannerNav = () => {
    return(
      <div className='scannerNav-container'>
      <div className='scannerNav-control'>
        <Button onClick={handleBack}>BCK</Button>
        <div>Cart <span>3</span></div>
      </div>
      <h1 id='scannerNav-title'>Scan</h1>
      </div>
    )
  }

  const ScannerButton = () => {
    return(
      <>
      <button 
        className="button" 
        id="scanBtn"
        onClick={() => console.log("DONT CLICK ME!")}
      >
        Enter Manually
      </button>
      </>
    )
  }
  
  const handleScan = () => {
    setOnScanned(!onScan)
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
      <ScannerNav />
      <div className="scanner-border">
      
        <div className="scanner-container">
          <h1 id="scanner-border-text">Align the Barcode</h1>
          <div className='scanner-cam-container'>
            {/*  Requires HTTP=true to work */
            <Quag 
              id="quag"
              handleScan={handleScan} 
              setScan={setItemScanned}
            /> 
            }
          </div>
        </div>
        <div className="scanner-instruction">
            Hold the Phone Still<br/>
            The scanning will be automatic
        </div>
      </div>
      <ScannerButton />

    </div>
  );
}

export default Scanner;
