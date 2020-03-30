import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';
import { useNews } from '../../services/Article';
const LastNews = props => {

    const {articles} = useNews();
    useEffect(() => {
        console.log(articles)
        // Créer un compsant qui créee des composant à partir de la data
        return () => {
            console.log('cleanup')
        };
    }, [articles]);
    const classes = useStyles();

    return(
        <Grid container justify='center'>
            <Grid item md={8} xs={12} className={classes.center}>
                <h1>{articles ? articles[0].titre : "loading"}</h1>
                <p>{articles ? articles[0].text : "loading"}</p>
                <p>{articles ? articles[0].source : "loading"}</p>
                <p>{articles ? articles[0].date : "loading"}</p>
                <a href={articles ? articles[0].url : "loading"}>Voir l'article original</a>
            </Grid>
        </Grid>
    )
}

export default LastNews;