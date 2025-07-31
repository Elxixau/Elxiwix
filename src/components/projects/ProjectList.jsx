import { useState } from "react";
import CardProject from "./CardProject";
import projects from "../../data/projectData";
import { FolderIcon } from "lucide-react";  

export default function ProjectList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter project berdasarkan title / technology
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div id="project"className="scroll-mt-28 flex justify-center">
      <div className="max-w-7xl w-full p-4 sm:p-8">
        {/* Heading + Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <FolderIcon className="h-6 w-6 text-amber-600" />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-400 to-emerald-600">My Projects & Certifications</h1>
          </div>
          <input
            type="text"
            placeholder="Search by title or tech..."
            className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>


        {/* Grid Project */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <CardProject
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                onNavigate={() => (window.location.href = project.link)}
              />
            ))
          ) : (
            <p className="text-gray-500">No projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
