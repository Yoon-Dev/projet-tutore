import React, { useState, useEffect } from "react";
import { useNews } from '../../services/Article';
import News from '../../component/news/News';
import Grid from '@material-ui/core/Grid';
import { useParams, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useStyles } from '../../utils/styles';

const SingleNew = () => {

    const classes = useStyles();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(null);
    const {articles} = useNews();
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        if(articles){
            setLoading(false)
            setNews(createSingleNew(articles, id))
        }
        return () => {
            console.log('cleanup')
        };
    }, [articles, id]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Create News
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    const createSingleNew = (data, id) => {
        const news = <News key={data[parseInt(id, 10)].id} data={data[parseInt(id, 10)]} />;
        return news;   
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <Grid container justify='center' className={`${classes.drawbg} ${classes.containersingle}`}>
            { loading ? "loading..." : news }
            <Grid item xs={12} className={`${classes.center} ${classes.sndbtn}`}>
                <Button variant="contained" color="secondary"><Link to="/last-news" className={classes.link}>En apprendre plus</Link></Button>
            </Grid>
        </Grid>
    )
}

export default SingleNew;