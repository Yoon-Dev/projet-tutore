import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useStyles } from '../../utils/styles';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grow } from '@material-ui/core';

export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <div id="appbar" className={classes.navbar}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2} md={1} className={classes.logo}>
                            <Link to="/" className={classes.link}>
                                <Button
                                    color="inherit"
                                    className={classes.button}
                                >
                                    <HomeIcon fontSize="large"/>         
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={8} md={1} className={classes.itemhead}>   
                            <Link to="/last-news" className={classes.link}>
                                <Button variant="outlined" color="inherit">News</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={2} md={10} className={`${classes.itemhead} ${classes.flexXend}`}> 
                            <Link to="/tuto" className={classes.link}>
                                <Button>Comment vérifié l'information ?</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={10} className={`${classes.menuhide}`}> 
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                color="inherit"
                            >
                                <MoreVertIcon fontSize="large" />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Grow}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to="/last-news" className={classes.nounderlinebtn}>
                                        <Button>News</Button>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/tuto" className={`${classes.middlebold} ${classes.nounderlinebtn}`}>
                                        <Button>Comment vérifié l'information ?</Button>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>    
                </Toolbar>
            </AppBar>
        </div>
  );
}