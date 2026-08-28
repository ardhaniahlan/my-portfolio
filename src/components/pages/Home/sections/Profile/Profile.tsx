
interface DataProfile {
  name: string;
  role: string;
  description: string;
}

const profileData: DataProfile = {
  name: "Ardhani Ahlan",
  role: "PROGRAMMER",
  description: "Pengembang Frontend dengan wawasan Android & full-stack, antusias membangun aplikasi responsif. Saya berfokus pada titik temu antara integrasi sistem yang kuat dan pengalaman pengguna yang mulus.",
};

export const Profile = () => {
  return (
    <section className="relative w-full bg-[#0f0f11] text-zinc-100 min-h-screen flex flex-col justify-center items-center px-6 py-32 overflow-hidden selection:bg-zinc-700">
      
      <div className="hidden md:block absolute left-8 top-40 -rotate-90 origin-left text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
        01 / Perkenalan
      </div>

      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto z-10">
        
        <p className="text-xs md:text-sm tracking-[0.25em] text-zinc-400 uppercase mb-8">
          {profileData.role}
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-center leading-[1.1] mb-8">
          {profileData.name} <span className="text-zinc-600">•</span> Creating Digital Products through Code
        </h1>
        
        <p className="text-zinc-400 text-center max-w-2xl text-sm md:text-base leading-relaxed mb-16">
          {profileData.description}
        </p>
        
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest hover:text-zinc-400 transition-colors group"
        >
          Mulai Berkolaborasi 
          <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
        </button>

        <div className="w-px h-32 bg-zinc-800 mt-24"></div>
      </div>
    </section>
  );
};