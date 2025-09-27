import React from "react";
import { educationData, experienceData, projectsData, skillSets } from "../assets/assets.js";

function Resume() {
  return (
    
    <div className="w-full bg-white md:h-[140%]">
      <div className="relative w-full min-h-screen">
        {/* Left Sidebar */}
        <div className="absolute left-0 md:h-[300%] w-full md:w-[25%] bg-gray-400 shadow-black">
          
        </div>

        {/* Main Content */}
        <div className="absolute md:left-20 w-full md:top-5 max-w-5xl py-20">
          <div className="flex flex-col w-full md:flex-row gap-12">
            <div className="flex flex-row w-2/2 bg-gray-500 max-h-1/2">
              
              {/* Resume Card */}
              <div className="flex flex-col items-center mx-auto p-9 bg-white min-w-2/3 min-h-7 shadow-lg rounded-xl">
                <h1 className="uppercase text-3xl text-black font-bold mb-6">
                  Resume
                </h1>

                {/* 🎓 Education */}
                <div className="w-full bg-blue-500 p-4 rounded-lg shadow mb-6">
                  <h2 className="text-xl font-semibold mb-3">🎓 Education</h2>
                  {educationData.map((edu, index) => (
                    <div key={index} className="bg-white p-3 mb-3 rounded-lg shadow border-l-4 border-blue-600">
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <p className="text-gray-700">{edu.institution}, {edu.location}</p>
                      <span className="text-sm text-gray-500">{edu.timeline}</span>
                      <p className="text-gray-600 mt-2">{edu.description}</p>
                    </div>
                  ))}
                </div>

                {/* 💼 Experience */}
                <div className="w-full bg-blue-500 p-4 rounded-lg shadow mb-6">
                  <h2 className="text-xl font-semibold mb-3">💼 Experience</h2>
                  {experienceData.map((exp, index) => (
                    <div key={index} className="bg-white p-3 mb-3 rounded-lg shadow border-l-4 border-green-600">
                      <h3 className="text-lg font-bold">{exp.position} - {exp.company}</h3>
                      <p className="text-gray-700">{exp.location}</p>
                      <span className="text-sm text-gray-500">{exp.timeline}</span>
                      <p className="text-gray-600 mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>

                {/* 🛠 Skills */}
                <div className="w-full bg-blue-500 p-4 rounded-lg shadow mb-6">
                  <h2 className="text-xl font-semibold mb-3">🛠 Skills</h2>
                  <ul className="grid grid-cols-2 gap-2">
                    {skillSets.map((skill, index) => (
                      <li key={index} className="bg-white p-2 rounded shadow text-center">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 🚀 Projects */}
                <div className="w-full bg-blue-500 p-4 rounded-lg shadow mb-6">
                  <h2 className="text-xl font-semibold mb-3">🚀 Projects</h2>
                  {projectsData.map((project, index) => (
                    <div key={index} className="bg-white p-3 mb-3 rounded-lg shadow border-l-4 border-purple-600">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-gray-700">{project.description}</p>
                      <p className="text-sm text-gray-500">Tech Stack: {project.techStack.join(", ")}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        🔗 View Project
                      </a>
                    </div>
                  ))}
                </div>

                {/* ✅ View + Download Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href="/Shabnam_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-green-600 border-2 border-green-600 transition"
                  >
                    👀 View Resume
                  </a>
                  <a
                    href="/Shabnam_Resume.pdf"
                    download
                    className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition"
                  >
                    ⬇ Download Resume
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Resume;
