import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../ProjectData";
import { BlobBackground } from "../../../ui/BlopBackground";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!project?.gallery.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project?.gallery.length]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
          Project tidak ditemukan
        </h1>
        <button
          onClick={() => navigate("/")}
          className="text-blue-500 dark:text-blue-400 underline"
        >
          Kembali ke Home
        </button>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  };

  return (
    <div className="w-full md:px-12 lg:px-48 pb-16 p-6 pt-32 relative overflow-hidden">
      <BlobBackground/>
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white font-medium transition-colors"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Kembali
      </button>

      <div className="flex gap-2 items-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          {project.title}
        </h1>
        
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative w-full aspect-video bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden group shadow-lg dark:shadow-slate-950/50 mb-8">
        <img
          src={project.gallery[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/75"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/75"
        >
          ❯
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {project.gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === idx
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
          Tentang Project
        </h2>
        <p className="text-gray-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
          {project.fullDescription}
        </p>
      </div>
    </div>
  );
};