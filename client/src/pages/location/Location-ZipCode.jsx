import React from 'react'
import { Button } from '@material-ui/core'

const LocationZipCode = ({history}) => {
    return (
    <div>
        <Button onClick={() => history.goBack()}>Cancel</Button>        
        <h1>Enter Zip Code</h1>

    </div>
    )
}

export default LocationZipCode
