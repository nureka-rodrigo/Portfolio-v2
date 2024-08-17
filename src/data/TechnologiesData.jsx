import {
  FaAndroid,
  FaBootstrap,
  FaCss3Alt,
  FaGoogle,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLaravel,
  FaLinux,
  FaMarkdown,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaWindows,
} from "react-icons/fa";
import {
  DiProlog
} from "react-icons/di";
import {
  SiC,
  SiCanva,
  SiComposer,
  SiDjango,
  SiFigma,
  SiFirebase,
  SiGraphql,
  SiKotlin,
  SiLatex,
  SiMicrosoftsqlserver,
  SiMysql,
  SiSpring,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

export const TechnologiesData = [
  // Languages
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "C", icon: <SiC /> },
  { name: "Java", icon: <FaJava /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "Markdown", icon: <FaMarkdown /> },
  { name: "LaTeX", icon: <SiLatex /> },
  { name: "Prolog", icon: <DiProlog /> },
  { name: "GraphQL", icon: <SiGraphql /> },

  // Frameworks
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React", icon: <FaReact /> },
  { name: "Spring", icon: <SiSpring /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "Vite", icon: <SiVite /> },

  // Tools
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Composer", icon: <SiComposer /> },

  // Databases
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Microsoft SQL Server", icon: <SiMicrosoftsqlserver /> },

  // Platforms
  { name: "Android Studio", icon: <FaAndroid /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Google Cloud", icon: <FaGoogle /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Figma", icon: <SiFigma /> },

  // Operating Systems
  { name: "Windows", icon: <FaWindows /> },
  { name: "Linux", icon: <FaLinux /> },
];
