import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../utils/styles';

export default function Header() {



    const classes = useStyles();
    return (
        <div id="appbar">
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2} md={1} className={classes.logo}>
                            <Link to="/">
                                <Typography variant="h6">
                                    Root
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item md={1} xs={8} className={classes.itemhead}>   
                            <Link to="/last-news">
                                <Typography variant="h6">
                                    LastNews
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item md={1} xs={2} className={classes.itemhead}> 
                            <Link to="/tuto">
                                <Typography variant="h6">
                                    Tuto
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>    
                </Toolbar>
            </AppBar>
        </div>
  );
}