import { useEffect, useState } from "react";
import Icon from "../Icon";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);

    window.dispatchEvent(new CustomEvent("themeChanged", { detail: theme }));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="shadow-sm rounded-lg bg-slate-100 dark:bg-slate-800 transition-colors">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md cursor-pointer flex items-center justify-center transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
      >
        {theme === "light" ? (
          <Icon name="darkmode" size={20} className="text-slate-800" />
        ) : (
          <Icon
            name="lightmode"
            size={20}
            className="text-yellow-400 dark:text-white"
          />
        )}
      </button>
    </div>
  );
};
