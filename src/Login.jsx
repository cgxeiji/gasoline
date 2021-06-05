import React from "react"
import firebase from "firebase"
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import 'firebase/auth'
import {makeStyles} from '@material-ui/core/styles'
import {orange} from '@material-ui/core/colors'
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation'
import {
    Link,
    Box,
    Typography,
    Avatar
} from '@material-ui/core'

export default function Login() {
    const useStyles = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(2),
            backgroundColor: orange[700],
        },
    }));
    const classes = useStyles();

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
        signInFlow: 'popup',

        signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    });

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://gas.onchi.me/">
                    Gasoline
                </Link>{' '}
                {new Date().getFullYear()}
            </Typography>
        );
    }

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LocalGasStationIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in to Gasoline!
            </Typography>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading</div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </div>
    );
}
