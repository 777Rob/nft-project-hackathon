import React, { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Avatar,
  Alert,
  AlertTitle,
} from "@mui/material";

import { useMoralis } from "react-moralis";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import UploadImage from "./UploadImage";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SettingsView() {
  const { setUserData, userError, isUserUpdating, isAuthenticated, user } =
    useMoralis();

  const [usernameInput, setUsername] = useState();
  const [bioInput, setBio] = useState();

  if (!isAuthenticated) {
    return (
      <Grid item xs={6}>
        <Item>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            You must be <strong>logged in!</strong>
          </Alert>
        </Item>
      </Grid>
    );
  }
  return (
    <Grid item xs={6}>
      <Item>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& .MuiTextField-root": { width: "35ch" },
            mx: "auto",
          }}
        >
          <Avatar
            alt=""
            src={user.get("avatar")}
            sx={{ width: 128, height: "auto", mx: "auto" }}
          />
          {/*<TextField
            id="outlined-nickname"
            label="Nickname"
            placeholder="Your nickname"
            margin="normal"
          />*/}
          Hello, <b>{user.get("username")}</b>
          {userError && <p>{userError.message}</p>}
          <UploadImage name="avatar"/>
          <TextField
            id="outlined-username"
            label="New username"
            placeholder="New username"
            margin="normal"
            value={usernameInput}
            onChange={(event) => setUsername(event.currentTarget.value)}
            sx={{ mx: "auto" }}
          />
          <TextField
            sx={{ mx: "auto" }}
            id="outlined-multiline-flexible"
            label="Bio"
            multiline
            minRows={6}
            placeholder="Tell us something about yourself"
            margin="normal"
            onChange={(event) => setBio(event.currentTarget.value)}
          />
          <Button
            sx={{ mx: "auto", maxWidth: "200px", padding: "10px" }}
            variant="outlined"
            onClick={() =>
              setUserData({
                username: usernameInput,
                bio: bioInput,
              })
            }
            disabled={isUserUpdating}
          >
            Save changes
          </Button>
        </Box>
      </Item>
    </Grid>
  );
}

export default SettingsView;
