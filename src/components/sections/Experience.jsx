import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "../../lib/utils";

// Placeholder data for the user to fill in
const EXPERIENCE_DATA = [
  {
    id: 1,
    type: "work", // 'work' or 'education'
    title: "Full Stack Developer",
    organization: "Freelance",
    period: "2026 - Present",
    description: "Developing robust web applications using React, Node.js, and Java. Designing efficient database schemas and implementing secure authentication flows.",
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "Cambodia Academy of Digital Technology",
    period: "2024 - 2028",
    description: "Focus on software engineering, web development, and mobile development.",
  },
  {
    id: 3,
    type: "work",
    title: "Android Developer",
    organization: "Freelance",
    period: "2026 - Present",
    description: "Developing Android applications using Kotlin and Jetpack Compose.",
  }
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <div className="relative max-w-3xl mx-auto mt-8">
        {/* Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-px bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2" />

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            const isWork = item.type === "work";
            
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-start gap-8",
                  isEven ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Center Icon */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 mt-1 z-10 flex items-center justify-center w-10 h-10 rounded-full border-[4px] border-background bg-white dark:bg-neutral-900 shadow-sm text-neutral-600 dark:text-neutral-400">
                  {isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                </div>

                {/* Content Box */}
                <div className={cn(
                  "ml-14 md:ml-0 md:w-1/2 flex",
                  isEven ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"
                )}>
                  <div className={cn(
                    "w-full p-6 rounded-3xl border transition-colors hover:border-primary/30",
                    "bg-white dark:bg-neutral-900/50 border-neutral-200 dark:border-white/5",
                    "text-left"
                  )}>
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-neutral-400">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-sm font-medium text-primary mb-4">
                      {item.organization}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
