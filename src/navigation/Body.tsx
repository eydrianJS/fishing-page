import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useBodyStyles } from '../styles/styles';
import MyCarousel from '../components/Carousel';

export default function Body(props) {
    const classes = useBodyStyles(props.theme);
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}> </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}><MyCarousel /></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>
        </div>
    );
}