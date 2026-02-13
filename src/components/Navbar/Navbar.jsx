import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-[7vw] md:px-[7vw] lg:px-[20vw] transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 text-white">

        {/* Flashy Logo */}
        <div className="text-xl font-bold cursor-pointer tracking-wide relative">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400
            bg-clip-text text-transparent
            animate-gradient-x
            transition-all duration-500"
          >
            &lt;Navin/<span className="text-white">Raj</span>&gt;
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-[#8245ec]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>

              {/* Underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#8245ec] transition-all duration-300
                ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com/mrnavinkr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/navin-kumar-744681264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-1/2 -translate-x-1/2 w-[90%]
        bg-[#050414]/80 backdrop-blur-lg rounded-xl shadow-lg
        transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="hover:text-[#8245ec] transition text-sm"
              >
                {item.label}
              </button>
            </li>
          ))}
          <div className="flex gap-4 pt-2">
            <FaGithub size={22} className="hover:text-[#8245ec] transition" />
            <FaLinkedin size={22} className="hover:text-[#8245ec] transition" />
          </div>
        </ul>
      </div>

      {/* Gradient Animation */}
      <style>
        {`
          @keyframes gradient-x {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
