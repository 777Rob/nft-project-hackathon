import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box'
import React from 'react'
import {Link} from 'react-router-dom'

function MenuItem(props) {
    return (
        <Box 
        sx={[{'&:hover':{
            cursor: 'pointer',
            color: 'orange',
            // backgroundColor: 'red'
        }},
        {display: 'flex', marginBottom: '20px', alignItems: 'center',marginLeft: '15px', marginRight: 'auto', backgroundColor: 'inherit'}]}>
        <Link style={{ textDecoration: 'none', color: 'black' }} sx={{display: 'flex'}} to={props.link}>
            
            <Box sx={[{'&:hover':{
            cursor: 'pointer',
            color: 'orange',
            // backgroundColor: 'red'
        }},{display: 'flex', }]}>

            <Icon sx={{
                fontSize: '40px',
                marginRight: '10px'
            }}>
                {props.icon}
            </Icon>
            <Typography 
            sx={{
                fontSize: '32px',
                fontWeight: '500'}}>
                {props.text}
            </Typography>
                    </Box>
            </Link>
        </Box>
    )
}

export default MenuItem
