import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-white via-gray-100 to-gray-200 border-t-4 border-black pt-8 pb-6 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h4 className="text-xl font-black text-black">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-bold text-black hover:text-red-500 transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                HOME
              </Link>
              <Link 
                to="/create" 
                className="font-bold text-black hover:text-red-500 transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                NEW BLOG
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-black text-black">Connect With Us</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center font-bold text-black hover:text-red-500 transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                TWITTER
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center font-bold text-black hover:text-red-500 transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                GITHUB
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 border-t-4 border-black px-4 sm:px-0">
          <p className="font-bold text-black text-sm sm:text-base">
            <span className="border-4 border-black bg-red-500 p-2 text-white shadow-[4px_4px_0_0_#000] transition-all duration-500 hover:shadow-[6px_6px_0_0_#000] hover:bg-blue-700 hover:text-yellow-300 inline-block">
              &copy; {currentYear} Blog Platform
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
