import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw]">

      {/* 🌬 Air Flow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/10 to-transparent animate-pulse"></div>

      {/* 🔥 Fire Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-orange-600 to-purple-700"></div>

      <div className="relative container mx-auto text-center z-10">

        {/* Name */}
        <h2 className="text-2xl font-bold text-purple-500 tracking-wide
        hover:text-orange-400 transition-colors duration-300">
          Navin Raj
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-5 sm:gap-8 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative text-gray-400 text-sm sm:text-base
              transition-all duration-300
              hover:text-orange-400
              hover:-translate-y-1   /* 🌬 air lift */
              after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px]
              after:bg-gradient-to-r after:from-yellow-400 after:to-red-600
              hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-7 mt-9">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/1KWcV31JbS/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/navin-kumar-744681264" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/royal__navin__raj?igsh=dWxocmt2NzNob3M5" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400
              transition-all duration-300
              hover:text-orange-400
              hover:scale-125        /* 🌬 air zoom */
              hover:-translate-y-1   /* 🌬 float */
              hover:drop-shadow-[0_0_15px_rgba(255,140,0,0.9)]  /* 🔥 fire glow */"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-700 to-transparent mt-10"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-6 tracking-wide">
          © 2026 <span className="text-orange-400">Navin Raj</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
