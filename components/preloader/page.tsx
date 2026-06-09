"use client";

import "./preloader.css";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase, SplitText);

CustomEase.create("hop", "0.9, 0, 0.1, 1");

const Preloader = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      SplitText.create(".heading", {
        type: "chars",
        charsClass: "char",
        mask: "chars",
      });

      SplitText.create(".meta-block p", {
        type: "lines",
        linesClass: "line",
        mask: "lines",
      });

      const tl = gsap.timeline({
        delay: 1,
      });

      tl.to(".heading .char", {
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "expo.out",
      }).to(
        ".meta-block .line",
        {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "expo.out",
          onComplete: () => {
            gsap.set(".line-mask", {
              clearProps: "overflow",
              overflowY: "hidden",
            });
          },
        },
        "<0.25",
      );

      tl.to(".meta-block .line", {
        xPercent: -200,
        duration: 1,
        ease: "hop",
      }).to(
        ".preloader-overlay .heading",
        {
          xPercent: 29,
          clipPath: "polygon(0% 0%, 21% 0%, 21% 100%, 0% 100%)",
          duration: 1,
          ease: "hop",
        },
        "<",
      );

      tl.to(".heading .char", {
        yPercent: -100,
        duration: 1,
        stagger: 0,
        ease: "hop",
      })
        .to(
          ".meta-block .line",
          {
            onStart: () => {
              gsap.set(".line-mask", {
                overflowY: "clip",
              });
            },
            yPercent: -100,
            duration: 1,
            stagger: {
              from: "end",
              each: 0,
            },
            ease: "hop",
          },
          "<",
        )
        .to(
          scope.current,
          {
            clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
            ease: "hop",
            duration: 1.2,
          },
          "<",
        );
    },
    { scope },
  );
  return (
    <div className="preloader-overlay" ref={scope}>
      <div className="text-block">
        <h1 className="heading">NOLAN</h1>
        <div className="meta-block">
          <p>
            Evelyn Nolan.
            <br />
            Interior Architect,
            <br />
            Material Researcher
            <br />
            and Design Lead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
