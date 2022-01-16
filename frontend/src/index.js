import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Box } from "@mui/material";
import Header from "./Components/Header";
import { MoralisProvider } from "react-moralis";

const APP_ID = "RlI6uEHxipiqoxFkxbdPdzrXfaK2t9zcb7GVM9Pk";
const SERVER_URL = "https://glc619ascyws.usemoralis.com:2053/server";
// https://glc619ascyws.usemoralis.com:2083/apps/moralisDashboard/browser/_Role

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Box
        className="App"
        sx={{ justifyContent: "center", margin: "20px" }}
      ></Box>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
