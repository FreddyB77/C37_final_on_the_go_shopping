import React from 'react'
import { Button } from '@material-ui/core'

import backArrow from '../../assets/imgs/arrowBack.svg'

const BackArrow = ({history}) => {
    const handleBack = () => {
        history.goBack();
      }

    return (
            <Button 
                onClick={handleBack}>
                    <img 
                        src={backArrow} 
                        alt="Back Arrow button"
                    />
            </Button>
    )
}

export default BackArrow
