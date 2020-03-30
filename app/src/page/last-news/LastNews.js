import React from "react";
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';

const LastNews = () => {

    const classes = useStyles();

    return(
        <Grid container justify='center'>
            <Grid item md={8} xs={12} className={classes.center}>
                <h1>LastNews</h1>
            </Grid>
        </Grid>
    )
}

export default LastNews;