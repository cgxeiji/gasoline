import React, {useState} from "react"
import firebase from "firebase/app"
import "firebase/analytics"
import "firebase/auth"
import Login from "./Login"
import Main from "./Entries"
import {
    Container,
} from "@material-ui/core"
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

function App() {
    const darkMode = true;
    const theme = React.useMemo(() =>
        createMuiTheme({
            palette: {
                type: darkMode ? 'dark' : 'light',
            },
        }),
        [darkMode],
    );

    const [isLogged, setIsLogged] = useState(false);
    const [userId, setUserId] = useState("");

    firebase.auth().onAuthStateChanged( user => {
        if (user) {
            setIsLogged(true);
            setUserId(user.uid);
        } else {
            setIsLogged(false);
        }
    },
        error => {
            console.log(error);
        });

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Container maxWidth="sm">
                {isLogged ?
                    <Main
                        userId={userId}
                    />
                    :
                    <Login /> }
            </Container>
        </ThemeProvider>
    );
}

export default App;
