import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative text-white py-12 font-[Poppins]"
      style={{
        backgroundImage: `
          url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80'),
          url('https://www.transparenttextures.com/patterns/dark-mosaic.png')`,
        backgroundBlendMode: 'overlay, multiply',
        backgroundSize: 'cover, auto',
        backgroundPosition: 'center, center',
      }}
    >
      {/* Overlay for darkening background */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative container mx-auto px-8 md:px-16 lg:px-24">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-8 md:mb-12">
          {/* About */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-3xl font-extrabold mb-3 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Samiksha
            </h3>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Full Stack Developer based in India, specializing in web and software development.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="flex-1 max-w-md w-full">
            <form className="flex rounded-lg overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow p-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 font-semibold hover:scale-105 transform transition-transform duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Samiksha. All rights reserved.</p>

          <div className="flex space-x-6 text-lg">
            <a
              href="https://www.facebook.com/samiksha.mangle.1"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/samiksha-mangle-330a4327b"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/samiksha_mangle"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/samikshamangle"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          <div className="text-center md:text-right">
            <a
              href="#"
              className="hover:underline hover:text-white transition-colors"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="hover:underline hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
