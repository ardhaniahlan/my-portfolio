import Icon from "../../ui";

const Profile = () => {
  return (
    <aside
      className="
    w-full bg-white/40 backdrop-blur-lg border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 flex flex-col items-center mt-8  
    md:w-[350px] md:sticky md:top-0 md:overflow-y-auto z-10 md:ml-8 md:w-48 md:h-[calc(100vh-64px)] md:sticky md:top-8 md:my-8 md:rounded-3xl md:p-6 md:flex-col md:justify-start"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-pink-100 overflow-hidden border-4 border-white shadow-lg mb-6">
        <img
          src="./src/assets/profile.jpeg"
          alt="Ardhani Ahlan"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-1">Ardhani Ahlan</h1>
      <h2 className="text-sm font-semibold text-gray-500 mb-4">
        Android Developer | Full-Stack Enthusiast
      </h2>

      <p className="text-center text-sm text-gray-600 mb-8 leading-relaxed">
        Android dengan wawasan fullstack. Fokus membangun aplikasi mobile yang
        modern, responsif, dan terintegrasi mulus dengan ekosistem sistem di
        baliknya.
      </p>

      <div className="flex justify-center items-center gap-6 mb-8 w-full">
        <a
          href="https://github.com/ardhaniahlan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
        >
          <Icon name="github" size={32} className="text-[28px]" />
        </a>

        <a
          href="https://linkedin.com/in/ardhaniahlan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
        >
          <Icon name="linkedin" size={32} className="text-[28px]" />
        </a>

        <a
          href="https://instagram.com/ardhani.ahlan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
        >
          <Icon name="instagram" size={32} className="text-[28px]" />
        </a>
      </div>

      <div className="flex justify-center items-center bg-blue-600 gap-2 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md w-full max-w-[200px]">
        <a href="../../assets/CV.pdf" download="CV_Ardhani_Ahlan.pdf">
          Download CV
        </a>
        <Icon name="download" size={24} />
      </div>
    </aside>
  );
};

export default Profile;
