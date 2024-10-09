import React from 'react'

import './ModalFastTimeButtons.css'

const ModalFastTimeButtons = () => {
    return (
        <div className='fast-date-buttons-wrapper'>
            <button className='fast-date-button'>Сегодня</button>
            <button className='fast-date-button'>Вчера</button>
        </div>
    )
}

export default ModalFastTimeButtons;