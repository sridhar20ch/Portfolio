export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  orcid: string;
  twitter: string;
  photo: string;
  about: string;
}

export interface ResearchExperience {
  title: string;
  role: string;
  duration: string;
  advisor: string;
  institution: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

export interface Publication {
  title: string;
  advisor: string;
  institution: string;
  status: string;
  description: string[];
}

export interface Skills {
  experimental: string;
  theoretical: string;
  computational: string;
}

export interface Course {
  institution: string;
  courses: { name: string; year: string }[];
}

export interface Award {
  title: string;
  description?: string;
  items?: string[];
}
