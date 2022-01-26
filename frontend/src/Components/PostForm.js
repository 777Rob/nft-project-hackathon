import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Typography,
  Box,
  TextField,
  Card,
} from "@mui/material";
import axios from "axios";
import UploadImage from "./../Views/UploadImage";
import { useMoralis, useMoralisFile } from "react-moralis";
import LoadingButton from '@mui/lab/LoadingButton';

function PostForm() {
  const { user, setUserData, authenticate, isAuthenticated } = useMoralis();

  const [file, setFile] = useState();
  const [post, setPost] = useState("Test");
  const [transaction, setTransaction] = useState(false);
  const { saveFile } = useMoralisFile();
  const [urlx, setUrl] = useState("not set");

  const saveFileIPFS = async (f) => {
    const fileIpfs = await saveFile(f.name, file, { saveIPFS: true });
    setUserData({
      lastNFT: fileIpfs._ipfs,
    });
  };

  const handleFinal = () => {
    saveFileIPFS(file);
    setTimeout(() => {
      handleClick();
    }, 5000);
  };

  function handleChange(event) {
    setPost(event.target.value);
  }

  // Mint nft
  const handleClick = () => {
    axios({
      method: "post",
      url: "https://api.nftport.xyz/v0/mints/easy/urls",
      headers: {
        "Content-Type": "application/json",
        Authorization: "d0d50a65-da05-4d1f-aec0-0741bf8fbc62",
      },
      data: {
        chain: "rinkeby",
        name: "Type your NFT name here",
        description: post,
        file_url: user.get("lastNFT"),
        mint_to_address: user.get("ethAddress"),
      },
    })
      .then(function (response) {
        console.log(JSON.parse(JSON.stringify(response)).data);
        setTransaction(JSON.parse(JSON.stringify(response)).data);
        
      })
      .then(function(response){
        setUserData({
          Posts: [...user.get('Posts'), ]
        })
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Box sx={{ minWidth: 275, padding: "10px" }}>
      <Card variant="outlined" sx={{ padding: "50px" }}>
        <TextField
          fullWidth
          id="outlined-multiline-flexible"
          label="Add Description"
          multiline
          minRows={2}
          post={post}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
          />

          {transaction && (
            <Typography>{transaction.transaction_external_url}</Typography>
            )}
        {/* Upload */}
        <Box sx={{justifyContent: 'stretch'}}>

        <LoadingButton 
        fullWidth
          variant="contained"
          component="label"
          onChange={(e) => {
            setFile(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
          sx={{ width: "250px", mx: "auto", mt: "25px" }}
          >
          Upload NFT
          <input type="file" hidden />
        </LoadingButton >

        {/* Add settings for post royaltes per share  */}
        <Button
          sx={{
            marginBottom: "15px",
            backgroundColor: "#1976d2",
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
          }}
          onClick={handleFinal}
          >
          Post
        </Button>
          </Box>

        {/*</FormControl>*/}
      </Card>
    </Box>
  );
}

export default PostForm;
