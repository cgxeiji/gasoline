import React from "react"
import {makeStyles} from '@material-ui/core/styles'
import '../node_modules/react-vis/dist/style.css';
import {
    makeWidthFlexible,
    XYPlot,
    LineSeries,
    HorizontalGridLines,
    YAxis
} from 'react-vis';

export default function Chart(props) {
    const useStyles = makeStyles(theme => ({
        plot: {
            textAlign: 'center',
        },
    }));
    const classes = useStyles();
    console.log(props.entries)

    const data = props.entries.map((e, idx) => ({
        x: props.entries.length - idx,
        y: e.distance/e.gas
    }));
    console.log(data)

    const FlexibleXYPlot = makeWidthFlexible(XYPlot);

    return (
        <FlexibleXYPlot className={classes.plot} height={200}>
            <HorizontalGridLines/>
            <YAxis
                title='km/L'
                position='end'
            />
            <LineSeries
                animation
                data={data} />
        </FlexibleXYPlot>
    );
}
