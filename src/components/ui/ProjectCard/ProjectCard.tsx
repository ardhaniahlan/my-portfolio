import { useNavigate } from 'react-router-dom';
import type { Project } from '../../pages/Project/ProjectData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/project/${project.id}`);

  return (
    <div
      onClick={handleNavigate}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleNavigate()}
      className="group relative overflow-hidden rounded-xl shadow-md dark:shadow-slate-950/50 cursor-pointer aspect-video bg-gray-200 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-lg font-bold text-white drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mt-2 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 overflow-hidden transition-all duration-300 delay-75">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2.5 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};