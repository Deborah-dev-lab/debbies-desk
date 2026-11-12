"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const traits = [
  "curious",
  "visual",
  "technical",
  "observant",
  "experimental",
  "intentional",
];

const education = [
  {
    school: "Strathmore University",
    course: "BSc Informatics & Computer Science",
    period: "2023 — Present",
    note: "Final Year",
  },
  {
    school: "Moringa School",
    course: "Certified Product Designer · UI/UX",
    period: "2024",
    note: "User-Centred Design · Prototyping · Visual Design",
  },
  {
    school: "Alliance Girls’ High School",
    course: "KCSE",
    period: "2019 — 2022",
    note: "Grade B+ · Leadership · Debate · Orchestra",
  },
];

export default function About() {
  const [activeTrait, setActiveTrait] = useState(0);

  const shuffleTrait = () => {
    setActiveTrait(
      (current) => (current + 1) % traits.length
    );
  };

  return (
    <section
      id="about"
      className="border-t border-black/10 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <Reveal>
          <div className="grid gap-10 border-b border-black/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-black/35">
                About
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                A little more{" "}
                <span className="font-editorial italic text-[#e83e8c]">
                  human
                </span>
                <br />
                behind the work.
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-black/40">
              Designer, developer, visual thinker and
              someone who is usually asking one more
              question than necessary.
            </p>
          </div>
        </Reveal>

        {/* MAIN ABOUT */}

        <div className="grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT */}

          <Reveal>
            <div>
              <p className="max-w-3xl text-2xl leading-[1.5] tracking-[-0.03em] text-black/70 md:text-3xl">
                I&apos;m Deborah, a designer and developer
                based in Nairobi. I&apos;m interested in the
                point where{" "}
                <span className="text-black">
                  technology, people and visual storytelling
                </span>{" "}
                meet.
              </p>

              <p className="mt-8 max-w-2xl text-base leading-8 text-black/50">
                I enjoy taking an idea from the messy
                beginning — research, sketches, questions
                and half-formed concepts — and shaping it
                into something useful, thoughtful and
                visually strong.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/50">
                Some days that means designing an
                interface. Other days it means writing
                code, building a website, exploring
                machine learning or figuring out why
                something is not working the way it should.
              </p>
            </div>
          </Reveal>

          {/* RIGHT / PLAYFUL TRAIT */}

          <Reveal>
            <div className="border border-black/10 bg-[#eee9e4] p-7 sm:p-9">
              <p className="text-[9px] uppercase tracking-[0.18em] text-black/30">
                Currently describing myself as
              </p>

              <motion.button
                key={activeTrait}
                type="button"
                onClick={shuffleTrait}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="mt-8 block text-left"
              >
                <span className="font-editorial text-6xl italic leading-none text-[#e83e8c] sm:text-7xl">
                  {traits[activeTrait]}.
                </span>
              </motion.button>

              <p className="mt-7 text-sm leading-7 text-black/45">
                Click the word — apparently one adjective
                was not enough.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {traits.map((trait, index) => (
                  <button
                    key={trait}
                    type="button"
                    onClick={() => setActiveTrait(index)}
                    className={`border px-3 py-2 text-[10px] transition-colors duration-300 ${
                      activeTrait === index
                        ? "border-[#e83e8c] bg-[#e83e8c] text-white"
                        : "border-black/10 text-black/40 hover:border-[#e83e8c]/40 hover:text-black"
                    }`}
                  >
                    {trait}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* QUICK FACTS */}

        <Reveal>
          <div className="grid border-y border-black/10 sm:grid-cols-2 lg:grid-cols-4">
            <Fact
              label="Based in"
              value="Nairobi, Kenya"
            />

            <Fact
              label="I work across"
              value="Design + Development"
            />

            <Fact
              label="Currently"
              value="Final Year · Computer Science"
            />

            <Fact
              label="Open to"
              value="Roles · Freelance · Collaborations"
            />
          </div>
        </Reveal>

        {/* EDUCATION */}

        <div className="mt-24">
          <Reveal>
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                Education
              </p>

              <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                Where I learned{" "}
                <span className="font-editorial italic text-[#e83e8c]">
                  some of it.
                </span>
              </h3>
            </div>
          </Reveal>

          <div className="border-t border-black/10">
            {education.map((item, index) => (
              <Reveal
                key={item.school}
                delay={index * 0.04}
              >
                <div className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[50px_1.2fr_1fr_auto] md:items-center md:gap-8">
                  <span className="text-[9px] tracking-[0.16em] text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h4 className="text-xl font-medium tracking-[-0.03em] md:text-2xl">
                      {item.school}
                    </h4>

                    <p className="mt-2 text-sm text-black/45">
                      {item.course}
                    </p>
                  </div>

                  <p className="text-sm leading-6 text-black/40">
                    {item.note}
                  </p>

                  <span className="text-[9px] uppercase tracking-[0.14em] text-black/30">
                    {item.period}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CLOSING */}

        <Reveal>
          <div className="mt-24 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="font-editorial text-3xl italic text-[#e83e8c] md:text-4xl">
                Still learning.
              </p>

              <p className="text-3xl font-medium tracking-[-0.045em] md:text-4xl">
                Always making.
              </p>
            </div>

            <p className="max-w-lg text-base leading-8 text-black/45 md:ml-auto">
              I don&apos;t think I&apos;m interested in
              becoming one very neat job title. I like
              being able to move between thinking,
              designing and building depending on what the
              work needs.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-black/10 py-7 sm:border-r sm:last:border-r-0 lg:border-b-0">
      <div className="sm:px-6 lg:px-7">
        <p className="text-[9px] uppercase tracking-[0.17em] text-black/25">
          {label}
        </p>

        <p className="mt-3 text-sm font-medium text-black/65">
          {value}
        </p>
      </div>
    </div>
  );
}