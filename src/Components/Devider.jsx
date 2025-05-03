import React, { useEffect, useRef } from 'react';
import { FaNode, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { MdOutlineSettingsApplications } from 'react-icons/md';
import gsap from 'gsap';

const icons = [
  MdOutlineSettingsApplications,
  FaNode,
  RiTailwindCssFill,
  FaReact,
  SiMongodb,
];

const Devider = () => {
  const trackRef = useRef();

  useEffect(() => {
    const track = trackRef.current;

    gsap.to(track, {
      x: '-100%', // move the full width
      duration: 30, // slower speed
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-700 py-6" style={{ fontFamily: 'Pacifico' }}>
      <div className="w-full whitespace-nowrap">
        <div
          ref={trackRef}
          className="flex gap-24 text-white text-7xl w-max"
        >
          {/* Duplicate icons to make seamless loop */}
          {[...icons, ...icons, ...icons].map((Icon, index) => (
            <div key={index}>
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devider;
