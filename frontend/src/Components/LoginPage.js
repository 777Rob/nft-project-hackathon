import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function LoginPage() {
  const { authenticate } = useMoralis();

  return (
    <Grid item xs={6} sx={{ mx: "auto", mt: "100px" }}>
      <Item>
        <h1>Welcome!</h1>
        <p>
          Please use your <b>metamask</b> wallet to login and access the content
        </p>
        <Button onClick={() => authenticate()} variant="outlined">
          Authenticate
        </Button>
      </Item>
    </Grid>
  );
}

export default LoginPage;
