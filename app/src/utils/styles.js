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
        pointerEvents: 'none',
        backgroundSize: 'cover',
        backgroundImage: 'url("./img/front3.jpg")',
        [theme.breakpoints.up('sm')]: {
            backgroundPosition: 'right',
            backgroundSize: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundPosition: "0% 10%",
            backgroundSize: 'cover',
        },
    },
    rootRight:{
        pointerEvents: 'all',
        [theme.breakpoints.up('md')]: {
            paddingRight: `${marge*3}px`,
      },
    },
    // FIN root
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // COOL
    titlecool: {
        padding: `${marge*14}px ${marge*6}px ${marge*14}px ${marge*6}px`,
        textAlign: 'center',
        fontFamily: 'showloveregular !important',
        textShadow: "5px 3px 7px rgb(255, 253, 253)",
        [theme.breakpoints.up('sm')]: {
            padding: `${marge*14}px`,
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '3.6em !important',
     },
      [theme.breakpoints.up('lg')]: {
        fontSize: '4.6em !important',
    }
    },
    // FIN cool
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
    navbar: {
        position: 'fixed',
        zIndex: '3',
        right: 0,
        left: '0'
    },
    // FIN header
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // NEWS
    mnews:{
        margin: `${marge*2}px 0px ${marge*2}px 0px`
    },
    mbtn: {
        margin: `0px 0px ${marge*2}px 0px`,
        '& button': {
            [theme.breakpoints.up('sm')]: {
                fontSize: "1.5em !important"
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: "1em !important"
            },
        },
    },
    mtext:{
        marginTop: `${marge*3}px !important`,
        '& p': {
            [theme.breakpoints.up('sm')]: {
                fontSize: "2em !important"
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: "1.4em !important"
            },
        },
    },
    titlenews: {
        marginBottom: `${marge*2}px !important`,
        textAlign: 'center', 
            [theme.breakpoints.up('sm')]: {
                fontSize: "4.125em !important"
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: "3.125em !important",
                marginBottom: `0px !important`,
                textAlign: 'left',
            },
    },
    snd: {
        '& p': {
            [theme.breakpoints.up('sm')]: {
                fontSize: "2em !important"
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: "1em !important"
            },
        },
        [theme.breakpoints.up('lg')]: {
            alignSelf: "center"
        },
    },
    // FIN news
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // SHORTNEWS
    bordersn: {
        borderBottom: "1px dotted #00000070",
        padding: `${marge*4}px 0px ${marge*4}px 0px`,
        '&:last-child': {
            borderBottom: "none",
            padding: `${marge*4}px 0px ${marge*4}px 0px`,            
        }
    },
    titlelink: {
        paddingBottom: `${marge}px`
    },
    // FIN shortnews
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // LASTNEWS
    texturebg: {
        backgroundImage: 'url("./img/texture.jpg")',
        backgroundSize: 'contain',
        marginTop: `${marge*8}px`
    },
    // FIN lastnews
    // ******************************************

}));

export const breakpointfakegrid = 600;