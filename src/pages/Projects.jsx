import React from "react";
import { projectsData } from "../assets/assets.js";
function Projects() {
  return (
     <div className="w-full bg-white md:h-[140%]">
      <div className="relative w-full min-h-screen">
    <div >
      <div className="w-full bg-blue-300 p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">🚀 Projects</h2>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white p-3 mb-3 rounded-lg shadow border-l-4 border-purple-600"
          >
            <h3 className="text-lg font-bold">{project.title}</h3>
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
    </div>
    </div>
    </div>
  );
}

export default Projects;
