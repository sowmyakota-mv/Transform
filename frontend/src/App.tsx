import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Aboutsection from './components/Aboutsection'
import WhyDifferent from './components/WhyDifferent'
import OurJourney from './components/OurJourney'
import RecognisedAwards from './components/RecognisedAwards'
import OurProjects from './components/OurProjects'
import SuccessStories from './components/SuccessStories'
import RegisterCTA from './components/RegisterCTA'
import Footersection from './components/Footersection'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Header />
      <Herosection/>
      <Aboutsection/>
      <WhyDifferent/>
      <OurJourney/>
      <RecognisedAwards/>
      <OurProjects/>
      <SuccessStories/>
      <RegisterCTA/>
      <Footersection/>
    </div>
  )
}

export default App
