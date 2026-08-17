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

import h1 from "../../../assets/helpdesk/h1.png"
import h2 from "../../../assets/helpdesk/h2.png"
import h3 from "../../../assets/helpdesk/h3.png"
import h4 from "../../../assets/helpdesk/h4.png"
import h5 from "../../../assets/helpdesk/h5.png"
import h6 from "../../../assets/helpdesk/h6.png"
import h7 from "../../../assets/helpdesk/h7.png"

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
    title: "Booking App Full-Stack",
    description: "Platform marketplace untuk sewa alat dan venue",
    fullDescription: (
      <>
        Sebuah aplikasi <em>full-stack</em> yang mempertemukan penyewa dengan pemilik aset (Vendor). Dibangun menggunakan arsitektur <strong>Next.js</strong> dan <strong>Supabase</strong> sebagai <em>Backend-as-a-Service</em>. 
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
      "Sonner",
      "Zod",
    ],
  },
  {
    id: "it-helpdesk-system",
    title: "IT Helpdesk & Ticketing System Full-Stack",
    description: "Sistem pelaporan kendala IT dan manajemen bantuan perusahaan berbasis peran.",
    fullDescription: (
      <>
        Sebuah aplikasi <em>full-stack</em> IT Helpdesk yang dirancang untuk mengelola dan melacak laporan kendala 
        infrastruktur perusahaan secara efisien. Dibangun menggunakan arsitektur <strong>Next.js</strong> 
        dan <strong>PostgreSQL (Drizzle ORM)</strong>. 
        Fitur utamanya meliputi: Autentikasi berbasis peran (Admin & User) dengan pengaman <em>Edge Middleware</em>, 
        manajemen tiket lengkap dengan kategori (Hardware/Software) dan status (Pending, In Progress, Resolved), 
        serta fitur <strong>Live Chat Real-time</strong> di dalam detail tiket. Dilengkapi juga dengan panel Admin komprehensif 
        yang mencakup manajemen pengguna, filter pencarian dinamis dengan <em>Debounce</em>, paginasi data, dan laporan statistik performa.
      </>
    ),
    url: "https://helpdesk-app-nextjs.vercel.app/",
    thumbnail: h1, 
    gallery: [h1, h2, h3, h4, h5, h6, h7],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "Neon DB",
      "Lucide React",
      "Sonner",
      "Zod",
    ],
  },
];
