import React from 'react'
import { Button } from '@material-ui/core'



const HollowButton = ({text}) => {
    
    return (
        <div>
            <Button 
                className="button-lg-hollow"
            >
                <p>{text}</p>
            </Button>
        </div>
    )
}

export default HollowButton
