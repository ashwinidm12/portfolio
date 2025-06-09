import React from "react";
import AboutImage from "../assets/images/dp-kanch.jpg";
import { FaDev, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          My Resume
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
                Skills
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>ReactJS</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Firebase</li>
                <li>Redux</li>
                <li>REST API</li>
                <li>HTML, CSS, JavaScript</li>
                <li>c-programing,DSA</li>
                <li>java(oopj)</li>
                <li>figma</li>
                <li>Git</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Education
              </h3>
              <p className="font-medium">Bachelors Of Engineering</p>
              <p>Computer Science and Engineering</p>
              <p>Student at Malnad College of Engineering,Hassan</p>
              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Certification
              </h3>
              <p className="font-medium">
                Prompt Engineering for ChatGPT
              </p>
              <p>Great Learning Academy(2024)</p>
              <p>Soft Skill Development</p>
              <p>NPTEL(2024)</p>
              <p>Software Testing</p>
              <p>NPTEL(2024)</p>
              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Projects
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    className="text-primary"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer">
                    NoteSync
                  </a>{" "}
                  - A full-stack e-learning website with features like notes,PYQ's,Quora,Amptitude.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer">
                    Personal-Portfolio
                  </a>{" "}
                  - A full-stack personal-portfolio website with features like downloadable resume and personal information.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer">
                    sign Language to Text generator
                  </a>{" "}
                  - Real time sign language to text conversion with emergency assistance
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ashwini-d-m-526a94267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary">
                   Build a free website with WordPress
                  </a>{" "}
                  - On online non-credit project authorized by Coursera Project Network and offered through coursera
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center sm:mb-0 mb-4">
            <img
              src={AboutImage}
              alt="Saam Sheron"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4 border-primary"
            />
            <p className="text-xl font-medium">Ashwini D M</p>
            <p className="text-lg text-secondary">
              MERN Stack Developer | Software Developer 
            </p>
            <a
              href="mailto:dmashwini40@example.com"
              className="text-lg text-primary mt-4 block">
              dmashwini40@gmail.com
            </a>
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/ashwini-d-m-526a94267"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-[#0077B5] hover:text-secondary" />
              </a>
              <a
                href="https://github.com/ashwinidm12/ashwinidm12"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="text-2xl text-[#333] hover:text-secondary" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-[#E4405F] hover:text-secondary" />
              </a>
              <a
                href="h#"
                target="_blank"
                rel="noopener noreferrer">
                <FaDev className="text-2xl  hover:text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
