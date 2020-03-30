import React from "react";
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';
import FakeGrid from '../../component/fake-grid/FakeGrid';

const Tuto = () => {

    const classes = useStyles();

    return (
        <Grid container justify='center'>
            <Grid item sm={6} xs={12} className={classes.center}>
                <h1>Tuto</h1>
            </Grid>
            <FakeGrid/>
            <Grid item sm={6} xs={12} className={classes.center}>
                <h1>Tuto</h1>
            </Grid>
            <FakeGrid/>
            <Grid item sm={6} xs={12} className={classes.center}>
                <h1>Tuto</h1>
            </Grid>
            <FakeGrid/>
            <Grid item sm={6} xs={12} className={classes.center}>
                <h1>Tuto</h1>
            </Grid>
        </Grid>

    )
}

export default Tuto;