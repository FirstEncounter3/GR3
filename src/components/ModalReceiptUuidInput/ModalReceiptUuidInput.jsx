import React from 'react'

import './ModalReceiptUuidInput.css'

const ModalReceiptUuidInput = () => {
    return (
        <div className='receipt-uuid-input-wrapper'>
            <label for="receipt-uuid">UUID чека</label>
            <input type="text" placeholder='00000000-0000-0000-0000-000000000000' id="receipt-uuid" className='select-input'></input>
        </div>
    )
}

export default ModalReceiptUuidInput;