"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    // {
    //   name: "Free Downloads",
    //   subItems: [
    //     { name: "LinkedIn Lead Gen", path: "/LinkedInLeadGen" },
    //     { name: "Email Campaign", path: "/EmailCampaign" },
    //     { name: "Cold Calling", path: "/ColdCallingStrategy" },
    //   ],
    // },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blog" },
    { name: "Results", path: "/results" },
  ];

  return (
    <nav className="bg-[#0f0b1f]  sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img src="/Logo.png" className="h-10" alt="" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent transition-colors duration-200">
              हिन्दी Anime
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  ref={item.subItems ? dropdownRef : null}
                >
                  {item.subItems ? (
                    <button
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-200 hover:text-pink-600  rounded-md transition-all duration-200"
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <FaChevronDown
                        className={`ml-1 text-xs transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-pink-600  rounded-md transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Desktop Dropdown Menu */}
                  {item.subItems && activeDropdown === item.name && (
                    <div
                      className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-200 hover:text-pink-600  transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Action Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-pink-600 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="https://topmate.io/nilesh_patharikar"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-200 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Try For Free
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-200 hover:text-pink-600  rounded-md transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-200">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-200 hover:text-pink-600  rounded-md transition-all duration-200"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <FaChevronDown
                        className={`text-xs transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "max-h-48 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-pink-600  rounded-md transition-all duration-200"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="block px-3 py-3 text-sm font-medium text-gray-200 hover:text-pink-600  rounded-md transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-4 mt-4 space-y-3 border-t border-gray-200">
              <Link
                href="/login"
                className="block w-full px-4 py-3 text-sm font-medium text-center text-gray-200 border border-gray-300 hover:border-blue-300 hover:text-pink-600 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="https://topmate.io/nilesh_patharikar"
                className="block w-full px-4 py-3 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-200 rounded-lg transition-all duration-200 shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Try For Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
