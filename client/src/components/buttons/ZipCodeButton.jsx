import React from 'react'
import { Button } from '@material-ui/core'

const ZipCodeButton = ({history}) => {
    
    const handleSubmit = () => {
        history.push("/locationZipcode")
    }

    return (
            <Button
                className="button-lg-hollow"
                onClick={handleSubmit}
            >
                Enter Zip Code
            </Button>
    )
}

export default ZipCodeButton
