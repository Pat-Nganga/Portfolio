import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route,Routes } from "react-router-dom";


function App() {
  

  return (
    
    <div className="App">
    <Navbar/>
    
      
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />



    </Routes>      
    
    <Footer/>
    </div>
  );
}

export default App;

