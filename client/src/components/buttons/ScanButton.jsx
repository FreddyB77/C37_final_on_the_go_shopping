import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

import './button.css'

const ScanButton = ({text}) => {
    let history = useHistory()

    return (
        <div>
            <Button 
                className="button-lg-green"
                id="scan-button"
                onClick={() => history.push("/scan")}
            >
                {text}
            </Button>
        </div>
    )
}

export default ScanButton
