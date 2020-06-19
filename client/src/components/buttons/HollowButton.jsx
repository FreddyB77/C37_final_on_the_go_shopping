import React from 'react'
import { Button } from '@material-ui/core'



const HollowButton = ({text}) => {
    
    return (
            <Button 
                id="button-lg-hollow"
            >
                <p>{text}</p>
            </Button>
    )
}

export default HollowButton
