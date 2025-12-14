import { 
  Code2, 
  Cpu, 
  Braces,
  Terminal
} from 'lucide-react';
import { 
  SiC,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { Experience, Project, Education, SkillCategory, Achievement } from './types';

// Using simple filename. Ensure raushan.jpg is in the same folder as index.html
export const PROFILE_IMAGE_URL = "./raushan.jpg";
export const HCL_LOGO="./hcl-logo.jpeg"

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/raushan-srivastava-128732281",
  github: "https://github.com/raushan074",
  email: "mailto:raushansrivastava6200@gmail.com",
  leetcode: "https://leetcode.com/u/sri_rs074"
};

export const SUMMARY = "Aspiring software engineer with strong C++, Java foundation and a passion for solving complex problems. Skilled in optimizing performance and developing innovative solutions, eager to contribute to impactful projects in a dynamic environment.";

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Software Development Trainee (Java | Spring Boot | React.js)",
    company: "HCLTech",
    period: "Present",
    logo:HCL_LOGO,
    description: [
      "Completed intensive full-stack development training focusing on Spring Boot, Java, JavaScript, and React.js.",
      "Built multiple module-based projects and integrated them into a comprehensive CorexFin Banking System.",
      "Developed modular services for registration, accounts, transactions, and notifications.",
      "Created a React-based multi-tenant frontend portal for a seamless user experience."
    ],
    techStack: ["Java", "Spring Boot", "React.js", "JavaScript", "Microservices"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Study Notion",
    description: "Developed a scalable ed-tech platform enabling users to create, consume, and rate educational content. Features secure course purchases and responsive interfaces. Instructors can design courses while users track progress seamlessly.",
    techStack: ["MongoDB", "ReactJS", "ExpressJS", "NodeJS", "Tailwind CSS"]
  },
  {
    title: "Real-Time Chat App",
    description: "Built a live chat platform with real-time messaging, online status indicators, and message notifications. Integrated Socket.io for seamless interactions and ensured a user-friendly experience.",
    techStack: ["React", "MongoDB", "Socket.io", "NodeJS", "ExpressJS"]
  },
  {
    title: "Video-Tube",
    description: "Designed a video-sharing platform with secure JWT authentication, video uploads (AWS S3/Multer), and user engagement features like comments, likes, and subscriptions.",
    techStack: ["MongoDB", "NodeJS", "ExpressJS", "AWS S3", "JWT"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress }, // Removed color to allow dynamic theme adaptation
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ]
  },
  {
    category: "Tools & Core",
    skills: [
      { name: "Git & GitHub", icon: SiGit, color: "#F05032" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "OOP", icon: Code2, color: "#ec4899" }, // Generic pink
      { name: "DSA", icon: Braces, color: "#8b5cf6" }, // Generic violet
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Gandhi Engineering College",
    year: "May 2025",
    score: "CGPA: 8.45"
  }
];

export const ADDITIONAL_INFO: Achievement[] = [
  {
    title: "Awards",
    description: "1st position in Hackathon and Code Relay (awarded by VC, Principal, and Director). 2nd position in Code Quest Challenge and C-de Pattern at college-level competitions."
  },
  {
    title: "Certifications",
    description: "Web Development Boot-Camp by Code Help."
  },
  {
    title: "Training Achievement",
    description: "Scored 100% in Coding in final post assessment in HCLTECH Training."
  },
  {
    title: "Languages",
    description: "English, Hindi"
  }
];