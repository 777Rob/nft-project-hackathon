import "./App.css";
import LeftBar from "./Components/LeftBar/LeftBar";
import RightBar from "./Components/RightBar/RightBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import ProfileView from "./Views/ProfileView";
import ChannelView from "./Views/ChannelView";
import SettingsView from "./Views/SettingsView";
import Header from "./Components/Header";
import Profile from './Views/Profile'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import LoginPage from "./Components/LoginPage";
import { useMoralis } from "react-moralis";

function App() {

  const { authenticate, isAuthenticated, isAuthenticating, logout, user } = useMoralis();

  if (!isAuthenticated) {
    return (
        <LoginPage />
    );
  }

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <LeftBar />
            <Routes>
              <Route path="/Profile" element={<ProfileView />} />
              <Route path="/Profile/:id" element={<Profile />} />
              <Route path="/" element={<HomeView />} />
              <Route path="/Channel" element={<ChannelView />} />
              <Route path="/Settings" element={<SettingsView />} />
            </Routes>
            <RightBar />
          </Grid>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;


