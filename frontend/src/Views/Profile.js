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
import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  console.log(params);
  const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }

  return (
    <Box sx={{ marginTop: "20px", maxWidth: 800, maxHeight: 600 }}>
      <Card sx={{ maxWidth: 800, maxHeight: 600 }}>
        <img
          style={{ objectFit: "contain" }}
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
      <ProfileMenu />
    </Box>
  );
}

export default Profile;
