import "./../LandingPage/SlickSlider/css/SlickSlider.css"
import SlickSlider from '../LandingPage/SlickSlider/SlickSlider';

import React from 'react';
import Slider from './Slider/Slider';
import Touts from "./Touts/Touts";
import MaxContainer from "./MaxContainer/MaxContainer";

function LandingPage() {
  return (
    <div>
      <Slider />
      <div className="container mt-5 carousel">
        <h2 className="slider_title">MAKING SKIN &amp; SPIRITS BRIGHT </h2>
        <p className="title-desc">Give the gift of smoothing, hydrating, and glow-giving faves </p>
        <SlickSlider />
      </div>
      <Touts />
      <MaxContainer />
    </div>
  );
}

export default LandingPage;
