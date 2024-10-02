import { toast } from "react-toastify";

const jsonParseDecoder = (value) => {
    const json = JSON.parse(value);
    return JSON.stringify(json, null, 2);
}

export const textAreaClear = (setTextAreaValue, setFormattedJson) => {
    setTextAreaValue("");
    setFormattedJson(null);
  };

export const decodeJson = (textAreaValue, setFormattedJson, setTextAreaValue) => {
    try {
        const decodeJson = jsonParseDecoder(textAreaValue);
        setFormattedJson(JSON.parse(textAreaValue));
        setTextAreaValue(decodeJson);
    } catch (error) {
        console.error("Error decoding JSON:", error);
        toast.error("Ошибка при декодировании JSON" + error, {position: "top-center",});
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