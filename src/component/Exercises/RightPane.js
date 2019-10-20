import React from 'react';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
 
export default ({styles}) => (
    <Paper style={styles.Paper}>
      <Typography variant="h3">
         Welcome
      </Typography>
      <Typography 
      variant="h6"
      style={{marginTop:20}}
      >
         Please select an exercise from the list on te left.
      </Typography>
    </Paper>
)