import React from 'react'
import { Button } from '@material-ui/core'

import './button.css'

const BottomNavButton = ({history, url, text, img}) => {

    return (
        <div>
            <Button 
                onClick={() => history.push(`/${url}`)}   
                className="bNav-menu-buttons"
            > 
                <img className="bNav-img" src={img} alt="Go Back Button"/>     
                <p>{text}</p>
            </Button>
        </div>
    )
}

export default BottomNavButton
