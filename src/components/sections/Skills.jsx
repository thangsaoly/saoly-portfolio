import { motion } from "framer-motion";
import { Layout, Server, Smartphone, Terminal } from "lucide-react";
import { Section } from "../ui/Section";
import { cn } from "../../lib/utils";
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiHtml5, 
  SiFramer, 
  SiVite, 
  SiNodedotjs, 
  SiExpress, 
  SiSpringboot, 
  SiPostgresql,
  SiMysql, 
  SiSqlite, 
  SiSequelize, 
  SiAndroid, 
  SiKotlin, 
  SiJetpackcompose, 
  SiFlutter,
  SiDart,
  SiPython,
  SiDocker,
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiPostman, 
  SiLinux 
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbApi, TbPuzzle } from "react-icons/tb";
import { LuLayers } from "react-icons/lu";

const SKILL_CATEGORIES = [
  {
    title: "Frontend & Browser",
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5/CSS3", icon: SiHtml5, color: "#E34F26" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "WXT / Browser Extensions", icon: TbPuzzle, color: "#F59E0B" },
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#EEEEEE" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQLite", icon: SiSqlite, color: "#29B5E8" },
      { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Android", icon: SiAndroid, color: "#3DDC84" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285F4" },
      { name: "MVVM", icon: LuLayers, color: "#A855F7" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", icon: TbApi, color: "#10B981" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" }
  },
};

export default function Skills() {
  return (
    <Section 
      id="skills" 
      kicker="stack" 
      title="Technical Skills"
      subtitle="The frameworks, languages, and development tools I build with daily."
      className="max-w-7xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {SKILL_CATEGORIES.map((category) => {
          const CategoryIcon = category.icon || Layout;
          return (
            <motion.div 
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "group relative flex flex-col rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm",
                "p-6 sm:p-8 transition-all duration-300",
                "hover:border-primary/50 hover:bg-neutral-900/80 hover:shadow-2xl hover:shadow-primary/5"
              )}
            >
              {/* Subtle ambient accent gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                    <CategoryIcon size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    {category.title}
                  </h3>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  {category.skills.length} skills
                </span>
              </div>
              
              {/* Chips */}
              <div className="relative z-10 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.span
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={cn(
                        "group/chip inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide border cursor-default transition-all duration-200",
                        "bg-neutral-950/80 border-white/[0.08]",
                        "text-neutral-300 hover:border-primary/50 hover:bg-neutral-900 hover:text-white shadow-sm hover:shadow-md hover:shadow-black/50"
                      )}
                    >
                      <IconComponent 
                        size={16} 
                        className="transition-transform duration-200 group-hover/chip:scale-110 flex-shrink-0"
                        style={{ color: skill.color }}
                        aria-hidden="true"
                      />
                      <span>{skill.name}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
