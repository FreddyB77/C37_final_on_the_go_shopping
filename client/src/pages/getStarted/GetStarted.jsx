import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import {Button} from '@material-ui/core'
import otgLogo from '../../assets/imgs/cartLogo/Logo.svg'
import './getStarted.css'


const GetStarted = ({history}) => {

    const handleClick = () => {
        history.push("/instructions")
    }
    
    return (
        <div className="gStarted-container">
            <div className="gStarted-top">
                <h2>On-the-Go</h2>
                <h3>Shopping</h3>
                <p>Skip the checkout lines</p>
            </div>

            <div class="gStarted-center">
                <img src={otgLogo} />
            </div>
            
            <div className="gStarted-bottom">
                <Button 
                    variant="contained"
                    id="gStarted-button"
                    onClick={handleClick}
                >
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default GetStarted
