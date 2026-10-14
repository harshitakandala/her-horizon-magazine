import { Routes, Route } from "react-router-dom";
import Navbar from './assets/Components/Navbar'
import HeroSection from './assets/Components/HeroSection'
import GoToTop from './assets/Components/GoToTop';
import AboutUs from './assets/Components/AboutUs';
import './index.css';

const App = () => {
  return (
    <div className='container'>
      <GoToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
