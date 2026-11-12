"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Reveal from "@/components/Reveal";

const experiences = [
  {
    company: "Square One Eco Africa",
    role: "IT Officer",
    period: "Jan 2026 — Present",
    type: "Climate × Technology",

    description:
      "Supporting the organisation's digital ecosystem across web, UX/UI, hosting, domains, email systems and internal digital workflows.",

    highlights: [
      "Website design and development",
      "Hosting, domains and digital infrastructure",
      "Internal digital tools and workflows",
      "Digital resources for climate communication",
    ],
  },

  {
    company: "Freelance",
    role: "Product Designer & Developer",
    period: "Present",
    type: "Design × Development",

    description:
      "Working across product design, websites and visual digital experiences for independent projects and clients.",

    highlights: [
      "UX and interface design",
      "Frontend development",
      "Visual storytelling",
      "Prototyping and deployment",
    ],
  },

  {
    company: "Dentsu Kenya",
    role: "Product Design Intern",
    period: "Jan 2026 — Apr 2026",
    type: "Product Design",

    description:
      "Worked within a professional design environment, supporting digital product thinking, interface design and collaborative product development.",

    highlights: [
      "Product design support",
      "UX and visual design",
      "Collaborative design workflows",
      "Digital product thinking",
    ],
  },

  {
    company: "Female Founders Academy",
    role: "Female Founder",
    period: "2025 — 2026",
    type: "Entrepreneurship",

    description:
      "Developed entrepreneurial thinking around technology, product development and building solutions around real user problems.",

    highlights: [
      "Entrepreneurship",
      "Product thinking",
      "Innovation",
      "Business development",
    ],
  },

  {
    company: "AIESEC in Strathmore",
    role: "Team Leader · Member Experience",
    period: "Feb 2025 — Present",
    type: "Leadership",

    description:
      "Led member experience initiatives while coordinating people, events and internal engagement within the local chapter.",

    highlights: [
      "Team leadership",
      "Member experience",
      "Event coordination",
      "Internal communication",
    ],
  },

  {
    company: "Ngei Primary School",
    role: "ICT & Creative Arts Teacher",
    period: "Jan 2025 — Apr 2025",
    type: "Education",

    description:
      "Introduced students to ICT and creative learning while supporting digital literacy and practical technology skills.",

    highlights: [
      "ICT education",
      "Digital literacy",
      "Creative learning",
      "Student engagement",
    ],
  },

  {
    company: "World Youth Alliance",
    role: "Policy & Advocacy Training",
    period: "Sep 2024 — Apr 2025",
    type: "Professional Development",

    description:
      "Participated in structured training focused on advocacy, policy and human-centred approaches to social issues.",

    highlights: [
      "Policy",
      "Advocacy",
      "Research",
      "Communication",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const [visited, setVisited] =
    useState<Set<number>>(new Set([0]));

  const toggleExperience = (
    index: number
  ) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );

    setVisited((current) => {
      const next = new Set(current);
      next.add(index);
      return next;
    });
  };

  return (
    <section
      id="experience"
      className="border-t border-black/10 px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* ==========================================
            HEADER
        ========================================== */}

        <Reveal>
          <div className="grid gap-10 border-b border-black/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-black/35">
                Experience
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                Places I&apos;ve{" "}
                <span className="font-editorial italic text-[#e83e8c]">
                  learned,
                </span>
                <br />
                built & contributed.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/45">
                My experience sits across
                technology, design, leadership and
                digital operations. I&apos;ve worked
                inside organisations, on independent
                projects and in roles where the job
                often meant figuring things out as I
                went.
              </p>
            </div>

            {/* STORY COUNTER */}

            <div className="text-left lg:text-right">
              <p className="text-[8px] uppercase tracking-[0.18em] text-black/30">
                Stories explored
              </p>

              <p className="mt-1 text-sm font-medium">
                {visited.size} /{" "}
                {experiences.length}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ==========================================
            EXPERIENCE ROWS
        ========================================== */}

        <div>
          {experiences.map(
            (experience, index) => {
              const isActive =
                activeIndex === index;

              const hasVisited =
                visited.has(index);

              return (
                <Reveal
                  key={`${experience.company}-${experience.role}`}
                  delay={index * 0.03}
                >
                  <article className="border-b border-black/10">
                    {/* ROW */}

                    <button
                      type="button"
                      onClick={() =>
                        toggleExperience(index)
                      }
                      className="group grid w-full gap-5 py-8 text-left md:grid-cols-[55px_1.3fr_1fr_auto] md:items-center md:gap-8"
                    >
                      {/* NUMBER */}

                      <span
                        className={`text-[9px] tracking-[0.17em] transition-colors duration-300 ${
                          isActive
                            ? "text-[#e83e8c]"
                            : "text-black/25"
                        }`}
                      >
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      {/* COMPANY */}

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3
                            className={`text-2xl font-medium tracking-[-0.04em] transition-colors duration-300 sm:text-3xl ${
                              isActive
                                ? "text-[#e83e8c]"
                                : "text-black group-hover:text-[#e83e8c]"
                            }`}
                          >
                            {
                              experience.company
                            }
                          </h3>

                          {hasVisited &&
                            !isActive && (
                              <span className="text-[8px] uppercase tracking-[0.14em] text-black/25">
                                seen
                              </span>
                            )}
                        </div>

                        <p className="mt-2 text-sm text-black/45">
                          {experience.role}
                        </p>
                      </div>

                      {/* PERIOD */}

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-black/35">
                          {experience.period}
                        </p>

                        <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-[#a91d59]">
                          {experience.type}
                        </p>
                      </div>

                      {/* OPEN / CLOSE */}

                      <span
                        className={`text-xl transition-transform duration-300 ${
                          isActive
                            ? "rotate-45 text-[#e83e8c]"
                            : "text-black/25 group-hover:text-black"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* ==================================
                        EXPANDED STORY
                    ================================== */}

                    <AnimatePresence
                      initial={false}
                    >
                      {isActive && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-8 pb-10 md:ml-[87px] md:grid-cols-[1fr_1fr] md:gap-14">
                            {/* DESCRIPTION */}

                            <div>
                              <p className="text-[9px] uppercase tracking-[0.17em] text-black/25">
                                The role
                              </p>

                              <p className="mt-4 max-w-xl text-base leading-8 text-black/55">
                                {
                                  experience.description
                                }
                              </p>
                            </div>

                            {/* HIGHLIGHTS */}

                            <div>
                              <p className="mb-4 text-[9px] uppercase tracking-[0.18em] text-black/25">
                                What I worked on
                              </p>

                              <div className="grid gap-3 sm:grid-cols-2">
                                {experience.highlights.map(
                                  (
                                    highlight,
                                    highlightIndex
                                  ) => (
                                    <motion.div
                                      key={
                                        highlight
                                      }
                                      initial={{
                                        opacity: 0,
                                        y: 8,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        y: 0,
                                      }}
                                      transition={{
                                        delay:
                                          highlightIndex *
                                          0.05,
                                      }}
                                      className="border-t border-black/10 pt-3"
                                    >
                                      <p className="text-sm leading-6 text-black/50">
                                        {
                                          highlight
                                        }
                                      </p>
                                    </motion.div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </Reveal>
              );
            }
          )}
        </div>

        {/* ==========================================
            COMPACT ENDING
        ========================================== */}

        <div className="mt-10 border-t border-black/10 py-8">
          {visited.size ===
          experiences.length ? (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-editorial text-2xl italic text-[#e83e8c]">
                  You read the whole story.
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-black/30">
                  +25 curiosity points
                </p>
              </div>

              <p className="text-[9px] uppercase tracking-[0.16em] text-black/30">
                {experiences.length} /{" "}
                {experiences.length} explored
              </p>
            </motion.div>
          ) : (
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-editorial text-2xl italic text-[#e83e8c]">
                  A little bit of design.
                </p>

                <p className="text-xl font-medium tracking-[-0.035em]">
                  A little bit of code.
                </p>
              </div>

              <p className="max-w-xs text-[9px] uppercase leading-5 tracking-[0.15em] text-black/25">
                Click a role if you want the
                longer version.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
