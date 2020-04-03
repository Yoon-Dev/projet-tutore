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
            <Card className={classes.newsbox}>
                <CardContent>
                    <Grid container justify='center' alignItems="flex-end" spacing={8}>
                        <Grid item xs={12} className={`${classes.center} ${classes.snd}`}>
                            <Typography variant="h5" component="h2" color="textPrimary">
                                {props.titre}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <CardMedia
                            component="img"
                            image={props.img}
                            title="Jeter les réseaux sociaux"
                            />                               
                        </Grid>
                        <Grid item xs={12} className={`${classes.center} ${classes.snd}`}>
                            <Typography variant="body1" component="p"color="textSecondary">
                                {props.text}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
    )
}

export default News;