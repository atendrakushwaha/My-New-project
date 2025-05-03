import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    title: "Slide One",
    image: "https://source.unsplash.com/random/800x600?nature",
  },
  {
    id: 2,
    title: "Slide Two",
    image: "https://source.unsplash.com/random/800x600?city",
  },
  {
    id: 3,
    title: "Slide Three",
    image: "https://source.unsplash.com/random/800x600?technology",
  },
];

export default function Slider() {
  const containerRef = useRef();
  const slideRefs = useRef([]);

  useEffect(() => {
    gsap.to(slideRefs.current, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (slides.length - 1),
        end: () => `+=${containerRef.current.offsetWidth}`,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-screen overflow-hidden relative bg-black"
    >
      <div
        className="flex h-full"
        style={{ width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => (slideRefs.current[index] = el)}
            className="w-screen h-screen flex items-center justify-center flex-shrink-0"
          >
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-10 text-white text-4xl font-bold drop-shadow">
                {slide.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
