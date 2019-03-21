import React, { PureComponent } from 'react';
import Cookies from 'js-cookie';
import { jwt_decode } from 'jwt-decode';

import { errorNotify, } from '../../Utils/notifies';


export default function(ConsumedComponent){
    class Authenticates extends PureComponent {
        componentDidMount(){
            const { token, history } = this.props;
            // if(token){
            //   const decodedUser = jwt_decode(token);
            //   determine if user token has not yet expired
            // if it has expired, redirect to login page
            //   Cookies.set('currentUser', decodedUser);
            // decodedUser.isExpired &&
            // }
        }

        render(){
            return (<ConsumedComponent {...this.props} />)
        }
    }

    return Authenticates
}