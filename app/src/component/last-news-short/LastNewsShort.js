import React, { useState, useEffect } from "react";
import { useNews } from '../../services/Article';
import { useStyles } from '../../utils/styles';
import ShortNews from '../../component/short-news/ShortNews';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Loader from '../../component/loader/Loader';

const LastNewsShort = () => {

    const [loading, setLoading] = useState(true);
    const [shortnews, setShortnews] = useState(null);
    const {articles} = useNews();
    const classes = useStyles();
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        console.log(loading)
        if(articles){
            setLoading(false)
            setShortnews(createShortNews(articles))
        }
        return () => {
            console.log('cleanup')
        };
    }, [articles, loading]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Create Short News
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    const createShortNews = data => {
        const datafiltered = Object.keys(data).reverse()
        const news = Object.keys(datafiltered).map( item => 
            <ShortNews key={data[item].id} data={data[item]} />          
        );
        return news;   
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <Grid container justify='center'>
            <Card className={classes.boxshadow}>
                { loading ? <Loader/> : shortnews  }
            </Card>
                
                
        </Grid>
    )
}


export default LastNewsShort;