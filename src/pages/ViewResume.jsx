import React from "react";
import {
  educationData,
  experienceData,
  projectsData,
  skillSets,
} from "../assets/assets";


function ViewResume() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-10">

        {/* Header */}
        <div className="text-center border-b pb-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Shabnam Bano</h1>
          <p className="text-lg text-gray-600">MERN Stack Developer</p>
          <p className="text-gray-500 mt-2">
            📧 shabnambnao527@gmail.com | 📱 7489480732
          </p>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
            🎓 Education
          </h2>

          {educationData.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-lg">{edu.degree}</h3>
              <p className="text-gray-700">
                {edu.institution}, {edu.location}
              </p>
              <p className="text-sm text-gray-500">{edu.timeline}</p>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
            💼 Experience
          </h2>

          {experienceData.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-lg">
                {exp.position} - {exp.company}
              </h3>
              <p className="text-gray-700">{exp.location}</p>
              <p className="text-sm text-gray-500">{exp.timeline}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
            🛠 Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skillSets.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
            🚀 Projects
          </h2>

          {projectsData.map((project, index) => (
            <div key={index} className="mb-4">
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

        {/* Download Resume */}
        <div className="text-center mt-6">
          <a
            href="/sb.pdf"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            ⬇ Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}

export default ViewResume;