import React from "react"
import {
    ListItem, ListItemText,
    IconButton,
} from "@material-ui/core"
import {
    DeleteForever
} from '@material-ui/icons'
import {makeStyles} from "@material-ui/core/styles"


export default function EntryItem(props) {
    const userStyles = makeStyles(theme => ({
        button: {
            marginRight: theme.spacing(2),
        },
    }));
    const classes = userStyles();

    let secondaryText = new Date(props.timestamp).toDateString() + ": " + parseFloat(props.gas).toFixed(2) + " L  " + parseFloat(props.distance).toFixed(1) + " km";

    if (props.price != null) {
        secondaryText += "  @ " + parseFloat(props.price) + " ¥/L";
    }

    return (
        <ListItem
            key={props.entryId}
        >
            {props.toDelete &&
            <IconButton className={classes.button} component="span" color="secondary"
                onClick={() => {
                    props.onDelete(props.entryId);
                }}
            >
                <DeleteForever/>
            </IconButton>
            }
            <ListItemText
                primary={(props.distance/props.gas).toFixed(2) + " km/L"}
                secondary={secondaryText}
            />
        </ListItem>
    );
}
