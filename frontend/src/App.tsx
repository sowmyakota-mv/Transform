// App.tsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footersection from './components/Footersection'
import Herosection from './components/Herosection'
import Aboutsection from './components/Aboutsection'
import WhyDifferent from './components/WhyDifferent'
import OurJourney from './components/OurJourney'
import RecognisedAwards from './components/RecognisedAwards'
import OurProjects from './components/OurProjects'
import SuccessStories from './components/SuccessStories'
import RegisterCTA from './components/RegisterCTA'
import AboutTransform from './pages/AboutTransform'
import PeopleBehindInnovation from './pages/PeopleBehindInnovation'
import FutureSustainability from './pages/FutureSustainability'
import CommunityImpact from './pages/CommunityImpact'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <Herosection />
            <Aboutsection />
            <WhyDifferent />
            <OurJourney />
            <RecognisedAwards />
            <OurProjects />
            <SuccessStories />
            <RegisterCTA />
          </div>
        } />
        <Route path="/abouttransform" element={<AboutTransform />} />   
        <Route path='/people' element={<PeopleBehindInnovation/>}/>
        <Route path='sustainability' element={<FutureSustainability/>}/>
        <Route path='impact' element={<CommunityImpact/>}/>
      </Routes>
      <Footersection />
    </Router>
  )
}

export default App
