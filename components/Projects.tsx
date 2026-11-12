"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import Reveal from "@/components/Reveal";

type Project = (typeof projects)[number];
type ProjectId = Project["id"];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [discoveredProjects, setDiscoveredProjects] =
    useState<Set<ProjectId>>(new Set());

  const openProject = (project: Project) => {
    setSelectedProject(project);

    setDiscoveredProjects((current) => {
      const next = new Set(current);
      next.add(project.id);
      return next;
    });
  };

  return (
    <>
      <section
        id="work"
        className="relative px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}

          <Reveal>
            <div className="grid gap-10 border-b border-black/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-black/35">
                  Selected work
                </p>

                <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                  Things I&apos;ve{" "}
                  <span className="font-editorial italic text-[#e83e8c]">
                    designed,
                  </span>
                  <br />
                  built & explored.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-black/45">
                  A mix of product design, software,
                  research and visual experimentation.
                  Each project started with a different
                  problem — and usually taught me
                  something I didn&apos;t expect.
                </p>
              </div>

              {/* DISCOVERY COUNTER */}

              <div className="flex items-center gap-4">
                <div className="text-left lg:text-right">
                  <p className="text-[8px] uppercase tracking-[0.18em] text-black/30">
                    Projects discovered
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    {discoveredProjects.size} /{" "}
                    {projects.length}
                  </p>
                </div>

                <div className="h-[1px] w-10 bg-[#e83e8c]" />
              </div>
            </div>
          </Reveal>

          {/* PROJECTS */}

          <div>
            {projects.map((project, index) => {
              const discovered =
                discoveredProjects.has(project.id);

              const reversed = index % 2 !== 0;

              return (
                <Reveal
                  key={project.id}
                  delay={index * 0.03}
                >
                  <article className="grid gap-8 border-b border-black/10 py-12 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-16">
                    {/* PROJECT VISUAL */}

                    <div
                      className={
                        reversed
                          ? "lg:order-2"
                          : "lg:order-1"
                      }
                    >
                      <motion.button
                        type="button"
                        onClick={() =>
                          openProject(project)
                        }
                        whileHover={{
                          y: -6,
                        }}
                        whileTap={{
                          scale: 0.99,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[24px] text-left"
                      >
                        <ProjectPoster
                          title={project.title}
                          category={project.category}
                          index={index}
                        />

                        {/* DISCOVERED LABEL */}

                        {discovered && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            className="absolute right-4 top-4 bg-[#f8f6f4] px-3 py-2 text-[8px] uppercase tracking-[0.15em] text-[#a91d59]"
                          >
                            found ✓
                          </motion.div>
                        )}

                        {/* OPEN PROJECT */}

                        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <span className="inline-flex items-center gap-2 bg-black px-4 py-3 text-[9px] uppercase tracking-[0.16em] text-white">
                            Open project
                            <span className="text-[#e83e8c]">
                              ↗
                            </span>
                          </span>
                        </div>
                      </motion.button>
                    </div>

                    {/* PROJECT COPY */}

                    <div
                      className={
                        reversed
                          ? "lg:order-1"
                          : "lg:order-2"
                      }
                    >
                      <div className="flex items-center justify-between border-b border-black/10 pb-4">
                        <span className="text-[9px] uppercase tracking-[0.18em] text-black/30">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span className="text-[9px] uppercase tracking-[0.16em] text-black/30">
                          {project.type}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          openProject(project)
                        }
                        className="group mt-7 block text-left"
                      >
                        <h3 className="text-4xl font-medium leading-[0.95] tracking-[-0.055em] transition-colors duration-300 group-hover:text-[#e83e8c] sm:text-5xl">
                          {project.title}
                        </h3>
                      </button>

                      <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#a91d59]">
                        {project.category}
                      </p>

                      <p className="mt-6 max-w-xl text-base leading-8 text-black/50">
                        {project.description}
                      </p>

                      {/* TECHNOLOGIES */}

                      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                        {project.technologies
                          .slice(0, 5)
                          .map((technology) => (
                            <span
                              key={technology}
                              className="text-[10px] text-black/40"
                            >
                              {technology}
                            </span>
                          ))}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          openProject(project)
                        }
                        className="group mt-9 flex items-center gap-4 text-sm"
                      >
                        View project

                        <span className="text-[#e83e8c] transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* COMPACT PROJECT ENDING */}

          <div className="pt-10">
            {discoveredProjects.size ===
            projects.length ? (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="flex flex-col justify-between gap-5 border-t border-black/10 py-8 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="font-editorial text-2xl italic text-[#e83e8c]">
                    You found everything.
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-black/30">
                    +50 curiosity points
                  </p>
                </div>

                <p className="text-[9px] uppercase tracking-[0.16em] text-black/30">
                  {projects.length} /{" "}
                  {projects.length} projects
                  explored
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col justify-between gap-5 border-t border-black/10 py-8 sm:flex-row sm:items-center">
                <p className="font-editorial text-2xl italic leading-tight text-black/40">
                  Different problems.
                  <br />
                  Different ways of thinking.
                </p>

                <p className="text-[9px] uppercase tracking-[0.16em] text-black/25">
                  Click around — there&apos;s more
                  inside.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </>
  );
}

/* =========================================================
   PROJECT POSTERS
========================================================= */

function ProjectPoster({
  title,
  category,
  index,
}: {
  title: string;
  category: string;
  index: number;
}) {
  switch (title) {
    case "Food Spoilage Detection":
      return <FoodPoster />;

    case "Square One Eco Africa":
      return <SquareOnePoster />;

    case "Bridge Africa":
      return <BridgeAfricaPoster />;

    case "RECA":
      return <RecaPoster />;

    case "KilimoCash":
      return <KilimoPoster />;

    case "PuzzlePlay":
      return <PuzzlePoster />;

    case "MindBunny":
      return <MindBunnyPoster />;

    default:
      return (
        <DefaultPoster
          title={title}
          category={category}
          index={index}
        />
      );
  }
}

/* =========================================================
   FOOD SPOILAGE
========================================================= */

function FoodPoster() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f4c7d8] p-7 sm:p-9">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-[9px] uppercase tracking-[0.16em] text-black/45">
            Food × Technology
          </span>

          <span className="font-editorial text-xl italic text-[#a91d59]">
            fresh?
          </span>
        </div>

        <div>
          <p className="max-w-[80%] text-5xl font-semibold leading-[0.82] tracking-[-0.07em] text-black sm:text-6xl">
            SEE
            <br />
            BEFORE
            <br />
            YOU
            <br />
            WASTE.
          </p>
        </div>

        <div className="flex items-end justify-between gap-6">
          <p className="max-w-[210px] text-[10px] leading-5 text-black/45">
            Exploring computer vision for
            everyday food decisions.
          </p>

          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.05,
            }}
            className="flex h-16 w-16 items-center justify-center bg-[#e83e8c] text-2xl text-white"
          >
            ◉
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SQUARE ONE
========================================================= */

function SquareOnePoster() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#111111] p-7 text-white sm:p-9">
      <div className="absolute right-[-15%] top-[-20%] text-[16rem] font-semibold leading-none tracking-[-0.1em] text-white/[0.04]">
        S
      </div>

      <div className="relative flex h-full flex-col justify-between">
        <span className="text-[9px] uppercase tracking-[0.17em] text-white/35">
          Climate × Digital
        </span>

        <div>
          <p className="font-editorial text-3xl italic text-[#e83e8c]">
            Systems.
          </p>

          <p className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl">
            STORIES.
            <br />
            IMPACT.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/15 pt-4 text-[9px] uppercase tracking-[0.15em] text-white/35">
          <span>Design</span>
          <span>Web</span>
          <span>Digital systems</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   BRIDGE AFRICA
========================================================= */

function BridgeAfricaPoster() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#efe9df] p-7 sm:p-9">
      <div className="flex h-full flex-col justify-between">
        <div className="flex justify-between">
          <span className="text-[9px] uppercase tracking-[0.16em] text-black/35">
            Platform
          </span>

          <span className="text-[9px] uppercase tracking-[0.16em] text-[#a91d59]">
            Africa
          </span>
        </div>

        <div className="relative">
          <p className="text-[22vw] font-semibold leading-[0.6] tracking-[-0.12em] text-black/10 sm:text-[9rem]">
            B
          </p>

          <div className="absolute inset-0 flex items-center justify-center">
            <p className="max-w-[280px] text-center text-3xl font-medium leading-[0.95] tracking-[-0.05em]">
              Ideas should find the people who
              can help them grow.
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-black/15">
          <motion.div
            initial={{
              width: "25%",
            }}
            whileHover={{
              width: "100%",
            }}
            className="h-full bg-[#e83e8c]"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RECA
========================================================= */

function RecaPoster() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      <motion.div
        whileHover={{
          scale: 1.025,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex h-full flex-col justify-between p-7 sm:p-9"
      >
        <div className="flex justify-between">
          <span className="text-[9px] uppercase tracking-[0.17em] text-white/35">
            Film × Web
          </span>

          <span className="font-editorial text-lg italic text-[#e83e8c]">
            play
          </span>
        </div>

        <p className="text-[18vw] font-semibold uppercase leading-[0.65] tracking-[-0.1em] sm:text-[8rem]">
          RECA
        </p>

        <div className="flex items-center justify-between border-t border-white/15 pt-4">
          <span className="text-[9px] uppercase tracking-[0.15em] text-white/35">
            Visual storytelling
          </span>

          <span className="text-xl text-[#e83e8c]">
            ▶
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   KILIMOCASH
========================================================= */

function KilimoPoster() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f1efe7] p-7 sm:p-9">
      <div className="flex h-full flex-col justify-between">
        <span className="text-[9px] uppercase tracking-[0.16em] text-black/35">
          Agriculture × Finance
        </span>

        <div>
          <p className="font-editorial text-2xl italic text-[#e83e8c]">
            grow differently.
          </p>

          <p className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
            KILIMO
            <br />
            CASH
          </p>
        </div>

        <div className="flex h-[90px] items-end gap-2">
          {[35, 52, 44, 68, 82].map(
            (height, index) => (
              <motion.div
                key={`${height}-${index}`}
                initial={{
                  height: 10,
                }}
                whileInView={{
                  height,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="w-full bg-[#e83e8c]"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PUZZLEPLAY
========================================================= */

function PuzzlePoster() {
  const letters = [
    "P",
    "L",
    "A",
    "Y",
    "U",
    "Z",
    "Z",
    "L",
    "E",
    "G",
    "A",
    "M",
    "E",
    "S",
    "!",
    "♥",
  ];

  return (
    <div className="h-full w-full bg-[#f8dce8] p-7 sm:p-9">
      <div className="grid h-full grid-cols-4 gap-2">
        {letters.map((letter, index) => (
          <motion.div
            key={`${letter}-${index}`}
            whileHover={{
              scale: 1.08,
              rotate:
                index % 2 === 0 ? 3 : -3,
              backgroundColor: "#e83e8c",
              color: "#ffffff",
            }}
            className="flex items-center justify-center border border-black/10 bg-[#f8f6f4] text-xl font-medium"
          >
            {letter}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MINDBUNNY
========================================================= */

function MindBunnyPoster() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#f2e8ed]">
      <div className="absolute left-7 top-7 text-[9px] uppercase tracking-[0.17em] text-black/35">
        Wellbeing × Design
      </div>

      <motion.div
        whileHover={{
          rotate: 4,
          y: -5,
        }}
        className="relative mt-6"
      >
        <div className="absolute -left-4 -top-24 h-28 w-16 -rotate-12 rounded-[50%] bg-[#e83e8c]" />

        <div className="absolute -right-4 -top-24 h-28 w-16 rotate-12 rounded-[50%] bg-[#e83e8c]" />

        <div className="relative flex h-40 w-40 items-center justify-center rounded-[50%] bg-[#e83e8c]">
          <div className="flex gap-8">
            <span className="h-3 w-3 rounded-full bg-black" />
            <span className="h-3 w-3 rounded-full bg-black" />
          </div>

          <div className="absolute mt-16 h-3 w-7 rounded-b-full border-b-2 border-black" />
        </div>
      </motion.div>

      <p className="font-editorial absolute bottom-7 right-7 text-xl italic text-[#a91d59]">
        breathe.
      </p>
    </div>
  );
}

/* =========================================================
   FALLBACK
========================================================= */

function DefaultPoster({
  title,
  category,
  index,
}: {
  title: string;
  category: string;
  index: number;
}) {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#efeae5] p-7 sm:p-9">
      <div className="flex justify-between text-[9px] uppercase tracking-[0.16em] text-black/35">
        <span>{category}</span>

        <span>
          {String(index + 1).padStart(
            2,
            "0"
          )}
        </span>
      </div>

      <p className="max-w-[90%] text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
        {title}
      </p>

      <p className="font-editorial text-xl italic text-[#e83e8c]">
        explore →
      </p>
    </div>
  );
}
