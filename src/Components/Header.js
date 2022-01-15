import React from 'react'
import {Button, Box, Typography} from '@mui/material'

function Header() {
    return (
        <Box sx={{alignItems: 'center', justifyContent: 'space-between', borderBottom: '5px solid orange', width: '100%', display: 'flex'}}>
        <Typography sx={{fontSize: '50px', fontWeight: '700'}}>
            NFT Fans
            </Typography>
        <Button variant="outlined" sx={{backgroundColor: 'orange', color: 'white', height: '70%'}}>
            Connect with wallet
        </Button>
        </Box>

    )
}

export default Header
