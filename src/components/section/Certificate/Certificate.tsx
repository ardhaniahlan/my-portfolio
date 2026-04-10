import Icon from "../../ui";
import { motion } from "framer-motion";

import { useState } from "react";
import { createPortal } from "react-dom";
import { containerVariants, itemVariants } from "../../animasi/animasi";
import { certificateItem, type CertificateItem } from "./CertificateData";

const CertificateCard = ({ item }: { item: CertificateItem }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const hasCertificates = item.certificate && item.certificate.length > 0;
  const isMultipleCerts = item.certificate && item.certificate.length > 1;

  const openCertificates = () => {
    setCurrentCertIndex(0);
    setShowModal(true);
  };

  const nextCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.certificate) {
      setCurrentCertIndex((prev) =>
        prev === item.certificate!.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.certificate) {
      setCurrentCertIndex((prev) =>
        prev === 0 ? item.certificate!.length - 1 : prev - 1,
      );
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="bg-white backdrop-blur-lg border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-6 rounded-2xl flex flex-col"
      >
        <div className="flex gap-2 mb-4 bg-gray-50 w-fit px-3 py-1.5 rounded-full border border-gray-100 items-center">
          <Icon name={item.iconName} size={18} className={item.iconColor} />
          <span className="text-sm font-semibold text-gray-700">
            {item.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-gray-500 font-medium mb-6">{item.issuer}</p>

        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 mt-auto">
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <Icon
                name="github"
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Lihat Repository</span>
            </a>
          )}

          {hasCertificates && (
            <button
              onClick={openCertificates}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group whitespace-nowrap font-medium"
            >
              <span>
                Lihat Sertifikat{" "}
                {isMultipleCerts ? `(${item.certificate?.length})` : ""}
              </span>
            </button>
          )}
        </div>

        {showModal &&
          hasCertificates &&
          createPortal(
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => setShowModal(false)}
              ></div>

              <div className="relative z-10 w-full max-w-4xl flex items-center justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors font-bold text-4xl z-20"
                >
                  &times;
                </button>

                {isMultipleCerts && (
                  <button
                    onClick={prevCert}
                    className="absolute left-0 md:-left-16 text-white/50 hover:text-white text-5xl md:text-6xl p-4 transition-colors z-20"
                  >
                    &#10094;
                  </button>
                )}

                <div className="relative w-full text-center">
                  <img
                    src={item.certificate?.[currentCertIndex] || ""}
                    alt={`Sertifikat ${currentCertIndex + 1}`}
                    className="max-h-[80vh] mx-auto object-contain rounded-xl shadow-2xl"
                  />
                  {isMultipleCerts && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 font-medium tracking-widest bg-black/50 px-4 py-1 rounded-full">
                      {currentCertIndex + 1} / {item.certificate?.length}
                    </div>
                  )}
                </div>

                {isMultipleCerts && (
                  <button
                    onClick={nextCert}
                    className="absolute right-0 md:-right-16 text-white/50 hover:text-white text-5xl md:text-6xl p-4 transition-colors z-20"
                  >
                    &#10095;
                  </button>
                )}
              </div>
            </div>,
            document.body,
          )}
      </motion.div>
    </motion.div>
  );
};

export const Certificate = () => {
  return (
    <section
      id="certificate"
      className="duration-300 scroll-mt-8 mb-20 md:scroll-mt-8"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-black text-gray-900 mb-10 border-b-4 border-blue-600 inline-block pb-2"
        >
          Certificate
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificateItem.map((item) => (
            <CertificateCard key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
