import React from "react";
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';
import Cool from '../../component/cool/Cool';
import LastNewsShort from '../../component/last-news-short/LastNewsShort';
import { ArticleProvider } from '../../services/Article';

const Root = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item md={8} xs={12} className={classes.center}>
                <Cool/>
            </Grid>
            <Grid item md={4} xs={12} className={classes.center}>
                <ArticleProvider>
                    <LastNewsShort/>
                </ArticleProvider>
            </Grid>   
        </Grid>
        
    )
}

export default Root;