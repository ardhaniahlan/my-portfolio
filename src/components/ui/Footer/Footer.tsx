import { Icon, type IconName } from "../Icon/Icon";

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

export const Footer = () => {
  return (
    <footer className="py-8 md:px-24 lg:px-48 xl:px-48 p-6 flex flex-col md:gap-6 gap-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 dark:bg-slate-900">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h1 className="text-[20px] font-bold text-gray-900 dark:text-white transition-colors">
          Ardhani Ahlan <br />
          <span className="text-base font-semibold flex gap-2 items-center mt-1 text-gray-700 dark:text-slate-300 transition-colors">
            <img
              src="https://flagcdn.com/w40/id.png"
              alt="flag Indonesia"
              className="w-8 h-4 rounded-sm shadow-sm"
            />
            Indonesia
          </span>
        </h1>

        <p className="text-gray-500 dark:text-slate-400 text-sm font-medium transition-colors">
          Website dibuat dengan React.js & Tailwind CSS.
        </p>
      </div>

      <div className="flex justify-between items-center pt-4 md:pt-0">
        <p className="md:text-sm text-[12px] text-gray-500 dark:text-slate-400 w-1/2 md:w-auto transition-colors">
          &copy; {new Date().getFullYear()} Dhnz. All rights reserved.
        </p>

        <div className="flex gap-6 md:gap-8 w-auto items-center">
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
    </footer>
  );
};
