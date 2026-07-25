import { useState } from "react";
import Icon from "../Icon";

type CertificateModalProps = {
  certificates: string[];
  onClose: () => void;
};

export const CertificateModal = ({
  certificates,
  onClose,
}: CertificateModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMultiple = certificates.length > 1;

  const next = () =>
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1,
    );
  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Sertifikat
            </h3>
            {isMultiple && (
              <p className="text-xs text-slate-400 mt-0.5">
                {currentIndex + 1} dari {certificates.length}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <Icon name="close" size={24} />
          </button>
        </div>

        <div className="relative bg-slate-50 dark:bg-slate-900">
          <img
            src={certificates[currentIndex]}
            alt={`Sertifikat ${currentIndex + 1}`}
            className="w-full object-contain"
          />

          {isMultiple && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 shadow hover:bg-white dark:hover:bg-slate-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-700 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 shadow hover:bg-white dark:hover:bg-slate-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-700 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {certificates.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex
                        ? "bg-emerald-500"
                        : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
