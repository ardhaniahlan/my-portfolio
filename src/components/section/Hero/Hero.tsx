import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../animasi/animasi";

const Hero = () => {
  return (
    <section
      id="home"
      className=" duration-300 scroll-mt-8 min-h-[80vh] flex flex-col justify-center relative mb-20 md:scroll-mt-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="flex gap-4 text-sm font-bold text-blue-600 mb-6 uppercase tracking-wider"
        >
          <span>Android COMPOSE</span> <span className="text-gray-300">•</span>
          <span>WEB EXPLORATION</span> <span className="text-gray-300">•</span>
          <span>UI/UX</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-[5rem] lg:text-[6rem] font-black text-gray-900 tracking-tighter leading-[1.1] mb-8 uppercase"
        >
          <span className="block text-3xl md:text-5xl font-light tracking-normal mb-2 text-gray-500 capitalize">
            Halo, saya seorang
          </span>
          Full-Stack <br /> Enthusiast
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-gray-600 text-lg md:text-xl leading-relaxed mb-10"
        >
          Sebagai lulusan S1 Informatika, passion utama saya mengakar pada
          pengembangan aplikasi Android menggunakan Jetpack Compose. Di luar
          mobile, ketertarikan saya pada ekosistem teknologi mendorong saya
          untuk terus mengeksplorasi stack web dan backend. Saya percaya bahwa
          wawasan fullstack membuat saya menjadi mobile engineer yang lebih
          baik—tidak hanya paham cara membuat UI yang cantik, tapi juga mengerti
          bagaimana data mengalir di balik layar.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gray-900 hover:bg-black text-white font-medium py-4 px-10 rounded-full transition-colors shadow-lg"
          >
            Mari Berdiskusi
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
