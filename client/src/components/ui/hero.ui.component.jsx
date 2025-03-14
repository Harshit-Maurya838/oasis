import React from 'react'
import heroImg from "/img/hero/hero.png";
import hero2Img from "/img/hero/hero_2.png";
import hero3Img from "/img/hero/hero_3.png";
import '../../styles/utils/utils.styles.css';
import "../../styles/hero/main.hero.styles.css";
import "../../styles/utils/animations.utils.styles.css";
import SplitText from "../animatedUtils/splitText.animatedUtils.component";

const HeroSection = () => {
  return (
    <section id="hero">
        <div className='hero_text'>
            <h1 className='text-18-semibold spreadIn'>FURNITURE STORE</h1>
            {/* <p className='heading-02'>Discover the Artistry of Modern <br></br> Contemporary Furniture</p> */}
            <SplitText 
              text='Discover the Artistry of Modern'
              className='heading-02'
              delay={25}
              rootMargin='10px'
            />
            <SplitText 
              text='Contemporary Furniture'
              className='heading-02'
              delay={50}

            />
            <p className='text-20-regular fadein'>Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for <br />ultimate relaxation</p>
        </div>
        <div className="container fadein">
            <picture>
                <source srcSet={hero3Img} media="(max-width: 393px)" />
                <source srcSet={hero2Img} media="(min-width: 393px) and (max-width: 834px)" />
                <img src={heroImg} alt="Furniture Store" />
            </picture>
        </div>
    </section>
  )
}

export default HeroSection
