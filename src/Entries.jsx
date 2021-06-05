import React, {useState, useEffect} from "react"
import {
    Paper,
    Grid,
    List,
    Typography,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import NewEntry from "./NewEntry"
import firebase from "firebase"
import 'firebase/database'
import EntryItem from "./EntryItem"
import EntryBar from "./EntryBar"
import Chart from "./Chart"

export default function Entries(props) {
    const db = firebase.database();
    const dbEntries = db.ref('entries');
    const dbUsers = db.ref('users');

    const useStyles = makeStyles(theme => ({
        root: {
            marginTop: theme.spacing(2),
        },
        paper: {
            padding: theme.spacing(2),
        },
    }));
    const classes = useStyles();

    const [entries, setEntries] = useState([]);
    const [toDelete, setToDelete] = useState(false);

    useEffect(() => {
        if (props.userId !== "") {
            dbUsers.child(props.userId).on("child_added", (snapshot) => {

                if (!snapshot.exists()) return;
                dbEntries.child(snapshot.key).once('value')
                    .then(s => {
                        setEntries(old => ([
                            {
                                ...s.val(),
                                id: s.key,
                            },
                            ...old,
                        ]));
                    });
            }
            );
        }
    }, [props.userId]);

    const onDelete = (entryId) => {
        if (entryId === undefined) return;

        if (props.userId !== "") {
            dbUsers.child(props.userId).update({
                [entryId]: null,
            });
            dbEntries.child(entryId).remove();
            setEntries(old => {
                const filter = old.filter(e => e.id !== entryId);
                return filter;
            });
        }
    };

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
                    <Chart
                        entries={entries}
                    />
                </Grid>

                <EntryBar
                    onClick={() => {
                        setToDelete(old => (!old));
                    }}
                />


                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" component="h2">
                            History
                        </Typography>

                        <List>
                            {entries.map((e, idx) => (
                                <EntryItem
                                    key={e.id}
                                    entryId={e.id}
                                    distance={e.distance}
                                    gas={e.gas}
                                    price={e.price}
                                    timestamp={e.timestamp}
                                    toDelete={toDelete}
                                    onDelete={onDelete}
                                />
                            ))}
                        </List>

                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
