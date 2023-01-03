import React from 'react'

type Feature = {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
};


const Footer = ({features}: {features: Feature}) => {
  return (
    <div className="flex flex-col text-white md:flex-row justify-evenly items-center space-y-4 md:space-y-0">
      <div className="flex flex-col items-center
        py-2 px-10 border border-white
      ">
        <h1 className="text-lg font-bold">Rotation Time</h1>
        <p className="text-sm md:text-md">{features.rotation}</p>
      </div>
      <div className="flex flex-col items-center
        py-2 px-[1.85rem] border border-white
      ">
        <h1 className="text-lg font-bold">Revolution Time</h1>
        <p className="text-sm md:text-md">{features.revolution}</p>
      </div>
      <div className="flex flex-col items-center
        py-2 px-[2.26rem] border border-white
      ">
        <h1 className="text-lg font-bold">Radius covered</h1>
        <p className="text-sm md:text-md">{features.radius}</p>
        </div>
      <div className="flex flex-col items-center
        py-2 px-12 border border-white
      ">
        <h1 className="text-lg font-bold">Average temp</h1>
        <p className="text-sm md:text-md">{features.temperature}</p>
        </div>
      
      </div>

  )
}

export default Footer