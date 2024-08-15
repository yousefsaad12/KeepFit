import React from 'react'
import SectionWrapper from './SectionWrapper'
import Header from './Header'
import { WORKOUTS } from '../utils/swoldier'


export default function Generator() {
  return (
     <SectionWrapper 
      header = {"generate your workout"} 
      title = {["It\s", "Huge", "o\ clock"]}
     >

    <Header index={'01'} title={'Pick Your poison'}description={'Select the workout you want to enjoy.'}/>

    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

      {Object.keys(WORKOUTS).map((type, typeIndex)=> {
        return (
          <button key={typeIndex} className=' blueShadow
          bg-slate-950 border py-3 border-blue-400 rounded-3xl'>
              <p className='capitalize'>{type.replaceAll("_"," ")}</p>
          </button>
        )
        
      })}
    </div>

    </SectionWrapper>
  
  )
}
