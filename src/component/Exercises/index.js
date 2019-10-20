import React from 'react';
import Grid from '@material-ui/core/Grid';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
    Paper: {padding:30,
         marginTop:10,
          marginBottom:10,
           height:500,
           overflowY:'auto'},
}

export default ({exercises}) => (
     <Grid container sm={12} spacing={4} >
       <Grid item sm={6}>
         <LeftPane styles={styles} exercises={exercises}/>
       </Grid>
       <Grid item sm={6}>
        <RightPane styles={styles}/>
       </Grid>
     </Grid>
  
)