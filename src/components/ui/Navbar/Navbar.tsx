import { useState } from "react";

import { navItems } from "./NavbarData";
import ThemeToggle from "../ThemeToggle";
import Icon from "../Icon";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();
  const activeId =
    navItems.find((item) => item.link === pathname)?.id ?? navItems[0]?.id;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 flex flex-row w-full justify-between items-center p-3 px-6 md:px-24 lg:px-48 xl:px-48 shadow-sm dark:shadow-slate-800/50 transition-colors duration-300">
      <div className="flex flex-row md:gap-10 lg:gap-20 xl:gap-37 items-center justify-center ">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">
          Dhnz
        </h1>

        <div className="hidden md:flex flex-row gap-6">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div key={item.id} className="group cursor-pointer">
                <Link
                  to={item.link}
                  className={`flex items-center justify-center gap-2 p-2 px-4 rounded-lg font-medium transition-all duration-300 
                ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg dark:shadow-emerald-900/50"
                    : "text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white group-hover:bg-emerald-600 group-hover:text-white"
                }
              `}
                >
                  <span className="hidden whitespace-nowrap md:block">
                    {item.label}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none p-2 transition-colors md:hidden"
        >
          {isMobileMenuOpen ? (
            <Icon name="close" size={24} />
          ) : (
            <Icon name="hamburger" size={24} />
          )}
        </button>
      </div>

      <div
        className={`absolute top-full left-0 w-full md:hidden overflow-hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-slate-900/50 transform transition-transform duration-300 ease-in-out
      ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
    `}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navItems.map((link) => {
              const isActiveMobile = activeId === link.id;

              return (
                <Link
                  key={link.id}
                  to={link.link}
                  className={`block px-3 py-3 text-base font-medium rounded-xl transition-colors
            ${
              isActiveMobile
                ? "text-white bg-emerald-600 dark:bg-emerald-600"
                : "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }
          `}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
