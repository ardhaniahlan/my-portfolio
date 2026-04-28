import Icon from "../../../../ui/Icon";
import { useState } from "react";
import { certificateItem } from "./CertificateData";
import { CertificateModal } from "../../CertificateModal";

export const Certificate = () => {
  const [activeCertId, setActiveCertId] = useState<number | null>(null);

  return (
    <div className="w-full md:px-24 lg:px-48 xl:px-48 pb-24 pt-8 p-6">
      <div className="flex flex-col gap-2 md:w-2/3">
        <h1 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white transition-colors">
          Kursus Sertifikat {""}
          <span className="text-emerald-600 dark:text-emerald-400">
            Keahlian
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 transition-colors">
          Berikut beberapa sertifikat keahlian yang saya miliki dari mengikuti
          kursus online.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {certificateItem.map((certificate) => {
          const hasCertificates =
            certificate.certificate && certificate.certificate.length > 0;

          return (
            <div
              key={certificate.id}
              className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md dark:shadow-slate-900/50 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 overflow-hidden"
            >
              <div className="p-5 flex items-start gap-4">
                <div
                  className={`shrink-0 flex items-center justify-center h-11 w-11 rounded-xl bg-slate-100 dark:bg-slate-700 ${certificate.iconColor} transition-colors`}
                >
                  <Icon name={certificate.iconName} size={22} />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-1.5">
                    {certificate.category}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                    {certificate.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {certificate.issuer}
                  </p>
                </div>
              </div>

              {hasCertificates && (
                <>
                  <div className="h-px bg-slate-100 dark:bg-slate-700" />
                  <div className="px-5 py-3 flex items-center gap-2">
                    <button
                      onClick={() => setActiveCertId(certificate.id)}
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                    >
                      <Icon name="certificate" size={14} />
                      Lihat Sertifikat
                      {certificate.certificate!.length > 1 && (
                        <span className="ml-0.5 bg-emerald-200 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full px-1.5 py-0.5 text-[10px] font-semibold">
                          {certificate.certificate!.length}
                        </span>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {activeCertId && (
        <CertificateModal
          certificates={
            certificateItem.find((c) => c.id === activeCertId)?.certificate ??
            []
          }
          onClose={() => setActiveCertId(null)}
        />
      )}
    </div>
  );
};
