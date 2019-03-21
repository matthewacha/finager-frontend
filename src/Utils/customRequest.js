import axios from 'axios'


const baseAxios = axios.create({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
})

const errorHandler = error => {
    // to be improved
    return error
}

/**
 * @params {string, object}
 * it takes an object as a parameter which contains
 * const option = {
 * method, headers, body }
 *  */
export default async function customRequest(url, options) {
    const finalOptions = {...options};
    finalOptions.url = url;
    const req = await baseAxios(finalOptions);
    return req;
}