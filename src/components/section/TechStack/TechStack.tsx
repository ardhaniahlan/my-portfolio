import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../animasi/animasi";


interface TechStackItem{
  id: number;
  name: string;
  link: string;
}

const techItems: TechStackItem[] = [
  { id: 1, name: "Kotlin", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { id: 2, name: "Jetpack Compose", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg" },
  { id: 3, name: "React", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { id: 4, name: "Laravel", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { id: 5, name: "Tailwind", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { id: 6, name: "Java", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
];


export const TechStack = () => {
  return (
    <section id="techstack" className="duration-300 md:scroll-mt-8 mb-20 md:scroll-mt-8">
      <motion.div
        initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-black text-gray-900 mb-10 border-b-4 border-blue-600 inline-block pb-2">
        Tech Stack
      </motion.h2>

      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techItems.map(
          (tech, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-lg border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-6 rounded-2xl flex items-center justify-center text-center font-bold text-gray-700 gap-2 hover:-translate-y-1 hover:shadow-md hover:border-blue-300 transition-all cursor-default"
            >
              <img className="w-[36px]" src={tech.link} alt={tech.name} />
              <h4>{tech.name}</h4>
            </div>
          ),
        )}
      </motion.div>
      </motion.div>
    </section>
  );
};
