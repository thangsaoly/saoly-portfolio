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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="projects" title="Selected Work">
      <Dialog.Root open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "group relative rounded-3xl overflow-hidden cursor-pointer transition-all border",
                "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 shadow-sm hover:shadow-xl"
              )}
            >
              {/* Image / Card Header Placeholder */}
              <div className="h-48 w-full bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold tracking-wider text-neutral-400 uppercase">
                  Project Showcase
                </div>
              </div>

              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                  {project.private ? (
                    <span
                      title="Private Repository — source code is not publicly available"
                      className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-white/5 text-neutral-400 dark:text-neutral-500 cursor-not-allowed flex items-center gap-1.5"
                    >
                      <Github size={20} />
                      <span className="text-xs font-medium pr-1">Private</span>
                    </span>
                  ) : (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-neutral-200 dark:border-none bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-800 dark:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-neutral-200 dark:border-none bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-800 dark:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-50 animate-fade-in" />
          <Dialog.Content className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 p-8 border shadow-2xl rounded-3xl focus:outline-none",
            "bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-foreground animate-zoom-in"
          )}>
            <div className="flex justify-between items-start">
              <Dialog.Title className="text-2xl font-bold tracking-tight">
                {selectedProject?.title}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors" aria-label="Close">
                  <X size={20} />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
              {selectedProject?.longDescription}
            </Dialog.Description>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              {selectedProject?.private ? (
                <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-neutral-200 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500 cursor-not-allowed select-none">
                  🔒 Private Repository
                </span>
              ) : selectedProject?.githubFrontend ? (
                <>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                      Backend
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={selectedProject.githubFrontend} target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                      Frontend
                    </a>
                  </Button>
                </>
              ) : (
                <Button asChild variant="outline" className="flex-1">
                  <a href={selectedProject?.github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    Source Code
                  </a>
                </Button>
              )}
              <Button asChild className="flex-1">
                <a href={selectedProject?.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                  Live Preview
                </a>
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Section>
  );
}
