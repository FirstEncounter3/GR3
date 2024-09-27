import React from "react";

import { Modal } from "../Modal/Modal"; 

import "./TextArea.css";

function TextArea() {
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const TextAreaClear = () => {
    setTextAreaValue("");
  };

  const saveASHandler = async () => {
    try {
      if (textAreaValue) {
        const fileHandle = await showSaveFilePicker({
          suggestedName: "magic_json.json",
          types: [
            {
              description: "JSON",
              accept: {
                "application/json": [".json"],
              },
            },
          ],
        });

        const writableStream = await fileHandle.createWritable();
        await writableStream.write(textAreaValue);
        await writableStream.close();
      }
    } catch (error) {
      console.error("Error saving file:", error);
    }
  };

  const inputHandler = (e) => {
    setTextAreaValue(e.target.value);
  };

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
        <div className="main-buttons-wrapper">
          <button className="buttons" onClick={() => setIsModalOpen(true)}>Get</button>
          <button className="buttons" onClick={saveASHandler}>
            Save as
          </button>
          <button className="buttons" onClick={TextAreaClear}>
            Clear
          </button>
          <button className="buttons">Decode</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default TextArea;
