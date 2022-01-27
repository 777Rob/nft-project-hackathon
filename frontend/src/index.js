import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Box,Button } from "@mui/material";
import Header from "./Components/Header";
import { MoralisProvider } from "react-moralis";

// const APP_ID = "RlI6uEHxipiqoxFkxbdPdzrXfaK2t9zcb7GVM9Pk";
// const SERVER_URL = "https://glc619ascyws.usemoralis.com:2053/server";
// // https://glc619ascyws.usemoralis.com:2083/apps/moralisDashboard/browser/_Role
const APP_ID = process.env.REACT_APP_APP_ID
const SERVER_URL = process.env.REACT_APP_SERVER_URL

ReactDOM.render(
  <MoralisProvider
    appId={APP_ID}
    serverUrl={SERVER_URL}
  >
    <React.StrictMode>
      <Box
        className="App"
        sx={{ justifyContent: "center", margin: "20px" }}
      ></Box>
      <App />
    </React.StrictMode>
  </MoralisProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
