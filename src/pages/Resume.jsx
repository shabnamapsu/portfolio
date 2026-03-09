import React from "react";
import { Link } from "react-router-dom";

import {
  educationData,
  experienceData,
  projectsData,
  skillSets,
} from "../assets/assets.js";

function Resume() {
  return (
    <div className="w-full bg-gray-100 min-h-screen flex justify-center py-10">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Resume</h1>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🎓 Education</h2>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 mb-4 rounded-lg shadow border-l-4 border-blue-500"
            >
              <h3 className="font-bold text-lg">{edu.degree}</h3>
              <p className="text-gray-700">
                {edu.institution}, {edu.location}
              </p>
              <span className="text-sm text-gray-500">{edu.timeline}</span>
              <p className="text-gray-600 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">💼 Experience</h2>

          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 mb-4 rounded-lg shadow border-l-4 border-green-500"
            >
              <h3 className="font-bold text-lg">
                {exp.position} - {exp.company}
              </h3>
              <p className="text-gray-700">{exp.location}</p>
              <span className="text-sm text-gray-500">{exp.timeline}</span>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🛠 Skills</h2>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skillSets.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-100 p-2 rounded text-center shadow"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🚀 Projects</h2>

          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 mb-4 rounded-lg shadow border-l-4 border-purple-500"
            >
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>

              <p className="text-sm text-gray-500">
                Tech Stack: {project.techStack.join(", ")}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                🔗 View Project
              </a>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          {/* View Resume */}
          <Link
            to="/viewresume"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            👀 View Resume
          </Link>

          {/* Download Resume */}
          <a
            href="/sb.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            ⬇ Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
