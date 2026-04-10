import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { AiOutlineHome, AiOutlineStar } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { PiCertificate } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdPhoneAndroid, MdEmail } from "react-icons/md";
import { CiMonitor } from "react-icons/ci";
import { HiOutlineDownload } from "react-icons/hi";


interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  home: AiOutlineHome,
  contact: LuPhone,
  certificate: PiCertificate,
  about: GoPerson,
  experience: AiOutlineStar,
  techstack: HiSquare3Stack3D,
  android: MdPhoneAndroid,
  fullstack: FaGlobe,
  frontend: CiMonitor,
  email: MdEmail,
  download: HiOutlineDownload
};

export type IconName = "github" | "linkedin" | "instagram" | "home" | "contact" | "certificate" | "about" | "experience" | "techstack" | "android" | "fullstack" | "frontend" | "email" | "download";

export const Icon = (props: IconProps) => {
  const {name, size = 16, className } = props;
  const SelectedIcon = iconMap[name] as React.FC<{ size?: number; className?: string }>;;

  if (!SelectedIcon) return null;

  return <SelectedIcon size={size} className={className}/>; 
};