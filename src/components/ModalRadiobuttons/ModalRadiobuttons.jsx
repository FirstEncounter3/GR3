import React, {useState} from 'react'

import './ModalRadiobuttons.css'

const ModalRadiobuttons = () => {
    const [selectedOption, setSelectedOption] = useState('receipts');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
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
    )
}

export default ModalRadiobuttons;