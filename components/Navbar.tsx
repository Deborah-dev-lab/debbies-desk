"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

const links = [
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState("top");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 40);

      if (currentY > 180 && !open) {
        if (
          currentY >
          lastScrollY.current + 8
        ) {
          setHidden(true);
        }

        if (
          currentY <
          lastScrollY.current - 8
        ) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;

      const sections = [
        "work",
        "experience",
        "skills",
        "about",
        "contact",
      ];

      let current = "top";

      sections.forEach((section) => {
        const element =
          document.getElementById(section);

        if (!element) return;

        const rect =
          element.getBoundingClientRect();

        if (rect.top <= 160) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  return (
    <>
      {/* DESKTOP / MAIN NAVBAR */}

      <motion.header
        animate={{
          y: hidden ? -100 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-colors duration-500 ${
          scrolled
            ? "border-b border-black/10 bg-[#f8f6f4]/90 backdrop-blur-xl"
            : "bg-[#f8f6f4]/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 md:px-10">
          {/* NAME */}

          <a
            href="#top"
            className="group"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              Deborah Kaburu
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-black/30">
              Design + Development
            </p>
          </a>

          {/* DESKTOP LINKS */}

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => {
              const isActive =
                activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`group relative py-2 text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    isActive
                      ? "text-black"
                      : "text-black/40 hover:text-black"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#e83e8c] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* RIGHT */}

          <div className="flex items-center gap-6">
            <a
              href="/Deborah-Kaburu-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-black/45 transition-colors hover:text-black lg:flex"
            >
              CV

              <span className="text-[#e83e8c] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() =>
                setOpen((current) => !current)
              }
              aria-label="Toggle navigation"
              aria-expanded={open}
              className="flex items-center gap-3 lg:hidden"
            >
              <span className="text-[9px] uppercase tracking-[0.16em]">
                {open ? "Close" : "Menu"}
              </span>

              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-[5px] h-[1px] w-5 bg-black transition-all duration-300 ${
                    open
                      ? "translate-y-[2px] rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`absolute bottom-[5px] left-0 h-[1px] w-5 bg-black transition-all duration-300 ${
                    open
                      ? "-translate-y-[2px] -rotate-45"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-40 bg-[#f8f6f4] lg:hidden"
          >
            <div className="flex min-h-screen flex-col justify-between px-6 pb-8 pt-28">
              <div>
                <p className="mb-8 text-[9px] uppercase tracking-[0.2em] text-black/30">
                  Menu
                </p>

                <div className="border-t border-black/10">
                  {links.map(
                    (link, index) => {
                      const isActive =
                        activeSection ===
                        link.id;

                      return (
                        <motion.a
                          key={link.id}
                          href={`#${link.id}`}
                          onClick={() =>
                            setOpen(false)
                          }
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay:
                              index * 0.04,
                            duration: 0.4,
                          }}
                          className="group flex items-center justify-between border-b border-black/10 py-5"
                        >
                          <span
                            className={`text-4xl font-medium tracking-[-0.055em] transition-colors ${
                              isActive
                                ? "text-[#e83e8c]"
                                : "text-black"
                            }`}
                          >
                            {link.label}
                          </span>

                          <span className="text-sm text-black/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#e83e8c]">
                            ↗
                          </span>
                        </motion.a>
                      );
                    }
                  )}
                </div>
              </div>

              {/* MOBILE FOOTER */}

              <div>
                <div className="border-t border-black/10 pt-6">
                  <p className="font-editorial text-2xl italic text-[#e83e8c]">
                    Design things.
                  </p>

                  <p className="text-2xl font-medium tracking-[-0.04em]">
                    Build things.
                  </p>
                </div>

                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.16em] text-black/30">
                      Based in
                    </p>

                    <p className="mt-1 text-xs">
                      Nairobi, Kenya
                    </p>
                  </div>

                  <a
                    href="/Deborah-Kaburu-CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      setOpen(false)
                    }
                    className="group flex items-center gap-2 text-xs"
                  >
                    View CV

                    <span className="text-[#e83e8c] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
