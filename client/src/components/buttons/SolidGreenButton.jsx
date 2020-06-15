import React from 'react'
import { Button } from '@material-ui/core'

const SolidGreenButton = ({text, history, url}) => {

    const handleClick = () => {
        console.log("Hello")
        history.push(url)
    }
    return (
        <Button 
            variant="contained"
            id="gStarted-button"
            onClick={() => handleClick()}
        >    
            {text}
        </Button>
    )
}

export default SolidGreenButton
