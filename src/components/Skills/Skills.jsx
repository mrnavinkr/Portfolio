// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-6 sm:px-8 md:px-[7vw] lg:px-[20vw] font-sans
    bg-gradient-to-br from-[#050414] via-[#0d081f] to-[#050414]
    relative overflow-hidden"
  >
    {/* Section Title */}
    <div className="text-center mb-14 animate-fadeInUp">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide relative inline-block">
        SKILLS
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-full animate-pulse"></span>
      </h2>

      <p className="text-gray-400 mt-6 text-base sm:text-lg md:text-xl font-medium">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 justify-between relative">
      {/* Background glow */}
      <div className="absolute -z-10 top-1/2 left-1/3 w-[300px] h-[300px] bg-purple-700 opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute -z-10 top-2/3 right-1/4 w-[250px] h-[250px] bg-orange-500 opacity-10 blur-3xl animate-pulse"></div>

      {SkillsInfo.map((category, index) => (
        <div
          key={category.title}
          className="w-full sm:w-[48%] mb-10
          bg-[#0d081f] backdrop-blur-md px-6 sm:px-10 py-8
          rounded-2xl border border-white
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
          hover:shadow-[0_0_35px_rgba(255,140,0,0.6)]
          hover:-translate-y-2
          transition-all duration-500 ease-out
          animate-fadeInUp"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={800}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-2
                  border-2 border-gray-700 rounded-3xl
                  py-2 px-3 sm:py-3 sm:px-4
                  text-center
                  hover:border-purple-500
                  hover:bg-purple-500/10
                  hover:scale-110
                  transition-all duration-300 ease-in-out
                  animate-fadeInUp"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
