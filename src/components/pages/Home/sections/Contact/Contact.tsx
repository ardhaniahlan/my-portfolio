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
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        Swal.fire({
          title: "Pesan Terkirim",
          text: "Terima kasih atas antusias Anda. Saya akan segera membalasnya.",
          icon: "success",
          confirmButtonColor: "#3b82f6",
          confirmButtonText: "Tutup",
        });

        form.reset();
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
          icon: "error",
          confirmButtonColor: "#3b82f6",
        });
      }
    } catch {
      Swal.fire({
        title: "Gagal Mengirim",
        text: "Periksa koneksi internet Anda dan coba lagi.",
        icon: "error",
        confirmButtonColor: "#3b82f6",
      });
    }
  };

  return (
    <div className="flex justify-center items-center py-24 p-6 md:px-24 lg:px-48 xl:px-48 transition-colors duration-300 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="flex justify-center flex-col items-center w-full gap-2 lg:px-48 md:px-24 xl:px-64 px-6 py-8 bg-slate-200 dark:bg-slate-800/50 rounded-2xl transition-colors duration-300">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white md:text-center transition-colors w-full">
          Mewujudkan ide-ide Anda. <br />
          Mari wujudkan menjadi nyata.
        </h2>
        <p className="text-gray-500 dark:text-slate-400 max-w-2xl md:text-center transition-colors">
          Punya proyek yang ingin dikerjakan? Mari diskusikan.
        </p>

        <div className="bg-white dark:bg-slate-800 border border-white/50 dark:border-slate-700 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-slate-900/50 p-6 rounded-lg w-full mt-4 md:mt-0 transition-all duration-300 md:px-6 lg:px-6 xl:px-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2 transition-colors"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2 transition-colors"
              >
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2 transition-colors"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Pesan Anda..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="w-1/3 md:w-1/4 text-white font-bold py-3 md:px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors shadow-md active:scale-95"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
