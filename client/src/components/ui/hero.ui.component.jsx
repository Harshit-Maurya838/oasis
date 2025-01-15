import React from 'react'
import heroImg from "/img/hero/hero.png";
import '../../styles/utils/utils.styles.css';
import "../../styles/hero/main.hero.styles.css";

const HeroSection = () => {
  return (
    <section id="hero">
        <div className='hero_text'>
            <h1 className='text-18-semibold'>FURNITURE STORE</h1>
            <p className='heading-02'>Discover the Artistry of Modern <br></br> Contemporary Furniture</p>
            <p className='text-20-regular'>Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for <br />ultimate relaxation</p>
        </div>
        <div className="container">
            <img src={heroImg} alt="" />
        </div>
    </section>
  )
}

export default HeroSection
