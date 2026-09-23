import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "../../lib/utils";

const EXPERIENCE_DATA = [
  {
    id: 1,
    type: "work",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  },
};

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {EXPERIENCE_DATA.map((item) => {
          const isWork = item.type === "work";
          
          return (
            <motion.div 
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
              className={cn(
                "group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300",
                "bg-neutral-900/60 border-white/5 backdrop-blur-sm",
                "hover:border-primary/40 hover:bg-neutral-900/90 hover:shadow-xl hover:shadow-primary/5"
              )}
            >
              <div>
                {/* Header: Category Badge + Period Tag */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
                    {isWork ? (
                      <>
                        <Briefcase size={13} className="text-primary" />
                        <span>Experience</span>
                      </>
                    ) : (
                      <>
                        <GraduationCap size={13} className="text-primary" />
                        <span>Education</span>
                      </>
                    )}
                  </span>

                  <span className="text-xs font-semibold tracking-wide px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    {item.period}
                  </span>
                </div>

                {/* Role / Degree Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1.5">
                  {item.title}
                </h3>

                {/* Organization */}
                <h4 className="text-sm font-medium text-neutral-400 mb-4">
                  {item.organization}
                </h4>

                {/* Description */}
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative accent line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
                <span>{isWork ? "Professional" : "Academic"}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
