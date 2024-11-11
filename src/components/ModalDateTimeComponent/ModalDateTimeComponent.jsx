import React from 'react'

import './ModalDateTimeComponent.css'

const ModalDateTimeComponent = () => {
    return (
        <div className='label-and-calendar-wrapper'>
            <div className='date-and-time'>
                <label for="since-date">С даты и времени</label>
                <div className='datetime-wrapper'>
                    <input type="datetime-local" id="since-date" className='select-input-date'></input>
                    <input type="number" id="since-seconds" name="seconds" min="0" max="59" placeholder="00" className='select-input-seconds'></input>
                </div>
            </div>
            <div className='date-and-time'>
                <label for="until-date">По дату и время</label>
                <div className='datetime-wrapper'>
                    <input type="datetime-local" id="until-date" className='select-input-date'></input>
                    <input type="number" id="until-seconds" name="seconds" min="0" max="59" placeholder="00" className='select-input-seconds'></input>
                </div>
            </div>
        </div>
    )
}

export default ModalDateTimeComponent;
