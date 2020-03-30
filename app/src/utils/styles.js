import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    // ++++++++++++++++++++++++++++++++++++++++++
    // HEADER
    logo:{
        display: 'flex',
        justifyContent: 'felx-start'
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