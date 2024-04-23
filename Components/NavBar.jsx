import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTajzDgBa25kiPmCpbEq2kMaPm14hsalHnbjak-kbe3g&s.png"
              className="h-90 w-14"
              alt="Accessibility Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              AccessiSuite
            </span>
          </a>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col text-2xl font-medium p-4 md:p-0 mt-4 border border-gray-100
       rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row
        md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
         dark:border-gray-700">
              {["Face Blindness", "Color Blindness", "Text Magnifier", "Image Magnifier"].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>
                    <a
                      href="#"
                      className={`block py-2 px-3 text-black rounded hover:bg-gray-100
             md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                        activeLink === index ? 'text-blue-700' : ''
                      }`}
                      onClick={() => handleLinkClick(index)}
                    >
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
