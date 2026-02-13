import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Navin Raj
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Data Sc.Engineer',
                'Frontend Developer',
                'UI/UX Designer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Data Science Engineer with 2+ years
            of experience in data analysis, machine learning,
            and data pipelines. I specialize in Python, SQL, and
            modern data tools to turn raw data into actionable insights
            and scalable solutions.
          </p>

          <a
            href="https://drive.google.com/file/d/1OtsToB2TCGEARcbc8jyqM-DNuiY9a-pS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          
          {/* 🔥 Fire Effect Wrapper (ADDED) */}
          <div className="relative group">
            
            {/* 🔥 Glow / Fire Layer (ADDED) */}
            <div
              className="absolute -inset-2 rounded-full
              bg-gradient-to-r from-yellow-400 via-orange-600 to-red-700
              blur-2xl opacity-60
              group-hover:opacity-100
              group-hover:animate-pulse
              transition-all duration-500"
            ></div>

            {/* Original Tilt (UNCHANGED) */}
            <Tilt
              className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 
              border-4 border-purple-700 rounded-full z-10"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Navin Raj"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
