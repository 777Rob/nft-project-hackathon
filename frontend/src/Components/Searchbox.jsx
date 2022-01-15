import React from 'react';
import { Box, Button } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

function Searchbox() {
    return (
            <Box sx={{ color: '#$', alignContent: 'stretch', display: 'flex' }}>
      <BootstrapInput label="Search" variant="filled" color="secondary" focused />


      <Button sx={[{ color: 'white', backgroundColor: 'orange', fontSize: "25px", fontWeight: 'bold' }, {
        '&hover': {
          transition: '#e8bf2c 200ms easeout'
        }
      }]}>
      </Button>
    </Box>
    )
}

export default Searchbox
