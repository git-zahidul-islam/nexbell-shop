import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="#nav"
      className="h-[67px] w-full bg-[#131921] text-white md:py-10 flex items-center relative"
    >
      <div className="md:w-[90%] w-full mx-auto px-4 md:px-0 lg:px-0">
        <div className="flex items-center justify-between h-[67px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold flex gap-3 items-center justify-center"
            >
              <img src={logo} alt="logo" className="h-10"></img>
            </Link>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link className="text-xl font-normal" to="/">
              Home
            </Link>
            <Link className="text-xl font-normal" to="/products">
              Products
            </Link>
            <Link className="text-xl font-normal" to="/dashboard">
              Dashboard
            </Link>
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
          <Link to="/" className="block px-4 py-2">
            Home
          </Link>
          <Link to="/products" className="block px-4 py-2">
            Products
          </Link>
          <Link to="/dashboard" className="block px-4 py-2">
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
