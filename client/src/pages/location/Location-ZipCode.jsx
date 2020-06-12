import React from 'react'

import CancelButton from '../../components/buttons/CancelButton'

const LocationZipCode = ({history}) => {
    return (
    <div>
        <CancelButton history={history}/>
        <h1>Enter Zip Code</h1>

    </div>
    )
}

export default LocationZipCode
