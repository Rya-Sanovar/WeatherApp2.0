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

  render() {
    return (
      <div className="Auth">
        {this.state.isSignedIn ? (
          <div>
          <App />
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <h2>Your email: {firebase.auth().currentUser.email}</h2>
          </span>
          </div>
        ) : (
          <div className="Signing-in">
            <h1>Sign in using BITS mail</h1>
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