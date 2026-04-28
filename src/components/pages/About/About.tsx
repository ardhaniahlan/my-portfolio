import { Link } from "react-router-dom";
import { aboutData } from "./AboutData";

export const About = () => {
  return (
    <div className="w-full md:px-24 lg:px-48 xl:px-48 pb-24 pt-8 p-6">
      <div className="flex flex-col gap-2 md:w-2/3 mb-10">
        <h1 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white transition-colors">
          Tentang{" "}
          <span className="text-emerald-600 dark:text-emerald-400">Saya</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 transition-colors">
          Kenalan lebih dekat dengan saya.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md dark:shadow-slate-900/50 overflow-hidden transition-all duration-300">
          <div className="flex flex-col sm:flex-row min-h-[220px]">
            <div className="w-full sm:w-48 shrink-0 bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
              <img
                src={aboutData.photo}
                alt={aboutData.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex-1 p-6 border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-700 flex flex-col justify-center gap-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {aboutData.name}
                </h2>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mt-0.5">
                  {aboutData.role}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {aboutData.location}
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {aboutData.bio}
              </p>

              <div className="flex flex-wrap gap-2">
                {aboutData.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Link
                  to="/"
                  state={{ scrollTo: "contact" }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
                >
                  Kontak Saya
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md dark:shadow-slate-900/50 p-6 transition-all duration-300">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Pendidikan
            </h3>
            <div className="flex flex-col md:flex-row items-start gap-3">
              {aboutData.education.map((edu, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 3L2 9l10 6 10-6-10-6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2 9v6m20-6v6M6 11.5V17c0 1.657 2.686 3 6 3s6-1.343 6-3v-5.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {edu.university}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {edu.major}
                    </p>
                    <span className="inline-block mt-2 text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md dark:shadow-slate-900/50 p-6 transition-all duration-300">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Tentang saya
            </h3>
            <ul className="flex flex-col gap-3">
              {aboutData.funFacts.map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md dark:shadow-slate-900/50 p-6 transition-all duration-300">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
            Tech stack
          </h3>
          <div className="flex flex-col gap-4">
            {aboutData.techStack.map((stack, i) => (
              <div key={stack.category}>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  {stack.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${stack.color}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {i < aboutData.techStack.length - 1 && (
                  <div className="h-px bg-slate-100 dark:bg-slate-700 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
