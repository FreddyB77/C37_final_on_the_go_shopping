import React, {useState} from 'react'
import '../App.css'
import '../signUp.css'

const ManualScanEntry = ({renderMe}) => {
    const [inputField, setInputField] = useState('')
    const buttonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Clear', 0, 'BCK', 'Cancel', 'Enter']

    const handleSubmit = () => {
        console.log("Entered")
    }
    const handleButton = (e) => {
        if(e === 'Enter'){ handleSubmit() }
        else if(e === 'Clear'){ setInputField('') }
        else if(e === 'Cancel'){ renderMe(false) }
        else if(e === 'BCK'){ setInputField( inputField.slice(0,-1)) }
        else setInputField(`${inputField}${e}`)
    }

    return (
        <div className="mScan-container bottom-drawer">
            <div className="mScan-numInput">{inputField}</div>
            <div className="mScan-keypad">
            {buttonArr.map((name) => {
                return(
                    <button 
                        id={`mScan-key-${name}`}
                        value={name}
                        onClick={(e) => {handleButton(e.target.value)}}
                    >
                        {name}
                    </button>
                )
            })}
            </div>
        </div>
    )
}

export default ManualScanEntry
