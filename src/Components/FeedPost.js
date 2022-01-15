import React, {useState} from 'react';
import { Button, Typography, Box, IconButton } from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { MdOutlineScreenShare } from 'react-icons/md';
import {FcLikePlaceholder, FcLike} from 'react-icons/fc'

export function FeedPost(props) {
    const [liked, toLike] = useState(props.liked)

    return (
        <Box sx={{ display: 'flex', padding: '15px', flexDirection: 'column', flexGrow: '1', border: '2px solid orange', borderRadius: '5px', margin: '10px' }}>
            <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>{props.title}</Typography>
            <Typography>@{props.author}</Typography>
            <img alt= "imag" src={props.image} />
            <Typography>Description: {props.post}</Typography>
            <Box sx={{ display: 'flex', fleDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                <ModeCommentIcon />
                    {props.liked ? <IconButton onClick={()=>{liked ? toLike(true) : toLike(false)}}><FcLike/></IconButton> : <IconButton onClick={()=>{liked ? toLike(true) : toLike(false)}}><FcLikePlaceholder/></IconButton>}
                </Box>
                <Button sx={{marginBottom: '15px', backgroundColor: 'orange', color: 'white', fontSize: '20px', fontWeight: '600' }}>
                    <MdOutlineScreenShare />
                    <Typography>Share on your feed</Typography>
                    <Typography>Fee: 0.2ETH </Typography>
                </Button>
            </Box>
        </Box>
    );
}
