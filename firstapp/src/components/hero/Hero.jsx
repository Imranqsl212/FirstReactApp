import React from "react";
import "./hero.css";
import dish from '../../assets/img/header/dish.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h2 className="left-heading">
          Eat Well Only In <br /> Uber Eats
        </h2>
        <p className="left-paragraph">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <button class="btn success">Get Started</button>
        <button class="btn info">Log In</button>
      </div>
      <div className="right">
        <img className="right__img" src={dish} alt="" />
      </div>
    </div>
  );
};

export default Hero;
