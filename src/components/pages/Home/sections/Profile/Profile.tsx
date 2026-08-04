import Icon from "../../../../ui/Icon";
import profilePoto from "../../../../../assets/profile.jpeg";
import type { IconName } from "../../../../ui/Icon/Icon";
import { Link } from "react-router-dom";
import { Github } from "../../../../ui/GithubReact/Github";
import { BlobBackground } from "../../../../ui/BlopBackground";

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

interface DataProfile {
  name: string;
  role: string;
  description: string; 
}

const profileData: DataProfile = {
  name: "Ardhan",
  role: "A Programmer",
  description: "Pengembang Frontend dengan wawasan Android & full-stack, antusias membangun aplikasi responsif. Saya berfokus pada titik temu antara integrasi sistem yang kuat dan pengalaman pengguna yang mulus.",
}

export const Profile = () => {
  return (
    <div className="relative w-full bg-white/60 dark:bg-slate-900/80 backdrop-blur-xl border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300 overflow-hidden">
      
      <BlobBackground />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 md:py-48 lg:py-48 flex flex-col gap-8">
        <div className="flex justify-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-emerald-900 dark:bg-emerald-500 rounded-full blur-md opacity-20 dark:opacity-40"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl transition-transform hover:scale-105 duration-300">
                  <img
                    src={profilePoto}
                    alt="Ardhani Ahlan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 dark:text-white tracking-tight leading-tight transition-colors duration-300">
                  Hey, I'm {profileData.name} ✨
                  <br />
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {profileData.role}
                  </span>
                </h1>
              </div>
            </div>

            <p className="max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
              {profileData.description}
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
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
                  className="flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-600 dark:text-emerald-400 px-8 py-3 rounded-xl font-semibold transition-all active:scale-95"
                >
                  Pengalaman
                </Link>
              </div>

              <div className="hidden md:block h-10 w-px bg-slate-300 dark:bg-slate-700"></div>

              <div className="flex gap-4 items-center mt-2 md:mt-0">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-all hover:scale-110 hover:-translate-y-1"
                    aria-label={`Kunjungi profil ${social.id}`}
                  >
                    <Icon name={social.icon} size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full">
          <Github />
        </div>
      </div>
    </div>
  );
};
