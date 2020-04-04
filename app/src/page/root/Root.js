import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';
import Cool from '../../component/cool/Cool';
import LastNewsShort from '../../component/last-news-short/LastNewsShort';
import { ArticleProvider } from '../../services/Article';
import Fade from 'react-reveal/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Root = () => {
    // const matches = useMediaQuery('(min-height:768px)');
    const [scroll, setScroll] = useState(false);
    const classes = useStyles();
    window.addEventListener('wheel', () => {
        console.log(scroll)
        if(!scroll){
            console.log('############################')
            setScroll(true)
        }
    }, true)
    return (
        <Grid container className={classes.rootcontainer}>
            <Grid item md={8} xs={12} className={`${classes.center} ${classes.flexYcenter}`}>
                <Cool/>
            </Grid>
            <Grid item md={4} xs={12} className={`${classes.center} ${classes.flexYcenter} ${classes.rootRight}`}>
                <ArticleProvider>
                    <Fade bottom when={scroll}>
                        <LastNewsShort/>
                    </Fade>  
                </ArticleProvider>
            </Grid>   
        </Grid>
        
    )
}

export default Root;