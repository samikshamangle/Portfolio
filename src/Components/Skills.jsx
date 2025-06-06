import React from 'react';

const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Creating visually appealing and user-friendly web designs. Capable of designing wireframes, prototypes, and final UI components that align with brand identity and improve user engagement.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces. Familiar with version control systems like Git, frontend tooling and performance optimization techniques.",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Developing robust server-side logic and databases. Proficient in Node.js, Express, MongoDB, and MySQL. Skilled in API design, authentication, and performance optimization.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description:
      "Combining frontend and backend development skills. Experienced with HTML, CSS, JavaScript, ReactJS, Node.js, and MongoDB to build full-stack applications.",
  },
  {
    id: 5,
    title: "Content Writing",
    description:
      "Crafting high-quality content for businesses and organizations tailored to branding, SEO, and audience engagement.",
  },
  {
    id: 6,
    title: "Machine Design",
    description:
      "Expert in mechanical system design, CAD modeling, and analysis using tools like AutoCAD, SolidWorks, and CAM software.",
  },
];

const educationList = [
  {
    degree: "B.E in Mechanical Engineering",
    institution: "P.R. Pote Patil College of Engineering, Amravati",
    year: "2023",
    percentage: "84.55%",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Government Polytechnic, Amravati",
    year: "2020",
    percentage: "69.06%",
  },
  {
    degree: "S.S.C.",
    institution: "Late M.M. Vidhyalaya, Kumbhargaon",
    year: "2015",
    percentage: "87.60%",
  },
];

const Service = () => {
  return (
    <div
      className="text-white py-20 font-[Poppins] bg-fixed bg-cover bg-center"
      id="about"
      style={{
        backgroundImage: `
          url('https://www.transparenttextures.com/patterns/stardust.png'),
          url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="backdrop-blur-sm bg-black/70">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          {/* Skills Section */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-900/80 px-7 py-6 rounded-xl hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 border border-gray-700"
              >
                <div className="text-2xl font-bold text-right text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400">
                  {service.id.toString().padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 tracking-wide">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-medium text-green-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Education
          </h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-gray-900/80 rounded-xl p-6 shadow-lg border border-gray-700"
              >
                <h4 className="text-2xl font-semibold mb-2 text-green-400">
                  {edu.degree}
                </h4>
                <p className="text-gray-300 mb-1 font-medium">{edu.institution}</p>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>{edu.year}</span>
                  <span>{edu.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
