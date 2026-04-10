// Android
import a from "../../../assets/android/a.jpg";
import b from "../../../assets/android/b.jpg";
import c from "../../../assets/android/c.jpg";
import d from "../../../assets/android/d.jpg";
import e from "../../../assets/android/e.jpg";
import f from "../../../assets/android/f.jpg";
import g from "../../../assets/android/g.jpg";
import h from "../../../assets/android/h.jpg";

// Fullstack
import tokoOnline from "../../../assets/fullstack/full-stack-web-developer-laravel-react-toko-online-cosmetic-ardhani-ahlan_page-0001.jpg";
import companyProfile from "../../../assets/fullstack/web-development-laravel-11-multi-purpose-company-profile-ardhani-ahlan_page-0001.jpg";

// frontend
import wpuReact from "../../../assets/frontend/bootcampreactjs.png";

import type { IconName } from "../../ui/Icon";


export interface CertificateItem {
  id: number;
  category: string;
  iconName: IconName;
  iconColor: string;
  title: string;
  issuer: string;
  certificate?: string[];
  githubUrl?: string;
}

export const certificateItem: CertificateItem[] = [
  {
    id: 1,
    category: "Android",
    iconName: "android",
    iconColor: "text-green-500",
    title: "Android Development",
    issuer: "Dicoding Indonesia",
    certificate: [a, b, c, d, e, f, g, h],
  },
  {
    id: 2,
    category: "Fullstack Web",
    iconName: "fullstack",
    iconColor: "text-blue-500",
    title: "Full-Stack Web Toko Online",
    issuer: "BWA",
    certificate: [tokoOnline],
  },
  {
    id: 3,
    category: "Fullstack Web",
    iconName: "fullstack",
    iconColor: "text-green-500",
    title: "Full-Stack Web Company Profile",
    issuer: "BWA",
    certificate: [companyProfile],
  },
  {
    id: 4,
    category: "Front End",
    iconName: "frontend",
    iconColor: "text-yellow-500",
    title: "Bootcamp React JS",
    issuer: "Web Programming UNPAS (WPU)",
    certificate: [wpuReact],
  },
];