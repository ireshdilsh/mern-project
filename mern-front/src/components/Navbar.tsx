import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-2xl font-bold text-gray-800">
              ArticleHub
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#featured" className="text-gray-600 hover:text-blue-500">
              Featured
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">
              About
            </a>
            <a href="#categories" className="text-gray-600 hover:text-blue-500">
              Categories
            </a>
            <a href="#trending" className="text-gray-600 hover:text-blue-500">
              Trending
            </a>
            <a href="#authors" className="text-gray-600 hover:text-blue-500">
              Authors
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

