import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "./NavbarData";
import Icon from "../Icon";

export const Navbar = () => {
  const { pathname } = useLocation();
  const activeId =
    navItems.find((item) =>
      item.link === "/" ? pathname === "/" : pathname.startsWith(item.link),
    )?.id ?? navItems[0]?.id;
    
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f11]/90 backdrop-blur-md border-b border-zinc-800/50">
      <nav className="max-w-6xl mx-auto flex flex-row w-full justify-between items-center py-4 px-6 md:px-12 lg:px-24 transition-colors duration-300">
        
        <Link to="/" className="flex items-center gap-3 group">
          <h1 className="text-lg font-serif text-zinc-200 tracking-wide group-hover:text-white transition-colors">
            Ardhani Ahlan
          </h1>
        </Link>

        <div className="hidden md:flex flex-row items-center gap-8">
          <div className="flex flex-row gap-8">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-400 hover:text-white focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? (
              <Icon name="close" size={24} />
            ) : (
              <Icon name="hamburger" size={24} />
            )}
          </button>
        </div>

        <div
          className={`absolute top-full left-0 w-full md:hidden overflow-hidden bg-[#0f0f11] border-b border-zinc-800 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((link) => {
              const isActiveMobile = activeId === link.id;
              return (
                <Link
                  key={link.id}
                  to={link.link}
                  className={`block text-sm font-medium tracking-wide transition-colors ${
                    isActiveMobile
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        
      </nav>
    </div>
  );
};