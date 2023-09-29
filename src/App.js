import Navbar from "./components/navbar";
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from "./components/contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    
    <div className="App">
    <Navbar/>
    <Router>
      
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Contact" element={<Contact />} />



    </Routes>
     

     
    
    </Router>
    </div>
  );
}

export default App;

