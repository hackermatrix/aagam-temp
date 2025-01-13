import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AagamConsulting from './pages/AagamConsulting';
import AagamAgro from './pages/AagamAgro';
import AagamInnovationLab from './pages/AagamInnovationLab';
import AagamAgroResearchCenter from './pages/AagamAgroResearchCenter'; 
import AagamGetaway from './pages/AagamGetaway';
import OmSubhamangal from './pages/OmSubhamangal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aagam-consulting" element={<AagamConsulting />} />
          <Route path="/aagam-agro" element={<AagamAgro />} />
          <Route path="/aagam-innovation-lab" element={<AagamInnovationLab />} />
          <Route path="/aagam-agro-research-center" element={<AagamAgroResearchCenter />} />
          <Route path="/aagam-getaway" element={<AagamGetaway />} />
          <Route path="/om-subhamangal" element={<OmSubhamangal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;