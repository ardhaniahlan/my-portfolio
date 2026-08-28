import { Link } from "react-router-dom";
import type { Project } from "../../pages/Project/ProjectData";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/project/${project.id}`} className="block group">
      <div className="bg-[#18181b] p-6 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 transition-colors h-full flex flex-col">
        
        <div className="w-full aspect-video bg-[#0f0f11] rounded-xl mb-6 overflow-hidden relative border border-zinc-800/50">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col grow">
          <h2 className="text-2xl font-serif text-zinc-100 mb-3 group-hover:text-white transition-colors">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6 grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-zinc-800/60 text-zinc-300 font-medium"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-zinc-800/60 text-zinc-400 font-medium">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
        
      </div>
    </Link>
  );
};