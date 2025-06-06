import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    
    <div
      id="contact"
      className="relative text-white py-20 font-[Poppins] px-6 md:px-16 lg:px-24"
      style={{
        backgroundImage: `
          url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80'),
          linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))
        `,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Optional: Slight overlay animation */}
      <h3
  className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-14 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-lg relative inline-block"
  style={{
    backgroundSize: '200% auto',
    animation: 'gradientShift 3s linear infinite',
  }}
>
  Contact
  <span
    className="block h-1 w-24 mx-auto mt-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
  ></span>

  <style>{`
    @keyframes gradientShift {
      0% {
        background-position: 0% center;
      }
      100% {
        background-position: 200% center;
      }
    }
  `}</style>
</h3>

      <div className="absolute inset-0 bg-black opacity-60 animate-pulse-slow pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-center gap-12">
        {/* Contact Info */}
        
        <div className="flex-1 max-w-md bg-gray-900 bg-opacity-80 rounded-xl p-8 shadow-lg backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Let's Talk
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I'm open to discussing web development projects or partnership opportunities!
          </p>

          <div className="flex items-center mb-6 space-x-3">
            <FaEnvelope className="text-green-400 text-xl" />
            <a
              href="mailto:samikshamangle21191@gmail.com"
              className="hover:underline text-gray-200"
            >
              samikshamangle21191@gmail.com
            </a>
          </div>

          <div className="flex items-center mb-6 space-x-3">
            <FaPhoneAlt className="text-green-400 text-xl" />
            <span className="text-gray-200">+91 9307194544</span>
          </div>

          <div className="flex items-center space-x-3">
            <FaMapMarkedAlt className="text-green-400 text-xl" />
            <span className="text-gray-200">Pune, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 max-w-lg bg-gray-900 bg-opacity-80 rounded-xl p-8 shadow-lg backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md bg-gray-800 bg-opacity-70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                placeholder="Enter Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md bg-gray-800 bg-opacity-70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                placeholder="Enter Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 rounded-md bg-gray-800 bg-opacity-70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                placeholder="Enter Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
