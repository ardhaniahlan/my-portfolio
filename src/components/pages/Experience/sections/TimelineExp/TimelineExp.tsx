import { BlobBackground } from "../../../../ui/BlopBackground";
import { TimelineSection } from "../../../../ui/Timeline/TimelineGrid";
import { professionalData } from "./ProfessionalData";
import { trainingData } from "./TrainingData";

export const TimelineExp = () => {
  return (
    <div className="relative w-full bg-white/60 dark:bg-slate-900/80 backdrop-blur-xl border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300 overflow-hidden">
      
      <BlobBackground />

      <TimelineSection
        items={professionalData}
        titlePrefix="Pengalaman"
        titleHighlight="Profesional"
        subtitle="Berikut adalah ringkasan pengalaman profesional saya."
        containerClassName="lg:pt-32 xl:pt-32 pt-32"
      />
      <TimelineSection
        items={trainingData}
        titlePrefix="Pelatihan"
        titleHighlight="Kemampuan"
        subtitle="Berikut adalah ringkasan pengalaman pelatihan saya."
        containerClassName="pb-24 pt-8"
      />
    </div>
  );
};
