import { TimelineSection } from "../../../../ui/Timeline/TimelineGrid";
import { professionalData } from "./ProfessionalData";
import { trainingData } from "./TrainingData";

export const TimelineExp = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-96 h-96 bg-emerald-400/20 dark:bg-emerald-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-[40%] right-[-15%] w-96 h-96 bg-teal-300/15 dark:bg-teal-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-[5%] left-[15%] w-96 h-96 bg-emerald-300/15 dark:bg-emerald-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

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
