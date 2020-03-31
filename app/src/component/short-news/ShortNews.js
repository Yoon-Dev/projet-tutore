import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';

const ShortNews = props => {
    const classes = useStyles();
    return(
        <div className={classes.bordersn}>
            <Grid container justify='center' alignItems="flex-end">
                <Grid item xs={12} className={classes.center}>
                    <Typography variant="h4" component="h2">
                        {props.data.titre}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography color="textSecondary">
                        source: <b>{props.data.source}</b>
                    </Typography>
                </Grid>
                <Grid item md={2} xs={6}>
                    <Typography color="textSecondary">
                        paru le <b>{props.data.date}</b>
                    </Typography>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default ShortNews;