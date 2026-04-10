import { useState, useEffect } from "react";
import Icon from "../../ui";
import { navItems } from "./SidebarData";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenu(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: "-50px 0px -70% 0px",
      threshold: 0.1,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] rounded-full px-2 py-2 z-50 flex flex-row items-center justify-between md:translate-x-0 md:left-0 md:ml-8 md:w-48 md:h-[calc(100vh-64px)] md:sticky md:top-8 md:my-8 md:rounded-3xl md:p-2 md:flex-col md:justify-start bg-white/40 backdrop-blur-lg border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
      <nav className="flex flex-row justify-around w-full md:flex-col md:gap-6 md:mt-4">
        {navItems.map((item) => {
          const isActive = activeMenu === item.link.replace("#", "");

          return (
            <div key={item.id} className="group cursor-pointer">
              <a
                href={item.link}
                className={`flex flex-col items-center justify-center p-3 rounded-full font-medium transition-all duration-300 md:p-4 md:rounded-2xl
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-blue-600 hover:bg-blue-600 hover:text-white group-hover:bg-blue-600 group-hover:text-white" // <-- WARNA NORMAL (Tidak Aktif)
                  }
                `}
              >
                <Icon name={item.icon} size={28} className="text-[28px]" />
                <span className="hidden whitespace-nowrap text-[16px] mt-1 md:block">
                  {item.label}
                </span>
              </a>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
