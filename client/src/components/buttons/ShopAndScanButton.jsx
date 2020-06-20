import React from 'react'
import { Button } from '@material-ui/core'
import barcodeImg from '../../assets/imgs/barcode.svg'
import './button.css'
import { useHistory } from "react-router-dom";



const ShopAndScanButton = () => {
    let history = useHistory()

    const handleScan = () => {
        history.push("/scan")
    }

    return (
        <div className="home-shop-button">
            <Button 
                className="home-shop-button"
                onClick={handleScan}
            >
                <div className="home-shop-button-text">
                    <h1>Shop & Scan</h1>
                    <p> Start Here</p>
                </div>
                <div>
                    <img id="barcodeImg" src={barcodeImg} alt="Barcode"/>
                </div>
            </Button>
        </div>
    )
}

export default ShopAndScanButton
