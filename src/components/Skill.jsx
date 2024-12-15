import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa"; // React Icons for illustrative purposes

const Skill = () => {
  return (
    <section id="skills" className="py-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* HTML */}
          <div className="text-center">
            <FaHtml5 className="w-20 h-20 mx-auto mb-4 text-orange-600" />
            <h3 className="text-lg font-semibold">HTML</h3>
            <p className="text-sm text-secondary">
              Building structured web content
            </p>
          </div>

          {/* CSS */}
          <div className="text-center">
            <FaCss3Alt className="w-20 h-20 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold">CSS</h3>
            <p className="text-sm text-secondary">
              Styling and layout for modern web designs
            </p>
          </div>

          {/* JavaScript */}
          <div className="text-center">
            <FaJs className="w-20 h-20 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <p className="text-sm text-secondary">
              Building interactive and dynamic web applications
            </p>
          </div>

          {/* React */}
          <div className="text-center">
            <FaReact className="w-20 h-20 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg font-semibold">React</h3>
            <p className="text-sm text-secondary">
              Building interactive UIs with state management
            </p>
          </div>

          {/* Node.js */}
          <div className="text-center">
            <FaNodeJs className="w-20 h-20 mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-semibold">Node.js</h3>
            <p className="text-sm text-secondary">
              Building scalable server-side applications
            </p>
          </div>

          {/* Firebase */}
          <div className="text-center">
            <img
              src="path_to_firebase_logo.png"
              alt="Firebase"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Firebase</h3>
            <p className="text-sm text-secondary">
              Backend-as-a-Service for fast app development
            </p>
          </div>

          {/* Redux */}
          <div className="text-center">
            <img
              src="path_to_redux_logo.png"
              alt="Redux"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Redux</h3>
            <p className="text-sm text-secondary">
              State management for React applications
            </p>
          </div>

          {/* Git */}
          <div className="text-center">
            <FaGitAlt className="w-20 h-20 mx-auto mb-4 text-orange-500" />
            <h3 className="text-lg font-semibold">Git</h3>
            <p className="text-sm text-secondary">
              Version control for collaborative software development
            </p>
          </div>

          {/* Figma */}
          <div className="text-center">
            <img
              src="path_to_figma_logo.png"
              alt="Figma"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Figma</h3>
            <p className="text-sm text-secondary">
              UI/UX design and prototyping tool
            </p>
          </div>

          {/* REST APIs */}
          <div className="text-center">
            <img
              src="path_to_rest_api_logo.png"
              alt="REST API"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">REST API</h3>
            <p className="text-sm text-secondary">
              Building robust API services for web applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
