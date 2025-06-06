import React from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 font-[Poppins]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
        
        {/* Profile Image */}
        <img
          src={HeroImage}
          alt="Samiksha Mangle"
          className="w-44 h-44 rounded-full object-cover shadow-lg border-4 border-green-400 mb-6 hover:scale-105 transition-transform duration-300"
        />
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
          I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Samiksha Mangle
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
          Full Stack Developer
        </p>
        
        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8 px-4">
          I specialize in building modern and responsive web applications. <br />
          Passionate about transforming complex UI ideas into smooth, functional experiences. <br />
          Thriving in collaborative, Agile-driven teams where innovation meets functionality.
        </p>

        {/* Resume Button */}
        <div>
          <a
            href="/Samiksha Mangle Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-110 transition-transform duration-300">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
