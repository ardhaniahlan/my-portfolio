import ecutama from "../../../assets/ecommercelite/ecommercelite.png";
import ecdetail from "../../../assets/ecommercelite/ecommercelitedetail.png";
import eccart from "../../../assets/ecommercelite/ecommercelitecart.png";

import b1 from "../../../assets/bookingapp/b1.png";
import b2 from "../../../assets/bookingapp/b2.png";
import b3 from "../../../assets/bookingapp/b3.png";
import b4 from "../../../assets/bookingapp/b4.png";
import b5 from "../../../assets/bookingapp/b5.png";
import b6 from "../../../assets/bookingapp/b6.png";
import b7 from "../../../assets/bookingapp/b7.png";

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
    {
    id: "booking-app",
    title: "Booking App Fullstack",
    description: "Platform marketplace untuk sewa alat dan venue",
    fullDescription: (
      <>
        Sebuah aplikasi <em>full-stack</em> yang mempertemukan penyewa dengan pemilik aset (Vendor). Dibangun menggunakan arsitektur <strong>Next.js App Router</strong> dan <strong>Supabase</strong> sebagai <em>Backend-as-a-Service</em>. 
        Fitur utamanya meliputi: Autentikasi multi-peran (User & Admin/Vendor) menggunakan Edge Middleware, 
        manajemen katalog dan ketersediaan barang, keranjang pemesanan dinamis, serta penerbitan E-Ticket. 
        Vendor memiliki akses ke dasbor analitik khusus untuk menyetujui atau menolak pesanan. Aplikasi ini 
        juga dilengkapi dengan Row Level Security (RLS) untuk keamanan data dan integrasi API WhatsApp untuk komunikasi langsung.
      </>
    ),
    url: "https://booking-app-nextjs-five.vercel.app/",
    thumbnail: b1,
    gallery: [b1, b2, b3, b4, b5, b6, b7],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (Auth & Database)",
      "Lucide React",
      "React Hook Form",
      "Zod",
    ],
  },
  
];
