// /**
//  * 
//  * 
//  *  */
// class GoogleAuth {
//   static handleLoad = (params) => {
//     const params = {
//       apiKey: "AIzaSyDhTzY6EjccIISxr7A0j_RhLkGkdCiAig4",
//       discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
//       clientId: "599280857870-jubqh41bgsolgejejsfvalhqinu092mt.apps.googleusercontent.com",
//       scope: 'profile'
//   };

//   window.gapi.load('auth2', () => {
//       // initialize auth2
//       window.gapi.auth2.init(params)
//       .then(res => {
//       // listen for sign in state changes
//       // window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
//       if(res.isSignedIn.get()){
//           // handle success action creator here
//           console.log(res.currentUser.get());
//       }
//   }, 
//   // handle error action creator err =>  
//   error => console.log(error, 'LLLLLLLLLLLLL')
//   )
//   })
//   console.log(window.gapi, 'KKKKKKK')
// };
// };

// // const {
// //     clientId,
// //     cookiePolicy,
// //     loginHint,
// //     hostedDomain,
// //     autoLoad,
// //     isSignedIn,
// //     fetchBasicProfile,
// //     redirectUri,
// //     discoveryDocs,
// //     onFailure,
// //     uxMode,
// //     scope,
// //     accessType,
// //     responseType,
// //     jsSrc
// //   } = this.props;
// //   ((d, s, id, cb) => {
// //     const element = d.getElementsByTagName(s)[0]
// //     const fjs = element
// //     let js = element
// //     js = d.createElement(s)
// //     js.id = id
// //     js.src = jsSrc
// //     if (fjs && fjs.parentNode) {
// //       fjs.parentNode.insertBefore(js, fjs)
// //     } else {
// //       d.head.appendChild(js)
// //     }
// //     js.onload = cb
// //   })
// //   (document, 'script', 'google-login', () => {
// //     const params = {
// //       client_id: clientId,
// //       cookie_policy: cookiePolicy,
// //       login_hint: loginHint,
// //       hosted_domain: hostedDomain,
// //       fetch_basic_profile: fetchBasicProfile,
// //       discoveryDocs,
// //       ux_mode: uxMode,
// //       redirect_uri: redirectUri,
// //       scope,
// //       access_type: accessType
// //     }

// //     if (responseType === 'code') {
// //       params.access_type = 'offline'
// //     }

// //     window.gapi.load('auth2', () => {
// //       if (!window.gapi.auth2.getAuthInstance()) {
// //         window.gapi.auth2.init(params).then(
// //           res => {
// //             if (isSignedIn && res.isSignedIn.get()) {
// //               this.handleSigninSuccess(res.currentUser.get())
// //             }
// //           },
// //           err => onFailure(err)
// //         )
// //       }
// //       if (autoLoad) {
// //         this.signIn()
// //       }
// //     })
// //   })