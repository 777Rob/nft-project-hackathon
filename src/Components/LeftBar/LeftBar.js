import React from 'react';
import { Box, Typography } from '@mui/material';
import {FiHome} from 'react-icons/fi';
import {BsCollection} from 'react-icons/bs';
import {MdOutlineAccountCircle} from 'react-icons/md';
import MenuItem from './MenuItem';
import AbcIcon from '@mui/icons-material/Abc';


function LeftBar() {


    return (
        <Box sx={{display: 'flex', 
        marginLeft: '10px', 
        marginRight: '20px', 
        backgroundColor: '#f5f5f5',
        flexDirection: 'column', border: '2px solid orange', 
        borderRadius: '25px', alignItems: 'center', width: '20%'}}>
            
            <Box sx={{justifyContent: 'left', display: 'flex', alignItems: 'center', margin: '10px'}}>

            {/* <AbcIcon sx={{fontSize: '50px'}}/>         */}
            <Typography sx={{fontSize:'30px', fontWeight: '600', alignSelf: 'left'}}>Menu</Typography>
            </Box>
            
            <MenuItem 
            icon={<BsCollection/>}
            text="New"/>

            <MenuItem 
            icon={<FiHome/>}
            text="Home"/>
            
            <MenuItem 
            icon={<MdOutlineAccountCircle/>}
            text="Profile"/>
            

            
            <MenuItem 
            icon={<BsCollection/>}
            text="About"/>
            
            <MenuItem 
            icon={<BsCollection/>}
            text="Collections"/>

            <MenuItem 
            icon={<BsCollection/>}
            text="Trending"/>

            </Box>
    )
}

export default LeftBar
