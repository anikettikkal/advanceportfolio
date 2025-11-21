import React from "react";

export default function ProjectCard({ image, title, subtitle, description, tech, liveLink, codeLink }) {
  return (
    <div className="group bg-[#111] border border-gray-700 rounded-lg overflow-hidden shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-green-400 mt-1">{subtitle}</p>
        <p className="text-gray-300 mt-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, idx) => (
            <span key={idx} className="text-xs text-gray-200 border border-gray-600 px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5 border-t border-gray-700 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00000080]">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition">
          Live Demo
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border-2 border-gray-300 text-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition">
          View Code
        </a>
      </div>
    </div>
  );
}
