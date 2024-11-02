import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Beers from './pages/Beers';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Sidebar from './components/Sidebar';
import { FaBars } from 'react-icons/fa';


function App() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenMenuLanguage, setIsOpenMenuLanguage] = useState(false);

  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  const toggleMenuLanguage = () => {
    setIsOpenMenuLanguage(!isOpenMenuLanguage);
  };

  return (
    <Router>
      <div className="flex relative pt-10 min-h-screen max-h-full bg-gradient-to-r from-orange-700 to-black">
        {/* Pulsante per aprire la sidebar */}
        <button onClick={toggleNav} className="text-white hover:text-dark duration-500 absolute top-0 left-0 p-4">
          {isOpenNav ? '' : <FaBars size={36} />}
        </button>

        {/* Sidebar */}
        <Sidebar isOpenNav={isOpenNav} toggleNav={toggleNav} />

        {/* Pulsante per aprire il selettore di lingua */}
        <button className="bg-red-500 rounded p-3 absolute top-2 right-2" onClick={toggleMenuLanguage}> Lingua </button>
        
        {/* Selettore di lingua Google Translate */}
        <div id="google_translate_element" className={`text-center p-2 rounded-lg shadow-lg absolute top-16 right-0 ${isOpenMenuLanguage ? '' : 'hidden'}`}></div>

        {/* Content area per le varie pagine */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
