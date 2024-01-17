import { toast } from "react-toastify"

export const successToast = (message, autoClose = 3000) => {
    return toast.success(message, {
        position: "top-center",
        autoClose: autoClose,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}

export const warningToast = (message, autoClose = 3000) => {
    return toast.warn(message, {
        position: "top-center",
        autoClose: autoClose,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}

export const errorToast = (message, autoClose = 3000) => {
    return toast.error(message, {
        position: "top-center",
        autoClose: autoClose,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}