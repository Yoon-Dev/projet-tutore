import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { useStyles, delaytrans } from '../../utils/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Dumb from '../../component/dumb/Dumb';
import Fade from 'react-reveal/Fade';

const Tuto = () => {

    const classes = useStyles();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)           
        }, delaytrans);
    }, []);
    return (
            <Grid container justify='center' className={`${classes.tutobg} ${classes.drawbg}`}>
                <Grid item xs={12} className={`${classes.center}`}>
                    <Fade top>
                        <Typography variant="h4" component="h1" className={classes.titletuto}>
                            Comment vérifier la véracité d'une information ?
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={8} lg={7}  className={`${classes.center} ${classes.itemtuto}`}>
                    <Dumb
                    img="./img/tuto/tuto1.gif"
                    titre="Identifier l’auteur du message"
                    text="Qui s’exprime ? S’agit-il d’un média connu, d’une personnalité publique ou bien d’un site ou d’un internaute dont vous n’avez jamais entendu parler ? En cas de doute, renseignez-vous sur l'auteur."
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={7}  className={`${classes.center} ${classes.itemtuto}`}>
                    <Dumb 
                    img="./img/tuto/tuto2.gif"
                    titre="Ne croyer pas les inconnus"
                    text="Fiez-vous plutôt aux médias reconnus, aux journalistes et aux experts identifiés. Ne considérez pas pour autant que cela suffit à rendre leurs informations vraies. Si vous n'avez pas moyen de connaitre l'identité de l'auteur, ne prenez pas son information au sérieux."
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={7}  className={`${classes.center} ${classes.itemtuto}`}>
                    <Dumb 
                    img="./img/tuto/tuto3.gif" 
                    titre="Recouper les messages similaires"
                    text="Si plusieurs médias fiables donnent la même information en citant des sources différentes, elle a de bonnes chances d’être avérée. À l'inverse, face à une information non sourcée, le fait de ne pas en retrouver la mention ailleurs invite à la plus grande prudence." 
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={7}  className={`${classes.center} ${classes.itemtuto}`}>
                    <Dumb 
                    img="./img/tuto/tuto4.gif" 
                    titre="Remonter à la première source    "
                    text="Beaucoup de messages qui circulent sur les réseaux sociaux ne disent pas d’où provient l’information. L’idée à retenir est qu’il vaut mieux entendre directement une conversation que de se fier au récit de quelqu’un qui a parlé à quelqu’un qui y a assisté. Les sources indirectes, du type « le mari d’une amie d’un collègue » ou « un ami d’ami » ainsi que les sources prétendument institutionnelles mais très floues comme « quelqu’un qui travaille à la police/à la DGSI/dans l’armée » sont donc à éviter." 
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={7}  className={`${classes.center} ${classes.itemtuto}`}>
                    <Dumb 
                    img="./img/tuto/tuto5.gif" 
                    titre="Faites attention au titre aguicheur"
                    text="Plus une information est extraordinaire, plus il faut se méfier et vérifier assidument les sources. Méfiez-vous également des fausses évidences, du type « tout le monde sait qu'ou « inutile de démontrer que…." 
                    />
                </Grid>
                <Grid item xs={12} className={`${classes.center} ${classes.sndbtn}`}>
                    <Fade bottom>
                        <Button variant="contained" color="secondary"><Link to="/last-news" className={classes.link}>S'entrainer sur nos articles ?</Link></Button>
                    </Fade>
                </Grid>
            </Grid>
        
    )
}

export default Tuto;