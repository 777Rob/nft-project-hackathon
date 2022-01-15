import React from "react";
import { useMoralis } from "react-moralis";
import {Button} from '@mui/material'
const Login = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
      <Button variant="outlined" sx={{backgroundColor: 'orange', color: 'white', height: '70%'}}
        onClick={() => authenticate({ signingMessage: "Hello World!" })}>Authenticate</Button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user.get("username")}</h1>
      <Button variant="outlined" sx={{backgroundColor: 'orange', color: 'white', height: '70%'}}
       onClick={() => logout()}>Logout</Button>
    </div>
  );
};

export default Login;