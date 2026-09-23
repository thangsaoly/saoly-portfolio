import { motion } from "framer-motion";
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
  SiMysql, 
  SiSqlite, 
  SiSequelize, 
  SiAndroid, 
  SiKotlin, 
  SiJetpackcompose, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiJsonwebtokens, 
  SiPostman, 
  SiLinux 
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbDatabase, TbApi, TbPlugConnected } from "react-icons/tb";
import { LuLayers, LuWorkflow } from "react-icons/lu";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5/CSS3", icon: SiHtml5, color: "#E34F26" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#EEEEEE" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQLite", icon: SiSqlite, color: "#29B5E8" },
      { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
      { name: "JDBC", icon: TbDatabase, color: "#F59E0B" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Android", icon: SiAndroid, color: "#3DDC84" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285F4" },
      { name: "MVVM", icon: LuLayers, color: "#A855F7" },
      { name: "Coroutines", icon: LuWorkflow, color: "#EC4899" },
      { name: "Hilt", icon: TbPlugConnected, color: "#F43F5E" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "REST APIs", icon: TbApi, color: "#10B981" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
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
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div 
            key={idx}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary/50 block"></span>
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <motion.span
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={cn(
                      "group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium tracking-wide border cursor-default transition-all duration-200",
                      "bg-neutral-900/90 border-white/5",
                      "text-neutral-300 hover:border-primary/50 hover:text-white shadow-sm hover:shadow-md hover:shadow-black/50"
                    )}
                  >
                    <IconComponent 
                      size={16} 
                      className="transition-transform duration-200 group-hover:scale-110 flex-shrink-0"
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    />
                    <span>{skill.name}</span>
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
