import React from 'react'

import './ModalMainButtons.css'

const ModalMainButtons = () => {
    return (
        <div className='main-button-wrapper'>
            <button className='buttons' title='Выполнить запрос с указанными параметрами'>Ok</button>
            <button className='buttons' title='Вернуть параметры предыдущего успешного запроса'>previous</button>
        </div>
    )
}

export default ModalMainButtons;