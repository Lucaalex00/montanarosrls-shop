import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Beers from './pages/Products/Beers';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Sidebar from './components/Sidebar';
import Giftpacks from './pages/Products/Giftpacks';
import Others from './pages/Products/Others'
import { FaBars, FaFlag } from 'react-icons/fa';
import WinesAndLiquors from './pages/Products/WinesAndLiquors';


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
      <div className="flex relative pt-10 min-h-screen max-h-full bg-gradient-custom">
        {/* Pulsante per aprire la sidebar */}
        <button onClick={toggleNav} className="text-white hover:text-gray-500 duration-500 absolute top-0 left-0 p-4">
          {isOpenNav ? '' : <FaBars size={36} />}
        </button>

        {/* Sidebar */}
        <Sidebar isOpenNav={isOpenNav} toggleNav={toggleNav} />

        {/* Pulsante per aprire il selettore di lingua */}
        <button className="bg-red-500 hidden sm:block rounded p-3 absolute top-2 right-2" onClick={toggleMenuLanguage}> <FaFlag/> </button>
        
        {/* Selettore di lingua Google Translate */}
        <div id="google_translate_element" className={`text-center p-2 rounded-lg shadow-lg absolute top-16 right-0 ${isOpenMenuLanguage ? '' : 'hidden'}`}></div>

        {/* Content area per le varie pagine */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/giftpacks" element={<Giftpacks />} />
            <Route path="/winesandliquors" element={<WinesAndLiquors />} />
            <Route path="/others" element={<Others />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<Home />} />
            {/* IN CASO DI PATH ERRATO -> HOME */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
