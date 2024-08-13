import { useState } from 'react'
import Generator from './components/Generator'
import Hero from './components/Hero'
import Workout from './components/Workout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Generator />
      <Workout />
    </>
  )
}

export default App
