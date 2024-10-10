import React from 'react'

import './ModalHeader.css'

const ModalHeader = ({ setIsModalOpen, onMouseDown  }) => {
    return (
        <div className='modal-header' onMouseDown={onMouseDown}>
            <div className='mover'></div>
            <button className='close-button' onClick={() => setIsModalOpen(false)}></button>
        </div>
    )
}

export default ModalHeader;
