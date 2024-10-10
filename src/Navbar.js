import React, { useState } from 'react';
import mgclogo from "./assets/mgclogo.png";
import bannerimg from "./assets/bannerimg.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMenuOpen) toggleMenu();
  };

  const links = ['About', 'Realtors', 'News', 'Blogs', 'Events', 'Contacts'];

  return (
    <header className="flex justify-between items-center px-10 py-3 absolute top-0 left-0 right-0 z-30 navbar-parent-custom">
     <img src={mgclogo}/>

      <div className="hidden sm:flex gap-16">
        <ul className="flex gap-10 items-center">
          {links.map((link) => (
            <li className="w-full" key={link}>
              <a
                className={`py-2 block link-hover ${activeLink === link ? 'text-blue-600 link-active' : 'text-white'}`}
                href="#"
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        id="menu_btn"
        className="w-10 sm:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg id="menu_close" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        ) : (
          <svg id="menu_bars" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        )}
      </button>

      {isMenuOpen && (
        <div id="mobile_menu" className="absolute top-full bg-gray-100 right-10 left-10">
          <div className="flex flex-col gap-7 p-5 sm:hidden">
            <ul className="flex flex-col gap-2 items-center text-center">
              {links.map((link) => (
                <li className="w-full" key={link}>
                  <a
                    className={`py-2 block link-hover ${activeLink === link ? 'text-blue-600 link-active' : 'text-black'}`}
                    href="#"
                    onClick={() => handleLinkClick(link)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
