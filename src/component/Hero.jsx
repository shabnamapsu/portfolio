import React from "react";
import little from "../assets/little.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white md:h-[140%] py-0 ">
      <div className="relative w-full min-h-screen">
        <div className="absolute left-0 md:h-full w-full md:w-[25%] bg-gray-400 shadow-black">
          this is hero
        </div>

        <div className="absolute md:left-20 w-full md:top-10 max-w-5xl py-20">
          <div className="flex flex-col w-full md:flex-row gap-12">
            <div className="flex flex-row w-2/2 bg-amber-50 max-h-1/1">
              {/* Profile Card */}
              <div className="flex flex-col items-center mx-auto p-2 bg-gray-200 min-w-1/3 min-h-7 hover:bg-gray-300 rounded-2 shadow-gray-800">
                <img
                  src={little}
                  alt="baby"
                  className="rounded-full w-50 h-50"
                />
                <h1 className="text-xl font-bold uppercase mb-3">
                  himansu
                  <br />
                  born-baby
                </h1>
                <div className="border-t-2 border-t-blue-600 py-1 w-40 mb-6"></div>
                <p className="uppercase mb-6">project manager</p>
              </div>

              {/* Main Info */}
              <div className="flex flex-col gap-20 items-center mx-auto p-9 bg-white min-w-2/3 min-h-7">
                <h1 className="uppercase text-3xl text-black font-bold">
                  shabnam bano
                </h1>
                <p>something in here</p>

                <div className="w-full p-4 flex gap-4 py-5 justify-end items-center">
                  <button
                    className="w-2/4 bg-blue-500 hover:text-black hover:bg-white rounded-full text-white border-gray-600 py-4 p-4 hover:border-black border-2"
                    onClick={() => navigate("/resume")}
                  >
                    resume
                  </button>

                  <button
                    className="w-2/4 bg-blue-500 py-4 hover:text-black hover:bg-white rounded-full text-white hover:border-black border-2 border-gray-600"
                    onClick={() => navigate("/projects")}
                  >
                    projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-white mt-1 h-screen flex items-start">
  <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-start justify-between gap-4 w-full">
    <p className="text-sm">
      © {new Date().getFullYear()} Shabnam Bano. All rights reserved.
    </p>
    <div className="flex gap-6">
      <a
        href="mailto:shabnam@example.com"
        className="hover:text-blue-400 transition"
      >
        Email
      </a>
      <a
        href="https://github.com/yourgithub"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 transition"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/yourlinkedin"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 transition"
      >
        LinkedIn
      </a>
    </div>
  </div>
</footer>


    </div>
  );
}

export default Hero;
