import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import About_us from './pages/About_us/About_us';



function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/home" element={<Home/>} ></Route>
        <Route exact path="/aboutus" element={<About_us/>} ></Route>
        <Route exact path="/probabilitymap" element={<Map/>} ></Route>
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
