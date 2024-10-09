import React, { useState } from 'react'

import './Modal.css'

const Modal = ({ isOpen, setIsModalOpen }) => {
    const [selectedOption, setSelectedOption] = useState('receipts');

    if (!isOpen) return null;

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='modal-wrapper'>
            <button className='close-button' onClick={() => setIsModalOpen(false)}></button>
            <div className='radiobutton-wrapper'>
                <div className='radiobutton-and-label'>
                    <label for="receipts">Чеки</label>
                    <input 
                        type="radio" 
                        id="receipts" 
                        name="receipts" 
                        value="receipts"
                        checked={selectedOption === 'receipts'}
                        onChange={handleOptionChange}
                    >
                    </input>
                </div>
                <div className='radiobutton-and-label'>
                    <label for="goods">Товары</label>
                    <input 
                        type="radio" 
                        id="goods" 
                        name="goods" 
                        value="goods"
                        checked={selectedOption === 'goods'}
                        onChange={handleOptionChange}
                    >
                    </input>
                </div>
            </div>
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
            <div className='store-choice-wrapper'>
                <label for="store">Торговая точка</label>
                <select name="store" id="store">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className='fast-date-buttons-wrapper'>
                <button className='fast-date-button'>Сегодня</button>
                <button className='fast-date-button'>Вчера</button>
            </div>
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
            <div className='receipt-uuid-input-wrapper'>
                <label for="receipt-uuid">UUID чека</label>
                <input type="text" id="receipt-uuid"></input>
            </div>
            <div className='main-button-wrapper'>
                <button className='make-request-button'>Ok</button>
                <button className='retun-button'>previous</button>
            </div>
        </div>
    )
}

export default Modal;