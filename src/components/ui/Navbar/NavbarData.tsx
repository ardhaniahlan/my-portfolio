
export interface NavItem {
  id: number;
  label: string;
  link: string;
}

export const navItems: NavItem[] = [
  { id: 1, label: "Beranda", link: "/" },
  { id: 2, label: "Pengalaman", link: "/experience" },
  { id: 3, label: "Projek", link: "/project" },
  { id: 4, label: "Tentang Saya",link: "/about" },
];
