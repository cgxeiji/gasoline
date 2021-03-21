import React from "react"
import firebase from "firebase"
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import 'firebase/auth'

export default function Login() {
    const auth = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

    auth.start('#firebaseui-auth-container', {

        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                console.log("logged");
                return false;
            },
            uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },

        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            },
            {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            },
        ]
    });

    return (
        <div>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading</div>
        </div>
    );
}
