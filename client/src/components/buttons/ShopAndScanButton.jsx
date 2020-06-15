import React from 'react'
import { Button } from '@material-ui/core'
import barcodeImg from '../../assets/imgs/barcode.svg'
import './button.css'


const ShopAndScanButton = ({history}) => {
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
                    <img id="barcodeImg" src={barcodeImg} />
                </div>
            </Button>
        </div>
    )
}

export default ShopAndScanButton
