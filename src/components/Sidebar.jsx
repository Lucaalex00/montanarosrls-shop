import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-trasparent shadow-2xl transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
        <button className='text-white hover:text-dark duration-500 absolute left-4 top-0 p-3 text-[2rem]' onClick={toggleMenu}>X</button>
      <ul className="text-white space-y-8 mt-16">
      <Link to="/" onClick={toggleMenu}><li className='hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]'>Home</li></Link>
      <Link to="/contacts" onClick={toggleMenu}><li className='hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]'>Contatti</li></Link>
      <Link to="/products" onClick={toggleMenu}><li className='hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]'>Prodotti</li></Link>
      <Link to="/aboutus" onClick={toggleMenu}><li className='hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]'>Chi Siamo</li></Link>
      <Link to="/events" onClick={toggleMenu}><li className='hover:bg-gradient-to-l from-orange-800 to-black opacity-80 p-8 text-[1.3rem]'>Eventi</li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;