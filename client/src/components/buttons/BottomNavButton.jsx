import React from 'react'
import { Button } from '@material-ui/core'

import './button.css'

const BottomNavButton = ({history, url, text, img}) => {
    
    const handlePress = () => {
        history.push(`/${url}`)
    }

    return (
        <div>
            <Button 
                onClick={handlePress}   
                className="bNav-menu-buttons"
            > 
                <img className="bNav-img" src={img}/>     
                <p>{text}</p>
            </Button>
        </div>
    )
}

export default BottomNavButton
