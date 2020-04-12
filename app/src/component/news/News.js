import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';

const News = props => {
    const classes = useStyles();
    return(
            <Grid item lg={7} xs={12} className={classes.mnews}>  
                <Card className={classes.newsbox}>
                    <CardContent>
                        <Grid container justify='center' alignItems="flex-end">
                            <Grid item lg={8} xs={12}>
                                <Typography variant="h4" component="h2" className={classes.titlenews}>
                                    {props.data.titre}
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={6} className={`${classes.center} ${classes.snd}`}>
                                <Typography color="textSecondary">
                                    source: <b>{props.data.source}</b>
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={6} className={`${classes.center} ${classes.snd}`}>
                                <Typography color="textSecondary">
                                    paru le <b>{props.data.date}</b>
                                </Typography>
                            </Grid>
                            <Grid itemxs={12} className={classes.mtext}>
                                <Typography variant="body1" component="p">
                                    {props.data.text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Grid container justify='center'>
                        <Grid item xs={12} className={`${classes.center} ${classes.mbtn}`}>
                            <CardActions>
                                <Button variant="contained" color="primary"><a href={props.data.lien} className={classes.link}>Voir l'article en détail</a></Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
    )
}

export default News;