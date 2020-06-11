import React, {useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react'
import Quagga from '@ericblade/quagga2'
import PropTypes from 'prop-types';
import axios from 'axios'

import './quagSample.css'

const Quag = ({ setScan, refPage }) => {
    const [scanning, setScanning] = useState(false);
    const [results, setResult] = useState('');
    const scannerRef = useRef(null);
    

    useEffect( () => {
        axios.get(`/products/${results}`)
        .then( res => { 
            console.log("Scanned Item")
            (res.data)
        })
    }, [results])
    

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
            console.log("Initialization finished. Ready to start");
            Quagga.start();
            });
        Quagga.onDetected( data => {
            console.log("Item Detected!")
            const UPC = data.codeResult.code.substr(1)
            setResult(UPC)
        })
    }, [] )

    return(
        <div 
            ref={scannerRef} 
        >
            <h1>Return Scanner</h1>
            
            {console.log(scannerRef.current)}

        </div>
    )
}


export default Quag
