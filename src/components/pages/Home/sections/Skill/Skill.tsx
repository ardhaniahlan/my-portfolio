import Icon from "../../../../ui/Icon";
import type { IconName } from "../../../../ui/Icon/Icon";

interface CardSkillProps {
  icon: IconName;
  title: string;
  description: string;
  list: string[];
}

const skillList: CardSkillProps[] = [
  {
    icon: "laptopcode",
    title: "Yang bisa saya lakukan",
    description:
      "Saya dapat membantu mengembangkan solusi yang akan membantu Anda mengembangkan bisnis Anda:",
    list: [
      "• Android Development",
      "• Web Development",
      "• UI/UX Design",
      "• API Integration",
    ],
  },
  {
    icon: "stack",
    title: "Alat yang saya gunakan",
    description:
      "Berikut adalah alat yang saya gunakan untuk mengembangkan aplikasi:",
    list: [
      "• Front End (Kotlin , React, TailwindCSS)",
      "• Back End (Laravel, PostgreSQL, MySQL)",
      "• Design (Figma, Canva, Photoshop, Ilustrator)",
    ],
  },
  {
    icon: "paintbrush",
    title: "Desain",
    description: "Saya dapat membantu dalam hal desain untuk bisnis Anda:",
    list: [
      "• Modern & Clean UI",
      "• Responsive Layouts",
      "• Logo Design",
      "• Poster Design",
    ],
  },
];

export const Skill = () => {
  return (
    <div className="md:px-24 lg:px-48 xl:px-48 p-6 md:py-24 transition-colors duration-300 dark:bg-slate-900 ">
      <div className="flex flex-col gap-2 md:w-2/3">
        <h1 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white transition-colors">
          Membangun Pengalaman <span className="text-emerald-600 dark:text-emerald-400">Digital</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 transition-colors">
          Saya mengkhususkan diri dalam menciptakan antarmuka pengguna yang
          memukau dan mengembangkan aplikasi berkualitas tinggi yang menonjol.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-md dark:shadow-slate-900/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="text-slate-800 dark:text-slate-200">
                <Icon name={skill.icon} size={32} />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                {skill.title}
              </h2>
            </div>

            <p className="mt-4 text-slate-600 dark:text-slate-400 transition-colors">
              {skill.description}
            </p>

            <div className="mt-4 pl-4 font-semibold text-gray-700 dark:text-slate-300 flex flex-col gap-1 transition-colors">
              {skill.list.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
