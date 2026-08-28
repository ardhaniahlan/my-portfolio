import { ProjectCard } from "../../ui/ProjectCard";
import { projectsData } from "./ProjectData";

export const Project = () => {
  return (
    <div className="w-full bg-[#0f0f11] text-zinc-100 min-h-screen px-6 md:px-12 lg:px-24 pt-32 pb-24 overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white tracking-wide">
              Projek
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Arsip proyek terpilih yang mengeksplorasi antarmuka digital, sistem desain, dan
              pengalaman pengguna interaktif.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      
    </div>
  );
};