import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    // ++++++++++++++++++++++++++++++++++++++++++
    // UTILS
    center: {
        display: 'flex',
        justifyContent: 'center'  
    },
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
}));

export const breakpointfakegrid = 600;