import React from 'react'
import '../App.css'

const ScannedDrawer = ({itemScanned}) => {
    return (
        <div className="scannedDrawer bottom-drawer">
            <h1>sdfsadf</h1>
            <div>
                {console.log(itemScanned)}
                <h1>{itemScanned.name}</h1>
                <h2>{itemScanned.size}</h2>
            </div>
            <h1>Trash</h1>
            <div></div>

        </div>
    )
}

export default ScannedDrawer
