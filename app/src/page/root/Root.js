import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { useStyles, delaytrans } from '../../utils/styles';
import Cool from '../../component/cool/Cool';
import LastNewsShort from '../../component/last-news-short/LastNewsShort';
import { ArticleProvider } from '../../services/Article';
import Fade from 'react-reveal/Fade';

const Root = () => {

    const classes = useStyles();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)            
        }, delaytrans);
    }, []);
    return (
            <Grid container className={classes.rootcontainer}>
                <Grid item md={8} xs={12} className={`${classes.center} ${classes.flexYcenter}`}>
                    <Fade top>
                        <Cool/>
                    </Fade>   
                </Grid>
                <Grid item md={4} xs={12} className={`${classes.center} ${classes.flexYcenter} ${classes.rootRight}`}>
                    <ArticleProvider>
                        <Fade bottom>
                            <LastNewsShort/>
                        </Fade>  
                    </ArticleProvider>
                </Grid>   
            </Grid>
        
    )
}

export default Root;