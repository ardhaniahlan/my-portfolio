import { TimelineSection } from "../../../../ui/Timeline/TimelineGrid";
import Certificate from "../Certificate";
import { professionalData } from "./ProfessionalData";
import { trainingData } from "./TrainingData";

export const TimelineExp = () => {
  return (
    <div className="relative w-full bg-[#0f0f11] text-zinc-100 min-h-screen pt-32 pb-24 overflow-hidden selection:bg-zinc-700">
      
      <div className="flex justify-center items-center gap-8 text-xs uppercase tracking-[0.2em] text-zinc-500 mb-20">
        <a href="#kerja" className="hover:text-white transition-colors">Kerja</a>
        <span className="text-zinc-700">•</span>
        <a href="#training" className="hover:text-white transition-colors">Training</a>
        <span className="text-zinc-700">•</span>
        <a href="#sertifikat" className="hover:text-white transition-colors">Sertifikat</a>
      </div>

      <div id="kerja" className="scroll-mt-32">
        <TimelineSection
          items={professionalData}
          titlePrefix="Rekam"
          titleHighlight="Jejak."
          subtitle="Sebuah arsip perjalanan profesional, mencatat pertumbuhan teknis dan evolusi manajerial dari waktu ke waktu."
        />
      </div>

      <div id="training" className="mt-32 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
                Pengasahan <br /> Diri.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Dedikasi terhadap pembelajaran berkelanjutan melalui program intensif dan bootcamp terstruktur.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900 aspect-video relative group">
                <img 
                  src="https://i.pinimg.com/1200x/ff/bd/dd/ffbddd37b2ceffe750fc534bfa11429d.jpg" 
                  alt="Workspace"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f11] via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>
        </div>

        <TimelineSection
          items={trainingData}
          titlePrefix=""
          titleHighlight=""
          subtitle=""
          containerClassName="pt-0"
          hideHeader={true}
        />
      </div>

      <div id="sertifikat" className="mt-32 scroll-mt-32">
        <Certificate />
      </div>

    </div>
  );
};