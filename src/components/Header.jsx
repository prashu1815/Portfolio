import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [Showmenu, SetShowmenu] = useState("hidden"); // Initially hidden

  const menuitems = [
    { title: "Home", key: "/" },
    { title: "Projects", key: "/projects" },
    {title: "Resume", key: "/Resume"},
    { title: "Contact", key: "/contact" },
  ];

  const location = useLocation(); // Get current path

  return (
    <div className="text-white bg-gray-400 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center p-4 shadow-lg">
        {/* Header Title */}
        <h1 className="text-4xl font-semibold font-poppins">J S P</h1>

        {/* Mobile Menu Button */}
        <FaBars
          onClick={() =>
            SetShowmenu(Showmenu === "hidden" ? "block" : "hidden")
          }
          className="md:hidden text-2xl"
        />

        {/* Desktop Menu (Visible on md and larger) */}
        <div className="hidden md:block">
          <ul className="flex space-x-6 font-poppins">
            {menuitems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.key}
                  className={`px-3 py-2 rounded-lg transition ${
                    location.pathname === item.key
                      ? "bg-white text-black"
                      : "text-gray-300 hover:text-blue-700"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden flex flex-col bg-gray-800 p-4 ${Showmenu}`}>
        <ul className="space-y-4 font-poppins">
          {menuitems.map((item) => (
            <li key={item.key}>
              <Link
                to={item.key}
                onClick={() => SetShowmenu("hidden")}
                className={`block px-4 py-2 rounded-lg transition ${
                  location.pathname === item.key
                    ? "bg-white text-black"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;