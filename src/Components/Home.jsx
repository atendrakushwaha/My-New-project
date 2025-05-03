
import React from "react";
import image from "../assets/image.png";
import Devider from "./Devider";
import Slider from "./Slider";
// import Three from "./Three";
export default function LandingPage() {
    return (
      <div className=" bg-gradient-to-r from-blue-50 to-white font-sans pb-10">
        {/* Navbar
        <nav className="flex justify-between items-center px-10 py-6">
          <div className="text-xl font-bold text-gray-800">LOGO</div>
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
          </ul>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
            GET STARTED
          </button>
        </nav> */}
  
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-30 py-10">
          {/* Left Side Text */}
          <div className="max-w-md">
            <h1 className="text-7xl font-bold text-gray-800 leading-tight mb-4">
              Web <br />
              <span className="text-blue-900">Design</span> <br />
              <span className="text-teal-500">LANDING PAGE</span>
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
              LEARN MORE
            </button>
  
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6 text-xl text-gray-600">
              <i className="fab fa-instagram hover:text-teal-500"></i>
              <i className="fab fa-twitter hover:text-teal-500"></i>
              <i className="fab fa-facebook hover:text-teal-500"></i>
            </div>
          </div>
  
          {/* Right Side Image */}
          <div className="mt-20 md:mt-0 w-full md:w-1/2 flex justify-center">
            <img
              src={image}
              
              alt="Web Design Illustration"
              className="max-w-full w-[600px]"
            />
          </div>
        </section>
        <Devider/>
        {/* <Slider/> */}
        {/* <Three/> */}
      </div>
    );
  }
  