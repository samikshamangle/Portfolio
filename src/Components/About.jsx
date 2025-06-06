import React from 'react';
import AboutImage from '../assets/aboutme-image.png';

const About = () => {
  return (
   <section
  id="about"
  className="relative text-white font-[Poppins] py-20 overflow-hidden"
  style={{
    backgroundImage: `
      url('https://www.transparenttextures.com/patterns/diagmonds-light.png'),
      url('https://images.unsplash.com/photo-1581093588401-7c5c9c182c44?auto=format&fit=crop&w=1600&q=80')
    `,
    backgroundBlendMode: 'overlay',
    backgroundColor: '#0f172a',
    backgroundSize: 'auto, cover',
    backgroundPosition: 'top left, center',
    backgroundRepeat: 'repeat, no-repeat'
  }}
>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24">
        <h3
          className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-14 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-lg relative inline-block"
          style={{
            backgroundSize: '200% auto',
            animation: 'gradientShift 3s linear infinite',
          }}
        >
          About
          <span className="block h-1 w-24 mx-auto mt-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></span>

          <style>{`
            @keyframes gradientShift {
              0% { background-position: 0% center; }
              100% { background-position: 200% center; }
            }
          `}</style>
        </h3>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Profile Image */}
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 shadow-lg border-4 border-green-400"
          />

          {/* Text and Skill Bars */}
          <div className="flex-1">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I am a passionate full-stack developer focused on creating modern, responsive, and accessible web applications.
              I enjoy transforming complex UI/UX concepts into practical, beautiful solutions. <br /><br />
              I continuously enhance my knowledge through workshops and self-learning, staying updated with the latest in web development. My strengths lie in semantic HTML, responsive design, REST APIs, and collaborative Agile practices. Also experienced in building scalable web applications using Node.js and Express, managing MySQL and MongoDB databases, and developing secure REST APIs. Skilled in optimizing server-side logic and ensuring robust data handling.
            </p>

            <div className="space-y-5">
              {[
                { label: 'HTML & CSS', width: 'w-10/12' },
                { label: 'React JS', width: 'w-11/12' },
                { label: 'Node JS', width: 'w-10/12' },
              ].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <label className="w-2/12">{skill.label}</label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ${skill.width} transform transition-transform duration-300 hover:scale-105`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center text-center">
              <div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
