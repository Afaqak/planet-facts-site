import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const planets = [
    "Mercury",
    "Mars",
    "Venus",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  return (
    <nav
      className="text-white px-8 py-4  flex flex-row md:flex-col 
    justify-between items-center border-b border-gray-300 font-sans
    bg-background-stars bg-cover bg-center bg-no-repeat bg-fixed
    bg-[#070722]
    "
    >
      <h1 className="text-3xl p-4 font-medium tracking-wider">The Planet</h1>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setShow(!show)}
        className="md:hidden h-7 w-7 z-30 text-gray-400 cursor-pointer"
      />
      <ul
        className={`hidden font-medium text-xl
      md:flex md:space-x-6`}
      >
        <li
          className="hover:scale-110 transition-all duration-300 transform
        hover:text-gray-300 
"
        >
          <Link href="/">Earth</Link>
        </li>
        {planets.map((planet) => (
          <li
            className="hover:scale-110 transition-all duration-300 transform 
          hover:text-gray-300
          "
            key={planet}
          >
            <Link href={`/${planet.toLowerCase()}`}>{planet}</Link>
          </li>
        ))}
      </ul>
      <div
        className={`div absolute top-0 left-0
      ${show ? "block" : "hidden"} 
      md:hidden
      w-full h-full bg-gray-100  z-10 text-black
      p-4
      `}
      >
        <ul
          className="flex flex-col h-full 
        text-xl
        space-y-2 overflow-y-hidden mt-20"
        >
          <li
            className="border-gray-500 p-3 border-b 
             hover:text-gray-700 transition-all duration-300 transform
            hover:translate-x-2"
          >
            <Link href={`/`}>Earth</Link>
          </li>
          {planets.map((planet) => (
            <li
              key={planet}
              className="border-gray-500 p-3 border-b 
             hover:text-gray-700 transition-all duration-300 transform
            hover:translate-x-2
            "
            >
              <Link href={`/${planet.toLowerCase()}`}>{planet}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
