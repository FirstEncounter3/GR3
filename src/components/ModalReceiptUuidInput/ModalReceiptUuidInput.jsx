import React from 'react'

import './ModalReceiptUuidInput.css'

const ModalReceiptUuidInput = () => {
    return (
        <div className='receipt-uuid-input-wrapper'>
            <label for="receipt-uuid">UUID чека</label>
            <input type="text" id="receipt-uuid"></input>
        </div>
    )
}

export default ModalReceiptUuidInput;