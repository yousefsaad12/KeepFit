import React from 'react'
import SectionWrapper from './SectionWrapper'
import Header from './Header'


export default function Generator() {
  return (
     <SectionWrapper 
      header = {"generate your workout"} 
      title = {["It\s", "Huge", "o\ clock"]}
     >
      
    <Header index={'01'} title={'Pick Your poison'}description={'Select the workout you want to enjoy.'}/>
    </SectionWrapper>
  
  )
}
