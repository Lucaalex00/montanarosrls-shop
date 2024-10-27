import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="flex relative min-h-screen max-h-full bg-gradient-to-r from-orange-700 to-black">
        <Navbar /> {/* Menu a tendina */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
