"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Development",
    description:
      "Turning interfaces and ideas into working digital products.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Python",
      "Java",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Product Design",
    description:
      "Understanding people, shaping ideas and designing experiences around them.",
    skills: [
      "Figma",
      "UX Research",
      "UI Design",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Thinking",
      "User-Centred Design",
      "Visual Design",
      "Product Strategy",
    ],
  },
  {
    number: "03",
    title: "AI & Data",
    description:
      "Exploring how data and intelligent systems can become useful products.",
    skills: [
      "Machine Learning",
      "CNNs",
      "Computer Vision",
      "Data Preprocessing",
      "Model Training",
      "Model Evaluation",
      "SQL",
      "MongoDB",
      "Database Systems",
    ],
  },
  {
    number: "04",
    title: "Tools & Infrastructure",
    description:
      "The practical tools I use to build, collaborate and get things online.",
    skills: [
      "Git",
      "GitHub",
      "Supabase",
      "Vercel",
      "Vite",
      "WordPress",
      "Elementor",
      "Bluehost",
      "DNS Configuration",
      "Cloud Computing",
    ],
  },
];

const playgroundSkills = [
  {
    name: "React",
    className:
      "left-[7%] top-[16%] rotate-[-6deg] bg-black text-white",
  },
  {
    name: "Figma",
    className:
      "right-[10%] top-[13%] rotate-[5deg] bg-[#e83e8c] text-white",
  },
  {
    name: "UX Research",
    className:
      "left-[31%] top-[38%] rotate-[3deg] bg-[#f8dce8] text-black",
  },
  {
    name: "Python",
    className:
      "right-[24%] top-[54%] rotate-[-4deg] bg-[#f8f6f4] text-black",
  },
  {
    name: "Next.js",
    className:
      "left-[11%] bottom-[18%] rotate-[5deg] bg-[#f8f6f4] text-black",
  },
  {
    name: "Visual Design",
    className:
      "right-[6%] bottom-[15%] rotate-[-3deg] bg-black text-white",
  },
];

export default function Skills() {
  const [movedSkills, setMovedSkills] =
    useState<Set<string>>(new Set());

  const [resetKey, setResetKey] =
    useState(0);

  const handleDrag = (skill: string) => {
    setMovedSkills((current) => {
      const next = new Set(current);
      next.add(skill);
      return next;
    });
  };

  const resetPlayground = () => {
    setMovedSkills(new Set());
    setResetKey((current) => current + 1);
  };

  return (
    <section
      id="skills"
      className="border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* ==============================================
            HEADER
        ============================================== */}

        <Reveal>
          <div className="grid gap-10 border-b border-black/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-black/35">
                Skills & tools
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                I like knowing{" "}
                <span className="font-editorial italic text-[#e83e8c]">
                  enough
                </span>
                <br />
                to make the idea real.
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-black/40">
              I work across product design and
              development, so my toolkit tends to
              move with the problem.
            </p>
          </div>
        </Reveal>

        {/* ==============================================
            SKILL GROUPS
        ============================================== */}

        <div className="border-b border-black/10">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.03}
            >
              <div className="group grid gap-7 border-t border-black/10 py-9 first:border-t-0 md:grid-cols-[60px_0.7fr_1.3fr] md:gap-10">
                {/* NUMBER */}

                <p className="text-[9px] tracking-[0.18em] text-black/25">
                  {group.number}
                </p>

                {/* CATEGORY */}

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#e83e8c] md:text-3xl">
                    {group.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-black/40">
                    {group.description}
                  </p>
                </div>

                {/* SKILLS */}

                <div className="flex flex-wrap content-start gap-2">
                  {group.skills.map(
                    (skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          y: -3,
                          rotate:
                            skillIndex % 2 === 0
                              ? 1
                              : -1,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="cursor-default border border-black/10 px-3.5 py-2 text-[11px] text-black/50 transition-colors duration-300 hover:border-[#e83e8c]/40 hover:bg-[#f8dce8] hover:text-black"
                      >
                        {skill}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ==============================================
            PLAYGROUND
        ============================================== */}

        <Reveal>
          <div className="mt-24">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  A tiny playground
                </p>

                <p className="font-editorial mt-2 text-2xl italic text-[#e83e8c]">
                  Go ahead. Move things around.
                </p>
              </div>

              <div className="flex items-center gap-5">
                <p className="text-[9px] uppercase tracking-[0.15em] text-black/30">
                  moved {movedSkills.size} /{" "}
                  {playgroundSkills.length}
                </p>

                {movedSkills.size > 0 && (
                  <button
                    type="button"
                    onClick={resetPlayground}
                    className="text-[9px] uppercase tracking-[0.15em] text-[#a91d59] underline decoration-[#e83e8c]/40 underline-offset-4"
                  >
                    reset
                  </button>
                )}
              </div>
            </div>

            {/* DESKTOP PLAYGROUND */}

            <div className="relative hidden h-[520px] overflow-hidden border border-black/10 bg-[#eee9e4] md:block">
              {/* BIG BACKGROUND WORD */}

              <p className="pointer-events-none absolute bottom-[-35px] left-[-8px] whitespace-nowrap text-[12vw] font-semibold uppercase leading-none tracking-[-0.09em] text-black/[0.035]">
                PLAY
              </p>

              {/* SMALL COPY */}

              <div className="absolute left-8 top-8 max-w-[230px]">
                <p className="text-[10px] uppercase tracking-[0.18em] text-black/30">
                  Tools are tools.
                </p>

                <p className="mt-3 text-sm leading-6 text-black/45">
                  The interesting part is figuring
                  out which ones make sense for the
                  problem.
                </p>
              </div>

              {/* DRAGGABLE SKILLS */}

              {playgroundSkills.map(
                (skill, index) => (
                  <motion.div
                    key={`${skill.name}-${resetKey}`}
                    drag
                    dragConstraints={{
                      left: -100,
                      right: 100,
                      top: -100,
                      bottom: 100,
                    }}
                    dragElastic={0.15}
                    dragMomentum={false}
                    onDragEnd={() =>
                      handleDrag(skill.name)
                    }
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileDrag={{
                      scale: 1.08,
                      rotate: 0,
                      zIndex: 20,
                    }}
                    className={`absolute cursor-grab select-none border border-black/10 px-6 py-4 text-sm font-medium shadow-[0_8px_25px_rgba(0,0,0,0.05)] active:cursor-grabbing ${skill.className}`}
                  >
                    {skill.name}
                  </motion.div>
                )
              )}

              {/* LITTLE NOTE */}

              <div className="absolute bottom-8 right-8 text-right">
                <p className="font-editorial text-xl italic text-black/35">
                  drag me ↑
                </p>
              </div>

              {/* COMPLETION */}

              {movedSkills.size ===
                playgroundSkills.length && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: -5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: -3,
                  }}
                  className="absolute bottom-8 left-[36%] bg-[#e83e8c] px-5 py-4 text-white shadow-lg"
                >
                  <p className="text-[9px] uppercase tracking-[0.15em]">
                    +25 curiosity
                  </p>

                  <p className="font-editorial mt-1 text-lg italic">
                    okay, you&apos;re nosy :)
                  </p>
                </motion.div>
              )}
            </div>

            {/* MOBILE VERSION */}

            <div className="border border-black/10 bg-[#eee9e4] p-6 md:hidden">
              <p className="text-sm leading-7 text-black/45">
                A few things currently living in my
                toolkit:
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {playgroundSkills.map(
                  (skill, index) => (
                    <motion.button
                      key={skill.name}
                      type="button"
                      whileTap={{
                        scale: 0.94,
                        rotate:
                          index % 2 === 0
                            ? 2
                            : -2,
                      }}
                      className={`border border-black/10 px-4 py-3 text-xs ${
                        index === 1
                          ? "bg-[#e83e8c] text-white"
                          : index === 3
                            ? "bg-black text-white"
                            : "bg-[#f8f6f4] text-black"
                      }`}
                    >
                      {skill.name}
                    </motion.button>
                  )
                )}
              </div>

              <p className="font-editorial mt-8 text-xl italic text-[#e83e8c]">
                tap, tap :)
              </p>
            </div>
          </div>
        </Reveal>

        {/* ==============================================
            DESIGN + DEVELOPMENT
        ============================================== */}

        <Reveal>
          <div className="mt-24 grid border-y border-black/10 md:grid-cols-2">
            {/* DESIGN */}

            <div className="border-b border-black/10 py-10 md:border-b-0 md:border-r md:pr-12">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#a91d59]">
                Design
              </p>

              <p className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-5xl">
                Ask why.
                <br />
                Understand people.
                <br />

                <span className="font-editorial italic text-[#e83e8c]">
                  Make it feel right.
                </span>
              </p>
            </div>

            {/* DEVELOPMENT */}

            <div className="py-10 md:pl-12">
              <p className="text-[9px] uppercase tracking-[0.18em] text-black/35">
                Development
              </p>

              <p className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.05em] md:text-5xl">
                Ask how.
                <br />
                Build the thing.
                <br />

                <span className="font-editorial italic text-[#e83e8c]">
                  Make it actually work.
                </span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* ==============================================
            CLOSING
        ============================================== */}

        <Reveal>
          <div className="mt-16 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="font-editorial text-3xl italic text-[#e83e8c] md:text-4xl">
                Somewhere in the middle
              </p>

              <p className="text-3xl font-medium tracking-[-0.045em] md:text-4xl">
                is usually where I&apos;m happiest.
              </p>
            </div>

            <p className="max-w-xs text-[9px] uppercase leading-5 tracking-[0.15em] text-black/25">
              Research → Design → Build → Test →
              Learn → Repeat
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}