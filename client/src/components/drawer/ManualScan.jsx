import React, { useContext, useState } from 'react'
import { Button, Drawer, TextField } from '@material-ui/core'

import { CartContext } from '../../context/CartContext'
import { SearchContext } from '../../context/SearchContext'

const ManualScanDrawer = ({manualStatus, handleManualClose}) => {

    const { setProductDrawerState } = useContext(CartContext)
    const { upcSearch } = useContext(SearchContext)
    const [ upcManual, setUPCManual ] = useState('')

    // 028400045735 - Test UPC # 
    const handleManualSearch = () => {
        //UPC Validation
        if(upcManual.length < 13 ) { 
            upcSearch(upcManual)
        }
        setProductDrawerState(true)
    }

    return(
        <div>
            {/* Manual Drawer*/}
            <React.Fragment key="manual">
                <Drawer 
                    open={manualStatus} 
                    id="manual-drawer"
                    anchor='bottom'
                    onClose={() => handleManualClose()}
                >
                <h1>Enter barcode number</h1>
                <TextField 
                    id="outline-basic" 
                    variant="outlined"
                    type="number"
                    onChange={ e => setUPCManual(e.target.value) }
                />
                <Button 
                    className="button-lg-green" 
                    onClick={() => handleManualSearch()}
                >
                    Enter
                </Button>
                </Drawer>
            </React.Fragment>

        </div>
    )
}

export default ManualScanDrawer
