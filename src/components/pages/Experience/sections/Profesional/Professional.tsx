import { useState } from "react";
import Icon from "../../../../ui/Icon";
import { professionalData } from "./ProfessionalData";
import { CertificateModal } from "../../CertificateModal";

export const Professional = () => {
  const [activeCertId, setActiveCertId] = useState<number | null>(null);

  return (
    <div className="w-full md:px-24 lg:px-48 xl:px-48 pb-24 pt-8 p-6">
      <div className="flex flex-col gap-2 md:w-2/3">
        <h1 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white transition-colors">
          Pengalaman{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Profesional
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 transition-colors">
          Berikut adalah ringkasan pengalaman profesional saya.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {professionalData.map((experience) => {
          const hasCertificates =
            experience.certificate && experience.certificate.length > 0;

          return (
            <div
              key={experience.id}
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md dark:shadow-slate-900/50 transition-all duration-300 overflow-hidden"
            >
              <div className="border-l-4 border-emerald-500 p-6 pb-4 flex justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {experience.company}
                  </h2>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mt-0.5">
                    {experience.role}
                  </p>

                  <div className="flex items-center gap-3 mt-2 text-sm text-slate-500 dark:text-slate-400">
                    <span>{experience.status}</span>
                    <span>·</span>
                    <span>{experience.duration}</span>
                  </div>
                </div>

                {hasCertificates && (
                  <button
                    onClick={() => setActiveCertId(experience.id)}
                    className="h-fit p-3 rounded-lg bg-slate-100 dark:bg-slate-700 shadow-sm text-emerald-600 dark:text-emerald-400 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                  >
                    <Icon name="certificate" size={28} />
                  </button>
                )}
              </div>

              {activeCertId === experience.id && (
                <CertificateModal
                  certificates={
                    professionalData.find((e) => e.id === activeCertId)
                      ?.certificate ?? []
                  }
                  onClose={() => setActiveCertId(null)}
                />
              )}

              <div className="h-px bg-slate-100 dark:bg-slate-700" />

              <div className="p-6 pt-4 space-y-4">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                    Deskripsi
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                <div className="h-px bg-slate-100 dark:bg-slate-700" />

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                    Teknologi
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
