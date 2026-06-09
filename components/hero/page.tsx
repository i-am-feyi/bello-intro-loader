"use client";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero border border-blue-500">
      <div className="nav">
        <div className="logo">EVELYN NOLAN</div>
        <div className="links">
          <a href="">Works</a>
          <a href="">Playground</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className="hero-content gap-24">
        <div className="max-w-xs flex flex-col justify-between pt-4">
          <p>
            Won several awards and mentions from renowned industry players. I can&apos;t
            wait to see what the future holds as I continue to innovate and create.
          </p>
          <p>Milan, Italy.</p>
        </div>
        <div className="max-w-6xl">
          <h1>Architect and Interior Designer currently based in Milan.</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
