import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpenNav, toggleNav }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false); // Stato per aprire/chiudere il sotto-menu

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <>
      {/* Overlay */}
      {isOpenNav && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleNav}></div>}
      
      <div
        className={`fixed top-0 left-0 h-full w-screen sm:w-64 overflow-y-auto bg-black bg-opacity-70 sm:bg-transparent z-50 shadow-2xl transform ${
          isOpenNav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="text-white hover:text-gray-500 duration-500 absolute left-4 top-0 p-3 text-[2rem]"
          onClick={toggleNav}
        >
          <FaTimes size={36} />
        </button>
        <ul className="text-white mt-16">
          <Link to="/" onClick={toggleNav}>
            <li className="hover:bg-gradient-to-l from-orange-900 to-black opacity-80 p-8 text-[1.3rem]">Home</li>
          </Link>
          <Link to="/contacts" onClick={toggleNav}>
            <li className="hover:bg-gradient-to-l from-orange-900 to-black opacity-80 p-8 text-[1.3rem]">Contatti</li>
          </Link>

          {/* Prodotti con sotto-menu */}
          <li
            className="hover:bg-gradient-to-l  from-orange-900 to-black opacity-80 p-8 text-[1.3rem] flex items-center gap-2 cursor-pointer"
            onClick={toggleProducts}
          >
            Prodotti
            <FaCaretDown/>
          </li>
          {isProductsOpen && (
            <ul className="ml-6 transition-transform duration-300 ease-in-out">
              <Link to="/beers" onClick={toggleNav}>
                <li className="hover:bg-gray-700 opacity-80 pl-8 py-2 text-[1.2rem]">Birre</li>
              </Link>
              <Link to="/winesandliquors" onClick={toggleNav}>
                <li className="hover:bg-gray-700 opacity-80 pl-8 py-2 text-[1.2rem]">Vini & Liquori</li>
              </Link>
              <Link to="/giftpacks" onClick={toggleNav}>
                <li className="hover:bg-gray-700 opacity-80 pl-8 py-2 text-[1.2rem]">Confezioni</li>
              </Link>
              <Link to="/others" onClick={toggleNav}>
                <li className="hover:bg-gray-700 opacity-80 pl-8 py-2 text-[1.2rem]">Altro</li>
              </Link>
            </ul>
          )}

          <Link to="/aboutus" onClick={toggleNav}>
            <li className="hover:bg-gradient-to-l from-orange-900 to-black opacity-80 p-8 text-[1.3rem]">Chi Siamo</li>
          </Link>
          <Link to="/events" onClick={toggleNav}>
            <li className="hover:bg-gradient-to-l from-orange-900 to-black opacity-80 p-8 text-[1.3rem]">Eventi</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
