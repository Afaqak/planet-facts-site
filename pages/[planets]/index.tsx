import React,{useState} from 'react'
import { useRouter } from 'next/router'
import data from '../../data.json';
import Main from '../../components/main';
const Planets = () => {
    const router = useRouter();
    const { planets } = router.query;
    const planet = data.find((planet) => planet.name.toLowerCase() === planets) as any;
  if (!planet) {
    return <div>Planet not found</div>
  }
    console.log(planet);
  return (
    <div>
        <div
        className="font-mono relative min-h-screen
        bg-background-stars bg-cover bg-center bg-no-repeat bg-fixed
    bg-[#070722]"
      > 
      <Main planet={planet?.name} />
      </div>
      </div>
    
  )
}

export default Planets