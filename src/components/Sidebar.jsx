import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpenNav, toggleNav }) => {
  return (
    <>
      {/* Overlay */}
      {isOpenNav && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleNav}></div>}
      
      <div
        className={`fixed top-0 left-0 h-full w-screen sm:w-64 bg-black bg-opacity-70 sm:bg-transparent z-50 shadow-2xl transform ${
          isOpenNav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="text-white hover:text-dark duration-500 absolute left-4 top-0 p-3 text-[2rem]"
          onClick={toggleNav}
        >
          <FaTimes size={36} />
        </button>
        <ul className="text-white space-y-8 mt-16">
          <Link to="/" onClick={toggleNav}>
            <li className="hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]">Home</li>
          </Link>
          <Link to="/contacts" onClick={toggleNav}>
            <li className="hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]">Contatti</li>
          </Link>
          <Link to="/beers" onClick={toggleNav}>
            <li className="hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]">Birre</li>
          </Link>
          <Link to="/aboutus" onClick={toggleNav}>
            <li className="hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]">Chi Siamo</li>
          </Link>
          <Link to="/events" onClick={toggleNav}>
            <li className="hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]">Eventi</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
