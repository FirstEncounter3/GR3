import React from "react";
import { JSONTree } from "react-json-tree";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Modal } from "../Modal/Modal"; 

import "./TextArea.css";

function TextArea() {
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formattedJson, setFormattedJson] = React.useState(null);

  const TextAreaClear = () => {
    setTextAreaValue("");
    setFormattedJson(null);
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
        const json = JSON.parse(textAreaValue);
        await writableStream.write(JSON.stringify(json, null, 2));
        await writableStream.close();

        toast.success("Файл успешно сохранен!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error saving file:", error);

      toast.error("Ошибка при сохранении файла!", {
        position: "top-center",
      });
    }
  };

  const inputHandler = (e) => {
    setTextAreaValue(e.target.value);
  };

  const decodeJson = () => {
    try {
      setTextAreaValue('');
      const json = JSON.parse(textAreaValue);
      setFormattedJson(json);
      setTextAreaValue(JSON.stringify(json, null, 2));

    } catch (error) {
      console.error("Error decoding JSON:", error);

      toast.error("Ошибка при декодировании JSON" + error, {
        position: "top-center",
      });
    }
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
        <div className="main-buttons-wrapper">
          <button className="buttons" onClick={() => setIsModalOpen(true)}>Get</button>
          <button className="buttons" onClick={saveASHandler}>
            Save as
          </button>
          <button className="buttons" onClick={TextAreaClear}>
            Clear
          </button>
          <button className="buttons" onClick={decodeJson}>Decode</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ToastContainer theme="dark" />
    </>
  );
}

export default TextArea;
