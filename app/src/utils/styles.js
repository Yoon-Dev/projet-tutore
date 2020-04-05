import { makeStyles } from '@material-ui/core/styles';


export const marge = 8;
export const delaytrans = 200;

export const useStyles = makeStyles((theme) => ({
    // ++++++++++++++++++++++++++++++++++++++++++
    // UTILS
    center: {
        display: 'flex',
        justifyContent: 'center'  
    },
    link: {
        textDecoration: 'none',
        color: "white",
        '& span': {
            color: 'white'
        },
    },
    flexYcenter: {
        alignItems: 'center'
    },
    texturebg: {
        backgroundImage: 'url("./img/texture.jpg")',
        backgroundSize: 'contain',
        marginTop: `${marge*8}px`,
    },
    drawbg: {
        backgroundImage: 'url("./img/front2.jpg")',
        backgroundSize: 'cover',
        paddingTop: `${marge*8}px`,
        position: 'absolute'
    },
    flexXend: {
        display: 'flex',
        justifyContent: 'flex-end !important'
    },
    nounderline: {
        textDecoration: 'none'
    },
    childcenter: {
        '& .react-reveal': {
            display: 'flex',
            justifyContent: 'center'
        },
    },
    page: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0'
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
    boxshadow: {
        boxShadow: "0px 0px 33px 16px rgba(0,0,0,0.2) !important",
        opacity: "0.9",
        minWidth: "60%"
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
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    itemhead: {
        display: 'none',
        justifyContent: 'flex-end',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'flex-start',
        },
        '& button': {
            [theme.breakpoints.up('md')]: {
                fontSize: "1.3em"
            },
        }

    },
    menuhide:{
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.up('md')]: {
            display: 'none !important',
        },
    },
    nounderlinebtn: {
        textDecoration: 'none !important',
        minWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& button': {
            fontWeight: 'bold',
            [theme.breakpoints.up('sm')]: {
                fontSize: '1.5em !important',
            },
        },
    },
    middlebold: {
        '& button': {
            fontWeight: '500 !important'
        },
    },
    navbar: {
        position: 'fixed',
        zIndex: '3',
        right: 0,
        left: '0',
        '& header': {
            backgroundColor: "#00000070"
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

    // FIN lastnews
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // SINGLENEWS
    containersingle: {
        position: 'absolute',
        top: '0',
        alignItems: 'center',
        minHeight: '100%'
    },
    sndbtn: {
        alignSelf: 'flex-start',
        marginBottom: `${marge*2}px`,
        '& button': {
            [theme.breakpoints.up('sm')]: {
                fontSize: "1.5em"
            },
        }
    },
    newsbox: {
        opacity: '0.9',
        [theme.breakpoints.up('md')]: {
            opacity: "0.95"
        },
    },
    // FIN singlenews
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // TUTO
    tutobg: {
        // top: '0',
        backgroundImage: 'url("./img/front2blur45.jpg") !important',
        padding: `${marge*10}px 0px ${marge*4}px 0px !important`,
    },
    itemtuto: {
        margin: `${marge*4}px 0px ${marge*4}px 0px`,
        [theme.breakpoints.up('sm')]: {
            margin: `${marge*20}px 0px ${marge*20}px 0px`,
        },
        '& *': {
            textAlign: "center"
        },
    },
    titletuto: {
        marginBottom: `${marge*4}px !important`,
        fontFamily: 'showloveregular !important',
        textAlign: "center",
        textShadow: "5px 3px 7px rgb(255, 253, 253, 0.3)",
        padding: `${marge*14}px ${marge*6}px ${marge*14}px ${marge*6}px`,
        [theme.breakpoints.up('sm')]: {
            fontSize: '3.6em !important',
        },
          [theme.breakpoints.up('lg')]: {
            fontSize: '4.6em !important',
        },
    },
    // FIN tuto
    // ******************************************
    // ++++++++++++++++++++++++++++++++++++++++++
    // DUMB
    titledumb: {
        marginBottom: `${marge*2}px !important`,
        [theme.breakpoints.up('sm')]: {
            fontSize: '4.125em !important',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '3.125em !important',
        },
    },
    dumbtext: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.8em !important',
        }, 
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.4em !important',
        }, 
    },
    dumbitem:{
        [theme.breakpoints.up('md')]: {
            boxShadow: "0px 0px 60px 32px rgba(0,0,0,0.2) !important",
        }, 
        [theme.breakpoints.up('lg')]: {
            boxShadow: "0px 0px 60px 30px rgba(0,0,0,0.3) !important",
        }, 
        
    },
    // FIN dumb
    // ******************************************
}));

export const breakpointfakegrid = 600;