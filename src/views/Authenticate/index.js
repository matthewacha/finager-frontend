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

  handleLoad = (errorCallback) => {
    const params = {
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      discoveryDocs: [process.env.REACT_APP_GOOGLE_API_DISCOVERY_DOCS],
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      scope: "profile email",
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET
    };
    window.gapi.load("auth2", () => {
      // initialize
      window.gapi.auth2.init(params).then(
        res => {
          // listen for sign in state changes
          // window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
          if (res.isSignedIn.get()) {
            // handle success action creator here
            this.handleSuccess(res.currentUser.get());
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
    const { googleAuthFailure } = this.props;
    this.loadGoogleClient(this.handleLoad(googleAuthFailure));
  }

  handleSuccess = response => {
    const { loginUser } = this.props;
    const userProfile = response.getBasicProfile()
    const authResponse = response.getAuthResponse()
    response.googleId = userProfile.getId()
    response.tokenId = authResponse.id_token
    response.accessToken = authResponse.access_token
    loginUser(response)
  }

  handleClick = event => {
    event.preventDefault();
    const { googleAuth, successCallback, googleAuthFailure } = this.props;
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn().then(
      res => {
        // handle success action creator here
        loginUser(res);
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
