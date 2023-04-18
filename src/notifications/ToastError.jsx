import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const ErrorMessage = error => {
    return toast.error(error, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    });
};
