import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "../../lib/utils";

const EXPERIENCE_DATA = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "Cambodia Academy of Digital Technology",
    period: "2024 — Present",
    story: "Where the foundation was poured — software engineering, web, and mobile, learned as much in editors as in lectures.",
    description: "Focus on software engineering, web development, and mobile development.",
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer",
    organization: "Freelance",
    period: "2026 — Present",
    story: "From raw SQL in the dark to smooth light on glass.",
    description: "Developing robust web applications using React, Node.js, and Java. Designing efficient database schemas and implementing secure authentication flows.",
  },
  {
    id: 3,
    type: "work",
    title: "Android Developer",
    organization: "Freelance",
    period: "2026 — Present",
    story: "Native Android, where every interaction gets the polish it deserves.",
    description: "Developing Android applications using Flutter or Kotlin and Jetpack Compose.",
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      kicker="changelog"
      title="Experience & Education"
      subtitle="The commits that got me here — and the ones still in progress."
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline spine */}
        <div
          aria-hidden="true"
          className="absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent"
        />

        {EXPERIENCE_DATA.map((item, i) => {
          const isWork = item.type === "work";

          return (
            <Reveal
              key={item.id}
              delay={i * 0.08}
              className="relative pl-10 sm:pl-14 pb-10 last:pb-0"
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-3 top-8 -translate-x-1/2 w-3 h-3 rounded-full",
                  "bg-primary ring-4 ring-primary/15",
                  "shadow-[0_0_14px_rgba(251,191,36,0.55)]"
                )}
              />

              <div
                className={cn(
                  "group relative flex flex-col p-6 sm:p-7 rounded-2xl border transition-all duration-300",
                  "bg-neutral-900/60 border-white/5 backdrop-blur-sm",
                  "hover:border-primary/40 hover:bg-neutral-900/90 hover:shadow-xl hover:shadow-primary/5"
                )}
              >
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

                  <span className="font-mono text-xs tracking-wide px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
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

                {/* Narrative line */}
                <p className="text-[15px] text-neutral-300 leading-relaxed mb-3">
                  {item.story}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
