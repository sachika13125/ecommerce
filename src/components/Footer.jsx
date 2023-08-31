import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-white text-lg font-semibold mb-2">Company Name</h2>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies, mauris ac ultricies feugiat, turpis leo tincidunt odio.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-white text-lg font-semibold mb-2">Links</h2>
            <ul className="text-gray-300 text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Shop</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-white text-lg font-semibold mb-2">Follow Us</h2>
            <ul className="flex space-x-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;