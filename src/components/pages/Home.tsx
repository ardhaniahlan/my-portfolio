import Sidebar from "../section/Sidebar";
import Profile from "../section/Profile";
import Hero from "../section/Hero/Hero";
import Experience from "../section/Experience";
import TechStack from "../section/TechStack";
import Certificate from "../section/Certificate";
import Contact from "../section/Contact";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen relative bg-[#f9f9f9]">
      <Sidebar />
      <Profile />

      <main className="flex-1 p-6 pt-8 md:mr-8 md:p-0 md:pt-8 md:pl-8 overflow-x-hidden">
        <Hero />
        <Experience />
        <Certificate />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
