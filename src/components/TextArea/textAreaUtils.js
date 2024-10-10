import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { showToast, showToastError } from "../../services/toastOptions";

const jsonParseDecoder = (value) => {
    const json = JSON.parse(value);
    return JSON.stringify(json, null, 2);
}

export const textAreaClear = (setTextAreaValue, setFormattedJson) => {
    setTextAreaValue("");
    setFormattedJson(null);
    showToast("Поле очищено");
  };

export const decodeJson = (textAreaValue, setFormattedJson, setTextAreaValue) => {
    try {
        const decodeJson = jsonParseDecoder(textAreaValue);
        setFormattedJson(JSON.parse(textAreaValue));
        setTextAreaValue(decodeJson);
        showToast("JSON декодирован");
    } catch (error) {
        console.error("Error decoding JSON:", error);
        showToastError("Ошибка при декодировании JSON: " + error);
    }
}

export const saveAsHandler = async (textAreaValue, setFormattedJson) => {
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
        const decodeJson = jsonParseDecoder(textAreaValue);
        setFormattedJson(JSON.parse(textAreaValue));
        await writableStream.write(decodeJson);
        await writableStream.close();
        showToast("Файл сохранен");
      }
    } catch (error) {
      console.error("Error saving file:", error);

      showToastError("Ошибка при сохранении файла: " + error);
    }
  };