import { Routes, Route } from "react-router-dom";
import Navbar from './assets/Components/Navbar'
import HeroSection from './assets/Components/HeroSection'
import Article from "./assets/Components/Article";

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </div>
  )
}

export default App
