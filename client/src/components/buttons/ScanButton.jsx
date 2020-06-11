import React from 'react'
import { Button } from '@material-ui/core'

import './button.css'

const ScanButton = ({history, text, link}) => {
    const handlePush= () => {
        history.push(link)
    }
    return (
        <div>
            <Button 
                className="button-lg-green"
                id="scan-button"
                onClick={handlePush}
            >
                {text}
            </Button>
        </div>
    )
}

export default ScanButton
