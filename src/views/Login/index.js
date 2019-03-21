import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { jwt_decode } from 'jwt-decode';
import { Cookies } from 'js-cookie';
import "./Login.scss";

import googleIcon from "../../assets/images/googleIcon.svg";
import appIcon from "../../assets/images/appIcon.svg";
import videoIcon from "../../assets/images/video.svg";
import Button from "../../components/Button/Button";
import {
  loginUser,
  loginUserFailure
} from "../../redux/actionCreators/Authenticate";

import { env } from '../../config/env';
import { errorNotify, successNotify } from '../../Utils/notifies';


class Login extends Component {
  state = {
    status: "signup"
  };

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.token !== nextProps.token){
      return true
    }
    if(this.props.error !== nextProps.error){
      return true
    }
    return false
  }

  componentDidUpdate(){
    const { token, error } = this.props;
    // if(token){
    //   const decodedUser = jwt_decode(token);
    //   Cookies.set('currentUser', decodedUser, { expires: 2 });
    // }
    // if(error){
    //   errorNotify(error.error)
    // }
  }

  handleLoad = () => {
    const params = env;
    try{
      window.gapi.load("auth2", () => {
        // initialize
        window.gapi.auth2.init(params).then(
          res => {
            // listen for sign in state changes
            // window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
            // check if user is logged in
            if (res.isSignedIn && res.isSignedIn.get()) {
              // handle success
              this.handleSuccess(res.currentUser.get());
            } else {
              this.signInGoogle()
            }
          },
          // handle error action creator err =>
          error => {
            errorNotify('Not a valid origin')
            // errorCallback(error);
          }
        );
      });
    }catch(error){
      errorNotify('Please check your internet connection...')
    }
  };

  loadGoogleClient = () => {
    //   Load the google API client and auth2 library
    const script = document.getElementsByTagName('script')[1];
    script.onload = this.handleLoad();
  };

  componentDidMount() {
    this.loadGoogleClient(this.handleLoad());
  }

  handleSuccess = response => {
    const { loginUser } = this.props;
    const userProfile = response.getBasicProfile()
    const authResponse = response.getAuthResponse()
    response.googleId = userProfile.getId()
    response.tokenId = authResponse.id_token
    response.accessToken = authResponse.access_token
    loginUser(JSON.stringify(response))
  }

  signInGoogle = () => {
    let auth
    const { loginUserFailure } = this.props;
    try{
      auth = window.gapi.auth2.getAuthInstance();
      auth.signIn().then(
        res => {
          // handle success action creator here
          this.handleSuccess(res);
        }).catch(err => {
          // handle error action creator here
          loginUserFailure(err);
        })
    }catch(error){
      errorNotify('Please check your internet connection...')
    }
  }

  handleClick = event => {
    event.preventDefault();
    this.signInGoogle()
  };

  handleTerms = event => {
    /* istanbul ignore next */
    event.preventDefault();
    console.log("Redirect to terms...");
  };

  handleTryOut = event => {
    /* istanbul ignore next */
    event.preventDefault();
    console.log("Trying out app...");
  };

  handleVideo = event => {
    /* istanbul ignore next */
    event.preventDefault();
    console.log("Redirect to YouTube...");
  };

  render() {
    return (
      <Fragment>
      <div className={"login-background"}>
        <div className={"auth__left-column"}>
          <div type="presentation" className={"auth__panel"}>
            <div type="presentation" className={"auth__right-column__panel"}>
              <div type="presentation" className={"auth__panel--icon"}>
                <img
                  src={appIcon}
                  alt={"google-icon"}
                  className={"icon-image"}
                />
              </div>
            </div>
            <div type="presentation" className={"auth__panel--intermediate"}>
              <Button
                hasIcon={false}
                customButtonStyle={"app__title__border"}
                disable={"false"}
                text={"Finager"}
                textStyle={"app__title"}
                onClick={()=>{}}
                hasText={true}
              />
            </div>
            <Button
              hasIcon={true}
              iconAlt={"google-icon"}
              iconStyle={"google-icon"}
              iconImage={googleIcon}
              customButtonStyle={"auth__panel--social"}
              disable={"false"}
              text={"Login with Google"}
              textStyle={"auth-text"}
              onClick={this.handleClick}
              hasText={true}
            />
            <div
              role="button"
              onClick={this.handleTerms}
              className={"auth__panel--terms"}
            >
            Login confirms that you agree to our terms and
              conditions.
            </div>
          </div>
        </div>
        <div className={"auth__right-column"}>
          <div type="presentation" className={"auth__right-column__panel"} />
          <div className={"auth__right-column__panel-info"}>
            <div className={"auth__right-column__panel-info_content"}>
            <span>Automate and track all your routine financial transactions</span>
            <br></br>
            <span id={"examples"}>---Bills. loan payments. investments. donations---</span>
            </div>
          </div>
          <div className={"auth__right-column__panel--text"}>
            <Button
              hasIcon={true}
              iconAlt={"video"}
              iconStyle={"video-icon"}
              iconImage={videoIcon}
              customButtonStyle={"auth__panel--video"}
              disable={"false"}
              text={"Watch Tutorial"}
              textStyle={"side-button__text"}
              onClick={this.handleVideo}
              hasText={true}
            />
            <Button
              hasIcon={false}
              customButtonStyle={"auth__panel--try"}
              disable={"false"}
              text={"Demo"}
              textStyle={"side-button__text--try"}
              onClick={this.handleTryOut}
              hasText={true}
            />
          </div>
          </div>
      </div>
      <div type="presentation" className={"auth__footer"} />
      </Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  loginUserFailure: PropTypes.func
};

Login.defaultProps = {
  loginUser: () => {},
  loginUserFailure: () => {}
};

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  token: auth.userToken
});

const actionCreators = {
  loginUserFailure,
  loginUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(Login);
