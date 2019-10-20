import React, { Fragment } from 'react';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
export default ({styles,exercises}) => (
    <Paper style={styles.Paper}>
       {
           exercises.map( ([group,exercises]) => (
        <Fragment>
            <Typography
             variant='h4'
             style={{textTransform: 'capitalize'}}
             >
              {group}
            </Typography>
             <List component="ul" aria-label="secondary mailbox folders">
             {
                    exercises.map(({title}) => (
                        <ListItem button>
                          <ListItemText primary={title} />
                        </ListItem>
                    ))
                   }
               
              </List>
             </Fragment>
           ))
       }
    </Paper>
)