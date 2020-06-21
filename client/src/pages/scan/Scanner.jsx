import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core'

import Quag from '../../components/QuagSample'
import BackNav from '../../components/navs/BackNav'
import ManualScanDrawer from '../../components/drawer/ManualScan'
import PdpDrawer from '../../components/drawer/PdpDrawer'

import '../../components/buttons/button.css'
import './scanner.css'

function Scanner({history}) {
  

  const [ renderManual, setRenderManual] = useState(false)
  const [ itemScanned, setItemScanned] = useState({
  })

  const handleManualClose = () => {
    setRenderManual(false)
  }
  const handleManualOpen = () => {
    setRenderManual(true)
  }

  useEffect(() => {
    if(itemScanned){
      setItemScanned('')
    }
  }, [itemScanned])


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
