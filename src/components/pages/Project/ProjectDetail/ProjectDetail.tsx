import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../ProjectData";

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
    }, 4000); 
    return () => clearInterval(interval);
  }, [project?.gallery.length]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen flex-col bg-[#0f0f11] text-zinc-100">
        <h1 className="text-3xl font-serif mb-4">Proyek tidak ditemukan.</h1>
        <button
          onClick={() => navigate("/")}
          className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
        >
          [ Kembali ke Beranda ]
        </button>
      </div>
    );
  }

  const nextSlide = () => setCurrentIndex((prev) => prev === project.gallery.length - 1 ? 0 : prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev === 0 ? project.gallery.length - 1 : prev - 1);

  return (
    <div className="w-full min-h-screen bg-[#0f0f11] text-zinc-100 px-6 md:px-12 lg:px-24 pt-32 pb-24">
      
      <div className="max-w-7xl mx-auto">
        
        <button
          onClick={() => navigate(-1)}
          className="mb-12 flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          Kembali
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
            <div className="mb-8 border-b border-zinc-800 pb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                {project.title}
              </h1>
              
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                >
                  Kunjungi Website <span className="text-lg leading-none">↗</span>
                </a>
              )}
            </div>

            <div className="mb-10">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">
                Ikhtisar Proyek
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">
                Teknologi & Alat
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-zinc-800/60 text-zinc-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative w-full h-[50vh] md:h-[65vh] bg-[#18181b] rounded-2xl overflow-hidden group shadow-2xl border border-zinc-800/80 flex justify-center items-center">
              
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 blur-2xl scale-110 transition-all duration-500"
                style={{ backgroundImage: `url(${project.gallery[currentIndex]})` }}
              />

              <img
                src={project.gallery[currentIndex]}
                alt={`Screenshot ${currentIndex + 1} dari ${project.title}`}
                className="relative z-10 w-full h-full object-contain transition-all duration-700 p-2"
              />

              <button
                onClick={prevSlide}
                className="absolute z-20 top-1/2 left-6 -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full bg-[#0f0f11]/80 border border-zinc-700 text-zinc-400 opacity-0 group-hover:opacity-100 transition-all hover:text-white hover:border-zinc-500"
              >
                ❮
              </button>

              <button
                onClick={nextSlide}
                className="absolute z-20 top-1/2 right-6 -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full bg-[#0f0f11]/80 border border-zinc-700 text-zinc-400 opacity-0 group-hover:opacity-100 transition-all hover:text-white hover:border-zinc-500"
              >
                ❯
              </button>

              <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {project.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      currentIndex === idx
                        ? "w-8 bg-zinc-300"
                        : "w-2 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                Arsip Visual
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                0{currentIndex + 1} — 0{project.gallery.length}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};