import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import NeuralNetworks from './components/pages/NeuralNetworks';
import PoliticalNetworks from './components/pages/PoliticalNetworks'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* setting up routes for links clicked on */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/political-networks" element={<PoliticalNetworks />}/>
        <Route path="/neural-networks" element={<NeuralNetworks />}/>
      </Routes>
    </div>
  );
}

export default App;
