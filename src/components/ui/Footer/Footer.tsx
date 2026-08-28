interface SocialMediaItem {
  id: number;
  label: string;
  link: string;
}

// Mengubah ikon menjadi label teks sesuai desain referensi
const socialMedia: SocialMediaItem[] = [
  { id: 1, label: "GitHub", link: "https://github.com/ardhaniahlan" },
  { id: 2, label: "LinkedIn", link: "https://linkedin.com/in/ardhaniahlan" },
  { id: 3, label: "Instagram", link: "https://instagram.com/ardhani.ahlan" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0f0f11] text-zinc-100 px-6 md:px-12 lg:px-24 pb-12">
      <div className="max-w-6xl mx-auto pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500">
        
        {/* Bagian Kiri: Nama & Copyright */}
        <div className="text-center md:text-left">
          <h4 className="text-zinc-300 font-serif text-lg mb-1 tracking-wide">
            Ardhani Ahlan
          </h4>
          <p>
            &copy; {new Date().getFullYear()} Ardhani Ahlan. All rights reserved.
          </p>
        </div>

        {/* Bagian Kanan: Social Links (Text Base) */}
        <div className="flex gap-6 md:gap-8 items-center">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-300 font-medium tracking-wide uppercase text-[10px] md:text-xs"
            >
              {social.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};