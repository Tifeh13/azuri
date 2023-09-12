import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import Logo from '../assets/Vitse-logo.png';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-[#0c2c1e] p-4">
      <nav className="flex justify-between items-center w-[82%] mx-auto bg-#61CE70">
        <div>
          <img className="w-16 cursor-pointer" src={Logo} alt="Logo" />
        </div>
        <div
          className={`nav-links bg-[#0c2c1e] duration-500 md:static absolute md:w-auto w-full flex items-center px-5 h-fit ${
            isMenuOpen ? 'left-0' : 'left-[-100%]'
          } top-[9%] md:min-h-fit min-h-[100vh] transition-all ease-in-out`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white">
            <li>
              <a className="hover:text-gray-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className=" text-white px-5 py-2">
            Sign in
          </button>
          <button className="bg-[#fff] text-[#0c2c1e] px-5 py-2 rounded-md ">
            Request Demo
          </button>
          {isMenuOpen ? (
            <IoClose onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden text-white" />
          ) : (
            <IoMenu onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden text-white" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
