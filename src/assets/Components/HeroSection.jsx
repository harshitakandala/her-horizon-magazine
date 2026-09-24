import React from 'react'
import './HeroSection.css'
import bg from '../background_hero.png'
/*import img1 from '../img1.png'*/
import img2 from '../img2.jpeg'
import img3 from '../img3.jpeg'
import img4 from '../img4.jpeg'
import { Link } from "react-router-dom";
import Sheros from "./Sheros.jsx";


const articles = [
  { id: 1, title: "First Article" },
];

const HeroSection = () => {
  return (
    <div>
      <div className='herocontainer'>
        <img src={bg} alt="background" className='background' />
      {/*<div className='heroimages'>
        <img src={img2} alt="image2" className='image2' />
        <img src={img3} alt="image3" className='image3' />
        <img src={img4} alt="image4" className='image4' />
      </div>
      <div className='logotext'>
        <h1 className='her'>Her</h1>
        <h1 className='horizon'>Horizon</h1>
      </div>
      <div className='slogan'>
        <h1>EMPOWERED WOMEN</h1>
        <h1>EMPOWER WOMEN.</h1>
      </div>
      
      <h1>Articles</h1>
      {articles.map((a) => (
        <div key={a.id}>
          <h2>{a.title}</h2>
          <Link to={`/article/${a.id}`}>Read more</Link>
        </div>
      ))}*/}
      </div>
      <Sheros />
    </div>
  )
}

export default HeroSection
