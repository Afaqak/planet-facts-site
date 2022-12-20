import React,{useState} from 'react'
import { useRouter } from 'next/router'
import data from '../../data.json';
const Planets = () => {
    const router = useRouter();
    const { planets } = router.query;
    const planet = data.find((planet) => planet.name.toLowerCase() === planets);
    console.log(planet);
  return (
    <div>
        
    </div>
    
  )
}

export default Planets