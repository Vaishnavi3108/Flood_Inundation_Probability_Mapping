import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';



function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/probabilitymap" element={<Map/>} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
