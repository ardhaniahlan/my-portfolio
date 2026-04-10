import { useState } from "react";
import Icon from "../../ui";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../animasi/animasi";
import { createPortal } from "react-dom";
import { experiencesData, type ExperienceType } from "./ExperienceData";

const ExperienceCard = ({ exp }: { exp: ExperienceType }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const nextCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (exp.certificate) {
      setCurrentCertIndex((prev) =>
        prev === exp.certificate!.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (exp.certificate) {
      setCurrentCertIndex((prev) =>
        prev === 0 ? exp.certificate!.length - 1 : prev - 1,
      );
    }
  };

  const openCertificates = () => {
    setCurrentCertIndex(0);
    setShowModal(true);
  };

  const hasCertificates = exp.certificate && exp.certificate.length > 0;
  const isMultipleCerts = exp.certificate && exp.certificate.length > 1;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className=" p-8 rounded-[2rem] bg-white backdrop-blur-lg border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] mb-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
            <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
          </div>
          <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0 md:p-2">
            {exp.duration}
          </span>
        </div>

        <div className="mb-6">
          <p
            className={`text-gray-600 leading-relaxed text-lg transition-all duration-300 ${
              !isExpanded ? "line-clamp-4" : ""
            }`}
          >
            {exp.description}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 font-medium mt-2 hover:underline focus:outline-none"
          >
            {isExpanded ? "Sembunyikan" : "Baca selengkapnya..."}
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-8 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-3">
            {exp.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {exp.github && (
            <a
              href={exp.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group whitespace-nowrap"
            >
              <Icon
                name="github"
                size={24}
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
                {isMultipleCerts ? `(${exp.certificate?.length})` : ""}
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
                    src={exp.certificate?.[currentCertIndex] || ""}
                    alt={`Sertifikat ${currentCertIndex + 1}`}
                    className="max-h-[80vh] mx-auto object-contain rounded-xl shadow-2xl"
                  />

                  {isMultipleCerts && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 font-medium tracking-widest bg-black/50 px-4 py-1 rounded-full">
                      {currentCertIndex + 1} / {exp.certificate?.length}
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

const Experience = () => {
  return (
    <section
      id="experience"
      className="duration-300 scroll-mt-8 mb-24 md:scroll-mt-8"
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
          Experience
        </motion.h2>
      </motion.div>

      {experiencesData.map((exp) => (
        <ExperienceCard key={exp.id} exp={exp} />
      ))}
    </section>
  );
};

export default Experience;
