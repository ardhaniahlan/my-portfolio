import sertifMaganghub from "../../../../../assets/sertifmaganghub.png";

export interface ProfessionalType {
  id: number;
  role: string;
  company: string;
  status: string;
  duration: string;
  description: string;
  certificate?: string[];
  techStack: string[];
}

export const professionalData: ProfessionalType[] = [
  {
    id: 1,
    role: "Front End Developer Intern",
    company: "Kemas Foundation",
    status: "Magang",
    duration: "Des 2025 - Jun 2026",
    description:
      "• Membangun produk Remittance menggunakan React.js (Vite), Tailwind CSS, dan JavaScript (ES6+) dengan integrasi WalletConnect untuk pertukaran token blockchain, serta dashboard admin untuk monitoring user, transaksi, dan volume token yang diselesaikan dalam 1 bulan, berkolaborasi dengan backend developer via RESTful API. \n• Mengembangkan sistem Webmail internal perusahaan secara end-to-end menggunakan Next.js, JavaScript, dan Tailwind CSS sebagai sole frontend developer, berkolaborasi dengan backend developer via RESTful API yang diselesaikan dalam 1 bulan. \n• Melakukan deployment mandiri 2 aplikasi (Remittance & Webmail) menggunakan Virtual Private Server (VPS). \n• Mengembangkan prototype aplikasi admin Android secara end-to-end menggunakan Jetpack Compose dan arsitektur MVVM, mencakup 3 fitur utama: sistem autentikasi, manajemen pengguna, dan verifikasi e-KTP.",
    certificate: [sertifMaganghub],
    techStack: ["React", "Tailwind", "Next.js", "WalletConnect", "Android Jetpack Compose", "MVVM", "Figma", "Deployment", "VPS", "Git/GitHub"],
  },
];