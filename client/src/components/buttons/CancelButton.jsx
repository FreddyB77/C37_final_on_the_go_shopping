import React from 'react'
import { Button } from '@material-ui/core'

const CancelButton = ({history}) => {
    const handleBack = () => {
        history.goBack();
      }

    return (
            <Button 
                onClick={handleBack}
            >
                Cancel
            </Button>
    )
}

export default CancelButton
