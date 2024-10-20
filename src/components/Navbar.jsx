import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-screen bg-gradient-to-l from-orange-700 to-black'>
      <button onClick={toggleMenu} className="text-white hover:text-dark duration-500 absolute p-4">
        {isOpen ? '' : <FaBars size={36} />}
      </button>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
