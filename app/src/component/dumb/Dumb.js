import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';

const News = props => {
    const classes = useStyles();
    return(
            <Card className={`${classes.newsbox} ${classes.dumbitem}`}>
                <Grid container justify='center' alignItems="flex-end">
                    <Grid item xs={12}>
                        <CardMedia
                        component="img"
                        image={props.img}
                        title="Jeter les réseaux sociaux"
                        />                               
                    </Grid>
                    <CardContent>
                        <Grid item xs={12} className={`${classes.center} ${classes.snd}`}>
                            <Typography variant="h5" component="h2" color="textPrimary" className={classes.titledumb}>
                                {props.titre}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={`${classes.center}`}>
                            <Typography variant="body1" component="p"color="textSecondary" className={classes.dumbtext}>
                                {props.text}
                            </Typography>
                        </Grid>
                    </CardContent>
                </Grid>
            </Card>
    )
}

export default News;