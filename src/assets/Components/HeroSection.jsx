import React from 'react'
import './HeroSection.css'
import bg from '../background_hero.png'
import img1 from '../img1.jpeg'
import img2 from '../img2.jpeg'
import img3 from '../img3.png'
import img4 from '../img4.jpeg'
import img5 from '../img5.png'
import Sheros from "./Sheros.jsx";


const articles = [
  { id: 1, title: "First Article" },
];

const HeroSection = () => {
  return (
    <div>
      <div className='herocontainer'>
        <img src={bg} alt="background" className='background' />
        <div className='heroimages'>
          <div className="left">
            <img src={img1} alt="Angela Davis" className='image1' />
            <img src={img2} alt="Hedy Lamarr" className='image2' />
          </div>
          <div className='logotext'>
            <h1 className='her'>Her</h1>
            <h1 className='horizon'>Horizon</h1>
          </div>
          <img src={img5} alt="center-image" className='image5' />
          <div className="right">
            <img src={img3} alt="Emma Watson" className='image3' />
            <img src={img4} alt="Malala Yousafzai" className='image4' />
          </div>
          <div className='slogan'>
            <h1>EMPOWERED WOMEN</h1>
            <h1>EMPOWER WOMEN.</h1>
          </div>
        </div>
      </div>
      <Sheros />
    </div>
  )
}

export default HeroSection
