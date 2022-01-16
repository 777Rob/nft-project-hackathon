import './App.css';
import LeftBar from './Components/LeftBar/LeftBar'
import RightBar from './Components/RightBar/RightBar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeView from './Views/HomeView'
import ProfileView from './Views/ProfileView'
import ChannelView from './Views/ChannelView'
import Header from './Components/Header'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <LeftBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/Profile" element={<ProfileView />} />
          <Route path="/Channel" element={<ChannelView />} />
        </Routes>
        <RightBar />
      </Grid>
    </Box>
    </div>
    </BrowserRouter>
  );
}

export default App;
