"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import CaseStudyModal from "@/components/CaseStudyModal";

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-14 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-petrol-bright">
              Selected Work
            </p>
            <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
              Two projects. Full ownership.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper-faint">
            Real screenshots from the live Dar Senosi storefront and RHB design
            prototypes — open a case study for the full gallery and Figma file.
          </p>
        </div>

        <div className="flex flex-col gap-16 sm:gap-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setActiveId}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        projectId={activeId}
        onClose={() => setActiveId(null)}
        onNavigate={setActiveId}
      />
    </section>
  );
}
