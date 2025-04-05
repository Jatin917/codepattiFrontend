import React from 'react'
import './App.css'
import PlayerCard from './components/PlayerCard/PlayerCard'

function App() {

  return (
    <>
    <div className='bg-red-500 text-xl font-semibold text-center'>CodePatti Frontend</div>
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 min-h-screen flex flex-wrap justify-center items-center gap-6">
      <PlayerCard playerName='Priyansh' id='abc'/>
      <PlayerCard playerName='Arun' id='xyz'/>
      <PlayerCard playerName='Shubh' id='1h3'/>
      <PlayerCard playerName='Alice' />
    </div> 
    </>
  )
}

export default App
