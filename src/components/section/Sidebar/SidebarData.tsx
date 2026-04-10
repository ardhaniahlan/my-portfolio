import type { IconName } from "../../ui/Icon";


export interface NavItem {
  id: number;
  label: string;
  icon: IconName;
  link: string;
}

export const navItems: NavItem[] = [
  { id: 1, label: "Home", icon: "home", link: "#home" },
  { id: 2, label: "Experience", icon: "experience", link: "#experience" },
  { id: 3, label: "Certificate", icon: "certificate", link: "#certificate" },
  { id: 4, label: "Tech Stack", icon: "techstack", link: "#techstack" },
  { id: 5, label: "Contact", icon: "contact", link: "#contact" },
];