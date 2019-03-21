import axios from "axios";

const baseUrl = process.env.FINAGER_APP_URL;

class AuthenticationApi {
    static googleAuth(){
        // process.env.GOOGLE_APP_LOGIN_API
        const error = new Error('Wrong credentials')
        error.error = {
            status_code: 401,
            error: 'Wrong credentials'
        }
        const success = {
            status_code: 200,
            data: {id_token: 'eyTggbjkikjf6ft7lm0jjm',
                    email: 'testing@mail.com'}
        } 
        // throw error;
        return success;
    }

    static async loginUser(data){
        const baseUrl = process.env.REACT_APP_BACKEND_URL
        const options = {
            body: data,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(`${baseUrl}/authenticate`, options)
        return response;
    }
}

export default AuthenticationApi;