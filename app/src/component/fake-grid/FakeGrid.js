import React, { Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import { breakpointfakegrid } from '../../utils/styles';

const FakeGrid = () => {

    if(window.innerWidth > breakpointfakegrid){
        return ( 
            <Fragment>
                <Grid item sm={6}>
                </Grid>
                <Grid item sm={6}>
                </Grid>
            </Fragment>    
        )
    }
}

export default FakeGrid;