import { useState } from "react";
import Icon from "../Icon";
import { CertificateModal } from "../CertificateModal/CertificateModal";
import type { TimelineItemType } from "../../types/type";

interface TimelineSectionProps {
  items: TimelineItemType[];
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  containerClassName?: string;
}

export const TimelineSection = ({
  items,
  titlePrefix,
  titleHighlight,
  subtitle,
  containerClassName = "pt-8",
}: TimelineSectionProps) => {
  const [activeCertId, setActiveCertId] = useState<number | null>(null);

  return (
    <div
      className={`w-full md:px-24 lg:px-48 xl:px-48 pb-16 p-6 ${containerClassName}`}
    >
      <div className="flex flex-col gap-2 md:w-2/3">
        <h1 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white transition-colors">
          {titlePrefix}{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            {titleHighlight}
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 transition-colors">
          {subtitle}
        </p>
      </div>

      <div className="relative mt-14">
        {items.length > 1 && (
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-linear-to-b from-emerald-500/60 via-slate-300 dark:via-slate-700 to-transparent" />
        )}

        <div className="flex flex-col gap-10">
          {items.map((item, index) => {
            const hasCertificates =
              item.certificate && item.certificate.length > 0;
            const isLast = index === items.length - 1;

            return (
              <div key={item.id} className="relative pl-8 md:pl-10">
                <div className="absolute left-0 top-2 flex items-center justify-center">
                  <span className="relative flex h-4 w-4 md:h-5 md:w-5">
                    {isLast && (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 animate-ping" />
                    )}
                    <span className="relative inline-flex h-4 w-4 md:h-5 md:w-5 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-slate-900" />
                  </span>
                </div>

                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
                  {item.duration}
                </span>

                <div className="group bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/70 shadow-sm hover:shadow-lg dark:shadow-slate-900/40 transition-all duration-300 overflow-hidden">
                  <div className="p-6 pb-5 flex justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.organization}
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-0.5">
                        {item.role}
                      </p>
                      <span className="inline-block mt-2.5 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                        {item.status}
                      </span>
                    </div>

                    {hasCertificates && (
                      <button
                        onClick={() => setActiveCertId(item.id)}
                        className="h-fit shrink-0 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-colors cursor-pointer"
                      >
                        <Icon name="certificate" size={22} />
                      </button>
                    )}
                  </div>

                  {activeCertId === item.id && (
                    <CertificateModal
                      certificates={item.certificate ?? []}
                      onClose={() => setActiveCertId(null)}
                    />
                  )}

                  <div className="px-6 pb-6 space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-100 dark:border-emerald-500/20"
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
    </div>
  );
};
