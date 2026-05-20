import profile from "../../../assets/paspoto.png";

export const aboutData = {
  name: "Ardhani Ahlan",
  role: "Software Developer",
  location: "Bekasi, Indonesia",
  bio: "Pengembang Android dengan wawasan full-stack yang berfokus pada aplikasi yang bersih dan mudah digunakan. Pernah berkontribusi di Bangkit Academy 2023 dan mengembangkan aplikasi admin end-to-end saat magang. Saya percaya arsitektur yang baik adalah fondasi dari produk yang hebat.",
  photo: profile,
  tags: [
    { label: "Android", color: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
    { label: "Web", color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
    { label: "UI/UX", color: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
  ],
  funFacts: [
    "Menjalankan kehidupan yang sehat dengan Workout dan Jogging",
    "Suka eksplorasi teknologi baru di waktu luang",
    "Percaya bahwa UX yang baik = kode yang bersih",
  ],
  education: [
    {
      university: "Universitas Telkom",
      major: "S1 Informatika",
      year: "2023 - 2025",
    },
    {
      university: "Universitas Telkom",
      major: "D3 Rekayasa Perangkat Lunak Aplikasi",
      year: "2020 – 2023",
    },
  ],
  techStack: [
    {
      category: "Mobile",
      color:
        "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400",
      items: ["Android", "Jetpack Compose", "Kotlin", "MVVM"],
    },
    {
      category: "Backend",
      color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
      items: ["Spring Boot", "Java", "PostgreSQL", "Firebase", "Laravel", "MySQL"],
    },
    {
      category: "Frontend",
      color:
        "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Tools",
      color:
        "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300",
      items: ["Figma", "Git", "Android Studio", "Antigravity"],
    },
  ],
};
