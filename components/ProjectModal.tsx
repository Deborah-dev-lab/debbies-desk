"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { projects } from "@/data/projects";

type Project = (typeof projects)[number];

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/55 px-3 py-3 backdrop-blur-sm sm:px-5 sm:py-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.article
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto min-h-[calc(100vh-24px)] max-w-7xl bg-[#f8f6f4] sm:min-h-[calc(100vh-40px)]"
          >
            {/* ==========================================
                TOP BAR
            ========================================== */}

            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-[#f8f6f4]/95 px-6 py-5 backdrop-blur-xl md:px-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-black/30">
                  Selected project
                </p>

                <p className="mt-1 text-xs font-medium">
                  {project.title}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-black/45 transition-colors hover:text-black"
              >
                Close

                <span className="text-base text-[#e83e8c] transition-transform duration-300 group-hover:rotate-90">
                  ×
                </span>
              </button>
            </div>

            {/* ==========================================
                HERO
            ========================================== */}

            <div className="px-6 py-14 md:px-10 md:py-20">
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#a91d59]">
                      {project.category}
                    </p>

                    <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-8xl">
                      {project.title}
                    </h2>
                  </div>

                  <div>
                    <p className="max-w-md text-base leading-8 text-black/55">
                      {project.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-4">
                      <span className="text-[9px] uppercase tracking-[0.16em] text-black/30">
                        Project type
                      </span>

                      <span className="text-[10px] uppercase tracking-[0.15em]">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ==========================================
                PROJECT VISUAL
            ========================================== */}

            <div className="px-6 md:px-10">
              <div className="mx-auto max-w-6xl">
                <ProjectVisual project={project} />
              </div>
            </div>

            {/* ==========================================
                CASE STUDY
            ========================================== */}

            <div className="px-6 py-20 md:px-10 md:py-28">
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                  {/* LEFT */}

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-black/30">
                      What went into it
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-sm text-black/45"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {project.title === "Food Spoilage Detection" && (
                      <div className="mt-10 border-t border-black/10 pt-5">
                        <p className="text-[9px] uppercase tracking-[0.16em] text-black/30">
                          Current status
                        </p>

                        <p className="mt-3 text-sm text-[#a91d59]">
                          Currently in development.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* RIGHT */}

                  <div className="space-y-16">
                    <CaseStudyBlock
                      number="01"
                      title="The problem"
                      text={getProblem(project)}
                    />

                    <CaseStudyBlock
                      number="02"
                      title="The approach"
                      text={getApproach(project)}
                    />

                    <CaseStudyBlock
                      number="03"
                      title="The outcome"
                      text={getOutcome(project)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ==========================================
                REFLECTION
            ========================================== */}

            <div className="border-t border-black/10 px-6 py-16 md:px-10 md:py-20">
              <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr] md:items-end">
                <div>
                  <p className="font-editorial text-3xl italic text-[#e83e8c] md:text-4xl">
                    What I like about this one
                  </p>

                  <p className="mt-2 text-3xl font-medium tracking-[-0.045em] md:text-4xl">
                    It made me think differently.
                  </p>
                </div>

                <p className="max-w-lg text-base leading-8 text-black/45 md:ml-auto">
                  {getReflection(project)}
                </p>
              </div>
            </div>

            {/* ==========================================
                FOOTER
            ========================================== */}

            <div className="bg-black px-6 py-10 text-white md:px-10">
              <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                    End of project
                  </p>

                  <p className="font-editorial mt-3 text-3xl italic text-[#e83e8c]">
                    Back to the rest?
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="group flex items-center gap-4 text-sm"
                >
                  Continue exploring

                  <span className="text-[#e83e8c] transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  if (project.title === "Food Spoilage Detection") {
    return (
      <div className="grid min-h-[480px] overflow-hidden bg-[#f4c7d8] md:grid-cols-2">
        <div className="flex flex-col justify-between p-8 md:p-12">
          <p className="text-[9px] uppercase tracking-[0.18em] text-black/40">
            Food × Computer Vision
          </p>

          <p className="max-w-md text-5xl font-semibold leading-[0.85] tracking-[-0.06em] md:text-6xl">
            SEE
            <br />
            BEFORE
            <br />
            YOU WASTE.
          </p>

          <p className="max-w-xs text-sm leading-7 text-black/45">
            Exploring how mobile technology can help people make better
            decisions about food freshness and waste.
          </p>
        </div>

        <div className="flex items-center justify-center bg-[#e83e8c] p-10 text-white">
          <div className="text-center">
            <p className="font-editorial text-8xl italic md:text-9xl">
              fresh?
            </p>

            <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/65">
              Look · Analyse · Decide
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (project.title === "RECA") {
    return (
      <div className="flex min-h-[500px] flex-col justify-between bg-black p-8 text-white md:p-12">
        <div className="flex justify-between">
          <span className="text-[9px] uppercase tracking-[0.18em] text-white/35">
            Film × Digital Experience
          </span>

          <span className="font-editorial text-xl italic text-[#e83e8c]">
            play
          </span>
        </div>

        <p className="text-[18vw] font-semibold uppercase leading-[0.7] tracking-[-0.1em] sm:text-[8rem] md:text-[10rem]">
          RECA
        </p>

        <div className="border-t border-white/15 pt-5">
          <p className="max-w-lg text-sm leading-7 text-white/45">
            A web experience shaped around movement, visual storytelling and
            the feeling of film rather than a conventional corporate layout.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[440px] items-end overflow-hidden bg-[#eee9e4] p-8 md:p-12">
      <div>
        <p className="text-[9px] uppercase tracking-[0.18em] text-black/30">
          {project.category}
        </p>

        <p className="mt-4 max-w-4xl text-6xl font-semibold leading-[0.85] tracking-[-0.07em] sm:text-7xl md:text-8xl">
          {project.title}
        </p>
      </div>
    </div>
  );
}

function CaseStudyBlock({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-black/10 pt-6">
      <div className="grid gap-5 md:grid-cols-[60px_1fr]">
        <span className="text-[9px] tracking-[0.17em] text-black/25">
          {number}
        </span>

        <div>
          <h3 className="text-3xl font-medium tracking-[-0.04em]">
            {title}
          </h3>

          <p className="mt-5 max-w-2xl text-base leading-8 text-black/50">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function getProblem(project: Project) {
  switch (project.title) {
    case "Food Spoilage Detection":
      return "Food spoilage is often identified too late, contributing to waste and making freshness decisions difficult for everyday users. The project explores whether a lightweight mobile experience can make those decisions easier and more accessible.";

    case "Square One Eco Africa":
      return "The organisation needed stronger digital systems and a clearer online presence that could support its climate work, communication and everyday internal operations.";

    case "Bridge Africa":
      return "Ideas, opportunities and people are often disconnected. The challenge was to create a platform that could make discovery and connection feel simple rather than overwhelming.";

    case "RECA":
      return "A film and production company needs a digital presence that feels as visual and intentional as the work it produces. A conventional portfolio structure would not communicate that energy well.";

    case "KilimoCash":
      return "Agricultural finance can feel inaccessible and disconnected from the realities of the people it is intended to support. The project explored a more approachable digital product direction.";

    case "PuzzlePlay":
      return "Many casual game experiences are functional but visually forgettable. PuzzlePlay explored how familiar games could feel more playful, social and personality-led.";

    case "MindBunny":
      return "Wellbeing tools can often feel clinical or emotionally distant. The concept explored how visual warmth and approachable interaction could make the experience feel friendlier.";

    default:
      return project.description;
  }
}

function getApproach(project: Project) {
  switch (project.title) {
    case "Food Spoilage Detection":
      return "I approached the project from both a computing and user perspective: mobile capture, image-based classification, lightweight data handling and an interface that communicates freshness clearly without overwhelming the user.";

    case "Square One Eco Africa":
      return "The work combined website design, development, hosting and digital operations. Rather than treating each issue separately, I approached the organisation's digital presence as one connected system.";

    case "Bridge Africa":
      return "The product was built around clear information hierarchy, straightforward discovery and a React-based interface connected to MongoDB for data storage.";

    case "RECA":
      return "The direction focuses on cinematic scale, strong typography, motion and visual work taking priority over excessive navigation or copy.";

    case "KilimoCash":
      return "The concept combined user-centred product thinking with a simple financial experience designed around clarity, accessibility and agricultural context.";

    case "PuzzlePlay":
      return "I built a collection of familiar puzzle formats with React, shaping the interface around a playful visual identity while keeping the actual game interactions straightforward.";

    case "MindBunny":
      return "The concept uses character, soft visual language and simple interactions to make wellbeing support feel less formal and more approachable.";

    default:
      return "The project moved through research, design decisions, iteration and implementation, with the solution changing as I learned more about the problem.";
  }
}

function getOutcome(project: Project) {
  switch (project.title) {
    case "Food Spoilage Detection":
      return "The project is currently in development as part of my larger exploration of food waste, image-based freshness detection and accessible mobile technology.";

    case "Square One Eco Africa":
      return "The work contributed to a more structured digital presence and stronger internal digital support across the organisation.";

    case "Bridge Africa":
      return "A working React and MongoDB platform was built and deployed, turning the initial concept into an interactive digital product.";

    case "RECA":
      return "The resulting direction positions the website less like a catalogue and more like an immersive extension of the company's visual identity.";

    case "KilimoCash":
      return "The project developed into a recognised product concept and strengthened my thinking around designing technology for specific economic and social contexts.";

    case "PuzzlePlay":
      return "The project became a functional games hub with Crossword, Sudoku and Word Search experiences, including score handling and persistent data integration.";

    case "MindBunny":
      return "The concept demonstrates how branding, interaction design and emotional tone can shape the perceived accessibility of a digital wellbeing product.";

    default:
      return "The result was a clearer understanding of the problem and a more considered digital solution shaped through iteration.";
  }
}

function getReflection(project: Project) {
  switch (project.title) {
    case "Food Spoilage Detection":
      return "It pushes me beyond interface design into machine learning, data, mobile development and research — while still forcing me to think carefully about the person actually using the product.";

    case "Square One Eco Africa":
      return "It taught me that digital work inside an organisation is rarely just a website. Hosting, infrastructure, communication and internal processes all affect the user experience too.";

    case "Bridge Africa":
      return "It gave me a chance to think beyond static design and work through how a platform actually stores, structures and presents information.";

    case "RECA":
      return "It lets me combine two parts of my work I really enjoy: visual storytelling and building digital experiences.";

    case "KilimoCash":
      return "It made me think more seriously about context — who technology is being designed for, what assumptions we make and what 'simple' actually means to different users.";

    case "PuzzlePlay":
      return "It reminded me that not every project needs to solve a huge societal problem. Sometimes building something enjoyable is enough reason to experiment.";

    case "MindBunny":
      return "It explores how much personality and emotion can influence whether someone wants to interact with a digital product.";

    default:
      return "Every project changes how I approach the next one, whether through better research, cleaner design decisions or stronger implementation.";
  }
}