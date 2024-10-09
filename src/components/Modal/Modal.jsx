import React, { useState } from 'react'

import './Modal.css'

import ModalRadiobuttons from "../ModalRadiobuttons/ModalRadiobuttons";
import ModalDocTypeSelector from "../ModalDocTypeSelector/ModalDocTypeSelector";
import ModalStoreSelector from "../ModalStoreSelector/ModalStoreSelector";
import ModalFastTimeButtons from "../ModalFastTimeButtons/ModalFastTimeButtons";
import ModalDateTimeComponent from "../ModalDateTimeComponent/ModalDateTimeComponent";
import ModalReceiptUuidInput from "../ModalReceiptUuidInput/ModalReceiptUuidInput";
import ModalMainButtons from "../ModalMainButtons/ModalMainButtons";

const Modal = ({ isOpen, setIsModalOpen }) => {
    if (!isOpen) return null;

    return (
        <div className='modal-wrapper'>
            <button className='close-button' onClick={() => setIsModalOpen(false)}></button>
            <ModalRadiobuttons />
            <ModalDocTypeSelector />
            <ModalStoreSelector />
            <ModalFastTimeButtons />
            <ModalDateTimeComponent />
            <ModalReceiptUuidInput />
            <ModalMainButtons />
        </div>
    )
}

export default Modal;