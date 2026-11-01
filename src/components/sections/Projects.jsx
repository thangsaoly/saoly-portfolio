import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { PROJECTS } from "../../data/projects";

// Local Github icon definition
function Github({ size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const revealTransition = { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] };

// Terminal-blueprint placeholder until a real screenshot exists
function MediaTile({ project }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-neutral-950",
        "bg-[linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:26px_26px]"
      )}
    >
      <span className="font-mono text-[11px] sm:text-xs text-neutral-600 select-none truncate max-w-[85%] px-2">
        &gt; ~/projects/{slugify(project.title)}
      </span>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-900 to-transparent" />
    </div>
  );
}

function ProjectMedia({ project }) {
  return project.image ? (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
    />
  ) : (
    <MediaTile project={project} />
  );
}

function TechChips({ tech, limit }) {
  const shown = limit ? tech.slice(0, limit) : tech;
  const rest = limit ? tech.length - shown.length : 0;
  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((t) => (
        <span
          key={t}
          className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-neutral-300"
        >
          {t}
        </span>
      ))}
      {rest > 0 && (
        <span className="px-3 py-1 text-xs font-medium rounded-full text-neutral-500">
          +{rest}
        </span>
      )}
    </div>
  );
}

function SourceLinks({ project, className }) {
  return (
    <div className={cn("flex gap-3", className)} onClick={(e) => e.stopPropagation()}>
      {project.private ? (
        <span
          title="Private Repository — source code is not publicly available"
          className="p-2 rounded-full border border-neutral-700 bg-white/5 text-neutral-500 cursor-not-allowed flex items-center gap-1.5"
        >
          <Github size={18} />
          <span className="text-xs font-medium pr-1">Private</span>
        </span>
      ) : (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code`}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
        >
          <Github size={18} />
        </a>
      )}
      {project.live && project.live !== "#" && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live site`}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
        >
          <ExternalLink size={18} />
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={revealTransition}
      whileTap={{ scale: 0.995 }}
      onClick={() => onOpen(project)}
      className={cn(
        "group relative grid md:grid-cols-2 rounded-3xl overflow-hidden cursor-pointer border",
        "bg-neutral-900 border-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all"
      )}
    >
      {/* Media */}
      <div className="relative h-52 md:h-auto md:min-h-[320px] overflow-hidden">
        <ProjectMedia project={project} />
        <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-black/60 border border-primary/30 text-primary backdrop-blur-sm">
          Featured
        </span>
      </div>

      {/* Copy */}
      <div className="relative z-10 flex flex-col p-8 sm:p-9">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">
          {project.category}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-neutral-400 leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="mb-7">
          <TechChips tech={project.tech} limit={5} />
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            View project <span aria-hidden="true">→</span>
          </span>
          <SourceLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function CompactCard({ project, delay, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...revealTransition, delay }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onOpen(project)}
      className={cn(
        "group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer border",
        "bg-neutral-900 border-white/10 hover:border-primary/50 hover:shadow-xl transition-all"
      )}
    >
      <div className="relative h-36 overflow-hidden">
        <ProjectMedia project={project} />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
          {project.category}
        </p>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2.5">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-400 line-clamp-2 mb-5">
          {project.description}
        </p>

        <div className="mt-auto">
          <TechChips tech={project.tech} limit={4} />
          <div className="flex items-center justify-between mt-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-500 group-hover:text-primary transition-colors">
              Details →
            </span>
            <SourceLinks project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ModalHeader({ project }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <div>
        <Dialog.Title className="text-[26px] sm:text-3xl font-bold tracking-tight">
          {project?.title}
        </Dialog.Title>
        {project?.category && (
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-2">
            {project.category}
          </p>
        )}
      </div>
      <Dialog.Close asChild>
        <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors" aria-label="Close">
          <X size={20} />
        </button>
      </Dialog.Close>
    </div>
  );
}

function ModalBody({ project }) {
  return (
    <>
      <Dialog.Description className="text-neutral-300 text-base sm:text-[17px] leading-7">
        {project?.longDescription}
      </Dialog.Description>

      <div>
        <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500 mb-3">Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project?.tech.map(t => (
            <span key={t} className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-neutral-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-2">
        {project?.private ? (
          <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-neutral-700 text-neutral-500 cursor-not-allowed select-none">
            Private Repository
          </span>
        ) : project?.githubFrontend ? (
          <>
            <Button asChild variant="outline" className="flex-1">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                Backend
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                Frontend
              </a>
            </Button>
          </>
        ) : (
          <Button asChild variant="outline" className="flex-1">
            <a href={project?.github} target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              Source Code
            </a>
          </Button>
        )}
        {project?.live && project.live !== "#" && (
          <Button asChild className="flex-1">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} />
              Live Preview
            </a>
          </Button>
        )}
      </div>
    </>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  const open = (project) => setSelectedProject(project);

  return (
    <Section
      id="projects"
      kicker="selected work"
      title="Things I've Built"
      className="max-w-7xl xl:max-w-[1480px] 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8"
    >
      <Dialog.Root open={!!selectedProject} onOpenChange={(o) => !o && setSelectedProject(null)}>
        {/* Featured tier */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-14">
            {featured.map((project) => (
              <FeaturedCard key={project.title} project={project} onOpen={open} />
            ))}
          </div>
        )}

        {/* Everything else */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {rest.map((project, idx) => (
            <CompactCard
              key={project.title}
              project={project}
              delay={Math.min(idx * 0.07, 0.28)}
              onOpen={open}
            />
          ))}
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] animate-fade-in" />
          <Dialog.Content
            data-lenis-prevent
            className={cn(
              "fixed left-[50%] top-[50%] z-[70] w-[calc(100%-32px)] max-w-7xl translate-x-[-50%] translate-y-[-50%] border shadow-2xl rounded-3xl focus:outline-none",
              "bg-neutral-950 border-neutral-800 text-foreground animate-zoom-in max-h-[calc(100vh-40px)] overflow-y-auto landscape:max-lg:overflow-hidden overscroll-contain"
            )}
          >
            {selectedProject?.poster ? (
              /* Two-column on lg (original desktop) and landscape mobile, stacked on portrait mobile */
              <div className="grid lg:grid-cols-[minmax(0,520px)_1fr] landscape:max-lg:grid-cols-[260px_1fr] landscape:max-lg:max-h-[calc(100vh-40px)]">
                <img
                  src={selectedProject.poster}
                  alt={`${selectedProject.title} poster`}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full object-cover object-top border-white/10",
                    /* Portrait mobile: stacked on top */
                    "max-h-[40vh] rounded-t-3xl border-b",
                    /* Rotated phone (landscape): side-by-side */
                    "landscape:max-lg:max-h-[calc(100vh-40px)] landscape:max-lg:h-full landscape:max-lg:rounded-t-none landscape:max-lg:rounded-l-3xl landscape:max-lg:border-b-0 landscape:max-lg:border-r",
                    /* Desktop (your exact original large): */
                    "lg:max-h-none lg:h-full lg:rounded-t-none lg:rounded-l-3xl lg:border-b-0 lg:border-r"
                  )}
                />
                <div
                  data-lenis-prevent
                  className="flex flex-col gap-6 p-6 sm:p-10 landscape:max-lg:p-5 landscape:max-lg:gap-3.5 landscape:max-lg:max-h-[calc(100vh-40px)] landscape:max-lg:overflow-y-auto overscroll-contain"
                >
                  <ModalHeader project={selectedProject} />
                  <ModalBody project={selectedProject} />
                </div>
              </div>
            ) : (
              /* Single column fallback (exact original) */
              <div className="grid gap-6 p-8">
                <ModalHeader project={selectedProject} />
                {selectedProject?.image && (
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl border border-white/10 w-full object-cover"
                  />
                )}
                <ModalBody project={selectedProject} />
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Section>
  );
}
