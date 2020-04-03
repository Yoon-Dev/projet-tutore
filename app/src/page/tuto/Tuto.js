import React from "react";
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../utils/styles';
import FakeGrid from '../../component/fake-grid/FakeGrid';
import Typography from '@material-ui/core/Typography';
import Dumb from '../../component/dumb/Dumb';

const Tuto = () => {

    const classes = useStyles();

    return (
        <Grid container justify='center' className={`${classes.drawbg} ${classes.tutobg}`}>
            <Grid item xs={12} className={`${classes.center}`}>
                <Typography variant="h4" component="h1" className={classes.titletuto}>
                    Comment vérifier la véracité d'une information ?
                </Typography>
            </Grid>
            <Grid item lg={6} xs={12} className={`${classes.center} ${classes.itemtuto}`}>
                <Dumb
                img="./img/tuto/tuto1.gif"
                titre="Identifiez l’auteur du message"
                text="Qui s’exprime ? S’agit-il d’un média connu, d’une personnalité publique ou bien d’un site ou d’un internaute dont vous n’avez jamais entendu parler ? En cas de doute, renseigner vous sur l'auteur."
                />
            </Grid>
            <FakeGrid/>
            <Grid item lg={6} xs={12} className={`${classes.center} ${classes.itemtuto}`}>
                <Dumb 
                img="./img/tuto/tuto2.gif"
                titre="Ne croyer pas les inconnus"
                text="Fiez-vous plutôt aux médias reconnus, aux journalistes et aux experts identifiés. Ne considérez pas pour autant que cela suffit à rendre leurs informations vraies. Si vous n'avez pas moyen de connaitre l'identité de l'auteur, ne prenez pas son information au sérieux."
                />
            </Grid>
            <FakeGrid/>
            <Grid item lg={6} xs={12} className={`${classes.center} ${classes.itemtuto}`}>
                <Dumb 
                img="./img/tuto/tuto3.gif" 
                titre="Recoupez les messages similaires, une fois la source identifiée"
                text="si plusieurs médias fiables donnent la même information en citant des sources différentes, elle a de bonnes chances d’être avérée. A l’inverse, face à une information non sourcée, le fait de ne pas en retrouver la mention ailleurs invite à la plus grande prudence." 
                />
            </Grid>
            <FakeGrid/>
            <Grid item lg={6} xs={12} className={`${classes.center} ${classes.itemtuto}`}>
                <Dumb 
                img="./img/tuto/tuto4.gif" 
                titre="Remontez à la première source dans la mesure du possible"
                text="Beaucoup de messages qui circulent sur les réseaux sociaux ne disent pas d’où provient l’information. L’idée à retenir est qu’il vaut mieux entendre directement une conversation que de se fier au récit de quelqu’un qui a parlé à quelqu’un qui y a assisté. Les sources indirectes, du type « le mari d’une amie d’un collègue » ou « un ami d’ami » ainsi que les sources prétendument institutionnelles mais très floues comme « quelqu’un qui travaille à la police/à la DGSI/dans l’armée » sont donc à éviter." 
                />
            </Grid>
            <FakeGrid/>
            <Grid item lg={6} xs={12} className={`${classes.center} ${classes.itemtuto}`}>
                <Dumb 
                img="./img/tuto/tuto5.gif" 
                titre="Dites-vous que plus une information est surprenante, plus elle doit être étayée et précise"
                text="Plus une information est extraordinaire, plus il faut se mefier et verifier assidument les sources. Méfiez-vous également des fausses évidences, du type « tout le monde sait que… » ou « inutile de démontrer que… »." 
                />
            </Grid>
        </Grid>
    )
}

export default Tuto;