import React, { useState } from 'react'
import {TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core'


const PaymentForm = () => {
    const [ checkStat, setCheckStat ] = useState(false)
    const handleCheck = () => {
        setCheckStat(!checkStat)
    }

    return (
        <div>
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
        </div>
    )
}

export default PaymentForm
