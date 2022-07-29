import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';



function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
