import React from 'react'
import { Button } from '@material-ui/core'

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
                    <h1 style={{border:"1px solid black"}}>IMG</h1>
                </div>
            </Button>
        </div>
    )
}

export default ShopAndScanButton
