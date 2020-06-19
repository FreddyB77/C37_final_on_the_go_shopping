import React, { useRef, useEffect, useContext, useState } from 'react'
import Quagga from '@ericblade/quagga2'

import { CartContext } from '../context/CartContext.jsx'
import { SearchContext } from '../context/SearchContext'
import './quagSample.css'

const Quag = () => {
    const {  updateCart, 
        productDrawerState, setProductDrawerState
        } = useContext(CartContext)
    const { upcSearch } = useContext(SearchContext) 

    let lastScannedUPC = '';
    const scannerRef = useRef(null);
    const [vText, setVText] = useState("Align")
    function scanCondition(){ 
        return !productDrawerState ? setVText("Align") : setVText("Captured")
    }


    useEffect(() => scanCondition(), [productDrawerState])
    useEffect(() =>{ 
        Quagga.init({
            inputStream : {
                name : "Live",
                type : "LiveStream",
                target: scannerRef.current, // Or '#yourElement' (optional)
                constraints:{
                    width: 360,
                    height: 360
                }
            },
            decoder : {
                readers : ["ean_reader"]
            }}, (err) => {
                if (err) {
                    console.log(err);
                    return
                }
            Quagga.start();
            });
        Quagga.onDetected( data => {
            if(data !== lastScannedUPC){ 
                lastScannedUPC = data;
                const UPC = data.codeResult.code.substr(1)
                upcSearch(UPC)
                setProductDrawerState(true)
            } else( console.log("Duplicate Detected"))
        })
        return ( () => Quagga.stop())
    }, [] )

    {/*"trueScanContainer"*/}
    return(
        <div 
            className={`scanner-${vText} quag`}
            ref={scannerRef}
        >
            <h1 id="scanner-text" >
                {vText}
            </h1>
        </div>
    )
}


export default Quag
