import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Authenticate.scss";

import googleIcon from "../../assets/images/googleIcon.svg";
import Button from "../../components/Button/Button";
import {
  loginUser,
  loginUserFailure,
  googleAuthFailure
} from "../../redux/actionCreators/Authenticate";


class Authentication extends Component {
  state = {
    status: "signup"
  };

  handleLoad = (successCallback, errorCallback) => {
    const params = {
      apiKey: "AIzaSyDhTzY6EjccIISxr7A0j_RhLkGkdCiAig4",
      discoveryDocs: [
        "https://people.googleapis.com/$discovery/rest?version=v1"
      ],
      clientId:
        "599280857870-jubqh41bgsolgejejsfvalhqinu092mt.apps.googleusercontent.com",
      scope: "profile"
    };
    window.gapi.load("auth2", () => {
      // initialize
      window.gapi.auth2.init(params).then(
        res => {
          // listen for sign in state changes
          // window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
          if (res.isSignedIn.get()) {
            // handle success action creator here
            successCallback(res.currentUser.get());
            console.log(res.currentUser.get());
          }
        },
        // handle error action creator err =>
        error => {
          errorCallback(error);
        }
      );
    });
  };

  loadGoogleClient = callback => {
    //   Load the google API client and auth2 library
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    // add script element to the DOM
    document.body.appendChild(script);
    script.onload = callback;
  };

  componentDidMount() {
    const { loginUser, googleAuthFailure } = this.props;
    this.loadGoogleClient(this.handleLoad(loginUser, googleAuthFailure));
  }

  handleClick = event => {
    event.preventDefault();
    const { googleAuth, successCallback, googleAuthFailure } = this.props;
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn().then(
      res => {
        // handle success action creator here
        successCallback(res);
        console.log(res);
      },
      err => {
        // handle error action creator here
        googleAuthFailure(err);
      }
    );
  };

  handleTerms = event => {
    event.preventDefault();
    console.log("Redirect to terms...");
  };

  handleTryOut = event => {
    event.preventDefault();
    console.log("Trying out app...");
  };

  handleVideo = event => {
    event.preventDefault();
    console.log("Redirect to YouTube...");
  };

  render() {
    return (
      <div className={"login-background"}>
        <div className={"auth__left-column"}>
          <div type="presentation" className={"auth__panel"}>
            <div type="presentation" className={"auth__panel--icon__back"}>
              <div type="presentation" className={"auth__panel--icon"}>
                <img
                  src={googleIcon}
                  alt={"google-icon"}
                  className={"icon-image"}
                />
              </div>
            </div>
            <div type="presentation" className={"auth__panel--intermediate"} />
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
              Clicking login confirms that you agree to our terms and
              conditions.
            </div>

            <div type="presentation" className={"auth__panel--foot"} />
          </div>
        </div>
        <div className={"auth__right-column"}>
          <div type="presentation" className={"auth__right-column__panel"} />
          <div className={"auth__right-column__panel--text"}>
            <Button
              hasIcon={true}
              iconAlt={"video"}
              iconStyle={"video-icon"}
              iconImage={googleIcon}
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
              text={"Try it out"}
              textStyle={"side-button__text--try"}
              onClick={this.handleTryOut}
              hasText={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

Authentication.propTypes = {
  loginUser: PropTypes.func,
  googleAuthFailure: PropTypes.func,
  loginUserFailure: PropTypes.func
};

Authentication.defaultProps = {
  loginUser: () => {},
  googleAuthFailure: () => {},
  loginUserFailure: () => {}
};

const mapStateToProps = ({ auth }) => ({
  error: auth.error
});

const actionCreators = {
  googleAuthFailure,
  loginUserFailure,
  loginUser
};

export default connect(
  mapStateToProps,
  actionCreators
)(Authentication);
