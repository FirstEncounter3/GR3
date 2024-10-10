import React, { useState, useEffect } from 'react'

import './Modal.css'

import ModalRadiobuttons from "../ModalRadiobuttons/ModalRadiobuttons";
import ModalDocTypeSelector from "../ModalDocTypeSelector/ModalDocTypeSelector";
import ModalStoreSelector from "../ModalStoreSelector/ModalStoreSelector";
import ModalFastTimeButtons from "../ModalFastTimeButtons/ModalFastTimeButtons";
import ModalDateTimeComponent from "../ModalDateTimeComponent/ModalDateTimeComponent";
import ModalReceiptUuidInput from "../ModalReceiptUuidInput/ModalReceiptUuidInput";
import ModalMainButtons from "../ModalMainButtons/ModalMainButtons";
import ModalHeader from '../ModalHeader/ModalHeader';

const Modal = ({ isOpen, setIsModalOpen }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (isOpen) {
            const top = window.innerHeight * 0.4;
            const left = window.innerWidth * 0.4;
            setModalPosition({ top: top, left: left });
        }
    }, [isOpen]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const newLeft = modalPosition.left + (e.clientX - startPosition.x);
            const newTop = modalPosition.top + (e.clientY - startPosition.y);
            setModalPosition({ top: newTop, left: newLeft });
            setStartPosition({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    if (!isOpen) return null;

    return (
        <div className='modal-wrapper'
            style={{top: modalPosition.top, left: modalPosition.left }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <ModalHeader setIsModalOpen={setIsModalOpen} onMouseDown={handleMouseDown}/>
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