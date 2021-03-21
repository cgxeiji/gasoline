import React, {useState, useEffect} from "react"
import {
    Paper,
    Grid,
    List, ListItem, ListItemText,
    Typography,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import NewEntry from "./NewEntry"
import firebase from "firebase"
import 'firebase/database'

export default function Entries(props) {
    const db = firebase.database();
    const dbEntries = db.ref('entries');
    const dbUsers = db.ref('users');

    const useStyles = makeStyles(theme => ({
        root: {
            marginTop: theme.spacing(2),
        },
        paper: {
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
        },
    }));
    const classes = useStyles();

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        if (props.userId !== "") {
            dbUsers.child(props.userId).on("child_added", (snapshot) => {

                if (!snapshot.exists()) return;
                dbEntries.child(snapshot.key).once('value')
                    .then(s => {
                        setEntries(old => ([
                            s.val(),
                            ...old,
                        ]));
                    });
            }
            );
        }
    }, [props.userId]);

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>

                <Grid item xs={12}>
                    <NewEntry
                        newEntry={entry => {
                            const e = {
                                ...entry,
                                timestamp: Date.now(),
                            };
                            const entryId = dbEntries.push(e).key;
                            dbUsers.child(props.userId).update({[entryId]: true});
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" component="h2">
                            History
                        </Typography>

                        <List>
                            {entries.map((e, idx) => (
                                <ListItem
                                    key={idx}
                                >
                                    <ListItemText
                                        primary={(e.distance/e.gas).toFixed(2) + " km/L"}
                                        secondary={new Date(e.timestamp).toDateString() + ": " + parseFloat(e.gas).toFixed(2) + " L  " + parseFloat(e.distance).toFixed(1) + " km"}
                                    />
                                </ListItem>
                            ))}
                        </List>

                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
