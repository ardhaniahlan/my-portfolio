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
  }
];