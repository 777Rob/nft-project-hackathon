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


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LeftBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Profile" element={<ProfileView />} />
        <Route path="/Channel" element={<ChannelView />} />
      </Routes>
      <RightBar />
    </div>
    </BrowserRouter>
  );
}

export default App;
