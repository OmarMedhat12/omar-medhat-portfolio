"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import {
  getAdjacentProjects,
  getProjectById,
  type Project,
} from "@/lib/projects";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

interface CaseStudyModalProps {
  projectId: string | null;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export default function CaseStudyModal({
  projectId,
  onClose,
  onNavigate,
}: CaseStudyModalProps) {
  const project = projectId ? getProjectById(projectId) : undefined;
  const open = Boolean(project);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeShot, setActiveShot] = useState(0);

  useLockBodyScroll(open);

  useEffect(() => {
    setActiveShot(0);
  }, [projectId]);

  const goAdjacent = useCallback(
    (direction: "prev" | "next") => {
      if (!projectId) return;
      const { prev, next } = getAdjacentProjects(projectId);
      const target = direction === "prev" ? prev : next;
      if (target) onNavigate(target.id);
    },
    [projectId, onNavigate]
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goAdjacent("prev");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goAdjacent("next");
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, goAdjacent]);

  useEffect(() => {
    if (!open || !panelRef.current) return;

    const panel = panelRef.current;
    const focusables = panel.querySelectorAll<HTMLElement>(
      'button, [href], iframe, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    closeRef.current?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusables.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    panel.addEventListener("keydown", trap);
    return () => panel.removeEventListener("keydown", trap);
  }, [open, projectId]);

  const shot = project?.gallery[activeShot] ?? project?.gallery[0];

  return (
    <AnimatePresence>
      {open && project && shot && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            aria-label="Close case study"
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden border border-paper/10 bg-ink-soft shadow-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent
          >
            <div className="flex items-center justify-between border-b border-paper/10 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-paper-faint">
                <span>Case Study</span>
                <span aria-hidden>·</span>
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center text-paper-dim transition-colors hover:text-paper"
                  aria-label="Previous project"
                  onClick={() => goAdjacent("prev")}
                  data-cursor="hover"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center text-paper-dim transition-colors hover:text-paper"
                  aria-label="Next project"
                  onClick={() => goAdjacent("next")}
                  data-cursor="hover"
                >
                  <ArrowRight size={18} />
                </button>
                <button
                  ref={closeRef}
                  type="button"
                  className="ml-1 flex h-9 w-9 items-center justify-center text-paper-dim transition-colors hover:text-paper"
                  aria-label="Close"
                  onClick={onClose}
                  data-cursor="hover"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto overscroll-contain">
              <div className="relative aspect-[16/10] w-full bg-ink sm:aspect-[16/9]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/80 to-transparent px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-paper-dim">
                    {shot.label}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 overflow-x-auto border-b border-paper/10 px-4 py-3 sm:px-6">
                {project.gallery.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setActiveShot(i)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden border transition-colors sm:h-20 sm:w-28 ${
                      i === activeShot
                        ? "border-petrol-bright"
                        : "border-paper/15 hover:border-paper/40"
                    }`}
                    aria-label={`View ${item.label}`}
                    aria-current={i === activeShot}
                    data-cursor="hover"
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </button>
                ))}
              </div>

              <div className="px-5 py-8 sm:px-8 sm:py-10">
                <p className="mb-2 text-sm text-paper-faint">
                  {project.subtitle}
                </p>
                <h2
                  id={titleId}
                  className="font-display text-3xl tracking-tight text-paper sm:text-4xl"
                >
                  {project.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper-dim sm:text-base">
                  {project.narrative}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-paper/10 py-6 sm:grid-cols-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-[10px] uppercase tracking-[0.14em] text-paper-faint">
                        {metric.label}
                      </dt>
                      <dd className="mt-1 font-display text-xl text-paper">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-paper/15 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-paper-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <MetaRow project={project} />

                {(project.liveUrl || project.figmaUrl) && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-petrol px-4 py-2.5 text-sm text-paper transition-colors hover:bg-petrol-bright"
                        data-cursor="hover"
                      >
                        Visit live site
                        <ExternalLink size={14} aria-hidden />
                      </a>
                    )}
                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-paper/20 px-4 py-2.5 text-sm text-paper transition-colors hover:border-petrol-bright hover:text-petrol-bright"
                        data-cursor="hover"
                      >
                        Open Figma file
                        <ExternalLink size={14} aria-hidden />
                      </a>
                    )}
                  </div>
                )}

                <div className="mt-10">
                  <h3 className="mb-4 font-display text-xl text-paper">
                    Screens & deliverables
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.gallery.map((item) => (
                      <figure
                        key={`grid-${item.src}`}
                        className="overflow-hidden border border-paper/10 bg-ink"
                      >
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 480px"
                            className="object-cover object-top"
                          />
                        </div>
                        <figcaption className="border-t border-paper/10 px-3 py-2 text-xs uppercase tracking-[0.12em] text-paper-faint">
                          {item.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>

                {project.figmaEmbedUrl && (
                  <div className="mt-10">
                    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                      <h3 className="font-display text-xl text-paper">
                        Figma design file
                      </h3>
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-[0.14em] text-petrol-bright hover:underline"
                        data-cursor="hover"
                      >
                        Open in Figma
                      </a>
                    </div>
                    <div className="overflow-hidden border border-paper/10 bg-ink">
                      <iframe
                        title={`${project.title} Figma file`}
                        src={project.figmaEmbedUrl}
                        className="h-[70vh] min-h-[420px] w-full"
                        allowFullScreen
                      />
                    </div>
                    <p className="mt-2 text-xs text-paper-faint">
                      Interactive embed — zoom and pan inside the file. If it
                      asks you to log in, use Open in Figma above.
                    </p>
                  </div>
                )}

                <div className="mt-10 border-t border-paper/10 pt-8">
                  <h3 className="mb-4 font-display text-xl text-paper">
                    Full case study
                  </h3>
                  <div className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {project.markdown}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MetaRow({ project }: { project: Project }) {
  const items = [
    { label: "Role", value: project.role },
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Status", value: project.status },
  ];

  return (
    <dl className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-[10px] uppercase tracking-[0.14em] text-paper-faint">
            {item.label}
          </dt>
          <dd className="mt-1 text-sm text-paper-dim">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
