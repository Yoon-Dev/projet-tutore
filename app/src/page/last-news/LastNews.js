import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { useNews } from '../../services/Article';
import News from '../../component/news/News';
import { useStyles } from '../../utils/styles';

const LastNews = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(null);
    const {articles} = useNews();
    useEffect(() => {
        if(articles){
            setLoading(false)
            setNews(createNews(articles))
        }
        return () => {
            console.log('cleanup')
        };
    }, [articles]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    const createNews = data => {
        const news = Object.keys(data).map( item => 
            
            <News key={data[item].id} data={data[item]} />
            
        );
        return news;   
    }
    return(
        <Grid container justify='center' className={classes.texturebg}>
                { loading ? "loading..." : news }
        </Grid>
    )
}

export default LastNews;