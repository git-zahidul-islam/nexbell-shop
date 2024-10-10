import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#131921] text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo & About Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-semibold">ShopEasy</h2>
          <p className="mt-2 text-gray-400">
            Your one-stop shop for all things fashion, electronics, and more. Shop smart with ShopEasy.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social & Payment Methods Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
          </div>

          <h3 className="text-lg font-semibold mt-4">Payment Methods</h3>
          <div className="flex space-x-4 mt-2">
            <FaCcVisa className='text-blue-500' size={32} />
            <FaCcMastercard className='text-blue-500' size={32} />
            <FaPaypal className='text-blue-500' size={32} />
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400">
        © 2024 ShopEasy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
