import { makeStyles } from '@material-ui/core/styles';


export const marge = 8;

export const useStyles = makeStyles((theme) => ({
    // ++++++++++++++++++++++++++++++++++++++++++
    // UTILS
    center: {
        display: 'flex',
        justifyContent: 'center'  
    },
    link: {
        textDecoration: 'none',
        color: "white"
    },
    flexYcenter: {
        alignItems: 'center'
    },
    // FIN utils
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // ROOT
    rootcontainer:{
        position: 'absolute',
        minHeight: '100vh',
        overflow: 'hidden',
        top: '0',
        zIndex: 'unset',
        pointerEvents: 'none'
    },
    rootRight:{
        paddingRight: `${marge*3}px`,
        pointerEvents: 'all'
    },
    // FIN root
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // HEADER
    logo:{
        display: 'flex',
        justifyContent: 'flex-start'
    },
    itemhead: {
        display: 'flex',
        justifyContent: 'flex-end',
      [theme.breakpoints.up('md')]: {
            justifyContent: 'center'
      }
    },
    // FIN header
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // NEWS
    mnews:{
        margin: `${marge*2}px 0px ${marge*2}px 0px`
    },
    mbtn: {
        margin: `0px 0px ${marge*2}px 0px`
    },
    mtext:{
        marginTop: `${marge*3}px !important`
    },
    // FIN news
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // SHORTNEWS
    bordersn: {
        borderBottom: "1px solid black",
        borderRadius: "5px"
    },
}));

export const breakpointfakegrid = 600;