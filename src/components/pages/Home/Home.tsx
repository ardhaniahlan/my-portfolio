import { useLocation } from "react-router-dom";
import Contact from "./sections/Contact";
import Profile from "./sections/Profile";
import Skill from "./sections/Skill";
import { useEffect } from "react";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <div>
      <Profile />
      <Skill />
      <section id="contact" className="-scroll-mt-5">
        <Contact />
      </section>
    </div>
  );
};
