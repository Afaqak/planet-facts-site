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
      className="text-white px-8 font-sans h-[12vh] flex 
    justify-between items-center border-b border-gray-300"
    >
      <h1 className="text-3xl font-bold tracking-wider">The Planet</h1>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setShow(!show)}
        className="md:hidden h-7 w-7 z-30"
      />
      <ul
        className={`hidden
      md:flex md:space-x-6`}
      >
        <li>
          <Link href="/">Earth</Link>
        </li>
        {planets.map((planet) => (
          <li key={planet}>
            <Link href={`/${planet.toLowerCase()}`}>{planet}</Link>
          </li>
        ))}
      </ul>
      <div
        className={`div absolute top-0 left-0
      ${show ? "block" : "hidden"} 
      md:hidden
      w-full h-full bg-black bg-opacity-80 z-10
      `}
      >
        <ul
          className="flex flex-col h-full 
        text-xl
        space-y-2 overflow-y-hidden mt-20"
        >
            <li className="border-gray-500 p-3 border-b">
              <Link href={`/`}>Earth</Link>
            </li>
          {planets.map((planet) => (
            <li key={planet} className="border-gray-500 p-3 border-b">
              <Link href={`/${planet.toLowerCase()}`}>{planet}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
