import React from 'react'

import './ModalFastTimeButtons.css'

const ModalFastTimeButtons = () => {
    return (
        <div className='fast-date-buttons-wrapper'>
            <button className='buttons' title='Установить сегодняшнюю дату'>Сегодня</button>
            <button className='buttons' title='Установить вчерашнюю дату'>Вчера</button>
        </div>
    )
}

export default ModalFastTimeButtons;