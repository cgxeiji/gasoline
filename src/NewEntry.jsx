import React from "react"
import {
    Paper,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Input from "./Input"


export default function NewEntry(props) {
    const useStyles = makeStyles(theme => ({
        root: {
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>
                <Input
                    newEntry={props.newEntry}
                />
            </Paper>
        </div>
    );

};
