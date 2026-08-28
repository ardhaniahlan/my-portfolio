interface SkillItem {
  name: string;
  level: string;
}

interface CardSkillProps {
  category: string;
  items: SkillItem[];
}

const skillList: CardSkillProps[] = [
  {
    category: "Frontend",
    items: [
      { name: "React & Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "UI/UX Design", level: "Familiar" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js / Next.js API", level: "Advanced" },
      { name: "PostgreSQL (Neon DB)", level: "Intermediate" },
      { name: "Drizzle ORM", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Go", level: "Familiar" },
      { name: "SpringBoot", level: "Familiar" },
    ],
  },
  {
    category: "Arsitektur & Tools",
    items: [
      { name: "Serverless Architecture", level: "Intermediate" },
      { name: "Android Development (Kotlin)", level: "Intermediate" },
      { name: "Git", level: "Intermediate" },
      { name: "Figma / Design Tools", level: "Advanced" },
    ],
  },
];

export const Skill = () => {
  return (
    <section className="relative w-full bg-[#0f0f11] text-zinc-100 py-32 px-6 md:px-12 lg:px-24">
      
      <div className="hidden md:block absolute right-8 top-32 rotate-90 origin-right text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
        02 / Keahlian
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-wide">Keahlian Utama</h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed">
            Fokus pada fondasi yang solid dan eksekusi yang presisi dalam setiap lapisan pengembangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="bg-[#18181b] p-8 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xl font-serif mb-8 text-zinc-200">{skill.category}</h3>
              
              <div className="flex flex-col gap-5">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center group">
                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{item.name}</span>
                    <span className="text-[10px] px-2 py-1 rounded bg-[#27272a] text-zinc-400 uppercase tracking-wider">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};