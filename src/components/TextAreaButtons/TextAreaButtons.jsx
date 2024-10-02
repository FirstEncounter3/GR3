import React from "react";

import "./TextAreaButtons.css";

const TextAreaButtons = ({ onGet, onSaveAs, onClear, onDecode }) => {
    return (
        <div className="main-buttons-wrapper">
            <button className="buttons" onClick={onGet}>Get</button>
            <button className="buttons" onClick={onSaveAs}>Save as</button>
            <button className="buttons" onClick={onClear}>Clear</button>
            <button className="buttons" onClick={onDecode}>Decode</button>
        </div>
    )
}

export default TextAreaButtons;