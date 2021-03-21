import firebase from "firebase";
import "firebase/auth";

export default function LoginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
        .signInWithRedirect(provider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })

    console.log('here');

    return (
        <div>
        </div>
    );
};
