import { useState } from "react";
import { CertificateModal } from "../CertificateModal/CertificateModal";
import type { TimelineItemType } from "../../types/type";

interface TimelineSectionProps {
  items: TimelineItemType[];
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  containerClassName?: string;
  hideHeader?: boolean;
}

export const TimelineSection = ({
  items,
  titlePrefix,
  titleHighlight,
  subtitle,
  containerClassName = "pt-8",
  hideHeader = false,
}: TimelineSectionProps) => {
  const [activeCertId, setActiveCertId] = useState<number | null>(null);

  return (
    <div className={`w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24 ${containerClassName}`}>
      
      {!hideHeader && (
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
            {titlePrefix} <span className="text-zinc-500 font-serif">{titleHighlight}</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      )}

      <div className="relative mt-8">
        {items.length > 0 && (
          <div className="absolute left-27.5 md:left-40 top-4 bottom-4 w-px bg-zinc-800" />
        )}

        <div className="flex flex-col gap-12">
          {items.map((item) => {
            const hasCertificates = item.certificate && item.certificate.length > 0;

            return (
              <div key={item.id} className="relative flex flex-col md:flex-row items-start gap-8 md:gap-16">
                
                <div className="w-full md:w-30 lg:w-35 shrink-0 pt-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
                    {item.duration}
                  </span>
                  <span className="text-[11px] text-zinc-600 font-mono block mt-1">
                    {item.status || "Indonesia, ID"}
                  </span>
                </div>

                <div className="absolute left-26.5 md:left-39 top-1.5 w-2 h-2 rounded-full bg-zinc-500 border-4 border-[#0f0f11]" />

                <div className="flex-1 w-full bg-[#18181b] p-8 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 transition-colors">
                  
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-serif text-zinc-100 mb-1">
                        {item.organization}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                        {item.role}
                      </p>
                    </div>

                    {hasCertificates && (
                      <button
                        onClick={() => setActiveCertId(item.id)}
                        className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white bg-zinc-800 px-3 py-1.5 rounded border border-zinc-700 transition-colors"
                      >
                        Lihat Sertifikat
                      </button>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    {Array.isArray(item.description) ? (
                      <ul className="space-y-2">
                        {item.description.map((point, i) => (
                          <li key={i} className="text-sm text-zinc-400 leading-relaxed flex gap-2">
                            <span className="text-zinc-600">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>

      {activeCertId && (
        <CertificateModal
          certificates={items.find((i) => i.id === activeCertId)?.certificate ?? []}
          onClose={() => setActiveCertId(null)}
        />
      )}
    </div>
  );
};