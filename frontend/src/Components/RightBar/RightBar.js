import React from 'react';
import { Icon, Link, Box, Container, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Make it fixed-size and fixed in 1 place

function RightBar() {
  const subscribed = [
    {
      avatar: <AccountCircleIcon/>,
      address: '0xadfasdfsadf0xadfasdfsadf'
    },
    {
      avatar: <AccountCircleIcon/>,
      address: '0xadfasdfsadf0xadfasdfsadf'
    },
    {
      avatar: <AccountCircleIcon/>,
      address: '0xadfasdfsadf0xadfasdfsadf'
    },
    {
      avatar: <AccountCircleIcon/>,
      address: '0xadfasdfsadf0xadfasdfsadf'
    }
  ]

    return (
        /*<Box sx={{ backgroundColor: '#f5f5f5', display: 'flex',marginLeft: '10px',marginRight: '20px', flexDirection: 'column', border: '2px solid orange', borderRadius: '25px', alignItems: 'center', width: '20%'}}>
            */
        
        <Grid item xs>
          <Item>
        
            <Typography sx={{fontSize: '30px', fontWeight: '600', margin: '10px'}}>Subscriptions</Typography>
        <Container sx={{alignItems: 'center'}}>

          {/* Make a subscribtion seperate component think about ideas of what to show add white background*/}
          {subscribed.map(person => <Box key={person.address} sx={{display: 'flex', flexDirection: 'row', marginBottom: "10px"}}>
            <Icon>
              {person.avatar}
            </Icon>
            <Link sx={{textDecoration: 'none'}}to="/profile/:address">
            <Typography sx={{fontWeight: '600', fontSize: '16px'}}>{person.address}</Typography>
            <Typography>New posts: 10</Typography>
            </Link>
            </Box>)}
        </Container>
        </Item>
        </Grid>
        
        

       /* </Box>*/
    )
}

export default RightBar
