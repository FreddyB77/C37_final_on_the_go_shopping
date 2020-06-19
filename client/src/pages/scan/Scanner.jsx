import React, { useEffect, useState, useContext } from 'react';
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
  

  const [ renderManual, setRenderManual] = useState(false)
  const [ itemScanned, setItemScanned] = useState({
    name: "",
    img: "",    
    size: "",
    price: 4.99,
    quantity: 1
  })

  const handleManualClose = () => {
    setRenderManual(false)
  }
  const handleManualOpen = () => {
    console.log("Handle Open")
    setRenderManual(true)
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
            {/*  Requires HTTPS=true to work */}
            <Quag />

      <div className="scanner-instruction">
            Hold the Phone Still<br/>
            The scanning will be automatic
      </div>
      
      <Button 
        id="scan-manual"
        className="button-lg-hollow"
        onClick={handleManualOpen}
      >
        Enter Manually 
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
