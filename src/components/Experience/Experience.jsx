import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-8 md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-br from-[#050414] via-[#0d081f] to-[#050414] relative overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wider inline-block relative">
          EXPERIENCE
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-full animate-pulse"></span>
        </h2>
        <p className="text-gray-400 mt-6 text-base sm:text-lg md:text-xl font-medium">
          A collection of my work experience and roles in various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-purple-500 via-transparent to-purple-500 h-full"></div>

        {/* Timeline Items */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-20 relative ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-14 sm:w-16 h-14 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] transition-all duration-500 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 p-1">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl bg-[#0d081f] border border-gray-700 shadow-lg backdrop-blur-md transform transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,140,0,0.6)] ${
                index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
              } ml-0 sm:ml-0`}
            >
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Company Logo */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role & Company */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-gray-300 text-sm sm:text-base">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-sm sm:text-base">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white text-sm sm:text-base">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 text-xs sm:text-sm rounded-full mr-2 mb-2 border border-gray-400 hover:scale-105 transform transition duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Background Glows */}
      <div className="absolute -z-10 w-[250px] h-[250px] bg-purple-700 rounded-full opacity-20 top-10 left-1/4 animate-pulse"></div>
      <div className="absolute -z-10 w-[200px] h-[200px] bg-orange-500 rounded-full opacity-10 bottom-10 right-1/3 animate-pulse"></div>
    </section>
  );
};

export default Experience;
