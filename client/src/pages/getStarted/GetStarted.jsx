import React from 'react'
import { useHistory } from "react-router-dom";

import './getStarted.css'
import {Button} from '@material-ui/core'
import otgLogo from '../../assets/imgs/cartLogo/Logo.svg'
  
const GetStarted = () => {
    let history = useHistory()

    return (
        <div className="gStarted-container">
            <div className="gStarted-top">
                <h2>On-the-Go</h2>
                <h3>Shopping</h3>
                <p>Skip the checkout lines</p>
            </div>

            <div className="gStarted-center">
                <img src={otgLogo} alt="On the go logo"/>
            </div>
            
            <div className="gStarted-bottom" >
                <Button 
                    variant="contained"
                    id="gStarted-button"
                    onClick={() => history.push("/instructions")}
                >
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default GetStarted
