import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 sm:px-8 md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-br from-[#050414] via-[#0d081f] to-[#050414] relative overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wider relative inline-block">
          EDUCATION
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-full animate-pulse"></span>
        </h2>
        <p className="text-gray-400 mt-6 text-base sm:text-lg md:text-xl font-medium">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-purple-500 via-transparent to-purple-500 h-full"></div>

        {/* Timeline Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Content Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl bg-[#0d081f] border border-gray-700 shadow-[0_0_15px_rgba(130,69,236,0.3)] backdrop-blur-md transform transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,140,0,0.6)] ${
                index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
              } ml-8`}
            >
              <div className="flex items-center space-x-6">
                {/* School Logo */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden flex-shrink-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree & School */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-gray-300 text-sm sm:text-md">{edu.school}</h4>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade & Description */}
              <p className="mt-4 text-gray-400 font-semibold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Background Glows */}
      <div className="absolute -z-10 w-[200px] h-[200px] bg-purple-700 rounded-full opacity-20 top-10 left-1/3 animate-pulse"></div>
      <div className="absolute -z-10 w-[150px] h-[150px] bg-orange-500 rounded-full opacity-10 bottom-10 right-1/4 animate-pulse"></div>
    </section>
  );
};

export default Education;
