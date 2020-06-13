import React, { useRef, useEffect, useContext } from 'react'
import Quagga from '@ericblade/quagga2'
import axios from 'axios'

import { CartContext } from '../context/CartContext.jsx'

import './quagSample.css'

const Quag = ({ setScan, refPage }) => {
    const {  setproductDrawerState, updateCart } = useContext(CartContext)
    let lastScannedUPC = '';
    const scannerRef = useRef(null);

    useEffect(() =>{ 
        Quagga.init({
            inputStream : {
                name : "Live",
                type : "LiveStream",
                target: scannerRef.current, // Or '#yourElement' (optional)
            },
            decoder : {
                readers : ["ean_reader"]
            }},
            (err) => {
                if (err) {
                    console.log(err);
                    return
                }
            Quagga.start();
            });
        Quagga.onDetected( data => {
            if(data != lastScannedUPC){ 
                lastScannedUPC = data;
                const UPC = data.codeResult.code.substr(1)
                updateCart(UPC)
                setproductDrawerState(true)
            } else( console.log("Duplicate Detected"))
        })
    }, [] )

    return(
        <div ref={scannerRef}>
        </div>
    )
}


export default Quag
