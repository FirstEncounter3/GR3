import React from "react";
import { JSONTree } from "react-json-tree";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Modal from "../Modal/Modal"; 
import TextAreaButtons from "../TextAreaButtons/TextAreaButtons";
import { textAreaClear, decodeJson, saveAsHandler } from "./textAreaUtils";

import "./TextArea.css";

const TextArea = () => {
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formattedJson, setFormattedJson] = React.useState(null);

  const handleClear = () => {
    textAreaClear(setTextAreaValue, setFormattedJson);
  }

  const handleSaveAs = async () => {
    await saveAsHandler(textAreaValue, setFormattedJson);
  }

  const inputHandler = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleDecode = () => {
    decodeJson(textAreaValue, setFormattedJson, setTextAreaValue);
  }

  return (
    <>
      <div className="text-area-wrapper">
        <label htmlFor="text-area" className="label-text-area">
          Вставьте JSON в поле
        </label>
        <textarea
          id="text-area"
          placeholder='{"key":"value}'
          value={textAreaValue}
          onChange={inputHandler}
        ></textarea>
        {formattedJson && (
          <div className="json-viewer">
            <label className="label-text-area">JSON древо:</label>
            <div className="json-content">
              <JSONTree data={formattedJson} theme={{ scheme: 'dark', author: 'sublime' }} />
            </div>
          </div>
        )}
        <TextAreaButtons
          onGet={() => setIsModalOpen(true)}
          onSaveAs={handleSaveAs}
          onClear={handleClear}
          onDecode={handleDecode}
        />
      </div>
      <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ToastContainer theme="dark" />
    </>
  );
}

export default TextArea;
