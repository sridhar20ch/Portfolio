import { PersonalInfo, ResearchExperience, Education, Publication, Skills, Course, Award } from './types';

export const personalInfo: PersonalInfo = {
  name: "R. Sridhar",
  location: "Tamilnadu, India",
  phone: "+91 9486941040",
  email: "Sridhar20ch@gmail.com",
  linkedin: "https://www.linkedin.com/in/sridhar-r-chem/",
  orcid: "https://orcid.org/0009-0001-3602-6240",
  twitter: "https://x.com/Sridhar20ch",
  photo: "import profileImg from "Photo.png";

export const PROFILE_IMAGE = profileImg;"
};

export const education: Education[] = [
  {
    degree: "M.Sc. Chemistry",
    institution: "Pondicherry University, India",
    year: "2023 - 2025",
    details: ["Final Grade: 8.75 (CGPA)", "EQF level 7", "University Merit Scholarship (3rd Rank)"]
     photo: "<p align="right">
  <img src="PondiUni.png">
</p>"
  },
  {
    degree: "B.Sc. Chemistry",
    institution: "St. Joseph's College, Tiruchirappalli, India",
    year: "2020 - 2023",
    details: ["Final Grade: 8.38 (CGPA)", "EQF level 6", "Sports team Captain (Ball Badminton)"]
    photo: "<p align="right">
  <img src="sjc_logo.png">
</p>"
  }
];

export const researchExperience: ResearchExperience[] = [
  {
    role: "Master's Thesis",
    duration: "Jan 25 – May 25",
    title: "Strategic synthesis of D-Rhamnal from D-Glucal",
    advisor: "Prof. Jeyakumar Kandasamy",
    institution: "Pondicherry University, India",
    description: [
      "Designed and optimized a cost-efficient multi-step synthetic route converting D-glucal into D-rhamnal, achieving overall yields of up to 60%.",
      "The key advantage of our approach is its cost efficiency, as the product value is approximately 5000-fold higher than that of the starting material. This high-value product was subsequently utilized in our collaborative work."
    ]
  },
  {
    role: "Literature Survey Project",
    duration: "Jan 25 - May 25",
    title: "Innovations in the Ferrier Reaction: Green Chemistry and Catalytic Strategies",
    advisor: "Prof. Jeyakumar Kandasamy",
    institution: "Pondicherry University, India",
    description: [
      "Analyzed 25+ peer-reviewed publications, comparing catalysts and reaction systems for efficiency and sustainability.",
      "Proposed greener synthetic and catalytic strategies that aligned with green chemistry principles."
    ]
  },
  {
    role: "Summer Internship (PG)",
    duration: "July 24 - Dec 24",
    title: "Ferrier type-I rearrangements for the different Glycals to yield 2, 3-unsaturated glycosides",
    advisor: "Prof. Jeyakumar Kandasamy",
    institution: "Pondicherry University, India",
    description: [
      "Synthesized a series of 2,3-unsaturated glycosides via Ferrier Type-I rearrangement using D-glucal, D-galactal, D-rhamnal, and L-rhamnal precursors, achieving yields of up to 95%.",
      "Investigated the influence of acetate protecting groups on selectivity and efficiency. Documented mechanistic insights involving allyloxocarbenium ion intermediates and hydride migration."
    ]
  }
];

export const publications: Publication[] = [
  {
    title: "A Versatile Synthetic Route to C-2 Aryl Glycosides under mild condition",
    advisor: "Prof. Jeyakumar Kandasamy",
    institution: "Pondicherry University, India",
    status: "Manuscript under preparation",
    description: [
      "Contributed to developing a palladium-catalyzed arylation protocol for pseudoglycals under ambient conditions.",
      "Developed and optimized synthetic routes for 15+ aryl glycoside derivatives (yield ≤85%) using ¹H/¹³C NMR and HRMS for structural confirmation.",
      "Investigated stereochemical outcomes, protecting groups participation and reaction limitations across various pyranosides and protecting groups.",
      "Identified the limitations with few substrates and protecting groups, informing future synthetic optimization."
    ]
  }
];

export const skills: Skills = {
  experimental: "TLC, Column Chromatography, vacuum filtration, distillation, NMR, ESI-HRMS, FT-IR, UV–Vis spectroscopy",
  theoretical: "HPLC, LC–MS, GC–MS, XRD, TGA, AAS, ICP–MS",
  computational: "Molecular modelling (ChemDraw, Spartan, GaussView), DFT studies (Gaussian-09), Molecular docking (PyRx, MGL tools, Discovery Studio), Spectral interpretation (MestreNova, Sisweb)"
};

export const offlineCourses: Course[] = [
  {
    institution: "St. Joseph's College",
    courses: [
      { name: "Pharmaceutical Chemistry", year: "2021" },
      { name: "Separation and Instrumental Techniques", year: "2022" },
      { name: "Food Standards and Quality Control", year: "2023" }
    ]
  },
  {
    institution: "Bharathidasan University",
    courses: [
      { name: "Office Automation", year: "2016" },
      { name: "Programming Techniques", year: "2017" }
    ]
  }
];

export const onlineCourses: Course[] = [
  {
    institution: "Discovery Boulevard",
    courses: [
      { name: "Molecular docking & multi-ligand screening", year: "2025" },
      { name: "Homology modelling", year: "2025" },
      { name: "Drug-likeness filtering and ADMET analysis", year: "2025" }
    ]
  },
  {
    institution: "CIPET-IPT, Kochi",
    courses: [
      { name: "Polymers in Electronics", year: "2025" }
    ]
  }
];

export const conferences: string[] = [
  "International Conference on Frontiers in Chemical Sciences (ICFCS 2025) – Participant & Student volunteer",
  "National Conference on Recent Advancements in Chemistry and Environmental Sciences (RACES 2024) – Participant.",
  "Indo-ASEAN Symposium on Organic Synthesis and Medicinal Chemistry (NOV 2024) - Participant.",
  "One day National Workshop on Green Hydrogen: Technology to Application (DEC 2024) - Participant.",
  "One day Workshop on Scientific Writing & Ethics in Enhancing Publications (SWEEP 2024) - Participant"
];

export const honorsAndAwards: Award[] = [
  {
    title: "Qualified National Examinations",
    items: [
      "Graduate Aptitude Test in Engineering (CY) - 2025",
      "Counsil of Scientific and Industrial Research - National Eligibility Test (CSIR-NET) - (PhD Only) - June 2025",
      "Central University Entrance Test (CY) - 2023"
    ]
  },
  {
    title: "Awards",
    items: [
      "Special Award for Sports and Games at Achievers Day, St. Joseph's College (2023).",
      "Consecutive Winner in Inter-Collegiate Ball Badminton Tournament, Bharathidasan University (2022, 2023).",
      "Prof. A. C. Joseph Medal at the 178th College Day, St. Joseph's College (2022)."
    ]
  },
  {
    title: "Merit Cum Means Scholarship – Pondicherry University",
    description: "Awarded for outstanding performance in M.Sc. Chemistry."
  },
  {
    title: "Sports & Games Scholarship – St. Joseph's College",
    description: "Awarded for the sports excellence during the bachelor studies."
  }
];

export const additionalInfo: string[] = [
  "Academic Enrichment: Inspire Internship Programme (2018), State-Level Common Aptitude Test (2017), 14th Chemistry Research Drive (CRD-2025) by RJSF.",
  "Leadership: Captain, College Ball Badminton Team - led my team to win multiple state level championships.",
  "Languages: English (C1 level), Tamil & Telugu (Native)"
];
