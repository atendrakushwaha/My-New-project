import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import SimplexNoise from "simplex-noise";
import chroma from "chroma-js";
// import "tailwindcss/tailwind.css";

const Three = () => {
  const canvasRef = useRef(null);
  const [noiseCoef, setNoiseCoef] = useState(50);
  const [heightCoef, setHeightCoef] = useState(10);
  const [lights, setLights] = useState({
    light1Color: "#0E09DC",
    light2Color: "#1CD1E1",
    light3Color: "#18C02C",
    light4Color: "#ee3bcf",
  });

  useEffect(() => {
    const conf = {
      fov: 75,
      cameraZ: 75,
      xyCoef: noiseCoef,
      zCoef: heightCoef,
      lightIntensity: 0.9,
      ambientColor: 0x000000,
      ...lights,
    };
    init(conf);
  }, [noiseCoef, heightCoef, lights]);

  const init = (conf) => {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    const camera = new THREE.PerspectiveCamera(conf.fov);
    camera.position.z = conf.cameraZ;

    let width, height, wWidth, wHeight;
    const simplex = new SimplexNoise();

    const mouse = new THREE.Vector2();
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mousePosition = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();

    let plane;
    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const wsize = getRendererSize();
      wWidth = wsize[0];
      wHeight = wsize[1];
    };

    const getRendererSize = () => {
      const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
      const vFOV = (cam.fov * Math.PI) / 180;
      const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
      const width = height * cam.aspect;
      return [width, height];
    };

    const initScene = () => {
      const scene = new THREE.Scene();
      initLights(scene, conf);
      const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
      const geo = new THREE.PlaneBufferGeometry(wWidth, wHeight, wWidth / 2, wHeight / 2);
      plane = new THREE.Mesh(geo, mat);
      scene.add(plane);

      plane.rotation.x = -Math.PI / 2 - 0.2;
      plane.position.y = -25;
      camera.position.z = 60;

      animate(scene, renderer, camera, plane, simplex, conf);
    };

    const initLights = (scene, conf) => {
      const r = 30;
      const y = 10;
      const lightDistance = 500;

      const light1 = new THREE.PointLight(conf.light1Color, conf.lightIntensity, lightDistance);
      light1.position.set(0, y, r);
      scene.add(light1);
      const light2 = new THREE.PointLight(conf.light2Color, conf.lightIntensity, lightDistance);
      light2.position.set(0, -y, -r);
      scene.add(light2);
      const light3 = new THREE.PointLight(conf.light3Color, conf.lightIntensity, lightDistance);
      light3.position.set(r, y, 0);
      scene.add(light3);
      const light4 = new THREE.PointLight(conf.light4Color, conf.lightIntensity, lightDistance);
      light4.position.set(-r, y, 0);
      scene.add(light4);
    };

    const animate = (scene, renderer, camera, plane, simplex, conf) => {
      requestAnimationFrame(() => animate(scene, renderer, camera, plane, simplex, conf));

      animatePlane(plane, simplex, conf);
      animateLights(conf);
      renderer.render(scene, camera);
    };

    const animatePlane = (plane, simplex, conf) => {
      const gArray = plane.geometry.attributes.position.array;
      const time = Date.now() * 0.0002;
      for (let i = 0; i < gArray.length; i += 3) {
        gArray[i + 2] = simplex.noise4D(gArray[i] / conf.xyCoef, gArray[i + 1] / conf.xyCoef, time, mouse.x + mouse.y) * conf.zCoef;
      }
      plane.geometry.attributes.position.needsUpdate = true;
    };

    const animateLights = (conf) => {
      const time = Date.now() * 0.001;
      const d = 50;
      light1.position.x = Math.sin(time * 0.1) * d;
      light1.position.z = Math.cos(time * 0.2) * d;
      light2.position.x = Math.cos(time * 0.3) * d;
      light2.position.z = Math.sin(time * 0.4) * d;
      light3.position.x = Math.sin(time * 0.5) * d;
      light3.position.z = Math.sin(time * 0.6) * d;
      light4.position.x = Math.sin(time * 0.7) * d;
      light4.position.z = Math.cos(time * 0.8) * d;
    };

    const updateLightsColors = () => {
      const newLights = {
        light1Color: chroma.random().hex(),
        light2Color: chroma.random().hex(),
        light3Color: chroma.random().hex(),
        light4Color: chroma.random().hex(),
      };
      setLights(newLights);
    };

    window.addEventListener("resize", updateSize);
    document.addEventListener("mousemove", (e) => {
      const v = new THREE.Vector3();
      camera.getWorldDirection(v);
      v.normalize();
      mousePlane.normal = v;
      mouse.x = (e.clientX / width) * 2 - 1;
      mouse.y = -(e.clientY / height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(mousePlane, mousePosition);
    });

    updateSize();
    initScene();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white text-black">
      <header className="masthead mb-auto w-full flex justify-between p-4">
        <h3 className="masthead-brand">Background #1</h3>
        <nav className="nav">
          <a className="text-lg" href="https://codepen.io/soju22/" target="_blank" rel="noopener noreferrer">Codepen Profile</a>
          <a className="text-lg ml-4" href="https://codepen.io/collection/AGZywR" target="_blank" rel="noopener noreferrer">ThreeJS Collection</a>
        </nav>
      </header>

      <main className="inner cover text-center">
        <h2 className="text-3xl font-semibold">Interactive Background</h2>
        <p className="lead mt-2">This simple interactive background is made with <a href="https://threejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-500">ThreeJS</a> and Simplex noise.</p>

        <form className="mt-6 max-w-lg mx-auto space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="noiseInput" className="block">Noise Coef</label>
              <input
                type="range"
                min="1"
                max="100"
                className="w-full"
                id="noiseInput"
                value={noiseCoef}
                onChange={(e) => setNoiseCoef(101 - e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="heightInput" className="block">Height Coef</label>
              <input
                type="range"
                min="1"
                max="100"
                className="w-full"
                id="heightInput"
                value={heightCoef * 100 / 25}
                onChange={(e) => setHeightCoef(e.target.value * 25 / 100)}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="bg-gray-700 text-white py-2 px-4 rounded"
              onClick={updateLightsColors}
            >
              Random Colors
            </button>
          </div>
        </form>
      </main>

      <footer className="mastfoot mt-auto">
        {/* Add Footer if needed */}
      </footer>

      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
    </div>
  );
};

export default Three;
