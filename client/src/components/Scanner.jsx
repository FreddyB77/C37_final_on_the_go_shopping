import React, { useRef, useEffect, useState } from 'react';
import * as ScanditSDK from "scandit-sdk";
import Quag from './Quag'

import '../App.css'

import ManualScanEntry from './ManualScanEntry'
import ScannedDrawer from './ScannedDrawer';

function App() {
  const htmlRef = useRef();
  const [ renderManual, setRenderManual] = useState(false)
  const [ onScan, setOnScanned] = useState(false)
  const [ itemScanned, setItemScanned] = useState({
    name: "Tide Original Liquid Laundry Detergent",
    img: "https://target.scene7.com/is/image/Target/GUEST_c502f64a-347e-4749-8d2e-f32faed2ad61?wid=588&hei=588&qlt=80&fmt=webp",    
    size: "154 fl oz",
    price: 19.99,
    quantity: 1
})


  const ScannerNav = () => {
    return(
      <div className='scannerNav-container'>
      <div className='scannerNav-control'>
        <div>Arr</div>
        <div>Cart <span>3</span></div>
      </div>
      <h1 className='scannerNav-title'>Scan</h1>
      </div>
    )
  }

  const ScannerButton = () => {
    return(
      <>
      <button 
        className="button" 
        id="scanBtn"
        onClick={() => setRenderManual(!renderManual)}
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
          <h1 id="scanner-border-text">Scan</h1>
          <div className='scanner-cam-container'>
            {
            //<Quag handleScan={handleScan} setScan={setItemScanned}/> 
            }
          </div>
        </div>
        <div className="scanner-instruction">
            Hold the Phone Still<br/>
            The scanning will be automatic
        </div>
      </div>
      <ScannerButton />
      {renderManual && <ManualScanEntry renderMe={setRenderManual}/> }
      {true && <ScannedDrawer itemScanned={itemScanned}/>}
    </div>
  );
}

export default App;
