import './App.css';
import LeftBar from './Components/LeftBar/LeftBar'
import RightBar from './Components/RightBar/RightBar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeView from './Views/HomeView'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LeftBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
      <RightBar />
    </div>
    </BrowserRouter>
  );
}

export default App;
