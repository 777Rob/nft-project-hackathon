import React, { useState } from "react";
import {
  Button,
  Skeleton,
  Input,
  Card,
  Box,
  CardMedia,
  Avatar,
  Container,
} from "@mui/material";
import ProfileMenu from "../Components/ProfileMenu/ProfileMenu";
import { useMoralis } from "react-moralis";
import AddIcon from "@mui/icons-material/Add";
import UploadBanner from "./UploadBanner";
import axios from "axios";




function ProfileView() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  
  const options = {
    method: 'GET',
    url: 'https://api.nftport.xyz/v0/me/mints',
    params: {chain: 'rinkeby'},
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'd0d50a65-da05-4d1f-aec0-0741bf8fbc62'
    }
  };
  
  
  const handleClick = () => {
    axios(options)
    .then(function (response) {
      const parsed = JSON.parse(JSON.stringify(response)).data
      console.log(parsed.minted_nfts);
      setNfts(parsed.minted_nfts);
    }).then(function (response){
      console.log(JSON.stringify(nfts))
    })
    .catch(function (error) {
      console.error(error);
    });
  };
  
  
  const [nfts, setNfts] = useState(false)
  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }
  
  return (
    <Box sx={{ marginTop: "25px" }}>
      <Button onClick={handleClick}>Fetch</Button>
      <Card sx={{ maxWidth: 800, maxHeight: 600 }}>
        <img
          style={{ maxWidth: "100%", objectFit: "contain" }}
          alt="Profile ban"
          src={user.get("profilebanner")}
        />
        <Avatar
          alt="asdf"
          src={
            "https://www.google.com/search?q=avatar&tbm=isch&source=iu&ictx=1&vet=1&fir=H5ldc3hrTNd3VM%252Cq4rR3KgpN6zk0M%252C_%253BEWFyjHqCKmkyBM%252CZn19HiGjooaZRM%252C_%253B4bADALjKFnRNDM%252CEbG_AMLXoIXN4M%252C_%253Bzu8eMSYPiQx-3M%252CzZbvO3C2MKBjuM%252C_%253Bpvu1iPwZYpyM9M%252C3G2GamvxQVVxoM%252C_%253BdCiyO6lsilXkKM%252C9KDUPU7c2Xy2PM%252C_&usg=AI4_-kSApCzyVu7lxUcAJZ_U8eXGnkFlJQ&sa=X&ved=2ahUKEwih4a7n0bX1AhWGhf0HHdspB1MQ_h16BAg5EAE#imgrc=H5ldc3hrTNd3VM"
          }
          sx={{ width: 128, height: 128, mx: "auto", marginTop: "-168px" }}
        />
      </Card>
      {nfts && nfts.map(nft => <p>TokenID: {nft.token_id}<img src={nft.img}/></p>)}
      <ProfileMenu />
    </Box>
  );
}

export default ProfileView;
