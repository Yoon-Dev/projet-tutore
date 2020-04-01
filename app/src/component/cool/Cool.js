import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../utils/styles';

const Cool = () => {

    const classes = useStyles();

    return (
            <Typography variant="h4" component="h1" className={classes.titlecool}>
                Nous démélons le vrai du faux pour que vous ne retenier que la vérité
            </Typography>     
    )
}

export default Cool;