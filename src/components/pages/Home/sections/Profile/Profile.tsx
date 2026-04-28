import Icon from "../../../../ui/Icon";
import profilePoto from "../../../../../assets/profile.jpeg";
import type { IconName } from "../../../../ui/Icon/Icon";
import { Link } from "react-router-dom";

interface SocialMediaItem {
  id: number;
  icon: IconName;
  link: string;
}

const socialMedia: SocialMediaItem[] = [
  { id: 1, icon: "github", link: "https://github.com/ardhaniahlan" },
  { id: 2, icon: "linkedin", link: "https://linkedin.com/in/ardhaniahlan" },
  { id: 3, icon: "instagram", link: "https://instagram.com/ardhani.ahlan" },
];

export const Profile = () => {
  return (
    <div className="w-full bg-white/40 dark:bg-slate-900 backdrop-blur-lg border border-white/50 dark:border-slate-800/50  p-6 flex flex-col pb-24 pt-16 md:px-24 lg:px-48 xl:px-100 md:py-20 lg:py-32 transition-colors duration-300 ">
      <div className="flex flex-col md:flex-row md:gap-8 md:items-center md:mb-6">
        <div className="w-35 h-35 rounded-full bg-pink-100 dark:bg-slate-800 overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg transition-colors duration-300">
          <img
            src={profilePoto}
            alt="Ardhani Ahlan"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white max-w-2xl md:text-5xl mt-4 md:mt-0 transition-colors duration-300">
          Hey, I'm Ardhan✨ <br />{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            A Software Developer
          </span>
        </h1>
      </div>

      <h3 className="text-gray-800 dark:text-slate-300 leading-relaxed text-[20px] md:text-2xl mt-4 transition-colors duration-300">
        Pengembang Android dengan wawasan full-stack yang antusias membangun
        aplikasi responsif. Saya berfokus pada titik temu antara integrasi
        sistem yang kuat dan pengalaman pengguna yang mulus.
      </h3>

      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
        <div className="flex gap-3 my-8 w-70">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center justify-center w-full bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white py-2.5 px-6 rounded-lg transition-all active:scale-95 shadow-sm font-semibold text-[15px]"
          >
            Kontak Saya
          </button>

          <Link
            to="/experience"
            className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-500 dark:text-emerald-400 py-2.5 px-6 rounded-lg transition-all active:scale-95 font-semibold text-[15px]"
          >
            Pengalaman
          </Link>
        </div>

        <div className="hidden md:block h-8 w-[2px] bg-gray-800 dark:bg-slate-600 transition-colors duration-300"></div>

        <div className="flex gap-10 mb-8 md:mb-0 w-auto items-center">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-300 hover:scale-105 ease-in"
            >
              <Icon name={social.icon} size={24} className="text-[28px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
