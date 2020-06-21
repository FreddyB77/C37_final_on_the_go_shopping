import React, {useState} from 'react'
import {TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core'

import '../../App.css'
import './payment.css'


const AddPayment = ({history}) => {
    const [ checkStat, setCheckStat ] = useState(false)

    const handleFormSubmit = () => {
        console.log("Hi there pretty person!")
    }
    const handleCheck = () => {
        setCheckStat(!checkStat)
    }
    const handleSkip = () => {
        history.push('/home')
    }
    
    return(
        <div class="createAccount-page">
        <div className="cAccount-nav">
            <h1> </h1>
            <h1>Step 2/3</h1>
        </div>



        <h1>Add Payment</h1>
        <form autoComplete="off" noValidate className="cAccount-form">
            <>
                <h3>Card Number</h3>
                <TextField 
                    variant="outlined"
                    placeholder="Michael"
                    type="text"
                />
            </>
            <>
                <h3>Name on Card</h3>
                <TextField 
                    id="outlined-basic" 
                    placeholder="Scott"
                    variant="outlined" 
                />
            </>
            <>
                <h3>Expiration Date (MM/YY)</h3>
                <TextField 
                    id="outlined-basic" 
                    placeholder="mscott@hotmail.com"
                    variant="outlined" 
                />
            </>
            <>
                <h3>CVC</h3>
                <TextField
                    id="outlined-password-input"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
            </>
            <div className="payment-default">
                <FormControlLabel
                    control={<Checkbox name="check-mark" checked={checkStat} onChange={handleCheck} />}
                    label={'Make default payment method'}
                />
            </div>
        </form>
        
        <Button 
            id="gStarted-button"            
            variant="conatined" 
            color="secondary"
            onClick={handleFormSubmit}
        >
            Save
        </Button>
        <br></br>
        <Button
            id="payment-skip"
            onClick={handleSkip}>
            Skip for now
        </Button>
        </div>
    )
}

export default AddPayment
