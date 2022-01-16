import React, {useState} from "react";
import { useMoralis } from "react-moralis";
import { Button, Box, Input } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

// Add snackbar


function SignUp() {
    const { signup} = useMoralis()
    const [email, setEmail] = useState()
    
    return (
        <Box>
        <Input type="text" value={email} onChange={(event) => setEmail(email.currentTarget.value)}/>
        <Button onClick={()=> signup()}></Button>
    </Box>
    )
}




const Login = () => {
  const { authenticate, isAuthenticated, authError, isAuthenticating, user, logout } =
    useMoralis();

    
    if (!isAuthenticated) {
        return (
            <Box sx={{display: 'flex'}}>
          {authError && <Alert severity="error">
            {authError.message}
          console.log(user)
          </Alert>}
          
          {/* <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert> */}

        <LoadingButton
          variant="contained"
          loading={isAuthenticating}
          onClick={() =>
            authenticate({ signingMessage: "Welcome to NFT Fans !" })
          }
        >
          Authenticate
        </LoadingButton>
      </Box>
    );
  }

  return (
    <div>
      <Button
        variant="outlined"
        sx={{ backgroundColor: "orange", color: "white", height: "70%" }}
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
};

export default Login;
