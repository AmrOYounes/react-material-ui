import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const handleChange = (e, newValue) => {
    console.log(newValue);
    
}
 const Footer = ({muscles}) => (
    <Paper >
    <Tabs
      value={0}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label='ALL' />
      {muscles.map(muscle =>(
      <Tab label={muscle} />
      ))}  
    </Tabs>
  </Paper>
 );
 
 export default Footer;