import { useState } from "react";
import Icon from "../Icon";
import { createPortal } from "react-dom";

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
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#18181b] border border-zinc-800 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden text-zinc-100">
        
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div>
            <h3 className="font-serif text-lg tracking-wide">
              Sertifikat Resmi
            </h3>
            {isMultiple && (
              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                {currentIndex + 1} dari {certificates.length} dokumen
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="relative bg-[#0f0f11] p-6 flex items-center justify-center min-h-87.5">
          <img
            src={certificates[currentIndex]}
            alt={`Sertifikat ${currentIndex + 1}`}
            className="max-h-[70vh] w-auto object-contain rounded shadow-lg border border-zinc-800"
          />

          {isMultiple && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white shadow hover:bg-zinc-800 transition-colors"
              >
                ❮
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white shadow hover:bg-zinc-800 transition-colors"
              >
                ❯
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800">
                {certificates.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex ? "bg-white" : "bg-zinc-600"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </div>,
    document.body
  );
};