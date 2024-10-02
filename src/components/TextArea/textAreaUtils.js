import { toast } from "react-toastify";

const toastPosition = "top-center";

const jsonParseDecoder = (value) => {
    const json = JSON.parse(value);
    return JSON.stringify(json, null, 2);
}

export const textAreaClear = (setTextAreaValue, setFormattedJson) => {
    setTextAreaValue("");
    setFormattedJson(null);
    toast.success("Поле очищено", {position: toastPosition,});
  };

export const decodeJson = (textAreaValue, setFormattedJson, setTextAreaValue) => {
    try {
        const decodeJson = jsonParseDecoder(textAreaValue);
        setFormattedJson(JSON.parse(textAreaValue));
        setTextAreaValue(decodeJson);
        toast.success("JSON декодирован", {position: toastPosition,});
    } catch (error) {
        console.error("Error decoding JSON:", error);
        toast.error("Ошибка при декодировании JSON" + error, {position: toastPosition,});
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
          position: toastPosition,
        });
      }
    } catch (error) {
      console.error("Error saving file:", error);

      toast.error("Ошибка при сохранении файла!", {
        position: toastPosition,
      });
    }
  };