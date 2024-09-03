"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function About() {
  const itemsRef = useRef([]);

  const setRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const items = itemsRef.current;

    const handleMouseEnter = (e) => {
      const image = e.currentTarget.querySelector("img");
      gsap.to(image, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = (e) => {
      const image = e.currentTarget.querySelector("img");
      gsap.to(image, { opacity: 0, duration: 0.3 });
    };

    const handleMouseMove = (e) => {
      const image = e.currentTarget.querySelector("img");
      gsap.set(image, {
        x:
          e.clientX -
          e.currentTarget.getBoundingClientRect().left -
          image.width / 2,
        y:
          e.clientY -
          e.currentTarget.getBoundingClientRect().top -
          image.height / 2,
      });
    };

    items.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      items.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <div id="about" className="blocco">
      <div className="about-container">
        <div className="about-title">
          <ul>
            <li ref={setRef} className="item">
              SERGIO ALLUSHAJ
              <Image
                src="/Me.jpg"
                alt="Sergio Allushaj"
                width={400}
                height={550}
                style={{ opacity: 0 }}
              />
            </li>
          </ul>
        </div>
        <p>
          Hey, my name is Allushaj Sergio and I use Vantablack as my nickname
          across social medias. I'm a graphic designer, UX/UI designer & <br />
          front-end web developer from Italy. I'm passionate about creating
          <br />
          beautiful and functional websites that provide a great user <br />
          experience.
        </p>
      </div>
    </div>
  );
}
