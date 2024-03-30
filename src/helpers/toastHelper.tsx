import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function toastError(title = "Something went wrong. Please refresh and try again", description = "") {
    return toast.error(title)
}

export function toastSuccess(title = "", description = "") {
    return toast.success(title)
}

export function toastWarning(title = "", description = "") {
    return toast.warn(title)
}

export function toastInfo(title = "", description = "") {
    return toast.info(title)
}
