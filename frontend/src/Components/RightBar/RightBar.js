import React from "react";
import { Icon, Link, Box, Container, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useMoralis } from "react-moralis";
import Avatar from "@mui/material/Avatar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Make it fixed-size and fixed in 1 place

function RightBar() {
  const { authenticate, isAuthenticated, isAuthenticating, logout, user } =
    useMoralis();

  const subscribed = [
    {
      avatar: <AccountCircleIcon />,
      address: "0xadfasdfsadf0xadfasdfssadf",
    },
    {
      avatar: <AccountCircleIcon />,
      address: "0xadfassdfsadf0xadfasdfsadf",
    },
    {
      avatar: <AccountCircleIcon />,
      address: "0xadfassdfsadf0xadfasdfsadf",
    },
    {
      avatar: <AccountCircleIcon />,
      address: "0xadfasdfsadf0xadfasdfssadf",
    },
  ];

  return (
    /*<Box sx={{ backgroundColor: '#f5f5f5', display: 'flex',marginLeft: '10px',marginRight: '20px', flexDirection: 'column', border: '2px solid orange', borderRadius: '25px', alignItems: 'center', width: '20%'}}>
     */

    <Grid item xs>
      <Item
        sx={{
          position: "fixed",
          minWidth: "15%",
          marginTop: "0",
          background: "transparent",
          padding: "20px",
        }}
      >
        <Avatar
          alt=""
          src={user.get("avatar")}
          sx={{ width: 128, height: 128, mx: "auto", mt: "20px" }}
        />
        <Typography sx={{ mt: "20px" }} variant="h5">
          {user.get("username")}
        </Typography>
        <Container sx={{ alignItems: "center" }}>
          {/* Make a subscribtion seperate component think about ideas of what to show add white background*/}
          {/*subscribed.map((person) => (
            <Box
              key={person.address}
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "10px",
              }}
            >
              <Icon>{person.avatar}</Icon>
              <Link sx={{ textDecoration: "none" }} to="/profile/:address">
                <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
                  {person.address}
                </Typography>
                <Typography>New posts: 10</Typography>
              </Link>
            </Box>
            ))*/}
        </Container>
        <Button
          variant="outlined"
          onClick={() => logout()}
          disabled={isAuthenticating}
          sx={{ mt: "20px" }}
        >
          Logout
        </Button>
      </Item>
    </Grid>

    /* </Box>*/
  );
}

export default RightBar;
