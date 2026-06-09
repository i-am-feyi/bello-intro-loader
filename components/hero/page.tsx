"use client";

import "./hero.css";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase, SplitText);

CustomEase.create("hop", "0.9, 0, 0.1, 1");

const Hero = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      const splitTexts = SplitText.create("p, h1, a, .logo", {
        type: "lines",
        linesClass: "line",
        mask: "lines",
      });

      console.log(splitTexts);

      gsap.set(".line", {
        y: "100%",
        opacity: 0,
      });

      const tl = gsap.timeline();

      tl.to(".line", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "hop",
        delay: 4,
      });
    },
    { scope },
  );
  return (
    <div className="hero border" ref={scope}>
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
