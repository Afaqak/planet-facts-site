import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
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
    <motion.nav 
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
          onClick={() => {
            router.push("/");
            setShow(false)}}
          className="hover:scale-110 transition-all duration-300 transform
        hover:text-gray-300 
"
        >
          <p className="cursor-pointer">Earth</p>
        </li>
        {planets.map((planet) => (
          <li onClick={() => {
            router.push(`/${planet.toLowerCase()}`);
            setShow(false)}}
            className="hover:scale-110 transition-all duration-300 transform 
          hover:text-gray-300
          "
            key={planet}
          >
            <p className="cursor-pointer">{planet}</p>
           
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
            <p onClick={() => {router.push("/"); setShow(false)}}>Earth</p>
          </li>
          {planets.map((planet) => (
            <li
            onClick={() => {router.push(`/${planet.toLowerCase()}`); setShow(false)}}
              key={planet}
              className="border-gray-500 p-3 border-b 
             hover:text-gray-700 transition-all duration-300 transform
            hover:translate-x-2
            "
            >
              <p >{planet}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
