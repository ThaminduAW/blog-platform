import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-white via-gray-100 to-gray-200 border-b-4 border-black p-4 shadow-md relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-black text-black hover:text-red-500 transition-all duration-500 ease-in-out transform hover:scale-105 flex items-center gap-2"
        >
          <span className="border-4 border-black bg-red-500 p-2 text-white shadow-[4px_4px_0_0_#000] transition-all duration-500 hover:shadow-[6px_6px_0_0_#000] hover:bg-blue-700 hover:text-yellow-300">
            📝 Blog Platform
          </span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden border-4 border-black bg-red-500 p-2 text-white shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:bg-blue-700 transition-all duration-500"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-6 absolute lg:relative top-full left-0 right-0 lg:top-auto bg-white lg:bg-transparent p-4 lg:p-0 border-b-4 lg:border-b-0 border-black shadow-md lg:shadow-none z-50 transition-all duration-500 ease-in-out`}>
          {isLoggedIn ? (
            <>
              <Link 
                to="/" 
                className="font-bold text-black hover:text-red-500 transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                HOME
              </Link>
              <Link 
                to="/create" 
                className="group relative inline-flex items-center justify-center border-4 border-black bg-red-500 px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 active:translate-x-1 active:translate-y-1 shadow-[4px_4px_0_0_#000]"
              >
                NEW BLOG
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </Link>
              <button 
                onClick={handleLogout} 
                className="font-bold text-red-500 hover:text-blue-700 transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="group relative inline-flex items-center justify-center border-4 border-black bg-red-500 px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 active:translate-x-1 active:translate-y-1 shadow-[4px_4px_0_0_#000]"
              >
                LOGIN
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
              </Link>
              <Link 
                to="/register" 
                className="font-bold text-black hover:text-red-500 transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                REGISTER
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
