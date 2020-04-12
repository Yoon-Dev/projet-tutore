import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { useNews } from '../../services/Article';
import News from '../../component/news/News';
import { useStyles, delaytrans } from '../../utils/styles';
import Fade from 'react-reveal/Fade';
import Loader from '../../component/loader/Loader';

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
    }, [articles]);
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)            
        }, delaytrans);      
    }, []);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    const createNews = data => {
        const datafiltered = Object.keys(data).reverse()
        const news = Object.keys(datafiltered).map( item => 
            
            <News key={data[item].id} data={data[item]}/>
            
        );
        return news;   
    }

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <Grid container justify='center' className={`${classes.drawbg} ${classes.childcenter}`}>
            <Fade bottom>  
                { loading ? <Loader/> : news }
            </Fade>
        </Grid>
    )
}

export default LastNews;