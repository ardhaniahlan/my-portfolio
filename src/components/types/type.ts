export interface TimelineItemType {
  id: number;
  role: string;
  organization: string;
  status: string;
  duration: string;
  description: string | string[];
  certificate?: string[];
  techStack: string[];
}