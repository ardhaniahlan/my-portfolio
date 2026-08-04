import { BlobBackground } from "../../ui/BlopBackground";
import { ProjectCard } from "../../ui/ProjectCard";
import { projectsData } from "./ProjectData";

export const Project = () => {
  return (
    <div className="w-full md:px-12 lg:px-48 pb-16 p-6 pt-32 relative overflow-hidden">
      <BlobBackground/>
      <div className="flex flex-col gap-2 md:w-2/3">
        <h1 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white transition-colors">
          Projek {""}
          <span className="text-emerald-600 dark:text-emerald-400">Saya</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 transition-colors">
          Berikut beberapa project pribadi yang pernah saya bangun.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
