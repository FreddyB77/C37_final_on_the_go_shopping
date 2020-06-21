//Ditching Create Account Page

import React, {useState} from 'react'
import {TextField, Button } from '@material-ui/core'

import '../../App.css'
import './payment.css'


const AddPayment = ({history}) => {
    const [ creditCard ] = useState('4242 4242 4242 4242')
    const [ cvv ] = useState('888')
    const [ exp ] = useState('08/22') 

    const handleFormSubmit = () => {
 
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
                    placeholder={`${creditCard}`}
                    type="text"
                />
            </>
            <>
                <h3>Name on Card</h3>
                <TextField 
                    id="outlined-basic" 
                    placeholder="Fake Person"
                    variant="outlined" 
                />
            </>
            <>
                <h3>Expiration Date (MM/YY)</h3>
                <TextField 
                    id="outlined-basic" 
                    placeholder={`${exp}`}
                    variant="outlined" 
                />
            </>
            <>
                <h3>CVV</h3>
                <TextField
                    id="outlined-password-input"
                    type={`${cvv}`}
                    variant="outlined"
                />
            </>
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
