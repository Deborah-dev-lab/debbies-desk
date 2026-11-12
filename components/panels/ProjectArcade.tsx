
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Gamepad2,
  Monitor,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "RECA Film Company",
    category: "Creative Web Development",
    description:
      "A cinematic digital experience for a film production company, combining storytelling, video and a content-managed portfolio.",
    technologies: ["Next.js", "TypeScript", "Sanity CMS", "Vercel"],
    url: "https://www.reca.co.ke",
    status: "Live website",
  },
  {
    number: "02",
    title: "Kilimani Bookpark",
    category: "Website Design & Development",
    description:
      "A welcoming website for a tuition and homeschooling centre, helping families discover programmes, learn about the team and get in touch.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://www.kilimanibookpark.co.ke",
    status: "Live website",
  },
  {
    number: "03",
    title: "Food Spoilage Detection",
    category: "Mobile Development + AI",
    description:
      "An ongoing mobile application project exploring computer vision for identifying food freshness from images.",
    technologies: ["Flutter", "Dart", "Machine Learning"],
    url: null,
    status: "In development",
  },
  {
    number: "04",
    title: "KilimoCash",
    category: "Product Design",
    description:
      "A farm financial management concept developed through the Female Founders Academy and recognised with the Solution in Action Award.",
    technologies: ["Product Design", "UX Research", "Prototyping"],
    url: null,
    status: "Concept project",
  },
  {
    number: "05",
    title: "Bridge Africa",
    category: "Web Application",
    description:
      "An exploration of how a digital platform can help connect African startups with potential investors.",
    technologies: ["React", "MongoDB", "Web Development"],
    url: null,
    status: "Project",
  },
  {
    number: "06",
    title: "Bioinformatics Research",
    category: "Python + Data Analysis",
    description:
      "Research exploring E. coli genome data in the context of antibiotic resistance, using Python for preparation, validation and exploratory analysis.",
    technologies: ["Python", "Biopython", "NCBI Datasets"],
    url: null,
    status: "Research",
  },
];

export default function ProjectArcade() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = projects[selectedIndex];

  function previousProject() {
    setSelectedIndex(
      (current) => (current - 1 + projects.length) % projects.length
    );
  }

  function nextProject() {
    setSelectedIndex((current) => (current + 1) % projects.length);
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#4c405c] bg-[#201c30] text-[#f8edf2] shadow-2xl">
      {/* Arcade header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#2e263e] px-6 py-5">
        <div className="flex items-center gap-3">
          <Gamepad2 className="text-[#f0abc5]" size={24} />
          <div>
            <p className="font-serif text-2xl italic text-[#f0abc5]">
              debbie's arcade
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#bcaac6]">
              Select a project
            </p>
          </div>
        </div>

        <span className="rounded-full border border-[#f0abc5]/30 px-3 py-1.5 text-xs text-[#f0abc5]">
          {projects.length} projects
        </span>
      </div>

      <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
        {/* Project selection */}
        <nav
          aria-label="Select a project"
          className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r"
        >
          <p className="px-3 pb-4 pt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bba7c4]">
            Game library
          </p>

          <div className="space-y-2">
            {projects.map((project, index) => {
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={project.number}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={isSelected}
                  className={`flex w-full cursor-pointer items-center gap-4 rounded-xl px-4 py-4 text-left transition-all ${
                    isSelected
                      ? "bg-[#e9b1bf] text-[#251d32]"
                      : "text-[#e2d3e5] hover:bg-white/10"
                  }`}
                >
                  <span className="font-mono text-xs opacity-70">
                    {project.number}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">
                      {project.title}
                    </span>
                    <span className="mt-1 block text-xs opacity-70">
                      {project.category}
                    </span>
                  </span>

                  <ChevronRight size={17} className="shrink-0" />
                </button>
              );
            })}
          </div>
        </nav>

        {/* Featured project */}
        <section
          aria-label={`Selected project: ${selected.title}`}
          className="p-5 sm:p-8"
        >
          <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden rounded-2xl border border-[#75617f] bg-[#34304c] p-6 sm:min-h-[260px]">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#e9b1bf]/10 blur-3xl"
            />

            <div className="relative text-center">
              <Monitor
                size={43}
                strokeWidth={1.2}
                className="mx-auto mb-5 text-[#e9b1bf]"
              />

              <p className="text-[11px] uppercase tracking-[0.22em] text-[#d1b5d0]">
                Now exploring
              </p>

              <h3 className="mt-3 font-serif text-3xl text-[#f8edf2] sm:text-4xl">
                {selected.title}
              </h3>

              <p className="mt-3 text-xs text-[#e9b1bf]">
                {selected.category}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#e9b1bf]">
              Level {selected.number}
            </span>

            <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-[#d7c6d8]">
              {selected.status}
            </span>
          </div>

          <p className="mt-5 text-sm leading-8 text-[#d9c9dc]">
            {selected.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {selected.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#b99ab7]/30 bg-white/5 px-3 py-1.5 text-xs text-[#f0dce7]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousProject}
                aria-label="Previous project"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                <ChevronLeft size={19} />
              </button>

              <button
                type="button"
                onClick={nextProject}
                aria-label="Next project"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                <ChevronRight size={19} />
              </button>
            </div>

            {selected.url ? (
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#e9b1bf] px-5 py-3 text-sm font-semibold text-[#251d32] transition-transform hover:-translate-y-0.5"
              >
                Visit website
                <ArrowUpRight size={17} />
              </a>
            ) : (
              <span className="text-xs text-[#bcaac6]">
                No public project link yet
              </span>
            )}
          </div>
        </section>
      </div>

      {/* Arcade footer */}
      <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 bg-[#2a2338] px-6 py-4 text-[11px] text-[#bcaac6]">
        <span>Choose a project to explore</span>
        <span>Made with curiosity ✦</span>
      </div>
    </div>
  );
}
