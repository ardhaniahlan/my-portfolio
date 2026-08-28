import type React from "react";
import Swal from "sweetalert2";

export const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjgpdzbk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        Swal.fire({
          title: "Pesan Terkirim",
          text: "Terima kasih atas antusias Anda. Saya akan segera membalasnya.",
          icon: "success",
          confirmButtonColor: "#18181b",
          confirmButtonText: "Tutup",
        });
        form.reset();
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
          icon: "error",
          confirmButtonColor: "#18181b",
        });
      }
    } catch {
      Swal.fire({
        title: "Gagal Mengirim",
        text: "Periksa koneksi internet Anda dan coba lagi.",
        icon: "error",
        confirmButtonColor: "#18181b",
      });
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0f0f11] text-zinc-100 py-32 px-6 md:px-12 lg:px-24">
      
      <div className="hidden md:block absolute left-8 top-32 -rotate-90 origin-left text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
        03 / Kontak
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
              Mari <br /> Berkolaborasi.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md mb-12">
              Punya visi atau proyek yang menantang? Saya selalu terbuka untuk mendiskusikan peluang teknis dan kreatif baru yang mengedepankan kualitas.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ardhan.official16@gmail.com
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Bekasi, Indonesia
            </div>
          </div>
        </div>

        <div className="bg-[#18181b] p-8 md:p-12 rounded-2xl border border-zinc-800/50">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Nama Anda"
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Anda"
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder="Ceritakan Kebutuhan Proyek Anda"
                className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-[#d6d3cd] hover:bg-white text-black text-sm font-medium py-4 rounded transition-colors flex justify-center items-center gap-2"
            >
              Kirim Pesan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>

      </div>

    </section>
  );
};