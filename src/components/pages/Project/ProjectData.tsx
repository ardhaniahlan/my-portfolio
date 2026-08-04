import ecutama from "../../../assets/ecommercelite/ecommercelite.png";
import ecdetail from "../../../assets/ecommercelite/ecommercelitedetail.png";
import eccart from "../../../assets/ecommercelite/ecommercelitecart.png";
import type { ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: ReactNode;
  thumbnail: string;
  url?: string;
  gallery: string[];
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-lite",
    title: "E-Commerce Lite",
    description: "Dummy aplikasi E-Commerce yang ringan dan cepat.",
    fullDescription: (
      <>
        Aplikasi website e-commerce yang dibangun menggunakan{" "}
        <a
          href="https://fakestoreapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          FakeStoreAPI
        </a>
        . Aplikasi ini memiliki fitur-fitur, diantaranya: Menampilkan barang
        yang di fetch dari FakeStoreAPI, menampilkan detail barang, keranjang
        belanja, dan simulasi metode pembayaran sederhana.
      </>
    ),
    url: "https://e-commerce-lite-nextjs.vercel.app/",
    thumbnail: ecutama,
    gallery: [ecutama, ecdetail, eccart],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sonner",
      "Axios",
      "Zustand",
      "React-hook-form",
      "Zod",
    ],
  },
  
];
