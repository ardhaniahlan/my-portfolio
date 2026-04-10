import type React from "react";
import Icon from "../../ui";
import Swal from "sweetalert2";

import { containerVariants, itemVariants } from "../../animasi/animasi";
import { motion } from "framer-motion";

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
    <section id="contact" className="mb-20 scroll-mt-8 md:scroll-mt-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 border-b-4 border-blue-600 inline-block pb-2">
            Contact Me
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl">
            Saat ini saya sedang terbuka untuk peluang kerja baru, proyek
            *freelance*, atau sekadar diskusi teknologi. Jangan ragu untuk
            menyapa!
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <a
              href="mailto:ardhan.offial16@gmail.com"
              className="flex items-center gap-4 p-5 bg-white backdrop-blur-lg border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl group"
            >
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon name="email" size={24} />
              </div>
              <div>
                <h4 className="text-gray-500 text-sm font-medium">Email</h4>
                <p className="text-gray-900 font-bold">
                  ardhan.official16@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/ardhaniahlan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white backdrop-blur-lg border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl group"
            >
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon name="linkedin" size={24} />
              </div>
              <div>
                <h4 className="text-gray-500 text-sm font-medium">LinkedIn</h4>
                <p className="text-gray-900 font-bold">Mari terhubung</p>
              </div>
            </a>

          </div>

          <div className="bg-white backdrop-blur-lg border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 rounded-3xl ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message" 
                  required
                  rows={4}
                  placeholder="Halo, saya ingin mendiskusikan peluang kerja..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors shadow-md"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
