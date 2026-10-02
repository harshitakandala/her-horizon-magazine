import React from 'react'
import { Link } from "react-router-dom";
import img1 from '../ramabai.jpg'
import './Sheros.css'

const articles = [
  {
    id: 1,
    title: "Pandita Ramabai",
    articlename: "PanditaRamabai",
    image: img1,
    description: "If education were given to women, it would be impossible for men..."
  }
];

function Sheros() {
  return (
    <div className='sheros-section'>
    <h1 className='sheros-heading'><br></br>The Forgotten Sheroes of India</h1>
    <div className='cards-container'>
      {articles.map((article) => (
        <Link to={`/article/${article.articlename}`} key={article.id}>
        <div className="card">
          <img src={article.image} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <span>Read more</span>
        </div>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Sheros
