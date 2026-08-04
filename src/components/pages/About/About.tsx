import { Link } from "react-router-dom";
import { aboutData } from "./AboutData";
import { BlobBackground } from "../../ui/BlopBackground";

export const About = () => {
  return (
    <div className="relative w-full md:px-24 lg:px-48 xl:px-48 pt-32 pb-16 p-6 lg:pt-32 xl:pt-32 overflow-hidden">
      
      <BlobBackground/>

      <div className="flex flex-col gap-2 md:w-2/3 mb-12 fade-up relative z-10">
        <h1 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white transition-colors">
          Tentang{" "}
          <span className="text-emerald-600 dark:text-emerald-400">Saya</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 transition-colors">
          Kenalan lebih dekat dengan saya.
        </p>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,300px)_1fr] gap-8 lg:gap-16 relative z-10">
        <div className="lg:sticky lg:top-28 lg:self-start flex flex-col gap-6 fade-up">
          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-emerald-400/20 via-emerald-500/5 to-transparent blur-xl -z-10" />
            <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-200/70 dark:ring-slate-700/70 shadow-xl shadow-slate-900/5">
              <img
                src={aboutData.photo}
                alt={aboutData.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-black/25 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Open to work
                </p>
              </div>
            </div>
          </div>

          <div className="px-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {aboutData.name}
            </h2>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mt-0.5">
              {aboutData.role}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {aboutData.location}
            </p>
          </div>

          <Link
            to="/"
            state={{ scrollTo: "contact" }}
            className="group flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-emerald-600/25"
          >
            Kontak Saya
          </Link>
        </div>

        <div className="flex flex-col gap-14">
          <div className="relative pl-6 border-l-2 border-emerald-500 fade-up" style={{ animationDelay: "80ms" }}>
            <span className="absolute -top-3 -left-1 text-5xl font-serif text-emerald-500/15 dark:text-emerald-400/15 select-none leading-none">
              &ldquo;
            </span>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              {aboutData.bio}
            </p>
          </div>

          <div className="fade-up" style={{ animationDelay: "140ms" }}>
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
                Pendidikan
              </h3>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="relative flex flex-col gap-6 before:absolute before:left-1.25 before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
              {aboutData.education.map((edu, i) => (
                <div key={i} className="relative flex items-start gap-4 pl-6">
                  <span className="absolute left-0 top-1.5 w-2.75 h-2.75 rounded-full bg-white dark:bg-slate-900 ring-2 ring-emerald-500" />
                  <div className="flex-1 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {edu.university}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {edu.major}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
                Fun Facts
              </h3>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {aboutData.funFacts.map((fact, i) => (
                <div
                  key={i}
                  className="group p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-all hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-slate-700 dark:hover:text-slate-300 z-10 relative"
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: "260ms" }}>
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900 dark:text-white">
                Tech Stack
              </h3>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="flex flex-col gap-5">
              {aboutData.techStack.map((stack) => (
                <div key={stack.category} className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <p className="text-xs text-slate-500 dark:text-slate-400 sm:w-32 shrink-0">
                    {stack.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium transition-transform hover:-translate-y-0.5 ${stack.color}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};