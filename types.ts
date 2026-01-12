export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface DoctorProfile {
  name: string;
  position: string;
  specialty: string;
  imageUrl: string;
}