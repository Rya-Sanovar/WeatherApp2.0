import React from "react";
import { signInWithGoogle } from "./firestore.js";
import "./login.css";

export default function Login() {
    return (
        <div className="google-btn">
            <button className="google-provider-button" onClick={signInWithGoogle}>
            <img classNmae="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            <p className="btn-text"><b>Sign in with google using BITS mail</b></p>
            </button>
        </div>
    );
}