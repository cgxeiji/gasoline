import React from "react"
import {
    IconButton,
} from "@material-ui/core"
import {
    Edit
} from '@material-ui/icons'
import {makeStyles} from "@material-ui/core/styles"

export default function EntryBar(props) {
    const userStyles = makeStyles(theme => ({
        root: {
            marginLeft: 'auto',
        },
        button: {
            marginRight: theme.spacing(2),
        },
    }));
    const classes = userStyles();

    return (
        <div className={classes.root}>
            <IconButton className={classes.button} component="span"
                onClick={() => {
                    props.onClick();
                }}
            >
                <Edit/>
            </IconButton>
        </div>
    );
}
