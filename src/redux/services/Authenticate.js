import customRequest from '../../Utils/customRequest'

const baseUrl = process.env.REACT_APP_BACKEND_URL

class AuthenticationApi {

    static async loginUser(data){
        const options = {
            body: data,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await customRequest(`${baseUrl}/authenticate`, options)
        return response;
    }
}

export default AuthenticationApi;