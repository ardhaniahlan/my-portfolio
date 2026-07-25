export interface TimelineItemType {
  id: number;
  role: string;
  organization: string;
  status: string;
  duration: string;
  description: string;
  certificate?: string[];
  techStack: string[];
}