import React, { Component } from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import App from "./App.js";

firebase.initializeApp({
  apiKey: "AIzaSyDoEtwIeA9RJYbTItckYW17zuQi-HjhY-E",
  authDomain: "weather-app-51839.firebaseapp.com",
  projectId: "weather-app-51839",
  storageBucket: "weather-app-51839.appspot.com",
  messagingSenderId: "818231467774",
  appId: "1:818231467774:web:35a8ecce947d803f940faf"
});

class Auth extends Component {
  state = { isSignedIn: false };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  checkIfBits(email) {
    // example of email is "f20200306@hyderabad.bits-pilani.ac.in"
    let suffix = email.substring(email.indexOf('.')+1)
    if (suffix === "bits-pilani.ac.in") {
      return true;
    }
    else {
      return false;
    }
  }

  render() {
    return (
      <div className="Auth">
        {this.state.isSignedIn ? (
          <div className="sign-in-wrapper">
            <button className="sign-out-btn" onClick={() => firebase.auth().signOut()}>Sign Out</button>
            <h2 className="welcome-sign">Welcome {firebase.auth().currentUser.displayName}!</h2>
            {this.checkIfBits(firebase.auth().currentUser.email) ? 
              (
                <App />
              ) 
              : (
                <div className="not-bits-wrapper">
                  <h1 className="not-from-bits">Use BITS mail to access</h1>
                </div>              
              )}
          </div>
        ) 
        : (
          <div className="start-wrapper">
            <h1 className="start-comment">Sign in using BITS mail</h1>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Auth;