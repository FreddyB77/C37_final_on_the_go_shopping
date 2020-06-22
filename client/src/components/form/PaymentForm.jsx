import React from 'react'
import { TextField } from '@material-ui/core'


const PaymentForm = ({ setCredit, setCVV, setExp, setFormSubmit}) => {

    return (
        <div>
            <form 
                autoComplete="off" 
                noValidate 
                onSubmit={() => setFormSubmit(true)}
                className="cAccount-form">
            <>
                <h3>Name on Card</h3>
                <TextField 
                    variant="outlined"
                    placeholder="Michael Scott"
                    type="text"
                    
                />
            </>
            <>
                <h3>Card Number</h3>
                <TextField 
                    id="outlined-basic" 
                    placeholder="4242 4242 4242 4242"
                    variant="outlined" 
                />
            </>
            <>
                <h3>Expiration (MM/YY)</h3>
                <TextField 
                    id="outlined-basic" 
                    placeholder="08/22"
                    variant="outlined" 
                />
            </>
            <>
                <h3>CVV</h3>
                <TextField 
                    id="outlined-basic" 
                    placeholder="888"
                    variant="outlined" 
                />
            </>
        </form>
        </div>
    )
}

export default PaymentForm
