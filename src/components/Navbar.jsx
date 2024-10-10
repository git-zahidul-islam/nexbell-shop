import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="#nav"
      className="h-[67px] w-full text-black md:py-10 flex items-center relative"
    >
      <div className="md:w-[90%] w-full mx-auto px-4 md:px-0 lg:px-0">
        <div className="flex items-center justify-between h-[67px]">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl font-bold flex gap-3 items-center justify-center"
            >
              <img src={logo} alt="logo" className="h-10"></img>
              {/* <h1 className="md:text-[45px] text-[35px] md:block hidden">
                <span className="font-bold text-[#000000f0]">M</span>
                <span className="font-normal text-[#8a8a8a]">umair</span>
              </h1> */}
            </a>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-8 items-center">
            <a className="text-xl font-normal" href="#nav">
              Home
            </a>
            <a className="text-xl font-normal" href="#about-me">
              About Me
            </a>
            <a className="text-xl font-normal" href="#service">
              Services
            </a>
            <a className="text-xl font-normal" href="#project">
              Project
            </a>
          </div>


          {/* Mobile menu button */}
          <div className="flex items-center md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <GiHamburgerMenu className="text-black/90 text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ff9654] pb-5 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-white/85 text-xl z-20">
          <a href="#nav" className="block px-4 py-2">
            Home
          </a>
          <a href="#about-me" className="block px-4 py-2">
            About Me
          </a>
          <a href="#service" className="block px-4 py-2">
            Services
          </a>
          <a href="#project" className="block px-4 py-2">
            Projects
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
