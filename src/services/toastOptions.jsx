import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const defaultStyle = {
    backgroundColor: "#17202a",
    boxShadow: "0 0 16px 0 rgba(93, 173, 226, 0.795)"
};

const toastPosition = "top-center";


const showToast = (message, options = {}) => {
    toast.success(message, {
        position: toastPosition,
        ...options,
        style: {
            ...defaultStyle,
            ...options.style
        }
    });
};

const showToastError = (message, options = {}) => {
    toast.error(message, {
        position: toastPosition,
        ...options,
        style: {
            ...defaultStyle,
            ...options.style
        }
    });
};

export { showToast, showToastError };