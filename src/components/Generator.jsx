import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import Header from './Header'
import { WORKOUTS } from '../utils/swoldier'


export default function Generator() {

  const [showModel, setshowModel] = useState(false)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState('strength_power')

  function toggleModel()
  {
    setshowModel(!showModel)
  }

  return (
     <SectionWrapper 
      header = {"generate your workout"} 
      title = {["It\s", "Huge", "o\ clock"]}
     >

    <Header index={'01'} title={'Pick Your Poison'}description={'Select the workout you want to enjoy.'}/>

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

    <Header index={'02'} title={'Lock On Targets'}description={'Select the muscles judged for annihilation.'}/>

    <div className='bg-slate-950  border border-solid 
      border-blue-400 rounded-lg flex flex-col'>
    <button onClick={toggleModel}
     className='relative flex p-3 items-center justify-center'>
        <p>Select muscle groups</p>
        <i className='fa-solid 
        absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down'></i>
      </button>
      {showModel && (
        <div>model</div>
      )}
    </div>

    </SectionWrapper>
  
  )
}
