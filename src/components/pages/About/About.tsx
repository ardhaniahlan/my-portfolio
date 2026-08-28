import { aboutData } from "./AboutData";

export const About = () => {
  return (
    <div className="w-full bg-[#0f0f11] text-zinc-100 min-h-screen px-6 md:px-12 lg:px-24 pt-32 pb-32 overflow-hidden selection:bg-zinc-700">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center mb-32">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 text-white">
              {aboutData.headline}
            </h1>
            <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
              <p>{aboutData.bioParagraph1}</p>
              <p>{aboutData.bioParagraph2}</p>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-100 aspect-4/5 rounded-xl overflow-hidden border border-zinc-800/80 shadow-2xl">
              <img
                src={aboutData.photo}
                alt="Ardhani Ahlan"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f0f11]/80 via-transparent to-transparent" />
            </div>
          </div>

        </div>

        <div className="w-full bg-[#18181b] rounded-3xl border border-zinc-800/60 p-8 md:p-16 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="hidden lg:flex justify-center items-center opacity-30">
            <div className="relative w-64 h-64 border border-zinc-600 rounded-full flex justify-center items-center">
              <div className="w-48 h-48 border border-zinc-600 rounded-full flex justify-center items-center">
                <div className="w-16 h-16 bg-zinc-600 rounded-full"></div>
              </div>
              <div className="absolute w-full h-px bg-zinc-600"></div>
              <div className="absolute h-full w-px bg-zinc-600"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-white mb-6">
              {aboutData.philosophyTitle}
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm leading-relaxed mb-10">
              <p>{aboutData.philosophyText1}</p>
              <p>{aboutData.philosophyText2}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {aboutData.philosophyTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#27272a]/50 border border-zinc-700/50 text-zinc-300 text-[11px] font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div>
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif text-white mb-4">Latar Belakang</h2>
            <div className="w-12 h-px bg-zinc-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            
            <div className="bg-[#18181b] rounded-2xl border border-zinc-800/60 p-8 md:p-12 h-full">
              <h3 className="text-xl font-serif text-white mb-8">
                {aboutData.journeyTitle}
              </h3>
              <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
                <p>{aboutData.journeyText1}</p>
                <p>{aboutData.journeyText2}</p>
                <p>{aboutData.journeyText3}</p>
              </div>
            </div>

            <div className="bg-[#18181b] rounded-2xl border border-zinc-800/60 p-8 md:p-12 h-full">
              <div className="flex items-center gap-3 mb-10">
                <svg className="w-5 h-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <h3 className="text-xl font-serif text-white">Pendidikan</h3>
              </div>

              <div className="relative pl-4 border-l border-zinc-800 space-y-10">
                {aboutData.education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-5.25 top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-500 ring-4 ring-[#18181b]" />
                    
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 mb-2 block">
                      {edu.year}
                    </span>
                    <h4 className="text-base font-medium text-zinc-200 mb-1">
                      {edu.title}
                    </h4>
                    <h5 className="text-sm text-zinc-400 mb-3">
                      {edu.subtitle}
                    </h5>
                    <p className="text-[13px] text-zinc-500 leading-relaxed italic">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};