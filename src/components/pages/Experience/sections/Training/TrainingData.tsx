import sertifJava from "../../../../../assets/sertifjava.jpg";
import sertifBangkit from "../../../../../assets/sertifbangkit.jpg";

export interface TrainingType {
  id: number;
  role: string;
  institution: string;
  status: string;
  duration: string;
  description: string;
  certificate?: string[];
  techStack: string[];
}

export const trainingData: TrainingType[] = [
  {
    id: 1,
    role: "Backend Java",
    institution: "SYNRGY Academy",
    status: "Bootcamp",
    duration: "Aug 2023 - March 2024",
    description:
      "Mengikuti bootcamp dengan fokus pada pengembangan backend menggunakan Java Spring Boot. Selama program, saya mempelajari REST API, Spring Data JPA, Hibernate, dan JWT Authentication, serta menerapkan unit testing dengan JUnit & MockMvc. Pengalaman ini juga membekali saya dengan praktik kolaborasi menggunakan Git/GitHub dan code review.",
    certificate: [sertifJava],
    techStack: ["SpringBoot", "JPA"],
  },
  {
    id: 2,
    role: "Mobile Application Developer",
    institution: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    status: "MSIB",
    duration: "Feb 2023 - Jul 2023",
    description:
      "Saya terpilih sebagai peserta Bangkit Academy 2023 dengan learning path Mobile Development. Program ini membawa saya dari pemula hingga tingkat lanjut dalam pengembangan aplikasi Android menggunakan Kotlin, Android Jetpack, API integration, dan Firebase. Pada tahap akhir, saya berkolaborasi lintas disiplin (Mobile, Machine Learning, Cloud Computing) dalam mengembangkan aplikasi iFiCam, yang berhasil masuk Top 65 Capstone Project terbaik Bangkit Academy 2023. Pengalaman ini melatih saya dalam teamwork, problem solving, serta membangun aplikasi end-to-end dengan teknologi terkini.",
    certificate: [sertifBangkit],
    techStack: [
      "Android Development",
      "UI/UX",
      "MVVM",
      "Fundamental",
      "Firebase",
      "Retrofit",
      "Git/GitHub",
    ],
  },
];