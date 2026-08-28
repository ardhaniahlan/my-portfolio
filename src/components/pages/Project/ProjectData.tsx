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

import h1 from "../../../assets/helpdesk/h1.png";
import h2 from "../../../assets/helpdesk/h2.png";
import h3 from "../../../assets/helpdesk/h3.png";
import h4 from "../../../assets/helpdesk/h4.png";
import h5 from "../../../assets/helpdesk/h5.png";
import h6 from "../../../assets/helpdesk/h6.png";
import h7 from "../../../assets/helpdesk/h7.png";

import p1 from "../../../assets/managementapp/p1.png";
import p2 from "../../../assets/managementapp/p2.png";
import p3 from "../../../assets/managementapp/p3.png";
import p4 from "../../../assets/managementapp/p4.png";
import p5 from "../../../assets/managementapp/p5.png";
import p6 from "../../../assets/managementapp/p6.png";
import p7 from "../../../assets/managementapp/p7.png";

import t1 from "../../../assets/tiketqu/t1.png";
import t2 from "../../../assets/tiketqu/t2.png";
import t3 from "../../../assets/tiketqu/t3.png";
import t4 from "../../../assets/tiketqu/t4.png";
import t5 from "../../../assets/tiketqu/t5.png";
import t6 from "../../../assets/tiketqu/t6.png";

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
    id: "tiketqu-ticketing-system",
    title: "TiketQu: Neo-Brutalism Event Ticketing & Payment",
    description: "Platform penjualan tiket event serbaguna terintegrasi Payment Gateway dengan UI/UX Neo-Brutalism.",
    fullDescription: (
      <>
        Sebuah platform <em>ticketing</em> serbaguna (Konser, Seminar, Olahraga) yang mengusung gaya desain 
        <strong> Neo-Brutalism</strong> yang unik, interaktif, dan modern. Dibangun menggunakan arsitektur 
        <strong> Next.js (App Router)</strong> dan <strong>PostgreSQL (Drizzle ORM)</strong>.
        <br /><br />
        Fitur utamanya meliputi: Sistem Autentikasi menggunakan <strong>NextAuth (Google OAuth)</strong>, integrasi 
        <em> Payment Gateway</em> <strong>Midtrans Sandbox</strong> untuk validasi pembayaran secara otomatis 
        (mendukung Virtual Account, GoPay, QRIS, dll), dan penerbitan <em>E-Ticket</em> interaktif yang bisa diakses pada Gmail.
        <br /><br />
        Dilengkapi dengan panel Admin komprehensif untuk manajemen <em>event</em> (CRUD), pelacakan status transaksi 
        pengguna secara <em>real-time</em>, optimasi performa dengan <em>Server-side Pagination</em>, dan integrasi 
        titik koordinat <strong>Google Maps (Embed iFrame)</strong> secara dinamis ke dalam halaman detail tiket.
      </>
    ),
    url: "https://tiketqu-next-js.vercel.app/",
    thumbnail: t1,
    gallery: [t1, t2, t3, t4, t5, t6],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "Neon DB",
      "NextAuth.js",
      "Midtrans API",
    ],
  },
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
  {
    id: "enterprise-project-management",
    title: "Enterprise Project & Task Management System",
    description: "Sistem kolaborasi tim dan manajemen proyek berbasis Kanban dengan fitur Multi-Tenant dan Role-Based Access Control (RBAC).",
    fullDescription: (
      <>
        Sebuah aplikasi <em>Software as a Service (SaaS)</em> skala enterprise yang dirancang untuk mengelola proyek 
        dan produktivitas tim secara terpusat. Dibangun menggunakan arsitektur <strong>Next.js (App Router)</strong> 
        dan <strong>PostgreSQL (Drizzle ORM)</strong>. 
        <br /><br />
        Fitur utamanya meliputi: Sistem <strong>Multi-Tenant (Workspace)</strong> di mana pengguna dapat membuat 
        organisasi dan mengundang anggota tim (Invite System); <strong>Role-Based Access Control (RBAC)</strong> yang ketat 
        memisahkan hak akses antara Owner, Project Manager, dan Member. 
        <br /><br />
        Dilengkapi dengan fitur inti berupa <strong>Interactive Kanban Board</strong> (Drag & Drop) untuk manajemen tugas 
        yang mendalam (Prioritas, Tenggat Waktu, <em>Checklist/Sub-tasks</em>, dan Sistem Komentar). 
        Memiliki fitur keamanan mutakhir seperti <em>Read-Only / Archive Mode</em> untuk proyek yang telah selesai, 
        serta <strong>Activity Logger (CCTV)</strong> yang mencatat setiap aksi pengguna secara otomatis di <em>Dynamic Dashboard</em>.
      </>
    ),
    url: "https://project-management-app-next-js.vercel.app", 
    thumbnail: p1,
    gallery: [p1, p2, p3, p4, p5, p6, p7],
    techStack: [
      "Next.js", 
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "Neon DB",
      "Jose (JWT)",
      "Lucide React",
      "Sonner",
    ],
  }
];