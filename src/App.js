import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import NeuralNetworks from './components/pages/NeuralNetworks/NeuralNetworks';
import PoliticalNetworks from './components/pages/PoliticalNetworks/PoliticalNetworks'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* setting up routes for links clicked on */}
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/political-networks" element={<PoliticalNetworks />}/>
        <Route path="/neural-networks" element={<NeuralNetworks />}/>
      </Routes>

    

      <Footer />
    </div>
  );
}

export default App;
