import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Box } from '@mui/material'
import Header from './Components/Header'
import { MoralisProvider } from "react-moralis";


const APP_ID = "LnuzCKnOEoq0nlsJaZ4a3WtwPqt8eupB2UEGk3f2"
const SERVER_URL = "https://i6k0uedt65iv.usemoralis.com:2053/server"
// https://docs.moralis.io/introduction/readme#what-are-moralis-servers We can store users

ReactDOM.render(

  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Box className="App" sx={{ justifyContent: 'center', margin: '20px' }}>
        <Header />
      </Box>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
