import React from 'react'

import './ModalDateTimeComponent.css'

const ModalDateTimeComponent = () => {
    return (
        <div className='label-and-calendar-wrapper'>
            <div className='date-and-time'>
                <label for="since-date">С даты и времени</label>
                <input type="datetime-local" id="since-date"></input>
                <input type="number" id="since-seconds" name="seconds" min="0" max="59" placeholder="00"></input>
            </div>
            <div className='date-and-time'>
                <label for="until-date">По дату и время</label>
                <input type="datetime-local" id="until-date"></input>
                <input type="number" id="until-seconds" name="seconds" min="0" max="59" placeholder="00"></input>
            </div>
        </div>
    )
}

export default ModalDateTimeComponent;
