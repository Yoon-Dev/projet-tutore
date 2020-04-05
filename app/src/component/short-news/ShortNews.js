import React from 'react';
import Typography from '@material-ui/core/Typography';import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';
import { Link } from 'react-router-dom'

const ShortNews = props => {
    const classes = useStyles();
    return(
        <div className={classes.bordersn}>
            <Grid container justify='center' alignItems="flex-end">
                <Grid item xs={12} className={`${classes.center} ${classes.titlelink}`}>
                    <Link to={`/${props.data.id}`} className={classes.nounderline}>
                        <Typography variant="h5" component="h3" className={classes.textcenter}>
                            {props.data.titre}
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={6} className={classes.center}>
                    <Typography color="textSecondary">
                        source: <b>{props.data.source}</b>
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.center}>
                    <Typography color="textSecondary">
                        <b>{props.data.date}</b>
                    </Typography>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default ShortNews;