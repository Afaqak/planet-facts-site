import React from "react";
import data from "../data.json";
import Link from "next/link";
const Main = () => {
  const [activeButton, setActiveButton] = React.useState(1);

  const handleButtonClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };
  return (
    <div
      className="py-4 px-6 
    text-gray-100 font-antonio flex flex-col justify-center items-center
    "
    >
      <div className="flex flex-col-reverse
      md:flex-col justify-center items-center">
      <div className="mt-5">
        <img src={data[0].images.planet} alt="planet" />
      </div>
      <div className="flex flex-col md:flex-row mt-5">
        <div className="w-1/2">
          <h1 className="text-5xl font-normal">{data[0].name}</h1>
          <p className="text-sm text-gray-500 py-4">
            {data[0].overview.content}
          </p>
          <Link href={data[0].overview.source}>
            <span
              className="text-sm text-gray-500
          border-b border-gray-500 py-1 hover:text-gray-300
          "
            >
              Source: Wikipedia
            </span>
          </Link>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center main-work">
          <div className="flex flex-col space-y-2">
            <button
              className={`tracking-[0.2rem] text-md text-gray-200 cursor-pointer text-start border border-gray-700 py-2 px-4 pr-24 hover:bg-gray-700 hover:bg-opacity-40 ${
                activeButton === 1 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              <span className="text-gray-400 text-[0.7rem] leading-[0.4rem] px-2">
                01
              </span>
              Overview
            </button>
            <button
              className={`tracking-[0.2rem] text-md text-gray-200 cursor-pointer focus:text-gray-100 border border-gray-700 py-2 px-4 pr-24 hover:bg-gray-700 hover:bg-opacity-40 ${
                activeButton === 2 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              <span className="text-gray-400 text-[0.7rem] leading-[0.4rem] px-2">
                02
              </span>
              Internal Structure
            </button>
            <button
              className={`tracking-[0.2rem] text-md text-gray-200 cursor-pointer text-start border border-gray-700 py-2 px-4 pr-24 hover:bg-gray-700 hover:bg-opacity-40 ${
                activeButton === 3 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              <span className="text-gray-400 text-[0.7rem] leading-[0.4rem] px-2">
                03
              </span>
              Surface Geology
            </button>
          </div>
        </div>
      </div>
      </div>
      <div
        className="flex flex-col md:flex-row mt-5
          justify-between items-center w-full space-x-2
        "
      >
        <div className="min-w-1/4 h-24 border border-gray-700 py-4 px-6">
          <h1 className="text-2xl font-normal">Rotation Time</h1>
          <p className="text-gray-500 text-sm">{data[0].rotation}</p>
        </div>
        <div className="min-w-1/4 h-24 border border-gray-700 py-4 px-6">
          <h1 className="text-2xl font-normal">Revolution Time</h1>
          <p className="text-gray-500 text-sm">{data[0].revolution}</p>
        </div>
        <div className="min-w-1/4 h-24 border border-gray-700 py-4 px-6">
          <h1 className="text-2xl font-normal">Radius</h1>
          <p className="text-gray-500 text-sm">{data[0].radius}</p>
        </div>
        <div className="min-w-1/4 h-24 border border-gray-700 py-4 px-6">
          <h1 className="text-2xl font-normal">Average Temp.</h1>
          <p className="text-gray-500 text-sm">{data[0].temperature}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
