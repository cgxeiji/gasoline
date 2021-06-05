import React, {useState} from "react"
import {
    Button,
    Container,
    TextField,
    InputAdornment,
    Typography,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


export default function Input(props) {
    const useStyles = makeStyles(theme => ({
        root: {
            padding: theme.spacing(3),
        },
        button: {
            marginTop: theme.spacing(2),
        }
    }));

    const classes = useStyles();

    const [gas, setGas] = useState("")
    const [distance, setDistance] = useState("")
    const [price, setPrice] = useState("")

    return (
        <Container className={classes.root} >

            <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                id="gas"
                label="Gasoline"
                placeholder="0.00"
                InputProps={{
                    endAdornment: <InputAdornment position="end">L</InputAdornment>,
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                value={gas}
                type="number"
                autoComplete="off"
                onChange={event => {
                    setGas(event.target.value);
                }}
            />

            <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                id="gas"
                label="Price"
                placeholder="0.0"
                InputProps={{
                    endAdornment: <InputAdornment position="end">¥</InputAdornment>,
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                value={price}
                type="number"
                autoComplete="off"
                onChange={event => {
                    setPrice(event.target.value);
                }}
            />

            <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                id="distance"
                label="Distance"
                InputProps={{
                    endAdornment: <InputAdornment position="end">km</InputAdornment>,
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder="0.0"
                type="number"
                autoComplete="off"
                value={distance}
                onChange={event => {
                    setDistance(event.target.value);
                }}
            />

            <Typography variant="h2" component="p" color="secondary">
                {(gas !== 0 && gas !== "" ? distance/gas : 0).toFixed(2)} km/L
            </Typography>

            <Button
                className={classes.button}
                variant="contained"
                size="large"
                fullWidth
                onClick={event => {
                    if (gas === 0 || gas === "") return;
                    if (distance === 0 || distance === "") return;
                    if (price === 0 || price === "") return;
                    props.newEntry({
                        gas: gas,
                        distance: distance,
                        price: price,
                    });
                    setGas("");
                    setDistance("");
                    setPrice("");
                }}
            >
                Add!
            </Button>

        </Container>
    );
}
