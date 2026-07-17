import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Section } from "../ui/Section";

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div className="space-y-6 text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
          <h2 className="text-4xl font-bold text-foreground mb-8">Behind the Code</h2>
          <p>
            I’m a Software Engineering student at CADT in Phnom Penh, specializing in building end-to-end digital solutions. I move seamlessly between crafting React interfaces and developing robust backends using ExpressJS and Java.
          </p>
          <p>
            I approach every project with a focus on clean UI/UX, strong architecture, and rapid prototyping. Whether I'm designing interfaces in Figma or writing scalable code, I am committed to delivering polished, effective solutions.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 italic">
            Outside of coding, you'll likely find me making Hip Hop music.
          </p>
        </div>

        {/* Interactive Stats/Visuals area */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard title="Tech Focus" value="Full Stack" />
          <StatCard title="Environment" value="Linux & Windows" />
          <StatCard title="Current Focus" value="ToubPOS Dev" />
          <StatCard title="Location" value="Phnom Penh" />
        </div>
      </motion.div>
    </Section>
  );
}

function StatCard({ title, value, className }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "p-6 rounded-2xl border backdrop-blur-sm transition-colors",
        "bg-neutral-50/50 dark:bg-white/[0.02] border-neutral-100 dark:border-white/5 hover:border-primary dark:hover:border-primary",
        className
      )}
    >
      <div className="text-neutral-400 dark:text-neutral-500 text-sm font-medium mb-2">{title}</div>
      <div className="text-xl font-semibold text-foreground">{value}</div>
    </motion.div>
  );
}
