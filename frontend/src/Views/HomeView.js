import React, {useState} from 'react'
import { FormControl,Accordion, AccordionSummary, AccordionDetails, Button, Typography, Box, TextField } from '@mui/material'
import {FeedPost} from './../Components/FeedPost'


function HomeView() {
    const [value, setValue] = useState('');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [expanded, setExpanded] = React.useState('panel2');

    const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={{backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column', flexGrow: '1', border: '2px solid orange', borderRadius: '25px'}}>
            
            <Typography sx={{fontSize: '45px', fontWeight: '500', alignSelf: 'center'}}>Feed</Typography>

        {/* Make a seperate component*/}

            <FormControl sx={{margin: '10px', marginBottom:'50px', borderBottom: '3px solid orange'}}>

            <TextField
          id="outlined-multiline-flexible"
          label="Add Description"
          multiline
          minRows={2}
          value={value}
          onChange={handleChange}
          sx={{backgroundColor: 'white'}}
          />


          <Accordion sx={{marginTop: '15px', marginBottom: '15px'}}expanded={expanded === 'panel1'} onChange={handleChange2('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Select nft</Typography>
        </AccordionSummary>

        {/* Make it show scrollable grid of recently purchased nfts */}

        <AccordionDetails>
          <Typography>
            Grid with recently added nfts
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Add settings for post royaltes per share  */}

          <Button sx={{marginBottom:'15px', backgroundColor: 'orange', color: 'white', fontSize: '20px', fontWeight: '600'}}>
            Post 
          </Button>
          </FormControl>

          <FeedPost 
          image= "https://i.skyrock.net/3335/65843335/pics/2640498136_small_1.jpg"
          title = "New nft! Cool nft"
          post = "This is a comment about my new NFT !"
          author = "0x04200x04200x04200x04200x04200x04200x0420"
        liked = {true}
          />
        </Box>
    )
}

export default HomeView
