import React from 'react'

import './ModalStoreSelector.css'

const ModalStoreSelector = () => {
    return (
        <div className='store-choice-wrapper'>
            <label for="store">Торговая точка</label>
            <select name="store" id="store" className='select-input'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    )
}

export default ModalStoreSelector;