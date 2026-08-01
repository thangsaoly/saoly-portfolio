import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { cn } from "../../lib/utils";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion", "Vite"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "MySQL", "SQLite", "Sequelize", "JDBC"],
  },
  {
    title: "Mobile Development",
    skills: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "Hilt"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Figma", "REST APIs", "JWT", "Postman", "Linux"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
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
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium tracking-wide border cursor-default",
                    "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-white/5",
                    "text-neutral-700 dark:text-neutral-300 hover:border-primary/50 dark:hover:border-primary/50 hover:text-primary dark:hover:text-primary transition-colors shadow-sm"
                  )}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
