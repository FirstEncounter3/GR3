import React from 'react'

import './ModalDocTypeSelector.css'

const ModalDocTypeSelector = () => {
    return (
        <div className='doc-type-wrapper'>
            <label for="doc-type">Тип документа</label>
            <select name="doc-type" id="doc-type">
                <option value="ACCEPT">ACCEPT</option>
                <option value="INVENTORY">INVENTORY</option>
                <option value="REVALUATION">REVALUATION</option>
                <option value="RETURN">RETURN</option>
                <option value="WRITE_OFF">WRITE_OFF</option>
                <option value="SELL" selected>SELL</option>
                <option value="PAYBACK">PAYBACK</option>
                <option value="BUY">BUY</option>
                <option value="BUYBACK">BUYBACK</option>
                <option value="OPEN_TARE">OPEN_TARE</option>
                <option value="OPEN_SESSION">OPEN_SESSION</option>
                <option value="CLOSE_SESSION">CLOSE_SESSION</option>
                <option value="POS_OPEN_SESSION">POS_OPEN_SESSION</option>
                <option value="CASH_INCOME">CASH_INCOME</option>
                <option value="CASH_OUTCOME">CASH_OUTCOME</option>
                <option value="X_REPORT">X_REPORT</option>
                <option value="Z_REPORT">Z_REPORT</option>
                <option value="CORRECTION">CORRECTION</option>
            </select>
        </div>
    )
}

export default ModalDocTypeSelector;