import React from 'react';
import { Box, Typography } from '@mui/material';
import {FiHome} from 'react-icons/fi';
import {BsCollection} from 'react-icons/bs';
import {MdOutlineAccountCircle} from 'react-icons/md';
import MenuItem from './MenuItem';


import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// Make it fixed-size and fixed in 1 place

function LeftBar() {

    return (
        /*<Box sx={{display: 'flex', 
        marginLeft: '10px', 
        marginRight: '20px', 
        backgroundColor: '#f5f5f5',
        flexDirection: 'column', border: '2px solid orange', 
        borderRadius: '25px', alignItems: 'center', width: '20%'}}>*/
        <Grid item xs>
        <Item>
            <Box sx={{justifyContent: 'left', display: 'flex', alignItems: 'center', margin: '10px'}}>

            {/* <AbcIcon sx={{fontSize: '50px'}}/>         */}
            <Typography sx={{fontSize:'30px', fontWeight: '600', alignSelf: 'left'}}>Menu</Typography>
            </Box>
            
            <MenuItem 
            icon={<BsCollection/>}
            text="New"
            link="/new"/>

            <MenuItem 
            icon={<FiHome/>}
            text="Home"
            link="/"/>
            
            <MenuItem 
            icon={<MdOutlineAccountCircle/>}
            text="Profile"
            link="/Profile"/>
            

            
            <MenuItem 
            icon={<BsCollection/>}
            text="About"
            link= "/About"/>
            
            <MenuItem 
            icon={<BsCollection/>}
            text="Subscriptions"
            link="/Subscriptions"/>

            <MenuItem 
            icon={<BsCollection/>}
            text="Trending"
            link="/Trending"/>
            </Item>
        </Grid>

        /* </Box> */ 
    )
}

export default LeftBar
