"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-black/10 px-6 pb-10 pt-24 md:px-10 md:pb-12 md:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* ==============================================
            INTRO
        ============================================== */}

        <Reveal>
          <div className="grid gap-10 border-b border-black/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-black/35">
                Contact
              </p>

              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-8xl">
                Let&apos;s make
                <br />
                something{" "}
                <span className="font-editorial italic text-[#e83e8c]">
                  good.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/45">
              I&apos;m open to product, design and development
              opportunities, freelance work and interesting
              collaborations.
            </p>
          </div>
        </Reveal>

        {/* ==============================================
            BIG EMAIL
        ============================================== */}

        <Reveal>
          <div className="py-16 md:py-24">
            <p className="text-[9px] uppercase tracking-[0.18em] text-black/30">
              The easiest way to reach me
            </p>

            <a
              href="mailto:deborahkaburu27@gmail.com"
              className="group mt-5 block overflow-hidden"
            >
              <motion.span
                whileHover={{
                  x: 8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="block break-all text-[8vw] font-medium leading-[0.95] tracking-[-0.06em] transition-colors duration-300 group-hover:text-[#e83e8c] sm:text-[6vw] lg:text-[4.8vw]"
              >
                deborahkaburu27
                <span className="text-[#e83e8c]">@</span>
                gmail.com
              </motion.span>
            </a>
          </div>
        </Reveal>

        {/* ==============================================
            LINKS
        ============================================== */}

        <Reveal>
          <div className="grid border-y border-black/10 md:grid-cols-3">
            <ContactLink
              label="LinkedIn"
              href="https://www.linkedin.com/in/deborah-kaburu/"
              detail="Let&apos;s connect"
            />

            <ContactLink
              label="GitHub"
              href="https://github.com/Deborah-dev-lab"
              detail="See what I&apos;m building"
            />

            <ContactLink
              label="CV"
              href="/Deborah-Kaburu-CV.pdf"
              detail="A more formal version"
            />
          </div>
        </Reveal>

        {/* ==============================================
            PLAYFUL ENDING
        ============================================== */}

        <Reveal>
          <div className="relative mt-24 overflow-hidden bg-[#e83e8c] px-6 py-16 text-white sm:px-10 md:py-20">
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-editorial text-3xl italic text-white/75 md:text-4xl">
                  You made it to the end :)
                </p>

                <p className="mt-3 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                  Thanks for
                  <br />
                  looking around.
                </p>
              </div>

              <div className="lg:text-right">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/60">
                  bonus unlocked
                </p>

                <p className="mt-2 text-2xl font-medium">
                  +50 curiosity
                </p>
              </div>
            </div>

            <p className="pointer-events-none absolute bottom-[-30px] right-[-10px] text-[18vw] font-semibold uppercase leading-none tracking-[-0.1em] text-white/[0.08]">
              HELLO
            </p>
          </div>
        </Reveal>

        {/* ==============================================
            FOOTER
        ============================================== */}

        <footer className="flex flex-col justify-between gap-6 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em]">
              Deborah Kaburu
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-black/30">
              Design + Development
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#top"
              className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-black/40 transition-colors hover:text-black"
            >
              Back to top

              <span className="text-[#e83e8c] transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </a>

            <span className="text-[8px] uppercase tracking-[0.14em] text-black/25">
              Nairobi · 2026
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  href,
  detail,
}: {
  label: string;
  href: string;
  detail: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group border-b border-black/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-2xl font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#e83e8c]">
            {label}
          </p>

          <p className="mt-3 text-sm text-black/35">
            {detail}
          </p>
        </div>

        <span className="text-lg text-[#e83e8c] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>
    </a>
  );
}