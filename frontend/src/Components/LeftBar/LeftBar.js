import React from "react";
import { Box, Typography } from "@mui/material";
import { FiHome } from "react-icons/fi";
import { BsCollection } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import MenuItem from "./MenuItem";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import {useMoralis} from 'react-moralis'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Make it fixed-size and fixed in 1 place

function LeftBar() {
  const { authenticate, isAuthenticated, user } = useMoralis();


  return (
    <Grid item xs>
      <Item
        sx={{
          position: "fixed",
          height: "100%",
          minWidth: "15%",
          marginTop: "0",
          boxShadow: "0",
          marginLeft: "5%",
          background: "transparent",
        }}
      >
        <Box
          sx={{
            justifyContent: "left",
            display: "flex",
            alignItems: "center",
          }}
        ></Box>
        <MenuItem icon={<FiHome />} text="Home" link="/" />

        <MenuItem icon={<BsCollection />} text="New" link="/new" />

        <MenuItem
          icon={<MdOutlineAccountCircle />}
          text="Profile"
          link="/Profile/"
        />

        <MenuItem
          icon={<BsCollection />}
          text="Subscriptions"
          link="/Subscriptions"
        />

        <MenuItem icon={<BsCollection />} text="Settings" link="/Settings" />
      </Item>
    </Grid>

    /* </Box> */
  );
}

export default LeftBar;
