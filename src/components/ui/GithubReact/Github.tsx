import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

export const Github = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark") {
      setCurrentTheme("dark");
    }

    const handleThemeChange = (event: CustomEvent) => {
      setCurrentTheme(event.detail);
    };

    window.addEventListener("themeChanged", handleThemeChange);

    return () => {
      window.removeEventListener("themeChanged", handleThemeChange);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center text-slate-400">
      <GitHubCalendar 
        username="ardhaniahlan" 
        colorScheme={currentTheme} 
        blockSize={12}     
        blockMargin={4}    
        fontSize={12}      
      />
    </div>
  );
}