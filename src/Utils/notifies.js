import { notify } from 'react-notify-toast';


const customSuccess = {background: '#69e02e', text: '#f0f8ff' }
const customError = { background: '#e02f2e', text: '#f0f8ff' }


export const successNotify = (message) => {
    return (notify.show(message, 'custom', 2000, customSuccess))
}

export const errorNotify = message => {
    return (notify.show(message, 'custom', 2000, customError))
}
