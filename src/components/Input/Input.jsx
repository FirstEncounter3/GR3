import React, {useState} from 'react'

import './Input.css'

const Input = () => {
    const [tokenValue, setTokenValue] = useState('');
    const clearHandler = () => {
        setTokenValue('');
    }

    const inputHandler = (e) => {
        setTokenValue(e.target.value);
    }

  return (
    <div className='input-token-wrapper'>
        <label htmlFor='token-input' className='label-token-input'>Токен приложения*</label>
        <div className='input-token-and-button'>
            <input type="text" id='token-input' placeholder='00000000-0000-0000-0000-000000000000' value={tokenValue} onChange={inputHandler}/>
            <button className='token-clear-button' onClick={clearHandler}></button>
        </div>
    </div>
  )
}

export default Input;