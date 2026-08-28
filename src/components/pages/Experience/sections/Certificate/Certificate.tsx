import { useState } from "react";
import { certificateItem } from "./CertificateData";
import { CertificateModal } from "../../../../ui/CertificateModal/CertificateModal";

export const Certificate = () => {
  const [activeCertId, setActiveCertId] = useState<number | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
      
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
          Sertifikasi<span className="text-zinc-600">.</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed">
          Validasi keahlian teknis dari institusi global dan platform terkemuka.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificateItem.map((cert) => {
          const hasCertificates = cert.certificate && cert.certificate.length > 0;

          return (
            <div
              key={cert.id}
              onClick={() => hasCertificates && setActiveCertId(cert.id)}
              className="relative bg-[#18181b] p-8 rounded-2xl border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between cursor-pointer group overflow-hidden min-h-55"
            >
              <div className="absolute -bottom-6 -right-6 text-zinc-800/40 group-hover:text-zinc-700/50 transition-colors pointer-events-none">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>

              <div>
                <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4">
                  {cert.category || "Berlaku Aktif"}
                </span>

                <h3 className="text-lg font-serif text-zinc-100 mb-2 leading-snug group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-zinc-500 font-medium">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800/80 flex justify-between items-center relative z-10">
                <span className="text-[11px] text-zinc-500 font-mono">
                  {cert.id}
                </span>

                {hasCertificates && (
                  <span className="text-xs text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors">
                    Lihat →
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {activeCertId && (
        <CertificateModal
          certificates={
            certificateItem.find((c) => c.id === activeCertId)?.certificate ?? []
          }
          onClose={() => setActiveCertId(null)}
        />
      )}
    </div>
  );
};