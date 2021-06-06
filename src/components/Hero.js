import React from "react";
import heroImageLarge from "../BGimage/hero-bg.jpg";
export default function Hero() {
  return (
    <header
      className='hero'
      id='Header_hero'
      style={{ background: `url(${heroImageLarge})` }}>
      <div className='header-details section'>
        <h1>
          breeding today,
          <br />
          tomorrow's frontliners
        </h1>
        <h2>Learning can and should always be fun!</h2>
        <a href='#Header_hero' className='hero-btn'>
          Sign up | Log in
        </a>
      </div>
    </header>
  );
}
