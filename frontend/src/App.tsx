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
import DigitalTransformation from './pages/DigitalTransformation'
import DataAnalytics from './pages/DataAIAnalytics'
import PlatformEngineering from './pages/PlatformEngineering'
import UXDesign from './pages/UXDesign'
import BusinessIntelligence from './pages/BusinessIntelligence'
import CloudSolutions from './pages/CloudSolutions'
import CyberSecurity from './pages/CyberSecurity'
import ITStrategy from './pages/ITStrategy'
import ContactSection from './pages/ContactSection'
import SustainabilityESG from './pages/SustainabilityESG'
import PeopleChangeCapability from './pages/PeopleChangeCapability'
import ProductManagementStrategy from './pages/ProductManagementStrategy'
import ScrollToTop from './animation/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop/>
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
        <Route path='/expertise/digital-transformation' element={<DigitalTransformation/>}/>
        <Route path='/expertise/data-analytics' element={<DataAnalytics/>}/>
        <Route path='/expertise/platform-engineering' element={<PlatformEngineering/>}/>
        <Route path='/expertise/ux-design' element={<UXDesign/>}/>
        <Route path='/expertise/sustainability' element={<SustainabilityESG/>}/>
        <Route path='/expertise/people-change' element={<PeopleChangeCapability/>}/>
        <Route path='/expertise/business-intelligence' element={<BusinessIntelligence/>}/>
        <Route path='/expertise/cloud-solutions' element={<CloudSolutions/>}/>
        <Route path='/expertise/cyber-security' element={<CyberSecurity/>}/>
        <Route path='/expertise/it-strategy' element={<ITStrategy/>}/>
        <Route path='/contact' element={<ContactSection/>}/>
        <Route path='/expertise/product-management' element={<ProductManagementStrategy/>}/>
      </Routes>
      <Footersection />
    </Router>
  )
}

export default App
