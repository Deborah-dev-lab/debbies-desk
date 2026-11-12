"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

const changingWords = [
  "design",
  "build",
  "research",
  "experiment",
];

export default function Hero() {
  const [wordIndex, setWordIndex] =
    useState(0);

  const changeWord = () => {
    setWordIndex(
      (current) =>
        (current + 1) %
        changingWords.length
    );
  };

  return (
    <section
      id="top"
      className="relative px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* ==========================================
            SMALL INTRO
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col justify-between gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-end"
        >
          <p className="text-[9px] uppercase tracking-[0.2em] text-black/35">
            Product Design · Development ·
            Visual Storytelling
          </p>

          <p className="text-[9px] uppercase tracking-[0.18em] text-black/25">
            Nairobi, Kenya
          </p>
        </motion.div>

        {/* ==========================================
            MAIN STATEMENT
        ========================================== */}

        <div className="grid gap-12 pb-16 pt-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16 lg:pb-20 lg:pt-20">
          <div>
            {/* LINE 1 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[13vw] font-medium leading-[0.82] tracking-[-0.075em] sm:text-[11vw] lg:text-[7.3vw]">
                I{" "}
                <button
                  type="button"
                  onClick={changeWord}
                  className="group relative inline-block text-left"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={
                        changingWords[
                          wordIndex
                        ]
                      }
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -18,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="font-editorial inline-block italic text-[#e83e8c]"
                    >
                      {
                        changingWords[
                          wordIndex
                        ]
                      }
                    </motion.span>
                  </AnimatePresence>

                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] font-normal uppercase tracking-[0.15em] text-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    click me
                  </span>
                </button>
              </p>
            </motion.div>

            {/* LINE 2 */}

            <motion.p
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3 text-[12vw] font-medium leading-[0.82] tracking-[-0.075em] sm:text-[10vw] lg:text-[6.8vw]"
            >
              digital experiences,
            </motion.p>

            {/* LINE 3 */}

            <motion.p
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-editorial mt-3 text-[11vw] italic leading-[0.84] tracking-[-0.055em] text-black/75 sm:text-[9vw] lg:text-[6.1vw]"
            >
              and build what
            </motion.p>

            {/* LINE 4 */}

            <motion.p
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[12vw] font-medium leading-[0.84] tracking-[-0.075em] sm:text-[10vw] lg:text-[6.8vw]"
            >
              makes them work.
            </motion.p>
          </div>

          {/* SIDE COPY */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.35,
            }}
            className="lg:pb-2"
          >
            <p className="text-base leading-8 text-black/55">
              I work between{" "}
              <span className="text-black">
                product design and
                development
              </span>
              , turning ideas into digital
              experiences that are useful,
              thoughtful and visually strong.
            </p>

            <p className="mt-5 text-sm leading-7 text-black/40">
              My work moves through UX,
              interfaces, frontend development,
              visual storytelling and an
              expanding interest in machine
              learning.
            </p>
          </motion.div>
        </div>

        {/* ==========================================
            INTERACTION / CTA AREA
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.42,
          }}
          className="grid gap-10 border-y border-black/10 py-7 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <span className="text-[9px] uppercase tracking-[0.17em] text-black/25">
              Currently interested in
            </span>

            <span className="text-[10px] text-black/50">
              Human-centred technology
            </span>

            <span className="text-[10px] text-black/50">
              Creative development
            </span>

            <span className="text-[10px] text-black/50">
              AI + everyday problems
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="group flex items-center gap-5 bg-black px-6 py-4 text-[10px] uppercase tracking-[0.15em] text-white"
            >
              Selected work

              <span className="text-[#e83e8c] transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>

            <a
              href="#about"
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-black/45 transition-colors hover:text-black"
            >
              About me

              <span className="text-[#e83e8c] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
                ↘
              </span>
            </a>
          </div>
        </motion.div>

        {/* ==========================================
            LITTLE PERSONAL FOOTNOTE
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.65,
            duration: 0.6,
          }}
          className="flex flex-col justify-between gap-5 pt-7 sm:flex-row sm:items-end"
        >
          <p className="font-editorial max-w-lg text-xl italic leading-7 text-black/45">
            Different problems ask for
            different ways of thinking.
          </p>

          <p className="text-[8px] uppercase tracking-[0.18em] text-black/25">
            Scroll to explore ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
}
