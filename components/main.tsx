import React, { useEffect } from "react";
import data from "../data.json";
import Link from "next/link";

const Main = ({planet}:{planet:string}) => {
  let planetData = data.find((planetData) => planetData.name.toLowerCase() === planet.toLowerCase()) as any;
  if (!planetData) {
    return <div>Planet not found</div>
  }
  const [activeButton, setActiveButton] = React.useState(1);
  const [activeImage, setActiveImage] = React.useState(planetData?.images.planet);
  const [activeFeature, setActiveFeature] = React.useState(planetData?.overview);
  
  useEffect(() => {
    setActiveImage(planetData?.images.planet);
    setActiveFeature(planetData?.overview);
  }, [planetData]);
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
        <img 
        className="w-[300px] md:w-[400px] mb-5"
        src={
          activeImage
        } alt="planet" />
      </div>
      <div className="flex 
      justify-center items-center md:justify-start md:items-start
      flex-col-reverse md:flex-row mt-5">
        <div className="w-[80%] md:w-1/2 mt-4">
          <h1 className="text-3xl md:text-4xl
          font-normal">{
            planetData?.name
          }</h1>
          <p className="text-sm text-gray-500 py-4">
            {
            activeFeature.content
            }
          </p>
          <Link href={
            activeFeature.source
          }>
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
          <div className="flex flex-row md:flex-col md:gap-2 ">
            <button
              
              className={`
              md:min-w-[150px]
              tracking-[0.2rem] text-[0.75rem] sm:text-[1rem] text-gray-200 cursor-pointer text-start border border-gray-700 py-2 px-4 md:pr-24 hover:bg-gray-700 hover:bg-opacity-40 ${
                activeButton === 1 ? "active" : ""
              }`}
              onClick={() => {handleButtonClick(1)
                setActiveImage(
                  planetData?.images.planet);
                setActiveFeature(
                  planetData?.overview
                );
              }}
            >
              <span className="hidden md:inline text-gray-400 text-[0.7rem] md:text-[1rem] leading-[0.4rem] px-1">
                01
              </span>
              Overview
            </button>
            <button
              
              className={`
              md:min-w-[150px]
              tracking-[0.2rem] text-[0.75rem]  sm:text-[1rem] text-gray-200 cursor-pointer focus:text-gray-100 border border-gray-700 py-2 px-4 md:pr-24 hover:bg-gray-700 hover:bg-opacity-40 ${
                activeButton === 2 ? "active" : ""
              }`}
              onClick={() => {
                setActiveImage(planetData?.images.internal);
                setActiveFeature(planetData?.structure);
                handleButtonClick(2)}}
            >
              <span className="hidden md:inline text-gray-400 text-[0.7rem] leading-[0.4rem] px-1">
                02
              </span>
              Structure
            </button>
            <button
              data-testid="surface"
              className={`
              md:min-w-[150px]
              tracking-[0.2rem] text-[0.75rem] sm:text-[1rem] text-gray-200 cursor-pointer text-start border border-gray-700 py-2 px-4 md:pr-24 hover:bg-gray-700 hover:bg-opacity-40 ${
                activeButton === 3 ? "active" : ""
              }`}
              onClick={() => {handleButtonClick(3)
                setActiveImage(planetData?.images.geology);
                setActiveFeature(planetData?.geology);
              }}
            >
              <span className="hidden md:inline text-gray-400 text-[0.7rem] leading-[0.4rem] px-1">
                03
              </span>
              Surface
            </button>
          </div>
        </div>
      </div>
      </div>
      <div
        className="flex flex-col md:flex-row mt-5
          justify-between items-center w-full gap-2
        "
      >
        <div className="
        w-[19rem] md:w-[25rem]
        border border-gray-700 py-4 px-6">
          <h1 className="text-2xl font-normal">Rotation </h1>
          <p className="text-gray-500 text-sm">{planetData.rotation}</p>
        </div>
        <div className=" 
        w-[19rem] md:w-[25rem]
        border border-gray-700 py-4 px-6">
          <h1 className="text-2xl font-normal">Revolution</h1>
          <p className="text-gray-500 text-sm">{planetData.revolution}</p>
        </div>
        <div className=" 
        w-[19rem]  md:w-[25rem]
        border border-gray-700 py-4 px-6">
          <h1 className="text-2xl font-normal">Radius </h1>
          <p className="text-gray-500 text-sm">{planetData.radius}</p>
        </div>
        <div className="
        w-[19rem] md:w-[25rem]
        border border-gray-700 py-4 px-6">
          <h1 className="text-2xl font-normal">Average</h1>
          <p className="text-gray-500 text-sm">{planetData.temperature}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
