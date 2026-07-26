"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (id: string) => void;
}

export default function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
    >
      <button
        type="button"
        onClick={() => onOpen(project.id)}
        className="w-full text-left"
        data-cursor="hover"
        aria-label={`Open case study: ${project.title}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 1120px) 100vw, 1120px"
            className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="border border-paper/20 bg-ink/50 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-paper-dim backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="flex h-9 w-9 items-center justify-center border border-paper/25 bg-ink/50 text-paper backdrop-blur-sm transition-colors group-hover:border-petrol-bright group-hover:text-petrol-bright">
              <ArrowUpRight size={16} aria-hidden />
            </span>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <div className="mb-2 flex flex-wrap items-baseline gap-3">
              <h3 className="font-display text-2xl tracking-tight text-paper sm:text-3xl">
                {project.title}
              </h3>
              <span className="text-xs text-paper-faint">{project.year}</span>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-paper-dim sm:text-[15px]">
              {project.hook[0]}
            </p>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-paper-faint sm:text-[15px]">
              {project.hook[1]}
            </p>
          </div>
          <span className="hidden shrink-0 text-xs uppercase tracking-[0.16em] text-paper-faint sm:block">
            0{index + 1}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {project.gallery.slice(1, 4).map((shot) => (
            <div
              key={shot.src}
              className="relative aspect-[4/3] overflow-hidden bg-ink-mute"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 33vw, 280px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </button>
    </motion.article>
  );
}
