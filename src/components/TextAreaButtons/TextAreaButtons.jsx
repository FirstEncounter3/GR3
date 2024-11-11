import React from "react";

import "./TextAreaButtons.css";

const TextAreaButtons = ({ onGet, onSaveAs, onClear, onDecode }) => {
    return (
        <div className="main-buttons-wrapper">
            <button className="buttons" title="Вызвать меню уточнения запроса" onClick={onGet}>Get</button>
            <button className="buttons" title="Сохранить содержимое поля на компьютер" onClick={onSaveAs}>Save as</button>
            <button className="buttons" title="Очистить поле" onClick={onClear}>Clear</button>
            <button className="buttons" title="Отформатировать содержимое без сохранения" onClick={onDecode}>Decode</button>
        </div>
    )
}

export default TextAreaButtons;