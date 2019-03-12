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

    static loginUser(data){
        
        return data;
    }
}

export default AuthenticationApi;